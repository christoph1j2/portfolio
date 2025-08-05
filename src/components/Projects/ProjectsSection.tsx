import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";           // Third-party carousel component for project showcase
import "react-multi-carousel/lib/styles.css";          // Default carousel styles
import "./carousel.css";                               // Custom carousel overrides
import { motion } from "motion/react";                 // Animation library for smooth transitions
import { ExternalLink } from "lucide-react";           // Icon component for external links
import styles from "./ProjectsSection.module.css";     // CSS modules for component-specific styling
import { NavLink } from "react-router-dom";

/**
 * Portfolio Data Array
 * 
 * Contains all project information displayed in the carousel.
 * Each project object includes:
 * - id: Unique identifier for React keys
 * - title: Project name displayed as heading
 * - description: Brief project summary in Czech
 * - image: Path to project screenshot/preview image
 * - liveUrl: External link to live project
 * - tech: Array of technology stack used
 */
const portfolioItems = [
  {
    id: 1,
    title: "LaceHub",
    description: "Full-stack platforma pro přeprodejce tenisek pomocí Reactu a Nest.js",
    image: "/lacehub.jpg",
    liveUrl: "https://www.ecl-it.cz/portfolio/lacehub",
    tech: ["React", "Nest.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Koučink Zdenka Lindenbergová",
    description: "Webová prezentace pro koučku s moderním designem a optimalizací pro SEO.",
    image: "/koucink.jpg",
    liveUrl: "https://www.ecl-it.cz/portfolio/koucing-zdenka-lindenbergova",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 3,
    title: "ECL-IT",
    description: "Webová prezentace pro ECL-IT s moderním designem a animacemi.",
    image: "/portfolio.jpg",
    liveUrl: "https://www.ecl-it.cz",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  /* 
    Commented out projects - likely future additions or projects not ready for display
    These can be uncommented when ready to showcase additional work
  */
/*   {
    id: 4,
    title: "E-commerce Store",
    description: "Online obchod s kompletním CMS systémem a platební bránou.",
    image: "/src/assets/placeholder.png",
    liveUrl: "https://example.com",
    tech: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    id: 5,
    title: "Restaurant Website",
    description: "Responsivní web pro restauraci s rezervačním systémem.",
    image: "/src/assets/placeholder.png",
    liveUrl: "https://example.com",
    tech: ["Vue.js", "Node.js", "MySQL"],
  }, */
];

/**
 * Carousel Responsive Configuration
 * 
 * Defines how many items to show and behavior across different screen sizes:
 * - desktop (1000px+): Shows 1 item, allows sliding 1 at a time
 * - tablet (464px-1000px): Shows 1 item, allows sliding 1 at a time  
 * - mobile (0px-464px): Shows 1 item, allows sliding 1 at a time
 * 
 * Note: All breakpoints show 1 item but this structure allows for easy
 * modification if multiple items per view are desired in the future
 */
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1000 },    // Screens 1000px and wider
    items: 1,                                 // Show 1 project at a time
    slidesToSlide: 1,                        // Move 1 project per swipe/click
  },
  tablet: {
    breakpoint: { max: 1000, min: 464 },     // Screens between 464px and 1000px
    items: 1,                                 // Show 1 project at a time
    slidesToSlide: 1,                        // Move 1 project per swipe/click
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },        // Screens smaller than 464px
    items: 1,                                 // Show 1 project at a time
    slidesToSlide: 1,                        // Move 1 project per swipe/click
  },
};

/**
 * ProjectsSection Component
 * 
 * Main portfolio showcase component that displays projects in an animated carousel.
 * Features:
 * - Responsive carousel with different behaviors per device type
 * - Smooth animations using Framer Motion
 * - Window width tracking for responsive behavior
 * - Auto-playing slideshow with manual controls
 * - Hover effects revealing project details
 */
