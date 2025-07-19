import React from 'react';
import { motion } from 'framer-motion';

interface ModernTransitionProps {
  className?: string;
  height?: string;
  fromColor?: string;
  toColor?: string;
}

const ModernTransition: React.FC<ModernTransitionProps> = ({ 
  className = "",
  height = "h-32 md:h-40",
  fromColor = "#f3f4f6",
  toColor = "#ffde59"
}) => {
  return (
    <div className={`relative w-full ${height} ${className} overflow-hidden`}>
      {/* Main background - simple transition from gray to transparent */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: fromColor
        }}
      />
      
      {/* Yellow wave coming from bottom */}
      <div className="absolute bottom-0 w-full h-full">
        <motion.svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <defs>
            <linearGradient id="yellowWaveGradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor={toColor} stopOpacity="1" />
              <stop offset="70%" stopColor={toColor} stopOpacity="0.8" />
              <stop offset="100%" stopColor={toColor} stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Main yellow wave */}
          <motion.path
            d="M0,200 C300,120 600,160 900,100 C1050,60 1150,80 1200,60 L1200,200 L0,200 Z"
            fill="url(#yellowWaveGradient)"
            animate={{
              d: [
                "M0,200 C300,120 600,160 900,100 C1050,60 1150,80 1200,60 L1200,200 L0,200 Z",
                "M-500,200 C300,100 600,140 900,120 C1050,80 1150,60 1200,80 L1200,200 L0,200 Z",
                "M-500,200 C300,130 600,150 900,90 C1050,50 1150,90 1200,70 L1200,200 L0,200 Z",
                "M0,200 C300,120 600,160 900,100 C1050,60 1150,80 1200,60 L1200,200 L0,200 Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Secondary wave for depth */}
          <motion.path
            d="M0,200 C400,140 700,180 1000,120 C1100,100 1150,110 1200,100 L1200,200 L0,200 Z"
            fill={toColor}
            opacity="0.6"
            animate={{
              d: [
                "M0,200 C400,140 700,180 1000,120 C1100,100 1150,110 1200,100 L1200,200 L0,200 Z",
                "M0,200 C400,160 700,160 1000,140 C1100,120 1150,90 1200,120 L1200,200 L0,200 Z",
                "M0,200 C400,150 700,170 1000,110 C1100,90 1150,100 1200,90 L1200,200 L0,200 Z",
                "M0,200 C400,140 700,180 1000,120 C1100,100 1150,110 1200,100 L1200,200 L0,200 Z"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.svg>
        
        {/* Floating bubbles coming from the wave */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${8 + (i % 4) * 6}px`,
              height: `${8 + (i % 4) * 6}px`,
              backgroundColor: i % 3 === 0 ? 'rgba(255,222,89,0.8)' : 
                             i % 3 === 1 ? 'rgba(255,235,156,0.9)' : 'rgba(255,255,255,0.7)',
              left: `${3 + i * 6.5}%`,
              bottom: `${-10 + (i % 3) * 15}px`,
              boxShadow: '0 2px 8px rgba(255,222,89,0.3)',
            }}
            animate={{
              y: [-10, -80 - (i % 3) * 30, -10],
              x: [0, (i % 2 === 0 ? 20 : -20), 0],
              opacity: [0, 0.9, 0],
              scale: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 4 + i * 0.2,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.3
            }}
          />
        ))}
        
        {/* Additional smaller bubbles for more effect */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`small-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${3 + (i % 2) * 2}px`,
              height: `${3 + (i % 2) * 2}px`,
              backgroundColor: 'rgba(255,255,255,0.8)',
              left: `${8 + i * 8.5}%`,
              bottom: `${5 + (i % 2) * 10}px`,
            }}
            animate={{
              y: [0, -60 - (i % 2) * 20],
              opacity: [0.8, 0],
              scale: [1, 0.2]
            }}
            transition={{
              duration: 3 + i * 0.15,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.4
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ModernTransition;
