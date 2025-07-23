import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNode, 
  FaJava,
  FaPhp, 
  FaDocker 
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiNestjs, 
  SiSpring, 
  SiMysql, 
  SiPostgresql, 
  SiRedis, 
  SiArduino, 
  SiBootstrap, 
  SiTailwindcss,
  SiLinux
} from 'react-icons/si'
import { motion } from "motion/react";

const TechSection = () => {
  // Initialize the Keen Slider with configuration options
  const [sliderRef] = useKeenSlider({
    // Enable infinite loop - when we reach the end, it goes back to the beginning
    loop: true,
    
    // Use performance mode for better rendering (GPU acceleration)
    renderMode: "performance",
    
    // Default slide configuration
    slides: {
      perView: 'auto', // Let slides size themselves based on content
      spacing: 15,     // 15px gap between slides
    },
    
    // Responsive breakpoints - different slide counts for different screen sizes
    breakpoints: {
      // Small phones (400px and up): show 2 slides at once
      '(min-width: 400px)': {
        slides: { perView: 2, spacing: 15 }
      },
      // Tablets (768px and up): show 4 slides at once
      '(min-width: 768px)': {
        slides: { perView: 4, spacing: 15 }
      },
      // Small laptops (1024px and up): show 6 slides at once
      '(min-width: 1024px)': {
        slides: { perView: 6, spacing: 15 }
      },
      // Large screens (1200px and up): show 8 slides at once
      '(min-width: 1200px)': {
        slides: { perView: 8, spacing: 15 }
      },
    },
    
    // This runs when the slider is first created/mounted
    created(s) {
      // Animation settings for the automatic sliding
      const animation = {
        duration: 90000, // Take 90 seconds (1.5 minutes) to complete one full cycle
        easing: (t: number) => t, // Linear easing = constant speed (no acceleration/deceleration)
      }
      // Move to the end of all slides with the animation
      // s.track.details.slides.length = total number of slides
      // This starts the infinite scrolling animation
      s.moveToIdx(s.track.details.slides.length, true, animation)
    },
    
    // This runs whenever the slider is updated (like window resize)
    updated(s) {
      // Same animation settings as above
      const animation = {
        duration: 90000,
        easing: (t: number) => t,
      }
      // Continue the animation from current position
      // s.track.details.abs = current absolute position
      // Add slides.length to continue the infinite loop
      s.moveToIdx(s.track.details.abs + s.track.details.slides.length, true, animation)
    },
    
    // This runs when an animation finishes
    animationEnded(s) {
      // Same animation settings again
      const animation = {
        duration: 90000,
        easing: (t: number) => t,
      }
      // Restart the animation to keep it going infinitely
      // This creates the continuous auto-scroll effect
      s.moveToIdx(s.track.details.abs + s.track.details.slides.length, true, animation)
    },
  })

  return (
    <>
      <div ref={sliderRef} className="keen-slider tech-section">
          <motion.div className="keen-slider__slide slide-html"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <FaHtml5 className="tech-icon" style={{ color: '#e34c26' }} />
          </motion.div>
          <motion.div className="keen-slider__slide slide-css"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <FaCss3Alt className="tech-icon" style={{ color: '#1572b6' }} />
          </motion.div>
          <motion.div className="keen-slider__slide slide-js"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <FaJs className="tech-icon" style={{ color: '#f7df1e' }} />
          </motion.div>
          <motion.div className="keen-slider__slide slide-react"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <FaReact className="tech-icon" style={{ color: '#61dafb' }} />
          </motion.div>
          <motion.div className="keen-slider__slide slide-typescript"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            <SiTypescript className="tech-icon" style={{ color: '#007acc' }} />
          </motion.div>
          <motion.div className="keen-slider__slide slide-node"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <FaNode className="tech-icon" style={{ color: '#68a063' }} />
          </motion.div>
          <motion.div className="keen-slider__slide slide-nestjs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <SiNestjs className="tech-icon" style={{ color: '#e0234e' }} />
          </motion.div>
          <motion.div className="keen-slider__slide slide-java"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <FaJava className="tech-icon" style={{ color: '#f89820' }} />
          </motion.div>
          <motion.div className="keen-slider__slide slide-spring"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <SiSpring className="tech-icon" style={{ color: '#6db33f' }} />
          </motion.div>
          <motion.div className="keen-slider__slide slide-php"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <FaPhp className="tech-icon" style={{ color: '#777bb4' }} />
          </motion.div>
          <motion.div className="keen-slider__slide slide-linux"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <SiLinux className="tech-icon" style={{ color: '#000000' }} />
          </motion.div>
          <motion.div className="keen-slider__slide slide-docker"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
          >
            <FaDocker className="tech-icon" style={{ color: '#0db7ed' }} />
          </motion.div>
          <motion.div className="keen-slider__slide slide-mysql"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <SiMysql className="tech-icon" style={{ color: '#00758f' }} />
          </motion.div>
          <motion.div className="keen-slider__slide slide-postgresql"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.9 }}
          >
            <SiPostgresql className="tech-icon" style={{ color: '#336791' }} />
          </motion.div>
          <motion.div className="keen-slider__slide slide-redis"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.0 }}
          >
            <SiRedis className="tech-icon" style={{ color: '#dc382d' }} />
          </motion.div>
          <motion.div className="keen-slider__slide slide-arduino"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.1 }}
          >
            <SiArduino className="tech-icon" style={{ color: '#00979d' }} />
          </motion.div>
          <motion.div className="keen-slider__slide slide-bootstrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            <SiBootstrap className="tech-icon" style={{ color: '#7952b3' }} />
          </motion.div>
          <motion.div className="keen-slider__slide slide-tailwind"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.3 }}
          >
            <SiTailwindcss className="tech-icon" style={{ color: '#38bdf8' }} />
          </motion.div>
      </div>
      <style>
        {`
          .tech-section {
            background: linear-gradient(to bottom, #0d47a1 0%, #4a7bd0 50%, #90caf9 75%, #ffffffff 100%);
            padding: 2rem 0;
            position: relative;
          }
          

          
          .keen-slider__slide {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(8px);
            border-radius: 1rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 120px;
            height: 120px;
          }
          
          @media (max-width: 768px) {
            .keen-slider__slide {
              min-width: 100px;
              height: 100px;
              padding: 1rem;
            }
            
            .tech-icon {
              width: 40px !important;
              height: 40px !important;
              margin: 1rem !important;
            }
            
            .tech-section {
              padding: 3rem 0 !important;
            }
          }
          
          @media (max-width: 480px) {
            .keen-slider__slide {
              min-width: 80px;
              height: 80px;
              padding: 0.25rem;
            }
            
            .tech-icon {
              width: 32px !important;
              height: 32px !important;
              margin: 0.25rem !important;
            }
          }
          
          .tech-icon {
            width: 60px;
            height: 60px;
            margin: 1rem;
            filter: brightness(0) invert(1) drop-shadow(0 2px 4px rgba(0,0,0,0.2));
            transition: transform 0.3s ease, filter 0.3s ease;
          }
          
          .tech-icon:hover {
            transform: scale(1.05);
            filter: brightness(0) invert(1) drop-shadow(0 0 8px rgba(255,255,255,0.4));
          }
        `}
      </style>
    </>
  );
};

export default TechSection;