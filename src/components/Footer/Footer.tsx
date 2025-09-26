import React from 'react';
import { motion } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import { Globe, Code, Heart } from 'lucide-react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const scrollToTop = () => {
    const container = document.querySelector("#root");
    if (container) {
      container.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      // Fallback k window scroll pokud #root neexistuje
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When clicking an anchor link from a non-home page: go to home, scroll up smoothly, then to section
  const handleAnchorClick = (sectionId: string) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId);
      return;
    }
    navigate('/');
    // small delay to ensure navigation/mount completes
    setTimeout(() => {
      // replicate global smooth scroll-up effect used elsewhere
      const container = document.querySelector('#root');
      if (container) {
        container.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
      // then smooth-scroll to the target section
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 150);
    }, 100);
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/christoph1j2', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/ernst-christoph-leschka-52385421b', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://instagram.com/christoph1j2', label: 'Instagram' },
  ];

  const quickLinks = [
    { name: 'Domů', href: '/', isInternal: true },
    { name: 'Portfolio', href: '/portfolio', isInternal: true },
    { name: 'O nás', href: '#about', isInternal: true, isAnchor: true },
    { name: 'Technologie', href: '/technologie', isInternal: true },
    { name: 'Služby', href: '/servis', isInternal: true },
    { name: 'Kontakt', href: '#contact', isInternal: true, isAnchor: true },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main footer content */}
        <div className={styles.mainContent}>
          {/* Brand section */}
          <motion.div 
            className={styles.brandSection}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className={styles.logo}>
              <span className={styles.angleBracket}>&lt;</span>
              <span className={styles.slashEcl}>
                <span className={styles.slash}>/</span>
                <span className={styles.ecl}>ECL</span>
              </span>
              <span className={styles.angleBracket}>&gt;</span>
            </div>
            <p className={styles.brandText}>
              S vášní pro informatiku vytvářím moderní webové aplikace a software i hardware řešení.
            </p>
            <div className={styles.techIcons}>
              <a href="https://github.com/christoph1j2/portfolio" target="_blank" rel="noopener noreferrer">
                <Code className={styles.techIcon} />
              </a>
              <a href="https://www.ecl-it.cz/" target="_blank" rel="noopener noreferrer">
                <Globe className={styles.techIcon} />
              </a>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div 
            className={styles.linksSection}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.sectionTitle}>Odkazy</h3>
            <ul className={styles.linksList}>
              {quickLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5, color: '#2fffd6' }}
                  transition={{ duration: 0.2 }}
                >
                  {link.isInternal ? (
                    link.isAnchor ? (
                      location.pathname === '/' ? (
                        <button 
                          onClick={() => scrollToSection(link.href)}
                          className={styles.footerLink}
                          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                          {link.name}
                        </button>
                      ) : (
                        <button 
                          onClick={() => handleAnchorClick(link.href)}
                          className={styles.footerLink}
                          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                          {link.name}
                        </button>
                      )
                    ) : (
                      <Link to={link.href} className={styles.footerLink}>
                        {link.name}
                      </Link>
                    )
                  ) : (
                    <a href={link.href} className={styles.footerLink}>
                      {link.name}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div 
            className={styles.contactSection}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={styles.sectionTitle}>Kontakt</h3>
            <div className={styles.contactInfo}>
              <motion.a 
                href="mailto:ernst.leschka@gmail.com" 
                className={styles.contactLink}
                whileHover={{ x: 5, color: '#2fffd6' }}
              >
                <FaEnvelope className={styles.contactIcon} />
                ernst.leschka@gmail.com
              </motion.a>
              <motion.a 
                href="tel:+420123456789" 
                className={styles.contactLink}
                whileHover={{ x: 5, color: '#2fffd6' }}
              >
                <FaPhone className={styles.contactIcon} />
                +420 605 944 418
              </motion.a>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div 
            className={styles.socialSection}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={styles.sectionTitle}>Profily</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={styles.socialLink}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    boxShadow: '0 10px 25px rgba(47, 255, 214, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <social.icon className={styles.socialIcon} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div 
          className={styles.bottomSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className={styles.copyright}>
            <p>© {new Date().getFullYear()} ECL Portfolio.</p>
            <p>IČO: 23697504</p>
            <p>
              Vytvořeno s{' '}
              <Heart className={styles.heartIcon} />
              {' '}a spoustou kofeinu.
            </p>
          </div>
          <div className={styles.techStack}>
            <span>React • TypeScript • Vite • Tailwind CSS</span>
          </div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className={styles.backgroundElements}>
        <motion.div 
          className={styles.floatingElement}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className={styles.floatingElement2}
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Scroll to top button */}
      <motion.button
        className={styles.scrollToTop}
        onClick={scrollToTop}
        whileHover={{ y: -5, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <IoIosArrowUp className={styles.arrowIcon} />
      </motion.button>
    </footer>
  );
};

export default Footer;
