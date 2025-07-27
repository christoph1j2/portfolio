import React, { useEffect } from "react";
import ParticlesBackground from "../ParticlesBackground";
import styles from './HeroSection.module.css';
import { ReactTyped } from "react-typed";
import { motion } from "motion/react";
import { IoIosArrowDown } from "react-icons/io";
import { Cpu, Globe } from "lucide-react";

const HeroSection: React.FC = () => {
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();

    window.addEventListener('resize', setViewportHeight);
    return () => { window.removeEventListener('resize', setViewportHeight); };
  }, []);

  return (
    <div className={styles.hero} id="home">
      <ParticlesBackground />
      <div className={`${styles.content} gap-0.1`}>
        <motion.div 
          className="text-center text-white mt-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h1 className={`${styles.headingFlex} mb-0`}>
            <span className={`${styles.angleBracket} invisible md:visible`}>&lt;</span>
            <span className={styles.slashEcl}>
              <span className={`${styles.slash}`}>/</span><span className={`${styles.ecl}`}>ECL</span>
            </span>
            <span className={`${styles.angleBracket} invisible md:visible`}>&gt;</span>
          </h1>
        </motion.div>
        <motion.div 
          className="text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <p className={` ${styles.description} text-2xl md:text-3xl lg:text-4xl ${styles.typedContainer}`}>
            <ReactTyped
              strings={[
                'Vítejte na mém <span style="color: #2fffd6; font-weight: bold;">portfoliu.</span>',
                'Tvorba webů, které <span style="color:#2fffd6; font-weight: bold;">prodávají</span>.',
                'Profesionální <span style="color:#2fffd6; font-weight: bold;">PC servis</span> bez zbytečných keců.',
                'Moderní prezentace, co <span style="color:#2fffd6; font-weight: bold;">zvednou váš byznys</span>.',
                'Spolehlivý <span style="color:#2fffd6; font-weight: bold;">IT specialista</span> pro weby i hardware.',
                'Váš <span style="color:#2fffd6; font-weight: bold;">vývojář na zavolání</span>.',
              ]}
              typeSpeed={60}
              backSpeed={50}
              loop
              backDelay={1000}
              /* startWhenVisible */ // Broke on mobile, so removed
            />
          </p>
        </motion.div>
        <motion.div 
          className="flex flex-col md:flex-row mt-10 gap-4 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="#kontakt">
            <button className={styles.btnPrimary}>
              <Globe size={24} className="mr-2" />
              <span>Chci web na míru</span>
            </button>
          </a>
          <a href="#sluzby">
            <button className={styles.btnSecondary}>
              <Cpu size={24} className="mr-2" />
              <span>Potřebuju PC servis</span>
            </button>
          </a>
        </motion.div>
      </div>

      <motion.div 
        className={`${styles.arrowContainer} invisible md:visible`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <a href="#portfolio" className={styles.arrowLink}>
          <IoIosArrowDown className={styles.arrow} />
        </a>
      </motion.div>
    </div>
  );
}

export default HeroSection;