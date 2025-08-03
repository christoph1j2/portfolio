import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isVisibleRef = useRef(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

    useEffect(() => {
      const container = document.querySelector("#root");

      if (!container) return;

      let ticking = false;

      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const currentScrollY = container.scrollTop;

            if (currentScrollY === 0) {
              setIsScrolled(false);
              setIsVisible(true);
              isVisibleRef.current = true;
            } else if (currentScrollY < lastScrollY.current) {
              setIsVisible(true);
              setIsScrolled(true);
              isVisibleRef.current = true;
            } else if (currentScrollY > lastScrollY.current) {
              setIsVisible(false);
              isVisibleRef.current = false;
            }

            lastScrollY.current = currentScrollY;
            ticking = false;
          });

          ticking = true;
        }
      };

      container.addEventListener("scroll", handleScroll, { passive: true });

      return () => container.removeEventListener("scroll", handleScroll);
    }, []);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isHomePage = location.pathname === "/";
  const isDarkBackground = isHomePage && !isScrolled;
  
  const navClass = isDarkBackground
    ? "bg-transparent hover:bg-white/10"
    : "bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm";

  const textColor = isDarkBackground ? "text-white" : "text-gray-800";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${navClass} ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className={`${textColor} font-bold text-2xl duration-300 flex items-center gap-1`}>
              <NavLink to="/" className="flex items-center gap-1">
                <span className={isDarkBackground ? "text-white" : "text-gray-800"} style={{ 
                  fontSize: '1.875rem',
                  textShadow: isDarkBackground ? '0 0 10px rgba(47, 255, 214, 0.5)' : 'none'
                }}>&lt;</span>
                <span className="flex items-center">
                  <span className={isDarkBackground ? "text-cyan-400" : "text-cyan-600"} style={{ 
                    fontSize: '1.5rem',
                    textShadow: isDarkBackground ? '0 0 10px rgba(47, 255, 214, 0.5)' : 'none'
                  }}>/</span>
                  <span className={`ml-1 tracking-wider ${isDarkBackground ? "text-white" : "text-gray-800"}`} style={{ 
                    fontFamily: 'Anton, sans-serif', 
                    textShadow: isDarkBackground ? '0 0 15px rgba(255, 255, 255, 0.3)' : 'none'
                  }}>ECL</span>
                </span>
                <span className={isDarkBackground ? "text-white" : "text-gray-800"} style={{ 
                  fontSize: '1.875rem',
                  textShadow: isDarkBackground ? '0 0 10px rgba(47, 255, 214, 0.5)' : 'none'
                }}>&gt;</span>
              </NavLink>
            </div>

            <button
              className={`md:hidden ${textColor}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>

            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-6 items-center">
              <li>
                <NavLink
                  to="/"
                  className={`${styles.navLink} ${textColor} px-4 py-2 rounded-full transition-all ${isDarkBackground ? "hover:bg-white/20" : "hover:bg-gray-100"} backdrop-blur-sm`}
                >
                  Domů
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className={`${styles.navLink} ${textColor} px-4 py-2 rounded-full transition-all ${isDarkBackground ? "hover:bg-white/20" : "hover:bg-gray-100"} backdrop-blur-sm`}
                >
                  Projekty
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/technologie"
                  className={`${styles.navLink} ${textColor} px-4 py-2 rounded-full transition-all ${isDarkBackground ? "hover:bg-white/20" : "hover:bg-gray-100"} backdrop-blur-sm`}
                >
                  Technologie
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/web"
                  className={`${styles.navLink} ${textColor} px-4 py-2 rounded-full transition-all ${isDarkBackground ? "hover:bg-white/20" : "hover:bg-gray-100"} backdrop-blur-sm`}
                >
                  Tvorba Webů
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/servis"
                  className={`${styles.navLink} ${textColor} px-4 py-2 rounded-full transition-all ${isDarkBackground ? "hover:bg-white/20" : "hover:bg-gray-100"} backdrop-blur-sm`}
                >
                  Servis PC
                </NavLink>
              </li>
            </ul>

            {/* Mobile menu */}
            {isOpen && (
              <ul className={`md:hidden absolute top-16 left-0 right-0 py-4 ${isDarkBackground ? "bg-white/10 backdrop-blur-md border-b border-white/20" : "bg-white/95 backdrop-blur-md border-b border-gray-200/50"} space-y-4 shadow-lg`}>
                <li>
                  <NavLink
                    to="/"
                    className={`${textColor} block px-4 py-2 ${isDarkBackground ? "hover:bg-white/20" : "hover:bg-gray-100"}`}
                  >
                    Domů
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/portfolio"
                    className={`${textColor} block px-4 py-2 ${isDarkBackground ? "hover:bg-white/20" : "hover:bg-gray-100"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/technologie"
                    className={`${textColor} block px-4 py-2 ${isDarkBackground ? "hover:bg-white/20" : "hover:bg-gray-100"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Technologie
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/servis"
                    className={`${textColor} block px-4 py-2 ${isDarkBackground ? "hover:bg-white/20" : "hover:bg-gray-100"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Servis PC
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/web"
                    className={`${textColor} block px-4 py-2 ${isDarkBackground ? "hover:bg-white/20" : "hover:bg-gray-100"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Tvorba webů
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>


    </>
  );
};

export default Navigation;