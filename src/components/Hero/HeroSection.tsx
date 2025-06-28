import React from "react";
import ParticlesBackground from "../ParticlesBackground";
import styles from './HeroSection.module.css';
import { ReactTyped } from "react-typed";
import { motion } from "motion/react";
import { IoIosArrowDown } from "react-icons/io";

const HeroSection: React.FC = () => { 
  return (
    <div className={styles.hero}>
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
                'Tvořím weby, které <span style="color:#2fffd6; font-weight: bold;">prodávají</span>.',
                'Profesionální <span style="color:#2fffd6; font-weight: bold;">PC servis</span> bez zbytečných keců.',
                'Moderní prezentace, co <span style="color:#2fffd6; font-weight: bold;">zvednou váš byznys</span>.',
                'Spolehlivý <span style="color:#2fffd6; font-weight: bold;">IT specialista</span> pro weby i hardware.',
                'Váš <span style="color:#2fffd6; font-weight: bold;">vývojář na zavolání</span>.',
              ]}
              typeSpeed={60}
              backSpeed={50}
              loop
              backDelay={1000}
            />
          </p>
        </motion.div>
        <motion.div 
          className="flex flex-col md:flex-row mt-10 gap-4 z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="#kontakt">
            <button className={styles.btnPrimary}>Chci web na míru</button>
          </a>
          <a href="#sluzby">
            <button className={styles.btnSecondary}>Potřebuju PC servis</button>
          </a>
        </motion.div>
      </div>

      <motion.div 
        className={`${styles.arrowContainer} invisible md:visible`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <a href="#next-section" className={styles.arrowLink}>
          <IoIosArrowDown className={styles.arrow} />
        </a>
      </motion.div>
    </div>
  );
}

export default HeroSection;