
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from './ContactSection.module.css';
import modalStyles from '../ContactForm/ContactFormModal.module.css'; // Import modal styles
import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import useRateLimit from '../../hooks/useRateLimit';
import RateLimitWarning from '../RateLimitWarning/RateLimitWarning';

interface ContactSectionProps {
  modalForm?: boolean;
  formType?: 'contact' | 'order' | null;
}

/**
 * ContactSection Component
 * 
 * This component handles two types of contact forms:
 * 1. Regular contact form ('contact')
 * 2. Order/inquiry form ('order')
 * 
 * It can be displayed in two modes:
 * - As a regular section on a page (modalForm=false)
 * - As a modal dialog (modalForm=true)
 * 
 * @param {boolean} modalForm - Whether this form is rendered in a modal
 * @param {string} formType - Type of form: 'contact' or 'order'
 */
const ContactSection = ({ modalForm = false, formType = 'contact' }: ContactSectionProps) => {
    const form = useRef<HTMLFormElement>(null);
    
    // Rate limiting hook
    const {
      isBlocked,
      blockReason,
      timeUntilReset,
      attemptsRemaining,
      checkRateLimit,
      recordAttempt,
      dailySubmissionsUsed,
      formatTimeRemaining
    } = useRateLimit();
    
    // State for form fields
    const [formData, setFormData] = useState({
      email: '',
      phone: '',
      name: '',
      message: '',
      serviceType: 'web', // Default service type for radio buttons
    });
    const [status, setStatus] = useState({
      submitted: false,
      success: false,
      message: ''
    });
    const [loading, setLoading] = useState(false);

    /**
     * Handle the form submission
     * 
     * This function handles the entire form submission process:
     * 1. Validates required fields (email, name, message)
     * 2. Validates email format
     * 3. Sends the form data to your email using EmailJS
     * 4. Displays appropriate success/error messages
     * 5. Resets the form on successful submission
     * 
     * The form collects and sends:
     * - user_email: The sender's email (required)
     * - user_phone: The sender's phone number (optional)
     * - user_name: The sender's name (required)
     * - message: The message content (required)
     * - service_type: Selected service from radio buttons (for order forms)
     * - form_type: Hidden field indicating whether this is a contact or order form
     * 
     * @param {Event} event - The form submission event
     */
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        
        // First check rate limiting
        if (!checkRateLimit()) {
            recordAttempt(false); // Record failed attempt
            setStatus({
              submitted: true,
              success: false,
              message: `Odesílání je dočasně blokováno. ${blockReason || 'Zkuste to prosím později.'}`
            });
            return;
        }
        
        // Form validation - check required fields (name, email, message)
        if (!formData.email || !formData.name || !formData.message) {
            recordAttempt(false); // Record failed attempt due to validation
            setStatus({
              submitted: true,
              success: false,
              message: 'Vyplňte prosím všechna povinná pole.'
            });
            return;
        }
        
        // Validate email format using a simple regex pattern
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            recordAttempt(false); // Record failed attempt due to validation
            setStatus({
              submitted: true,
              success: false,
              message: 'Zadejte prosím platnou emailovou adresu.'
            });
            return;
        }
        
        // Set loading state to show UI feedback during email sending process
        setLoading(true);
        
        // Prepare the form data for EmailJS
        // Log form submission attempt for debugging
        console.log('Attempting to send email with form type:', formType);
        if (formType === 'order') {
            console.log('Selected service type:', formData.serviceType);
        }
        
        /**
         * EmailJS Integration
         * ------------------
         * 1. Configuration:
         *    - Service ID: This identifies your EmailJS service (connected to your email provider)
         *    - Template ID: This identifies the email template with placeholders for your form data
         *    - Public Key: Your EmailJS account's public key for authentication
         * 
         * 2. Form Data Mapping:
         *    The form's named inputs are automatically sent to EmailJS:
         *    - user_email: The sender's email address
         *    - user_phone: The sender's phone number (optional)
         *    - user_name: The sender's name
         *    - message: The message content
         *    - service_type: The selected service type radio button
         *    - form_type: Hidden field indicating whether this is a contact or order form
         *
         * 3. Make sure these input name attributes match the template variables in your EmailJS template
         */
        if (form.current) {
            // EmailJS sendForm method extracts all form field values from the form element
            // and sends them to your configured email address
            emailjs.sendForm(
                'service_y4e800y', // Replace with your EmailJS service ID
                'template_xi8gc8u', // Replace with your EmailJS template ID
                form.current,
                'L4FTXDnaQFlWAcpM9' // Replace with your EmailJS public key
            )
            .then((result) => {
                /**
                 * EmailJS Success Handling
                 * ----------------------
                 * When EmailJS successfully delivers the message:
                 * 1. Log success information for debugging
                 * 2. Update UI status to show success message
                 * 3. Reset all form fields to their default values
                 * 4. Turn off loading state
                 * 5. Track event in analytics (if available)
                 * 6. Record successful submission for rate limiting
                 */
                console.log('Email sent successfully:', result.text);
                
                // Record successful submission for rate limiting
                recordAttempt(true);
                
                // Update UI with success message
                setStatus({
                  submitted: true,
                  success: true,
                  message: 'Zpráva byla úspěšně odeslána! Brzy vás kontaktuji. Děkuji za váš zájem.'
                });
                
                // Reset all form fields to their default values
                setFormData({
                  email: '',
                  phone: '',
                  name: '',
                  message: '',
                  serviceType: 'web', // Reset to default service type
                });
                
                // Turn off loading indicator
                setLoading(false);
                
                // Track successful submission in Google Analytics (if available)
                try {
                    if (window.gtag) {
                        window.gtag('event', 'form_submission', {
                            'event_category': 'Contact',
                            'event_label': formType || 'contact'
                        });
                    }
                } catch (e) {
                    console.error('Analytics error:', e);
                }
            })
            .catch((error) => {
                /**
                 * EmailJS Error Handling
                 * --------------------
                 * If EmailJS encounters an error:
                 * 1. Log detailed error information for debugging
                 * 2. Update UI status to show error message with alternative contact method
                 * 3. Turn off loading state
                 * 4. Record failed attempt for rate limiting
                 */
                console.error('Email sending failed:', error.text);
                
                // Record failed submission attempt for rate limiting
                recordAttempt(false);
                
                // Show user-friendly error message with alternative contact method
                setStatus({
                  submitted: true,
                  success: false,
                  message: 'Došlo k chybě při odesílání. Zkuste to prosím znovu nebo mě kontaktujte přímo na ernst.leschka@gmail.com'
                });
                
                // Turn off loading indicator
                setLoading(false);
            });
        }
    }

  /**
   * Generate a custom message placeholder for the message textarea based on form type
   * - 'contact' type shows a general contact message placeholder
   * - 'order' type shows a placeholder for inquiries/orders
   * 
   * @returns {string} The placeholder text for the message textarea
   */
  const getFormPlaceholder = () => {
    if (formType === 'order') {
      return "Dobrý den, mám zájem o nezávaznou poptávku na...*";
    }
    return "Ahoj, rád bych se zeptal na...*";
  };

  // Different styling and structure for modal vs page display
  if (modalForm) {
    return (
      <div className={styles.modalContactSection}>
        <div className={styles.formContainer}>
          {/* UPOZORNĚNÍ: Po prvním úspěšném odeslání nechceme hned zobrazovat "Odesílání blokováno". */}
          {/* Proto varování zobrazíme jen pokud není zrovna vidět pozitivní flash zpráva o úspěchu. */}
          {!status.success && (
            <RateLimitWarning
              isBlocked={isBlocked}
              blockReason={blockReason}
              timeUntilReset={timeUntilReset}
              attemptsRemaining={attemptsRemaining}
              dailySubmissionsUsed={dailySubmissionsUsed}
              formatTimeRemaining={formatTimeRemaining}
              className={modalStyles.modalRateLimitWarning}
            />
          )}
          
          <motion.form className={`${styles.contactForm} ${modalStyles.modalContactForm}`} ref={form} onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}>
            <div className={styles.formRow}>
              <input
                type="email"
                name="user_email"
                placeholder="E-Mail*"
                className={`${styles.inputField} ${modalStyles.modalInput}`}
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Telefon"
                className={`${styles.inputField} ${modalStyles.modalInput}`}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <input
              type="text"
              name="user_name"
              placeholder="Jméno*"
              className={`${styles.inputField} ${styles.fullWidth} ${modalStyles.modalInput}`}
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            
            {/* Hidden field to track form type */}
            <input
              type="hidden"
              name="form_type"
              value={formType || 'contact'}
            />
            
            {/* Radio buttons for service selection - only shown for order form type */}
            {formType === 'order' && (
              <div className={`${styles.serviceOptions} ${modalForm ? modalStyles.modalServiceOptions : ''}`}>
                <h3 className={`${styles.serviceOptionsTitle} ${modalForm ? modalStyles.modalSectionTitle : ''}`}>Vyberte službu:</h3>
                
                <div className={`${styles.radioGroup} ${modalForm ? modalStyles.modalRadioGroup : ''}`}>
                  <label className={`${styles.radioLabel} ${modalForm ? modalStyles.modalRadioLabel : ''}`}>
                    <input
                      type="radio"
                      name="service_type"
                      value="web"
                      checked={formData.serviceType === 'web'}
                      onChange={() => setFormData({ ...formData, serviceType: 'web' })}
                      className={`${styles.radioInput} ${modalForm ? modalStyles.modalRadioInput : ''}`}
                    />
                    <span className={`${styles.radioText} ${modalForm ? modalStyles.modalRadioText : ''}`}>Tvorba webu</span>
                    <span className={`${styles.radioDescription} ${modalForm ? modalStyles.modalRadioDescription : ''}`}>Moderní, responzivní webové stránky</span>
                  </label>
                  
                  <label className={`${styles.radioLabel} ${modalForm ? modalStyles.modalRadioLabel : ''}`}>
                    <input
                      type="radio"
                      name="service_type"
                      value="app"
                      checked={formData.serviceType === 'app'}
                      onChange={() => setFormData({ ...formData, serviceType: 'app' })}
                      className={`${styles.radioInput} ${modalForm ? modalStyles.modalRadioInput : ''}`}
                    />
                    <span className={`${styles.radioText} ${modalForm ? modalStyles.modalRadioText : ''}`}>Webová aplikace</span>
                    <span className={`${styles.radioDescription} ${modalForm ? modalStyles.modalRadioDescription : ''}`}>Komplexní webové aplikace na míru</span>
                  </label>
                  
                  <label className={`${styles.radioLabel} ${modalForm ? modalStyles.modalRadioLabel : ''}`}>
                    <input
                      type="radio"
                      name="service_type"
                      value="maintenance"
                      checked={formData.serviceType === 'maintenance'}
                      onChange={() => setFormData({ ...formData, serviceType: 'maintenance' })}
                      className={`${styles.radioInput} ${modalForm ? modalStyles.modalRadioInput : ''}`}
                    />
                    <span className={`${styles.radioText} ${modalForm ? modalStyles.modalRadioText : ''}`}>Individuální řešení</span>
                    <span className={`${styles.radioDescription} ${modalForm ? modalStyles.modalRadioDescription : ''}`}>Složitější řešení na míru</span>
                  </label>
                </div>
              </div>
            )}
            
            {/* Message text area */}
            <textarea
              name="message"
              placeholder={getFormPlaceholder()}
              className={`${styles.inputField} ${styles.textArea} ${modalStyles.modalTextArea} ${modalStyles.modalInput}`}
              rows={4} /* Reduced rows for modal */
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            
            {status.submitted && (
              <motion.div 
                className={`${styles.statusMessage} ${status.success ? styles.successMessage : styles.errorMessage}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {status.message}
              </motion.div>
            )}
            
            <button 
              type="submit" 
              className={`${styles.submitButton} ${modalStyles.modalSubmitButton} ${loading ? styles.loading : ''} ${isBlocked ? styles.disabled : ''}`}
              disabled={loading || isBlocked}
            >
              {loading ? (
                <>
                  <span className={styles.loadingDot}>.</span>
                  <span className={styles.loadingDot}>.</span>
                  <span className={styles.loadingDot}>.</span>
                  ODESÍLÁNÍ
                </>
              ) : isBlocked ? 'BLOKOVÁNO' : 'ODESLAT'}
            </button>
            {/* Když je odesílání blokované, ukaž zbývající čas pod tlačítkem (modal varianta) */}
            {isBlocked && (timeUntilReset ?? 0) > 0 && (
              <div style={{ marginTop: '0.5rem', textAlign: 'center', color: '#6b7280', fontSize: '0.95rem' }}>
                Další zprávu můžete poslat za <strong>{formatTimeRemaining(timeUntilReset!)}</strong>
              </div>
            )}
          </motion.form>
          
          {/* Only show contact info when not in modal form */}
          {!modalForm && (
            <div className={styles.contactInfo}>
              <a href="tel:+420605944418" className={styles.contactLink}>
                +420 605 944 418
              </a>
              <a href="mailto:ernst.leschka@gmail.com" className={styles.contactLink}>
                ernst.leschka@gmail.com
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.formContainer}>
            <motion.h2 className={styles.title}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}>
              <span className={styles.titleSlash}>/</span>
              <span className={styles.titleText}>KONTAKT</span>
            </motion.h2>
            
            {/* Varování zobrazíme jen pokud zrovna neukazujeme pozitivní flash zprávu po odeslání */}
            {!status.success && (
              <RateLimitWarning
                isBlocked={isBlocked}
                blockReason={blockReason}
                timeUntilReset={timeUntilReset}
                attemptsRemaining={attemptsRemaining}
                dailySubmissionsUsed={dailySubmissionsUsed}
                formatTimeRemaining={formatTimeRemaining}
              />
            )}
            
            <motion.form className={styles.contactForm} ref={form} onSubmit={handleSubmit}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}>
              <div className={styles.formRow}>
                <motion.input
                  type="email"
                  name="user_email"
                  placeholder="E-Mail*"
                  className={styles.inputField}
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                />
                <motion.input
                  type="tel"
                  name="user_phone"
                  placeholder="Telefon"
                  className={styles.inputField}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <motion.input
                type="text"
                name="user_name"
                placeholder="Jméno*"
                className={`${styles.inputField} ${styles.fullWidth}`}
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              />
              
              <motion.textarea
                name="message"
                placeholder="Ahoj, rád bych se zeptal na...*"
                className={`${styles.inputField} ${styles.textArea}`}
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              ></motion.textarea>
              
              {status.submitted && (
                <motion.div 
                  className={`${styles.statusMessage} ${status.success ? styles.successMessage : styles.errorMessage}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {status.message}
                </motion.div>
              )}
              
              <motion.button 
                type="submit" 
                className={`${styles.submitButton} ${loading ? styles.loading : ''} ${isBlocked ? styles.disabled : ''}`}
                disabled={loading || isBlocked}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                {loading ? 'ODESÍLÁNÍ...' : isBlocked ? 'BLOKOVÁNO' : 'ODESLAT'}
              </motion.button>
              {/* Když je blokováno, ukaž zbývající čas přímo pod tlačítkem */}
              {isBlocked && (timeUntilReset ?? 0) > 0 && (
                <div style={{ marginTop: '0.5rem', textAlign: 'center', color: '#6b7280' }}>
                  Další zprávu můžete poslat za <strong>{formatTimeRemaining(timeUntilReset!)}</strong>
                </div>
              )}
            </motion.form>
            
            <motion.div className={styles.contactInfo}
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1}}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a href="tel:+420605944418" className={styles.contactLink}>
                +420 605 944 418
              </a>
              <a href="mailto:ernst.leschka@gmail.com" className={styles.contactLink}>
                ernst.leschka@gmail.com
              </a>
            </motion.div>
          </div>
          
          <motion.div className={styles.imageContainer}
            /* Úprava: animace vždy (animate), ne až při zobrazení (whileInView) */
            initial={{ x: 600 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}>
            <div className={styles.laptopImage}>
              <img src="/pc_poster_2-removebg-preview_1.png" alt="Laptop" />
              
              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/christoph1j2"
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--hover-color': '#333' } as React.CSSProperties}
                >
                  <FaGithub size={24} style={{ marginRight: 8 }} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/ernst-christoph-leschka-52385421b"
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--hover-color': '#0077b5' } as React.CSSProperties}
                >
                  <FaLinkedin size={24} style={{ marginRight: 8 }} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://instagram.com/christoph1j2"
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--hover-color': '#e1306c' } as React.CSSProperties}
                >
                  <FaInstagram size={24} style={{ marginRight: 8 }} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;