const ProjectsSection: React.FC = () => {
  // State for tracking window width to determine mobile vs desktop behavior
  const [windowWidth, setWindowWidth] = useState(0);

  /**
   * Window Resize Effect
   * 
   * Tracks window width changes to enable responsive behavior:
   * - Sets up resize event listener on component mount
   * - Updates windowWidth state whenever window is resized
   * - Cleans up event listener on component unmount
   * - Initial width is set immediately to avoid layout shift
   */
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width immediately to prevent flash of incorrect layout
    handleResize();
    
    // Add event listener for subsequent resize events
    window.addEventListener('resize', handleResize);
    
    // Cleanup function to remove event listener when component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array = run once on mount

  // Determine if current screen size should use mobile layout (affects carousel behavior)
  const isMobile = windowWidth < 1000;

  return (
    <section id="portfolio" className={` ${styles.portfolioSection} dark:${styles.darkMode}`}>
      {/* 
        Main Portfolio Section
        - id="portfolio": Allows navigation linking to this section
        - Dynamic CSS classes: combines base styles with dark mode support
        - CSS modules prevent style conflicts with other components
      */}
      
      {/* Container for proper content width and centering */}
      <div className={styles.container}>
        {/* 
          Header Section with Animated Portfolio Title
          Uses Framer Motion for smooth entrance animation from top
        */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}        // Start: invisible and 20px above
          whileInView={{ opacity: 1, y: 0 }}      // End: visible at normal position
          viewport={{ once: true }}               // Animate only once when scrolled into view
          transition={{ duration: 1, delay: 0.2 }} // 1s animation with 0.2s delay
        >
          {/* 
            Stylized Portfolio Heading
            Creates a code-like appearance with HTML tag styling:
            "</Portfolio>" - resembles a closing HTML tag
            Each part is separately styled for visual effect
          */}
          <div className={styles.portfolioHeading}>
{/*             <span className={styles.portfolioBracket}>&lt;</span> */}
            <span className={styles.portfolioSlash}>/</span>         {/* Closing tag slash */}
            <span className={styles.portfolioText}>PROJEKTY</span>  {/* Main text */}
{/*             <span className={styles.portfolioBracket}>&gt;</span> */}
          </div>
          

        </motion.div>

        {/* 
          Animated Carousel Container
          Second animation that triggers after the header
          Slides up from bottom with opacity fade
        */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}         // Start: invisible and 50px below
          whileInView={{ opacity: 1, y: 0 }}      // End: visible at normal position
          viewport={{ once: true }}               // Animate only once
          transition={{ duration: 0.8, delay: 0.4 }} // 0.8s animation with 0.4s delay (after header)
          className={styles.carouselContainer}
        >
          {/* 
            React Multi Carousel Component
            Configured with custom settings for optimal UX:
            - responsive: Uses breakpoint configuration defined above
            - infinite: Allows continuous looping through projects
            - autoPlay: Automatically advances slides every 3 seconds
            - keyBoardControl: Enables arrow key navigation
            - centerMode: Centers the active slide (disabled on mobile)
            - focusOnSelect: Allows clicking slides to navigate
          */}
          <Carousel
            responsive={responsive}                              // Responsive breakpoint settings
            infinite={true}                                     // Enable infinite loop
            autoPlay={true}                                     // Auto-advance slides
            autoPlaySpeed={3000}                               // 3 seconds per slide
            keyBoardControl={true}                             // Enable keyboard navigation
            customTransition="transform 300ms ease-in-out"     // Smooth slide transition
            transitionDuration={300}                           // 300ms transition time
            removeArrowOnDeviceType={["tablet", "mobile"]}     // Hide arrows on touch devices
            centerMode={!isMobile}                             // Center active slide on desktop only
            focusOnSelect={true}                               // Allow click-to-navigate
            itemClass="carousel-item-padding-40-px"            // Custom CSS class for spacing
          >
            {/* 
              Project Cards Generation
              Maps through portfolioItems array to create individual project cards
              Each card contains image, title, description, tech stack, and external link
            */}
            {portfolioItems.map((item) => (
              <div key={item.id} className="px-2">  {/* Wrapper with horizontal padding */}
                {/* Individual Project Card */}
                <div className={styles.projectCard}>
                  {/* 
                    Project Image Container
                    Contains the main project screenshot with overlay for hover effects
                  */}
                  <div className={styles.projectImageContainer}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.projectImage}
                      loading="lazy"                    // Performance: lazy load images
                    />
                    {/* Overlay div for hover effects (styled via CSS) */}
                    <div className={styles.projectOverlay}></div>
                  </div>

                  {/* 
                    Project Content - Hidden by default, reveals on hover
                    Contains all project details that appear when user hovers over the card
                  */}
                  <div className={styles.projectContent}>
                    {/* Project title */}
                    <h3 className={styles.projectTitle}>{item.title}</h3>
                    {/* Project description */}
                    <p className={styles.projectDescription}>{item.description}</p>
                    
                    {/* 
                      Technology Stack Display
                      Maps through the tech array to create individual tech badges
                    */}
                    <div className={styles.techStack}>
                      {item.tech.map((tech) => (
                        <span key={tech} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* 
                      External Link Button
                      Opens project in new tab with security attributes
                    */}
                    <a
                      href={item.liveUrl}
                      target="_blank"                     // Open in new tab
                      rel="noopener noreferrer"          // Security: prevent opener access
                      className={styles.visitLink}
                    >
                      <ExternalLink size={16} />         {/* Icon component */}
                      Odkaz                      {/* Czech text: "Visit website" */}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </motion.div>

        {/* 
          "See All Projects" Button
          Third animation element that appears after carousel
          Provides call-to-action for viewing complete portfolio
        */}
        <motion.div
          initial={{ opacity: 0 }}                    // Start: invisible
          whileInView={{ opacity: 1 }}                // End: fully visible
          viewport={{ once: true }}                   // Animate only once
          transition={{ duration: 0.6, delay: 0.7 }} // 0.6s animation with 0.7s delay
          className="m-auto mt-8 flex justify-center"  // Tailwind: center with top margin
        >
          {/* Action button styled to match overall design */}
          <button className={styles.seeAllBtn}>
            <NavLink 
              to="/portfolio"
              onClick={() => {
                // Scroll to top when navigating to portfolio page
                setTimeout(() => {
                  const container = document.querySelector("#root");
                  if (container) {
                    container.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                  } else {
                    // Fallback to window scroll if #root doesn't exist
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                  }
                }, 100); // Small delay to ensure navigation completes first
              }}
            >
              Zobrazit všechny projekty
            </NavLink>
            <ExternalLink size={16} className={styles.seeAllBtnIcon} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
