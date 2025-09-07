import { motion } from 'motion/react';
import { MdLanguage, MdComputer } from 'react-icons/md';
import styles from './OfferSection.module.css';
import { Link } from 'react-router-dom';

const OfferSection = () => {
    return (
        <>
            <section className={styles.offerSection} id="offers">
                {/* Large background decorative elements - responsive */}
                <div className="absolute top-10 right-20 w-32 h-32 rounded-full opacity-20 animate-pulse md:block hidden" style={{backgroundColor: '#a5ccff', animationDuration: '3s'}}></div>
                <div className="absolute bottom-32 left-16 w-40 h-24 opacity-15 animate-bounce md:block hidden" style={{backgroundColor: '#a5ccff', borderRadius: '50% 20% 80% 30%', animationDelay: '1s', animationDuration: '4s'}}></div>
                <div className="absolute top-1/2 right-10 w-24 h-36 opacity-18 animate-ping md:block hidden" style={{backgroundColor: '#a5ccff', borderRadius: '30% 70% 40% 60%', animationDelay: '2s', animationDuration: '5s'}}></div>
                
                <div className={styles.offerContent}>
                    <motion.h1 
                        className={styles.offerTitle}
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}>
                            <span className={styles.portfolioSlash}>/</span>
                            <span className={styles.offerTitle}>NABÍDKA SLUŽEB</span>
                    </motion.h1>
                    <div className={`cardsContainer flex justify-center mx-4 md:mx-16 gap-4 md:gap-16 ${styles.cardsContainer}`} >
                        {/* Web Development Card - Blue Design #0d47a1 */}
                        <motion.div 
                            className={`w-full sm:max-w-lg rounded-xl overflow-hidden shadow-2xl border hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 ${styles.card}`}
                            style={{
                                background: `linear-gradient(to bottom right, #e3f2fd, #bbdefb)`,
                                borderColor: '#90caf9'
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div 
                                className="text-white px-6 py-4"
                                style={{
                                    background: `linear-gradient(to right, #0d47a1, #1565c0)`
                                }}
                            >
                                <div className="flex items-center justify-center gap-2 sm:gap-3">
                                    <MdLanguage className="text-2xl sm:text-3xl" />
                                    <h5 className="text-lg sm:text-2xl font-bold text-center">Webdesign a tvorba webu</h5>
                                    <div className="text-2xl sm:text-3xl opacity-0">
                                        <MdLanguage />
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 sm:px-6 py-4 sm:py-6">
                                <ul className="space-y-4 sm:space-y-6">
                                    <li className="text-gray-700 text-xs sm:text-base flex items-center bg-blue-200 p-2 rounded-md">
                                        <span 
                                            className="w-2 h-2 rounded-full mr-3"
                                            style={{ backgroundColor: '#0d47a1' }}
                                        ></span>
                                        Webové prezentace na míru
                                    </li>
                                    <li className="text-gray-700 text-xs sm:text-base flex items-center bg-blue-200 p-2 rounded-md">
                                        <span 
                                            className="w-2 h-2 rounded-full mr-3"
                                            style={{ backgroundColor: '#0d47a1' }}
                                        ></span>
                                        Funkční a dynamické webové aplikace
                                    </li>
                                    <li className="text-gray-700 text-xs sm:text-base flex items-center bg-blue-200 p-2 rounded-md">
                                        <span 
                                            className="w-2 h-2 rounded-full mr-3"
                                            style={{ backgroundColor: '#0d47a1' }}
                                        ></span>
                                        SEO optimalizace
                                    </li>
                                    <li className="text-gray-700 text-xs sm:text-base flex items-center bg-blue-200 p-2 rounded-md">
                                        <span 
                                            className="w-2 h-2 rounded-full mr-3"
                                            style={{ backgroundColor: '#0d47a1' }}
                                        ></span>
                                        Responzivní design
                                    </li>
                                </ul>
                            </div>
                            <div className="px-6 pb-6">
                                <button 
                                    className="w-full text-white font-semibold py-3 px-6 rounded-lg transform transition-all duration-200 hover:scale-105 shadow-lg"
                                    style={{
                                        background: `linear-gradient(to right, #0d47a1, #1565c0)`
                                    }}
                                >
                        <Link to="/web" className="block w-full h-full"
                            style={{ textDecoration: 'none', color: 'inherit' }}
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
                                    >Zjistit Více</Link>
                                </button>
                            </div>
                        </motion.div>

                        {/* PC Service Card - Cool Cyan Design #dcedf9 */}
                        <motion.div 
                            className={`w-full sm:max-w-lg rounded-xl overflow-hidden shadow-2xl border hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 ${styles.card}`}
                            style={{
                                background: `linear-gradient(to bottom right, #dcedf9, #b3d9f2)`,
                                borderColor: '#81c7e8'
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div 
                                className="text-white px-6 py-4"
                                style={{
                                    background: `linear-gradient(to right, #1976d2, #42a5f5)`
                                }}
                            >
                                <div className="flex items-center justify-center gap-2 sm:gap-3">
                                    <MdComputer className="text-2xl sm:text-3xl" />
                                    <h5 className="text-lg sm:text-2xl font-bold text-center">PC Servis</h5>
                                    <div className="text-2xl sm:text-3xl opacity-0">
                                        <MdComputer />
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 sm:px-6 py-4 sm:py-6">
                                <ul className="space-y-4 sm:space-y-6">
                                    <li className="text-gray-700 text-xs sm:text-base flex items-center bg-blue-200 p-2 rounded-md">
                                        <span 
                                            className="w-2 h-2 rounded-full mr-3"
                                            style={{ backgroundColor: '#1976d2' }}
                                        ></span>
                                        Diagnostika a oprava počítačů
                                    </li>
                                    <li className="text-gray-700 text-xs sm:text-base flex items-center bg-blue-200 p-2 rounded-md">
                                        <span 
                                            className="w-2 h-2 rounded-full mr-3"
                                            style={{ backgroundColor: '#1976d2' }}
                                        ></span>
                                        Stavba PC na míru
                                    </li>
                                    <li className="text-gray-700 text-xs sm:text-base flex items-center bg-blue-200 p-2 rounded-md">
                                        <span 
                                            className="w-2 h-2 rounded-full mr-3"
                                            style={{ backgroundColor: '#1976d2' }}
                                        ></span>
                                        Upgrade počítačových komponent
                                    </li>
                                    <li className="text-gray-700 text-xs sm:text-base flex items-center bg-blue-200 p-2 rounded-md">
                                        <span 
                                            className="w-2 h-2 rounded-full mr-3"
                                            style={{ backgroundColor: '#1976d2' }}
                                        ></span>
                                        Údržba a čištění počítačů
                                    </li>
                                </ul>
                            </div>
                            <div className="px-6 pb-6">
                                <button 
                                    className="w-full text-white font-semibold py-3 px-6 rounded-lg transform transition-all duration-200 hover:scale-105 shadow-lg"
                                    style={{
                                        background: `linear-gradient(to right, #1976d2, #42a5f5)`
                                    }}
                                >
                        <Link to="/servis" className="block w-full h-full"
                            style={{ textDecoration: 'none', color: 'inherit' }}
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
                                    >Zjistit Více</Link>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OfferSection;