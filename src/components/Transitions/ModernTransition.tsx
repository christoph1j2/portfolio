import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion for smooth animations

/**
 * Props interface for the ModernTransition component
 * Defines customizable properties for the animated wave transition
 */
interface ModernTransitionProps {
  className?: string;   // Additional CSS classes for the container
  height?: string;      // Tailwind height classes (e.g., "h-32 md:h-40")
  fromColor?: string;   // Background color (typically the color transitioning from)
  toColor?: string;     // Wave color (typically the color transitioning to)
}

/**
 * ModernTransition Component
 * 
 * Creates an animated wave transition between two sections of a webpage.
 * Features:
 * - Animated SVG waves that move continuously
 * - Floating bubbles that rise from the wave
 * - Customizable colors and height
 * - Smooth entrance animation
 * 
 * Typical use case: Transitioning from a gray section to a yellow section
 */
const ModernTransition: React.FC<ModernTransitionProps> = ({ 
  className = "",                    // Default: no additional classes
  height = "h-32 md:h-40",          // Default: 32 units on mobile, 40 on medium+ screens
  fromColor = "#f3f4f6",            // Default: light gray background
  toColor = "#ffde59"               // Default: yellow wave color
}) => {
  return (
    <div className={`relative w-full ${height} ${className} overflow-hidden`}>
      {/* 
        Main container for the transition effect
        - relative: allows absolute positioning of children
        - w-full: takes full width of parent
        - overflow-hidden: clips any content that extends beyond boundaries
      */}
      
      {/* 
        Background layer representing the "from" section
        This creates a solid color background that will be overlaid by the wave
      */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: fromColor  // Dynamic background color from props
        }}
      />
      
      {/* 
        Wave container - positioned at bottom to create "rising wave" effect
        Contains all the animated wave elements and bubbles
      */}
      <div className="absolute bottom-0 w-full h-full">
        {/* 
          Main SVG wave animation
          - viewBox="0 0 1200 200": defines coordinate system (1200 wide, 200 tall)
          - preserveAspectRatio="none": allows stretching to fill container
          - Initial animation: fades in from below with opacity and y translation
        */}
        <motion.svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          initial={{ opacity: 0, y: 30 }}      // Start: invisible and 30px below
          animate={{ opacity: 1, y: 0 }}       // End: fully visible at original position
          transition={{ duration: 1.5, ease: "easeOut" }}  // Smooth 1.5s entrance
        >
          {/* 
            SVG Gradient Definition
            Creates a vertical gradient from solid color at bottom to transparent at top
            This gives the wave a natural fade-out effect
          */}
          <defs>
            <linearGradient id="yellowWaveGradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor={toColor} stopOpacity="1" />      {/* Bottom: fully opaque */}
              <stop offset="70%" stopColor={toColor} stopOpacity="0.8" />   {/* Middle: slightly transparent */}
              <stop offset="100%" stopColor={toColor} stopOpacity="0.3" />  {/* Top: very transparent */}
            </linearGradient>
          </defs>
          
          {/* 
            Primary Wave Path
            Uses SVG path data to create a curved wave shape
            - M0,200: Move to bottom-left corner
            - C commands: Create cubic Bezier curves for smooth wave shapes
            - L1200,200 L0,200 Z: Complete the shape by drawing to corners and closing
            
            Animation cycles through 4 different wave shapes to create flowing motion
          */}
          <motion.path
            d="M0,200 C300,120 600,160 900,100 C1050,60 1150,80 1200,60 L1200,200 L0,200 Z"
            fill="url(#yellowWaveGradient)"  // Apply the gradient defined above
            animate={{
              d: [
                // Frame 1: Initial wave shape
                "M0,200 C300,120 600,160 900,100 C1050,60 1150,80 1200,60 L1200,200 L0,200 Z",
                // Frame 2: Wave shifts left, heights change
                "M-500,200 C300,100 600,140 900,120 C1050,80 1150,60 1200,80 L1200,200 L0,200 Z",
                // Frame 3: Different curve heights
                "M-500,200 C300,130 600,150 900,90 C1050,50 1150,90 1200,70 L1200,200 L0,200 Z",
                // Frame 4: Return to initial shape (creates seamless loop)
                "M0,200 C300,120 600,160 900,100 C1050,60 1150,80 1200,60 L1200,200 L0,200 Z"
              ]
            }}
            transition={{
              duration: 8,              // 8 seconds for full cycle
              repeat: Infinity,         // Loop forever
              ease: "easeInOut"        // Smooth acceleration/deceleration
            }}
          />
          
          {/* 
            Secondary Wave for Depth Effect
            Creates a layered appearance by adding a second wave with:
            - Different animation timing (6s vs 8s)
            - Different starting delay (1s)
            - Solid color instead of gradient
            - Reduced opacity (0.6)
            This creates the illusion of multiple wave layers
          */}
          <motion.path
            d="M0,200 C400,140 700,180 1000,120 C1100,100 1150,110 1200,100 L1200,200 L0,200 Z"
            fill={toColor}                    // Solid color, no gradient
            opacity="0.6"                     // Semi-transparent for layering effect
            animate={{
              d: [
                "M0,200 C400,140 700,180 1000,120 C1100,100 1150,110 1200,100 L1200,200 L0,200 Z",
                "M0,200 C400,160 700,160 1000,140 C1100,120 1150,90 1200,120 L1200,200 L0,200 Z",
                "M0,200 C400,150 700,170 1000,110 C1100,90 1150,100 1200,90 L1200,200 L0,200 Z",
                "M0,200 C400,140 700,180 1000,120 C1100,100 1150,110 1200,100 L1200,200 L0,200 Z"
              ]
            }}
            transition={{
              duration: 6,              // Faster animation than primary wave
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1                  // 1 second delay creates offset effect
            }}
          />
        </motion.svg>
        
        {/* 
          Large Floating Bubbles
          Creates 15 bubbles that rise from the wave with different characteristics:
          - Varying sizes based on index (8px to 20px)
          - Different colors (yellow variants and white)
          - Staggered horizontal positions
          - Individual animation delays for natural effect
        */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              // Dynamic sizing: base 8px + up to 18px more based on index
              width: `${8 + (i % 4) * 6}px`,
              height: `${8 + (i % 4) * 6}px`,
              // Color cycling: 3 different colors based on index
              backgroundColor: i % 3 === 0 ? 'rgba(255,222,89,0.8)' :      // Yellow 
                             i % 3 === 1 ? 'rgba(255,235,156,0.9)' : 'rgba(255,255,255,0.7)', // Light yellow or white
              // Horizontal distribution: spread across width with 6.5% spacing
              left: `${3 + i * 6.5}%`,
              // Vertical starting position: slightly below wave with variation
              bottom: `${-10 + (i % 3) * 15}px`,
              // Subtle glow effect
              boxShadow: '0 2px 8px rgba(255,222,89,0.3)',
            }}
            animate={{
              // Vertical movement: rise up different heights based on index
              y: [-10, -80 - (i % 3) * 30, -10],
              // Horizontal sway: alternate left/right movement
              x: [0, (i % 2 === 0 ? 20 : -20), 0],
              // Fade in and out during journey
              opacity: [0, 0.9, 0],
              // Scale animation: start small, grow, then shrink
              scale: [0.3, 1, 0.3]
            }}
            transition={{
              // Unique duration for each bubble (4-7 seconds)
              duration: 4 + i * 0.2,
              repeat: Infinity,
              ease: "easeOut",
              // Staggered delays create wave-like bubble emergence
              delay: i * 0.3
            }}
          />
        ))}
        
        {/* 
          Small Accent Bubbles
          Additional layer of 10 smaller bubbles for enhanced realism:
          - Smaller sizes (3-7px)
          - Pure white color for contrast
          - Different spacing and timing than large bubbles
          - Simpler animation (straight up, no sway)
        */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`small-${i}`}
            className="absolute rounded-full"
            style={{
              // Smaller, more uniform sizing
              width: `${3 + (i % 2) * 2}px`,
              height: `${3 + (i % 2) * 2}px`,
              // Pure white for contrast against yellow waves
              backgroundColor: 'rgba(255,255,255,0.8)',
              // Different horizontal spacing (8.5% intervals)
              left: `${8 + i * 8.5}%`,
              // Start slightly higher than large bubbles
              bottom: `${5 + (i % 2) * 10}px`,
            }}
            animate={{
              // Simpler animation: straight upward movement
              y: [0, -60 - (i % 2) * 20],
              // Simple fade out as they rise
              opacity: [0.8, 0],
              // Shrink as they disappear
              scale: [1, 0.2]
            }}
            transition={{
              // Faster, shorter animations (3-4.35 seconds)
              duration: 3 + i * 0.15,
              repeat: Infinity,
              ease: "easeOut",
              // Different delay pattern for variety
              delay: i * 0.4
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ModernTransition;
