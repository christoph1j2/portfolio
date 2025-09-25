import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import { motion } from "motion/react"; // Import framer motion pro animace
import ImageWithLoader from "../components/ImageWithLoader/ImageWithLoader";

// Data pro technologie rozdělené podle kategorií
const technologyCategories = [
  {
    id: 1,
    title: "Frontend Vývoj",
    description: "Technologie pro tvorbu uživatelských rozhraní",
    technologies: [
      {
        name: "HTML",
        description: "Značkovací jazyk pro strukturu webových stránek",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        color: "#E34F26"
      },
      {
        name: "CSS",
        description: "Stylování a layout webových stránek",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        color: "#1572B6"
      },
      {
        name: "JavaScript",
        description: "Programovací jazyk pro interaktivní webové stránky",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "#F7DF1E"
      },
      {
        name: "Bootstrap",
        description: "CSS framework pro responzivní webový design",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        color: "#7952B3"
      },
      {
        name: "React",
        description: "Hlavní framework pro tvorbu moderních webových aplikací",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB"
      },
      {
        name: "TypeScript",
        description: "Typovaný JavaScript pro bezpečnější vývoj",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        color: "#3178C6"
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework pro rychlé stylování",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        color: "#06B6D4"
      }
    ]
  },
  {
    id: 2,
    title: "Backend Vývoj",
    description: "Technologie pro vývoj serverových aplikací a databázové systémy",
    technologies: [
      {
        name: "PHP",
        description: "Serverový programovací jazyk pro webové aplikace",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        color: "#777BB4"
      },
      {
        name: "Node.js",
        description: "JavaScript runtime pro serverové aplikace",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "#339933"
      },
      {
        name: "Spring",
        description: "Java framework pro enterprise aplikace",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        color: "#6DB33F"
      },
      {
        name: "Nest.js",
        description: "Scalable Node.js framework pro enterprise aplikace",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
        color: "#E0234E"
      },
      {
        name: "MySQL",
        description: "Populární relační databázový systém",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        color: "#4479A1"
      },
      {
        name: "PostgreSQL",
        description: "Pokročilá relační databáze pro komplexní projekty",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        color: "#336791"
      },
      {
        name: "Redis",
        description: "In-memory databáze pro caching a rychlé dotazy",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        color: "#DC382D"
      }
    ]
  },
  {
    id: 3,
    title: "Design & UI/UX",
    description: "Nástroje pro design a jeho prototypování",
    technologies: [
      {
        name: "Figma",
        description: "Kolaborativní nástroj pro UI/UX design",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        color: "#F24E1E"
      },
      {
        name: "Canva",
        description: "Online nástroj pro grafický design a marketing materiály",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
        color: "#00C4CC"
      },
      {
        name: "Framer Motion",
        description: "Animační knihovna pro React aplikace",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
        color: "#BB4B96"
      }
    ]
  },
  {
    id: 4,
    title: "Další Programovací Jazyky",
    description: "",
    technologies: [
      {
        name: "Java",
        description: "Enterprise aplikace a Android development",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        color: "#ED8B00"
      },
      {
        name: "C#",
        description: "Microsoft platforma pro desktop a webové aplikace",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        color: "#239120"
      },
      {
        name: "Rust",
        description: "Systémové programování s důrazem na bezpečnost",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
        color: "#000000"
      }
    ]
  },
  {
    id: 5,
    title: "Nástroje",
    description: "IDE & sada vývojových nástrojů",
    technologies: [
      {
        name: "Git",
        description: "Verzování kódu a kolaborace v týmu",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        color: "#F05032"
      },
      {
        name: "GitHub",
        description: "Hosting kódu a CI/CD pipeline",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        color: "#181717"
      },
      {
        name: "VS Code",
        description: "Hlavní vývojové prostředí pro všechny projekty",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        color: "#007ACC"
      },
      {
        name: "PHPStorm",
        description: "IDE pro PHP a webový vývoj",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phpstorm/phpstorm-original.svg",
        color: "#000000"
      },
      {
        name: "IntelliJ IDEA",
        description: "Integrované vývojové prostředí pro Javu",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
        color: "#000000"
      },
      {
        name: "WebStorm",
        description: "IDE pro JavaScript a webové technologie",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg",
        color: "#000000"
      },
      {
        name: "Docker",
        description: "Kontejnerizace aplikací pro konzistentní prostředí",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        color: "#2496ED"
      }
    ]
  },
  {
    id: 6,
    title: "IoT & Hardware",
    description: "Internet věcí a hardwarové platformy, na kterých stavím své projekty",
    technologies: [
      {
        name: "Arduino",
        description: "Open-source platforma pro prototypování elektroniky",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
        color: "#00979D"
      },
      {
        name: "Raspberry Pi",
        description: "Miniaturní počítač pro IoT a embedded projekty",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
        color: "#A22846"
      },
      {
        name: "ESP32",
        description: "Mikrokontrolér s Wi-Fi a Bluetooth pro IoT aplikace",
        icon: "	https://www.espressif.com/sites/all/themes/espressif/logo-black.svg",
        color: "#E7352C"
      }
    ]
  }
];

