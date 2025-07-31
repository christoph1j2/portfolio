import { useState, useRef } from 'react';
import { BsInstagram } from 'react-icons/bs';
import Xarrow from 'react-xarrows';
import styles from './AboutSection.module.css';
import { motion, useInView } from 'motion/react';

const AboutSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [morphComplete, setMorphComplete] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section ref={ref} className={styles.aboutSection} id="about">
            {/* Animated SVG Background */}
            <div className={styles.svgBackground}>
                <svg 
                    viewBox="0 0 960 540" 
                    width="100%" 
                    height="100%" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.backgroundSvg}
                    preserveAspectRatio="xMidYMid slice"
                >
                    <rect x="0" y="0" width="960" height="540" fill="#0d47a1" />
                    
                    <motion.path
                        initial={{
                            d: "M0 357L32 351.2C64 345.3 128 333.7 192 342.5C256 351.3 320 380.7 384 398.2C448 415.7 512 421.3 576 403.5C640 385.7 704 344.3 768 345C832 345.7 896 388.3 928 409.7L960 431L960 0L928 0C896 0 832 0 768 0C704 0 640 0 576 0C512 0 448 0 384 0C320 0 256 0 192 0C128 0 64 0 32 0L0 0Z"
                        }}
                        animate={isInView ? {
                            d: "M0 51L32 49.8C64 48.7 128 46.3 192 48C256 49.7 320 55.3 384 58.8C448 62.3 512 63.7 576 60.2C640 56.7 704 48.3 768 48.3C832 48.3 896 56.7 928 60.8L960 65L960 0L928 0C896 0 832 0 768 0C704 0 640 0 576 0C512 0 448 0 384 0C320 0 256 0 192 0C128 0 64 0 32 0L0 0Z"
                        } : {}}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                            delay: 0.2
                        }}
                        onAnimationComplete={() => setMorphComplete(true)}
                        fill="#ffde59"
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                    />
                </svg>
            </div>
            <div className={styles.container}>
                {/* Left side - About content */}
                <div className={styles.aboutContent}>
                    <motion.h1 
                        className="m-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={morphComplete ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.2 }}>
                            <span className={styles.portfolioSlash}>/</span>
                            <span className={styles.title}>O NÁS</span>
                    </motion.h1>
                    <div className={styles.textContent}>
                        <motion.div 
                            className={styles.bulletPoint}
                            initial={{ opacity: 0, x: -20 }}
                            animate={morphComplete ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}>
                            <span className={styles.bullet}>•</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada. Phasellus faucibus molestie nisl. Cras elementum. Pellentesque pretium lectus id turpis. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisl ut aliquid ex ea commodi consequatur?</p>
                        </motion.div>
                        <motion.div className={styles.bulletPoint}
                            initial={{ opacity: 0, x: -20 }}
                            animate={morphComplete ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.7 }}>
                            <span className={styles.bullet}>•</span>
                            <p>Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce wisi. Et harum quidem rerum facilis est et expedita distinctio. Etiam neque. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem, nullam rhoncus aliquam netus. In enim a arcu imperdiet malesuada. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.</p>
                        </motion.div>
                        <motion.div className={styles.bulletPoint}
                            initial={{ opacity: 0, x: -20 }}
                            animate={morphComplete ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.9 }}>
                            <span className={styles.bullet}>•</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et lorem id felis nonummy placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis pulvinar. Aliquam erat volutpat. Aliquam id dolor.</p>
                        </motion.div>
                    </div>
                </div>

                {/* Right side - Photo with annotations */}
                <motion.div className={styles.photoContainer}
                    initial={{ opacity: 0, y: 20 }}
                    animate={morphComplete ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    >
                    <div 
                        className={`${styles.photoWrapper} ${isHovered ? styles.hovered : ''}`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={(e) => {
                            // Only hide if not moving to an annotation
                            const relatedTarget = e.relatedTarget as HTMLElement;
                            if (!relatedTarget?.closest('.annotation')) {
                                setIsHovered(false);
                            }
                        }}
                    >
                        <img 
                            src="/src/assets/placeholder.png" 
                            alt="About Us" 
                            className={styles.photo}
                        />
                        
                        {/* Hidden anchor points on the image */}
                        <div 
                            id="person1-point" 
                            className={styles.anchorPoint}
                            style={{ top: '25%', right: '25%',}}
                        ></div>
                        <div 
                            id="person2-point" 
                            className={styles.anchorPoint}
                            style={{ bottom: '25%', left: '30%',}}
                        ></div>
                        {/* TODO: add hover on anchor points so that social media badges appear */}
                        {/* Top-right annotation - Chris */}
                        <a 
                            href="https://instagram.com/christoph1j2"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="chris-badge"
                            className={`${styles.annotation} ${styles.topRightAnnotation} ${isHovered ? styles.visible : ''}`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => {
                                setTimeout(() => setIsHovered(false), 100);
                            }}
                        >
                            <div className={styles.annotationBadge}>
                                <span className={styles.annotationText}>Chris</span>
                                <BsInstagram className={styles.instagramIcon} />
                            </div>
                        </a>

                        {/* Bottom-left annotation - Zůze */}
                        <a 
                            href="https://instagram.com/z.kap__"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="zuze-badge"
                            className={`${styles.annotation} ${styles.bottomLeftAnnotation} ${isHovered ? styles.visible : ''}`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => {
                                setTimeout(() => setIsHovered(false), 100);
                            }}
                        >
                            <div className={styles.annotationBadge}>
                                <span className={styles.annotationText}>Zůze</span>
                                <BsInstagram className={styles.instagramIcon} />
                            </div>
                        </a>

                        {/* Arrows connecting anchor points to badges */}
                        {isHovered && (
                            <>
                                <Xarrow
                                    start="chris-badge"
                                    end="person1-point"
                                    /* dashness={{strokeLen: 10, nonStrokeLen: 5, animation: 1}} */
                                    curveness={3}
                                    color="white"
                                    strokeWidth={4}
                                    headSize={5}
                                     animateDrawing={0.4} 
                                    
/*                                     startAnchor="bottom"
 */                                    /* endAnchor="top" */
                                />
                                <Xarrow
                                    start="zuze-badge"
                                    end="person2-point"
                                    curveness={3}
                                    color="white"
                                    strokeWidth={4}
                                    headSize={5}
                                    animateDrawing={0.5}
/*                                     startAnchor="right"
 */                                    /* endAnchor="left" */
                                />
                            </>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// TODO: add link to tech
export default AboutSection;