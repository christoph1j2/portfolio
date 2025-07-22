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

const TechSection = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: {
      perView: 'auto',
      spacing: 15,
    },
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 2, spacing: 15 }
      },
      '(min-width: 768px)': {
        slides: { perView: 4, spacing: 15 }
      },
      '(min-width: 1024px)': {
        slides: { perView: 6, spacing: 15 }
      },
      '(min-width: 1200px)': {
        slides: { perView: 8, spacing: 15 }
      },
    },
    created(s) {
      const animation = {
        duration: 90000, // 90 seconds for full cycle
        easing: (t: number) => t, // Linear easing for constant speed
      }
      s.moveToIdx(s.track.details.slides.length, true, animation)
    },
    updated(s) {
      const animation = {
        duration: 90000,
        easing: (t: number) => t,
      }
      s.moveToIdx(s.track.details.abs + s.track.details.slides.length, true, animation)
    },
    animationEnded(s) {
      const animation = {
        duration: 90000,
        easing: (t: number) => t,
      }
      s.moveToIdx(s.track.details.abs + s.track.details.slides.length, true, animation)
    },
  })

  return (
    <>
      <div ref={sliderRef} className="keen-slider tech-section">
          <div className="keen-slider__slide slide-html">
            <FaHtml5 className="tech-icon" style={{ color: '#e34c26' }} />
          </div>
          <div className="keen-slider__slide slide-css">
            <FaCss3Alt className="tech-icon" style={{ color: '#1572b6' }} />
          </div>
          <div className="keen-slider__slide slide-js">
            <FaJs className="tech-icon" style={{ color: '#f7df1e' }} />
          </div>
          <div className="keen-slider__slide slide-react">
            <FaReact className="tech-icon" style={{ color: '#61dafb' }} />
          </div>
          <div className="keen-slider__slide slide-typescript">
            <SiTypescript className="tech-icon" style={{ color: '#007acc' }} />
          </div>
          <div className="keen-slider__slide slide-node">
            <FaNode className="tech-icon" style={{ color: '#68a063' }} />
          </div>
          <div className="keen-slider__slide slide-nestjs">
            <SiNestjs className="tech-icon" style={{ color: '#e0234e' }} />
          </div>
          <div className="keen-slider__slide slide-java">
            <FaJava className="tech-icon" style={{ color: '#f89820' }} />
          </div>
          <div className="keen-slider__slide slide-spring">
            <SiSpring className="tech-icon" style={{ color: '#6db33f' }} />
          </div>
          <div className="keen-slider__slide slide-php">
            <FaPhp className="tech-icon" style={{ color: '#777bb4' }} />
          </div>
          <div className="keen-slider__slide slide-linux">
            <SiLinux className="tech-icon" style={{ color: '#000000' }} />
          </div>
          <div className="keen-slider__slide slide-docker">
            <FaDocker className="tech-icon" style={{ color: '#0db7ed' }} />
          </div>
          <div className="keen-slider__slide slide-mysql">
            <SiMysql className="tech-icon" style={{ color: '#00758f' }} />
          </div>
          <div className="keen-slider__slide slide-postgresql">
            <SiPostgresql className="tech-icon" style={{ color: '#336791' }} />
          </div>
          <div className="keen-slider__slide slide-redis">
            <SiRedis className="tech-icon" style={{ color: '#dc382d' }} />
          </div>
          <div className="keen-slider__slide slide-arduino">
            <SiArduino className="tech-icon" style={{ color: '#00979d' }} />
          </div>
          <div className="keen-slider__slide slide-bootstrap">
            <SiBootstrap className="tech-icon" style={{ color: '#7952b3' }} />
          </div>
          <div className="keen-slider__slide slide-tailwind">
            <SiTailwindcss className="tech-icon" style={{ color: '#38bdf8' }} />
          </div>
      </div>
      <style>
        {`
          .tech-section {
            background: linear-gradient(to bottom, #0d47a1 0%, #4a7bd0 100%);
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
              padding: 0.5rem;
            }
            
            .tech-icon {
              width: 40px !important;
              height: 40px !important;
              margin: 0.5rem !important;
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