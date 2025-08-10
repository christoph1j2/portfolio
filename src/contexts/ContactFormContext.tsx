import { createContext, useContext, useState, type ReactNode } from 'react';

/**
 * ContactFormContextType Interface
 * 
 * Defines the shape of the contact form context:
 * - isContactFormOpen: Whether the contact form modal is currently open
 * - formType: Which type of form is being displayed ('contact' or 'order')
 * - openContactForm: Function to open the modal with a specific form type
 * - closeContactForm: Function to close the modal
 */
interface ContactFormContextType {
  isContactFormOpen: boolean;
  formType: 'contact' | 'order' | null;
  openContactForm: (type?: 'contact' | 'order') => void;
  closeContactForm: () => void;
}

/**
 * ContactFormContext
 * 
 * React context for managing the contact form modal state across the application.
 * This allows any component to open or close the contact form without prop drilling.
 */
const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

/**
 * useContactForm Hook
 * 
 * A custom hook that provides access to the contact form context.
 * Components can use this hook to access and modify the contact form state.
 * 
 * @throws {Error} If used outside of a ContactFormProvider
 * @returns {ContactFormContextType} The contact form context
 */
export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error('useContactForm must be used within a ContactFormProvider');
  }
  return context;
};

/**
 * Props for the ContactFormProvider component
 */
interface ContactFormProviderProps {
  children: ReactNode;
}

/**
 * ContactFormProvider Component
 * 
 * Provides the ContactFormContext to its children components.
 * Manages the state of the contact form modal and provides functions to open and close it.
 * 
 * @param {ReactNode} children - The child components that will have access to the context
 */
export const ContactFormProvider = ({ children }: ContactFormProviderProps) => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formType, setFormType] = useState<'contact' | 'order' | null>(null);

  /**
   * Opens the contact form modal
   * 
   * @param {string} type - The type of form to display ('contact' or 'order')
   */
  /**
   * Opens the contact form modal
   * 
   * @param {string} type - The type of form to display ('contact' or 'order')
   */
  const openContactForm = (type: 'contact' | 'order' = 'contact') => {
    // Set form type and open state
    setFormType(type);
    setIsContactFormOpen(true);
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  /**
   * Closes the contact form modal
   */
  const closeContactForm = () => {
    // Reset modal state
    setIsContactFormOpen(false);
    setFormType(null);
    
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <ContactFormContext.Provider value={{ 
      isContactFormOpen, 
      formType,
      openContactForm, 
      closeContactForm 
    }}>
      {children}
    </ContactFormContext.Provider>
  );
};
