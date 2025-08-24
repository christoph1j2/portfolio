import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import { motion } from "motion/react"; // Import framer motion pro animace
import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';

// Types and categories
type PortfolioCategory = 'web' | 'software' | 'iot' | 'fun' | 'other';
interface PortfolioItem {
  id: string | number;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  tech: string[];
  category: PortfolioCategory;
}

// Manual categorization (edit freely)
const projectsByCategory: Record<PortfolioCategory, PortfolioItem[]> = {
  web: [
    {
      id: 1,
      title: "Koučink Zdenka Lindenbergová",
      description:
        "Webová prezentace pro koučku s moderním designem a optimalizací pro SEO. Responzivní design s důrazem na uživatelskou přívětivost a profesionální vzhled.",
      image: "/koucink.webp",
      liveUrl: "/lindenbergova/index.html",
      tech: ["HTML5", "CSS3", "JavaScript"],
      category: 'web',
    },
    {
      id: 3,
      title: "ECL-IT",
      description:
        "Webová prezentace pro ECL-IT s moderním designem a animacemi. Využívá nejnovější technologie pro vytvoření působivého online zážitku.",
      image: "/portfolio.webp",
      liveUrl: "https://www.ecl-it.cz",
      githubUrl: "https://github.com/christoph1j2/portfolio",
      tech: ["React", "Tailwind", "Framer Motion"],
      category: 'web',
    },
  ],
  software: [
    {
      id: 2,
      title: "LaceHub",
      description:
        "Full-stack platforma pro přeprodejce tenisek pomocí Reactu a Nest.js. Moderní e-commerce řešení s pokročilými funkcemi pro správu inventáře, objednávek a uživatelských účtů.",
      image: "/lacehub.webp",
      liveUrl: "/portfolio/lacehub",
      githubUrl: "https://github.com/christoph1j2/lacehub",
      tech: ["React", "Nest.js", "PostgreSQL"],
      category: 'software',
    },
    // Přidej další software/web app projekty sem
    {
      id: 6,
      title: "Logik",
      description: "Sovietská verze hry Mastermind pomocí JavaFX. Hráči se snaží uhodnout tajnou kombinaci barevných kódů.",
      image: "/logik.jpg",
/*       liveUrl: "/portfolio/logik",
 */      githubUrl: "https://github.com/christoph1j2/logik",
      tech: ["Java", "JavaFX", "Scene Builder"],
      category: 'software',
    }
  ],
  iot: [
    // Přidej IoT/hardware projekty sem
    {
      id: 4,
      title: "ESP8266 Shield",
      description: "Custom ESP8266 shield pro monitorování teploty a světla.",
      image: "/shield.png",
/*       liveUrl: "/portfolio/esp8266-shield",
 */      githubUrl: "https://github.com/christoph1j2/esp8266-shield",
      tech: ["Arduino", "ESP8266", "MQTT"],
      category: 'iot',
    },
    {
      id: 5,
      title: "ESP8266 MoodLamp",
      description: "ESP8266 MoodLamp pro ambientní osvětlení.",
      image: "/moodlamp.png",
/*       liveUrl: "/portfolio/esp8266-moodlamp",
 */      githubUrl: "https://github.com/christoph1j2/esp8266-moodlamp",
      tech: ["Arduino", "ESP8266", "MQTT"],
      category: 'iot',
    }
  ],
  fun: [
    // Přidej zábavné/experimentální projekty sem
    {
      id: 7,
      title: "VR Dungeon Fighting Game",
      description: "VR hra zasazená do fantasy dungeonu, kde hráči bojují s monstry.",
      image: "/vrgame.png",
/*       liveUrl: "/portfolio/vr-dungeon",
 */      githubUrl: "https://github.com/christoph1j2/vr-dungeon",
      tech: ["Unity", "C#", "VR"],
      category: 'fun',
    }
  ],
  other: [
    // Přidej ostatní projekty sem
  ],
};

// Sections in requested order
const sections: { key: PortfolioCategory; title: string }[] = [
  { key: 'web', title: 'Webové prezentace' },
  { key: 'software', title: 'Webové aplikace a software' },
  { key: 'iot', title: 'IoT' },
  { key: 'fun', title: 'Zábava/Experimenty' },
  { key: 'other', title: 'Ostatní' },
];

const PortfolioPage = () => {
  return (
    <>
      <Navigation />

      {/* Hlavní kontejner s paddingem nahoře kvůli fixed navigaci */}
      <div className="pt-24 min-h-screen bg-gray-50">
        {/* Kontejner pro nadpis */}
        <div className="container mx-auto px-4 py-8">
          {/* Nadpis v stylu homepage */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-center mb-12 flex items-center justify-center gap-2"
            // antonRegular = Anton font class z App.css pro konzistenci s designem
            /* 
              text-4xl md:text-6xl = responzivní velikost textu, 
              font-bold = tučné písmo, 
              text-center = centrovaný text, 
              mb-12 = spodní margin, 
              flex items-center justify-center = flexbox pro centrování, 
              gap-2 = mezera mezi elementy,
              antonRegular = Anton font family 
            */
            initial={{ opacity: 0, y: -20 }} // Počáteční stav animace - neviditelné a posunuté nahoru
            animate={{ opacity: 1, y: 0 }} // Konečný stav animace - viditelné na správné pozici
            transition={{ duration: 0.6 }} // Délka animace
          >
            <span className="text-cyan-400 text-5xl md:text-7xl antonRegular">/</span>{" "}
            {/* text-cyan-400 = azurová barva, text-5xl md:text-7xl = responzivní velikost pro lomítko */}
            <span className="text-gray-800 text-6xl antonRegular ">PROJEKTY</span>{" "}
            {/* text-gray-800 = tmavě šedá barva pro hlavní text */}
          </motion.h1>

          {/* Category sections (manual) */}
          {sections.map(({ key, title }) => {
            const items = projectsByCategory[key] || [];
            if (items.length === 0) return null;
            return (
              <section key={key} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">{title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((item, index) => (
                    <motion.div
                      key={`${key}-${item.id}`}
                      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      {/* Kontejner pro obrázek */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Obsah karty */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Technologie */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Odkazy na projekt / GitHub */}
                        <div className="flex flex-wrap gap-4 items-center">
                          {item.liveUrl && (
                            item.liveUrl.startsWith('/portfolio/') ? (
                              // React Router odkaz pro portfolio komponenty
                              <Link
                                to={item.liveUrl}
                                className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium transition-colors duration-300 group/link"
                                onClick={() => {
                                  // Scroll to top when navigating
                                  setTimeout(() => {
                                    const container = document.querySelector("#root");
                                    if (container) {
                                      container.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                    } else {
                                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                    }
                                  }, 100);
                                }}
                              >
                                Zobrazit projekt
                                <svg
                                  className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </Link>
                            ) : (
                              // Standardní odkaz pro externí weby a statické HTML soubory
                              <a
                                href={item.liveUrl}
                                className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium transition-colors duration-300 group/link"
                                target={item.liveUrl.startsWith('http') ? "_blank" : "_self"}
                                rel={item.liveUrl.startsWith('http') ? "noopener noreferrer" : undefined}
                              >
                                Zobrazit projekt
                                <svg
                                  className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </a>
                            )
                          )}

                          {item.githubUrl && (
                            <a
                              href={item.githubUrl}
                              className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub className="w-4 h-4 mr-2" />
                              GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PortfolioPage;
