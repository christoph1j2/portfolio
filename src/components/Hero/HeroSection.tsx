import React from "react";
import ParticlesBackground from "../ParticlesBackground";
import styles from './HeroSection.module.css';
import { ReactTyped } from "react-typed";
import { IoIosArrowDown } from "react-icons/io";

const HeroSection: React.FC = () => { 
  return (
    <div className={styles.hero}>
      <ParticlesBackground />
      <div className={styles.content}>
              <div className="text-center text-white">
        <h1 className={`${styles.headingFlex} mb-4`}>
          <span className={styles.angleBracket}>&lt;</span>
          <span className={styles.slashEcl}>
            <span className={styles.slash}>/</span><span className={styles.ecl}>ECL</span>
          </span>
          <span className={styles.angleBracket}>&gt;</span>
        </h1>
      </div>
      <div className="text-center text-white">
        <p className={`m-auto ${styles.description} text-2xl md:text-3xl lg:text-4xl`}>
          <ReactTyped
            strings={[
              'Vítejte na mém <span style="color: #2fffd6; font-weight: bold;">portfoliu.</span>',
              'Tvorba webů, které prodávají.',
              'Spolehlivý servis pro vaše PC.',
              'Profesionální online prezentace pro váš podnik.',
              'Montáž a údržba počítačů.',
              'Váš web developer a IT specialista.',
            ]}
            typeSpeed={60}
            backSpeed={50}
            loop
            backDelay={1000}
          />
        </p>
      </div>
      </div>
      <div className={styles.arrowContainer}>
          <a href="#next-section" className={styles.arrowLink}>
            <IoIosArrowDown className={styles.arrow} />
          </a>
      </div>
    </div>
  );
}

export default HeroSection;