const TechnologyPage = () => {
  return (
    <>
      <Navigation />
      
      {/* Hlavní kontejner s paddingem nahoře kvůli fixed navigaci */}
      <div className="pt-24 min-h-screen bg-gray-50"> {/* pt-24 = padding-top pro offset od navigace, min-h-screen = minimální výška celé obrazovky, bg-gray-50 = světle šedé pozadí */}
        {/* Kontejner pro nadpis */}
        <div className="container mx-auto px-4 py-8"> {/* container mx-auto = centrovaný kontejner, px-4 = horizontální padding, py-8 = vertikální padding */}
          {/* Hlavní nadpis */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-center mb-6 flex items-center justify-center gap-2"
            style={{ fontFamily: '"Anton", sans-serif' }} // Vynucení Anton fontu
            /* 
              text-4xl md:text-6xl = responzivní velikost textu, 
              font-bold = tučné písmo, 
              text-center = centrovaný text, 
              mb-6 = spodní margin, 
              flex items-center justify-center = flexbox pro centrování, 
              gap-2 = mezera mezi elementy
            */
            initial={{ opacity: 0, y: -20 }} // Počáteční stav animace - neviditelné a posunuté nahoru
            animate={{ opacity: 1, y: 0 }} // Konečný stav animace - viditelné na správné pozici
            transition={{ duration: 0.6 }} // Délka animace
          >
            <span className="text-cyan-400 text-5xl md:text-7xl antonRegular">/</span> {/* text-cyan-400 = azurová barva, text-5xl md:text-7xl = responzivní velikost pro lomítko */}
            <span className="text-gray-800 text-6xl antonRegular">TECHNOLOGIE</span> {/* text-gray-800 = tmavě šedá barva pro hlavní text */}
          </motion.h1>

          {/* Podnadpis */}
          <motion.p
            className="text-center text-gray-600 text-lg md:text-xl mb-16 max-w-3xl mx-auto" // text-center = centrovaný text, text-gray-600 = středně šedá, text-lg md:text-xl = responzivní velikost, mb-16 = spodní margin, max-w-3xl mx-auto = maximální šířka a centrování
            initial={{ opacity: 0, y: 20 }} // Počáteční stav animace
            animate={{ opacity: 1, y: 0 }} // Konečný stav animace
            transition={{ duration: 0.6, delay: 0.2 }} // Animace s delay
          >
            Nástroje a technologie, které používáme pro tvorbu webových aplikací, softwarových projektů a hardware řešení.
          </motion.p>

          {/* Kategorie technologií */}
          <div className="space-y-16"> {/* space-y-16 = vertikální mezery mezi sekcemi */}
            {technologyCategories.map((category, categoryIndex) => ( // Mapování přes kategorie
              <motion.section
                key={category.id}
                className="bg-white rounded-2xl shadow-lg p-8" // bg-white = bílé pozadí, rounded-2xl = zaoblené rohy, shadow-lg = stín, p-8 = padding ze všech stran
                initial={{ opacity: 0, y: 40 }} // Počáteční stav pro animaci
                animate={{ opacity: 1, y: 0 }} // Animace při zobrazení
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }} // Postupné animace kategorií
              >
                {/* Nadpis kategorie */}
                <motion.div className="text-center mb-8"> {/* text-center = centrovaný text, mb-8 = spodní margin */}
                  <h2 
                    className="text-2xl md:text-3xl font-bold text-gray-800 mb-2" // text-2xl md:text-3xl = responzivní velikost, font-bold = tučné, text-gray-800 = tmavě šedá, mb-2 = spodní margin
                    style={{ fontFamily: '"Anton", sans-serif' }} // Anton font pro konzistenci
                  >
                    {category.title}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base"> {/* text-gray-600 = středně šedá, text-sm md:text-base = responzivní velikost */}
                    {category.description}
                  </p>
                </motion.div>

                {/* Grid technologií */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"> {/* responzivní grid - 2 sloupce na mobilu, až 6 na velkých obrazovkách, gap-6 = mezery */}
                  {category.technologies.map((tech, techIndex) => ( // Mapování přes technologie v kategorii
                    <motion.div
                      key={tech.name}
                      className="relative group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer" // relative = relativní pozicování, group = pro group hover efekty, bg-gray-50 = světle šedé pozadí, rounded-xl = zaoblené rohy, p-6 = padding, hover efekty, transition-all = plynulé přechody, duration-300 = doba přechodu, cursor-pointer = ukazatel myši
                      initial={{ opacity: 0, scale: 0.8 }} // Počáteční stav animace
                      animate={{ opacity: 1, scale: 1 }} // Animace při zobrazení
                      whileHover={{ y: -8, scale: 1.05 }} // Animace při hoveru - posun nahoru a zvětšení
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.1 + techIndex * 0.05 // Postupné animace technologií
                      }}
                    >
                      {/* Ikona technologie */}
                      <div className="flex justify-center mb-4"> {/* flex justify-center = centrování, mb-4 = spodní margin */}
                        <ImageWithLoader
                          src={tech.icon}
                          alt={tech.name}
                          className="w-12 h-12 md:w-16 md:h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                          style={{ filter: `drop-shadow(0 4px 8px ${tech.color}40)` }}
                        />
                      </div>

                      {/* Název technologie */}
                      <h3 className="text-center font-semibold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors duration-300"> {/* text-center = centrovaný text, font-semibold = půl-tučné, text-gray-800 = tmavě šedá, mb-2 = spodní margin, group-hover:text-cyan-600 = změna barvy při hoveru, transition-colors = plynulá změna barev */}
                        {tech.name}
                      </h3>

                      {/* Hover overlay s popisem */}
                      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center"> {/* absolutní overlay, bg-white/95 = poloprůhledné bílé pozadí, backdrop-blur-sm = rozmazání pozadí, rounded-xl = zaoblené rohy, p-4 = padding, opacity-0/100 = ovládání průhlednosti, group-hover = zobrazení při hoveru, flex flex-col justify-center = vertikální centrování */}
                        <h4 
                          className="font-bold text-lg mb-2 text-center"
                          style={{ color: tech.color }} // Barva názvu podle technologie
                        >
                          {tech.name}
                        </h4>
                        <p className="text-sm text-gray-600 text-center leading-relaxed"> {/* text-sm = malý text, text-gray-600 = středně šedá, text-center = centrovaný, leading-relaxed = větší řádkování */}
                          {tech.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default TechnologyPage;
