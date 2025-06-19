import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import '../App.css'; // Assuming you have a CSS file for styles

const HeroSection = ({children}: {children: React.ReactNode}) => { 
  return (
    <div className="hero">
      <ParticlesBackground />
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default HeroSection;