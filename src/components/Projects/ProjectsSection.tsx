import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import styles from "./ProjectsSection.module.css";

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "LaceHub",
    description: "Full-stack platforma pro přeprodejce tenisek pomocí Reactu a Nest.js",
    image: "/src/assets/placeholder.png",
    liveUrl: "https://www.ecl-it.cz/portfolio/lacehub",
    tech: ["React", "Nest.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Koučink Zdenka Lindenbergová",
    description: "Webová prezentace pro koučku s moderním designem a optimalizací pro SEO.",
    image: "/src/assets/placeholder.png",
    liveUrl: "https://www.ecl-it.cz/portfolio/koucing-zdenka-lindenbergova",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 3,
    title: "ECL-IT",
    description: "Webová prezentace pro ECL-IT s moderním designem a animacemi.",
    image: "/src/assets/placeholder.png",
    liveUrl: "https://www.ecl-it.cz",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
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

// Carousel responsive settings
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1000 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1000, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ProjectsSection: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 1000;

  return (
    <section className={`${styles.portfolioSection} dark:${styles.darkMode}`}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Portfolio Heading - styled like ECL */}
          <div className={styles.portfolioHeading}>
            <span className={styles.portfolioBracket}>&lt;</span>
            <span className={styles.portfolioSlash}>/</span>
            <span className={styles.portfolioText}>Portfolio</span>
            <span className={styles.portfolioBracket}>&gt;</span>
          </div>
          

        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles.carouselContainer}
        >
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={300}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            centerMode={!isMobile}
            focusOnSelect={true}
            itemClass="carousel-item-padding-40-px"
          >
            {portfolioItems.map((item) => (
              <div key={item.id} className="px-2">
                <div className={styles.projectCard}>
                  {/* Image */}
                  <div className={styles.projectImageContainer}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.projectImage}
                      loading="lazy"
                    />
                    <div className={styles.projectOverlay}></div>
                  </div>

                  {/* Content - Only visible on hover */}
                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>{item.title}</h3>
                    <p className={styles.projectDescription}>{item.description}</p>
                    
                    {/* Tech Stack */}
                    <div className={styles.techStack}>
                      {item.tech.map((tech) => (
                        <span key={tech} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Visit Link */}
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.visitLink}
                    >
                      <ExternalLink size={16} />
                      Navštívit web
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </motion.div>

                  {/* See All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="m-auto mt-8 flex justify-center"
          >
            <button className={styles.seeAllBtn}>
              <span>Zobrazit všechny projekty</span>
              <ExternalLink size={16} className={styles.seeAllBtnIcon} />
            </button>
          </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
