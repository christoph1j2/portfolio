import { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useContactForm } from '../../contexts/ContactFormContext';
import ContactSection from '../Contact/ContactSection';
import styles from './ContactFormModal.module.css';
import './modalStyles.css';

/**
 * ContactFormModal Component
 * 
 * A modal dialog component that displays a contact form.
 * The modal is positioned in the center of the screen and includes:
 * - A semi-transparent overlay that blocks interaction with content behind it
 * - A close button to dismiss the modal
 * - Animation for opening and closing
 * - Click outside to close functionality
 * - ESC key to close functionality
 * - Different title based on form type ('contact' or 'order')
 * 
 * The modal is controlled by the ContactFormContext which manages its open/closed state
 * and what type of form to display.
 */
const ContactFormModal = () => {
  const { isContactFormOpen, formType, closeContactForm } = useContactForm();
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Zjednodušení: zavírání řešíme pouze klikem na overlay/X, ne globálním listenerem

  // Close modal on escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeContactForm();
      }
    };

    if (isContactFormOpen) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isContactFormOpen, closeContactForm]);
  
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isContactFormOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.classList.add('modal-open');
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
  document.body.style.touchAction = 'none'; // Disable touch scrolling
    } else {
      // Restore scroll position when modal closes
      const scrollY = document.body.style.top;
      document.body.classList.remove('modal-open');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }
  }, [isContactFormOpen]);

  // If modal is not open, don't render anything
  if (!isContactFormOpen) {
    return null;
  }
  
  return (
    <div className="modal-wrapper" style={{ position: 'relative', zIndex: 999999 }}>
      {/* Overlay background */}
      <div
        className={styles.overlay}
        role="button"
        aria-label="Zavřít modal kliknutím na pozadí"
        onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
        onTouchStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
        onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); closeContactForm(); }}
        aria-hidden="true"
      />

      {/* Modal container */}
      <div className={styles.modalContainer}>
        {/* Modal content */}
        <div className={styles.modal} ref={modalRef}>
          {/* Zavíratko modalu – zajistíme, že událost neprobublá */}
          <button
            type="button"
            className={styles.closeButton}
            onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
            onTouchStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
            onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setTimeout(() => closeContactForm(), 60);
            }}
            aria-label="Close"
          >
            <FaTimes />
          </button>

          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>
              {formType === 'order' ? 'Nezávazná poptávka' : 'Kontaktujte nás'}
            </h2>
            <div className={styles.contactFormContainer}>
              <ContactSection modalForm={true} formType={formType} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormModal;
