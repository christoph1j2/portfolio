import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import '../App.css'; // Assuming you have a CSS file for styles
import { ReactTyped } from "react-typed";
import { IoIosArrowDown } from "react-icons/io";

const HeroSection: React.FC = () => { 
  return (
    <div className="hero">
      <ParticlesBackground />
      <div className="content">
              <div className="text-center text-white">
        <h1 className="heading-flex mb-4">
          <span className="angle-bracket">&lt;</span>
          <span className="slash-ecl">
            <span className="slash">/</span><span className="ecl">ECL</span>
          </span>
          <span className="angle-bracket">&gt;</span>
        </h1>
      </div>
      <div className="text-center text-white">
        <p className='m-auto description text-2xl md:text-3xl lg:text-4xl'>
          <ReactTyped
            strings={[
              'Vítejte na mém <span style="color: #2fffd6; font-weight: bold;">portfoliu.</span>',
              'Tvořím weby, které prodávají.',
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
      <div className="arrow-container">
          <a href="#next-section" className="arrow-link">
            <IoIosArrowDown className="arrow" />
          </a>
      </div>
    </div>
  );
}

export default HeroSection;