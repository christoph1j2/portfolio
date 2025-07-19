import { useState } from 'react';
import { BsLinkedin } from 'react-icons/bs';
import Xarrow from 'react-xarrows';
import styles from './AboutSection.module.css';

const AboutSection = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>
                {/* Left side - About content */}
                <div className={styles.aboutContent}>
                    <h1 className={styles.title}>O NÁS</h1>
                    <div className={styles.textContent}>
                        <div className={styles.bulletPoint}>
                            <span className={styles.bullet}>•</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada. Phasellus faucibus molestie nisl. Cras elementum. Pellentesque pretium lectus id turpis. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisl ut aliquid ex ea commodi consequatur?</p>
                        </div>
                        <div className={styles.bulletPoint}>
                            <span className={styles.bullet}>•</span>
                            <p>Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce wisi. Et harum quidem rerum facilis est et expedita distinctio. Etiam neque. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem, nullam rhoncus aliquam netus. In enim a arcu imperdiet malesuada. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.</p>
                        </div>
                        <div className={styles.bulletPoint}>
                            <span className={styles.bullet}>•</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et lorem id felis nonummy placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis pulvinar. Aliquam erat volutpat. Aliquam id dolor.</p>
                        </div>
                    </div>
                </div>

                {/* Right side - Photo with annotations */}
                <div className={styles.photoContainer}>
                    <div 
                        className={`${styles.photoWrapper} ${isHovered ? styles.hovered : ''}`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
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
                        {/* Top-right annotation - DEZO */}
                        <div 
                            id="dezo-badge"
                            className={`${styles.annotation} ${styles.topRightAnnotation} ${isHovered ? styles.visible : ''}`}
                        >
                            <div className={styles.annotationBadge}>
                                <span className={styles.annotationText}>DEZO</span>
                                <BsLinkedin className={styles.linkedinIcon} />
                            </div>
                        </div>

                        {/* Bottom-left annotation - DYLYNA */}
                        <div 
                            id="dylyna-badge"
                            className={`${styles.annotation} ${styles.bottomLeftAnnotation} ${isHovered ? styles.visible : ''}`}
                        >
                            <div className={styles.annotationBadge}>
                                <span className={styles.annotationText}>DYLYNA</span>
                                <BsLinkedin className={styles.linkedinIcon} />
                            </div>
                        </div>

                        {/* Arrows connecting anchor points to badges */}
                        {isHovered && (
                            <>
                                <Xarrow
                                    start="dezo-badge"
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
                                    start="dylyna-badge"
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
                </div>
            </div>
        </section>
    );
}

export default AboutSection;