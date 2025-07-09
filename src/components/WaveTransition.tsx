import React from 'react';
import { motion } from 'framer-motion';

interface WaveTransitionProps {
  color?: string;
  backgroundColor?: string;
  className?: string;
  height?: string;
}

const WaveTransition: React.FC<WaveTransitionProps> = ({ 
  color = "#f3f4f6", 
  backgroundColor = "#0d47a1",
  className = "",
  height = "h-16 md:h-24"
}) => {
  return (
    <div 
      className={`relative w-full ${height} ${className}`}
      style={{ backgroundColor }}
    >
      <motion.div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          //background: `radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.3) 100%)`
        }}
      />
      
      <motion.svg 
        className="absolute bottom-0 w-full h-full" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        {/* Gradient definice pro silnější přechod */}
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0d47a1" stopOpacity="1" />
            <stop offset="30%" stopColor="#1976d2" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#42a5f5" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f3f4f6" stopOpacity="1" />
          </linearGradient>
          
          <linearGradient id="waveGradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1565c0" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#2196f3" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#f3f4f6" stopOpacity="1" />
          </linearGradient>
          
          <linearGradient id="waveGradient3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0d47a1" stopOpacity="1" />
            <stop offset="100%" stopColor="#f3f4f6" stopOpacity="1" />
          </linearGradient>
        </defs>
        {/* Více vrstev pro hladší přechod s gradienty */}
        <motion.path 
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
          fill="url(#waveGradient)"
          opacity="0.4"
          animate={{ 
            d: [
              "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
              "M0,0V66.29c47.79,12.2,103.59,42.17,158,18,70.36-15.37,136.33-23.31,206.8-27.5C438.64,22.43,512.34,63.67,583,82.05c69.27,28,138.3,14.88,209.4,23.08,36.15-16,69.85-7.84,104.45-19.34C989.49,35,1113-4.29,1200,62.47V0Z",
              "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            ]
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut", 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.path 
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
          fill="url(#waveGradient2)"
          opacity="0.6"
          animate={{ 
            d: [
              "M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",
              "M0,0V25.81C13,26.92,27.64,46.86,47.69,62.05,99.41,101.27,165,101,224.58,81.58c31.15-20.15,60.09-16.07,89.67-29.8,40.92-29,84.73-36,130.83-39.67,36.26-12.85,70.9,19.42,98.6,21.56,31.77,35.39,62.32,52,103.63,63,40.44,20.79,81.35-16.69,119.13-14.28s75.16-29,116.92-33.05c59.73-15.85,113.28,12.88,168.9,28.84,30.2,18.66,59,16.17,87.09-17.5,22.43-20.89,48-16.93,60.65-39.24V0Z",
              "M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            ]
          }}
          transition={{ 
            duration: 10, 
            ease: "easeInOut", 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        <motion.path 
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
          fill={color}
          animate={{ 
            d: [
              "M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",
              "M0,0V15.63C149.93,49,314.09,81.32,475.83,52.57c43-17.64,84.23-10.12,127.61-16.46,59-18.63,112.48,22.24,165.56,25.4C827.93,67.22,886,85.24,951.2,80c86.53-17,172.46-35.71,248.8-74.81V0Z",
              "M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            ]
          }}
          transition={{ 
            duration: 12, 
            ease: "easeInOut", 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </motion.svg>
    </div>
  );
};

export default WaveTransition;

// AI-generated, cuz i could never write this myself
// This component creates a wave transition effect using SVG and Framer Motion.