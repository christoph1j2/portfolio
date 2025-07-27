
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from './ContactSection.module.css';
import { useState } from 'react';
import { motion } from 'motion/react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
      email: '',
      phone: '',
      name: '',
      message: '',
    });

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        if (!formData.email || !formData.name || !formData.message) {
            console.error('Please fill in all required fields.');
            return;
        }
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            console.error('Please enter a valid email address.');
            return;
        }
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
            
            <motion.form className={styles.contactForm} onSubmit={handleSubmit}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}>
              <div className={styles.formRow}>
                <motion.input
                  type="email"
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
                  type="phone"
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
              
              <motion.button type="submit" className={styles.submitButton}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                ODESLAT
              </motion.button>
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
              <a href="mailto:info@ecl-it.cz" className={styles.contactLink}>
                INFO@ECL-IT.CZ
              </a>
            </motion.div>
          </div>
          
          <motion.div className={styles.imageContainer}
            initial={{ x: 600 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}>
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