import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import { motion } from "motion/react"; // Import framer motion pro animace

const portfolioItems = [
  {
    id: 1,
    title: "LaceHub",
    description:
      "Full-stack platforma pro přeprodejce tenisek pomocí Reactu a Nest.js. Moderní e-commerce řešení s pokročilými funkcemi pro správu inventáře, objednávek a uživatelských účtů.",
    image: "/src/assets/placeholder.png",
    liveUrl: "https://www.ecl-it.cz/portfolio/lacehub",
    tech: ["React", "Nest.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Koučink Zdenka Lindenbergová",
    description:
      "Webová prezentace pro koučku s moderním designem a optimalizací pro SEO. Responzivní design s důrazem na uživatelskou přívětivost a profesionální vzhled.",
    image: "/src/assets/placeholder.png",
    liveUrl: "https://www.ecl-it.cz/portfolio/koucing-zdenka-lindenbergova",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 3,
    title: "ECL-IT",
    description:
      "Webová prezentace pro ECL-IT s moderním designem a animacemi. Využívá nejnovější technologie pro vytvoření působivého online zážitku.",
    image: "/src/assets/placeholder.png",
    liveUrl: "https://www.ecl-it.cz",
    tech: ["React", "Tailwind", "Framer Motion"],
  },

  {
    id: 4,
    title: "E-commerce Platform",
    description:
      "Komplexní e-commerce řešení s pokročilými funkcemi pro online prodej. Zahrnuje správu produktů, platební systém a analytické nástroje.",
    image: "/src/assets/placeholder.png",
    liveUrl: "#",
    tech: ["Next.js", "TypeScript", "Stripe"],
  },
  {
    id: 5,
    title: "Portfolio Fotografa",
    description:
      "Elegantní portfolio pro profesionálního fotografa s galerií a kontaktním formulářem. Důraz na vizuální prezentaci a rychlé načítání obrázků.",
    image: "/src/assets/placeholder.png",
    liveUrl: "#",
    tech: ["Vue.js", "SCSS", "Lightbox"],
  },
  {
    id: 6,
    title: "Restaurant Management",
    description:
      "Systém pro správu restaurace včetně rezervací, menu a objednávek. Intuitivní rozhraní pro personál a zákazníky s real-time aktualizacemi.",
    image: "/src/assets/placeholder.png",
    liveUrl: "#",
    tech: ["React Native", "Firebase", "Node.js"],
  },
];

const PortfolioPage = () => {
  return (
    <>
      <Navigation />

      {/* Hlavní kontejner s paddingem nahoře kvůli fixed navigaci */}
      <div className="pt-24 min-h-screen bg-gray-50">
        {/*
          pt-24 = padding-top pro offset od navigace,
          min-h-screen = minimální výška celé obrazovky,
          bg-gray-50 = světle šedé pozadí
        */}
        {/* Kontejner pro nadpis */}
        <div className="container mx-auto px-4 py-8">
          {/* 
            container mx-auto = centrovaný kontejner, 
            px-4 = horizontální padding, 
            py-8 = vertikální padding 
          */}
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

          {/* Grid kontejner pro projekty */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            {/* grid = CSS grid, grid-cols-1 = 1 sloupec na mobilu, md:grid-cols-2 = 2 sloupce na tabletu, lg:grid-cols-3 = 3 sloupce na desktopu, gap-8 = mezery mezi prvky */}
            {portfolioItems.map(
              (
                item,
                index // Mapování přes všechny portfolio položky
              ) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group" // bg-white = bílé pozadí, rounded-xl = zaoblené rohy, shadow-lg = stín, hover:shadow-xl = větší stín při hoveru, transition-all = plynulé přechody, duration-300 = doba přechodu, overflow-hidden = skrytí přetékajícího obsahu, group = pro group hover efekty
                  initial={{ opacity: 0, y: 20 }} // Počáteční stav pro animaci při načtení
                  animate={{ opacity: 1, y: 0 }} // Konečný stav animace
                  transition={{ duration: 0.5, delay: index * 0.1 }} // Postupné animace s delay
                >
                  {/* Kontejner pro obrázek */}
                  <div className="relative h-48 overflow-hidden">
                    {" "}
                    {/* relative = relativní pozicování, h-48 = výška 12rem, overflow-hidden = skrytí přetékání */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" // w-full h-full = plná šířka a výška, object-cover = pokrytí celé oblasti, group-hover:scale-105 = mírné zvětšení při hoveru, transition-transform = plynulá transformace
                    />
                    {/* Overlay gradient při hoveru */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>{" "}
                    {/* absolute inset-0 = absolutní pozicování přes celý element, bg-gradient-to-t = gradient zdola nahoru, from-black/20 = poloprůhledná černá, to-transparent = do průhledné, opacity-0/100 = ovládání průhlednosti */}
                  </div>

                  {/* Obsah karty */}
                  <div className="p-6">
                    {" "}
                    {/* p-6 = padding ze všech stran */}
                    {/* Nadpis projektu */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                      {" "}
                      {/* text-xl = velikost textu, font-bold = tučné, text-gray-800 = tmavě šedá, mb-3 = spodní margin, group-hover:text-cyan-600 = změna barvy při hoveru, transition-colors = plynulá změna barev */}
                      {item.title}
                    </h3>
                    {/* Popis projektu */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {" "}
                      {/* text-gray-600 = středně šedá, text-sm = menší text, leading-relaxed = větší řádkování, mb-4 = spodní margin */}
                      {item.description}
                    </p>
                    {/* Technologie */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {" "}
                      {/* flex flex-wrap = flexbox s možností zalomení, gap-2 = mezery mezi prvky, mb-4 = spodní margin */}
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 rounded-full text-xs font-medium" // px-3 py-1 = horizontální a vertikální padding, bg-gradient-to-r = gradient zleva doprava, from-cyan-100 to-blue-100 = světlé barvy gradientu, text-cyan-800 = tmavě azurová, rounded-full = plně zaoblené, text-xs = velmi malý text, font-medium = středně tučné
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Odkaz na projekt */}
                    <a
                      href={item.liveUrl}
                      className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium transition-colors duration-300 group/link" // inline-flex items-center = řádkový flex s centrovanými prvky, text-cyan-600 = azurová barva, hover:text-cyan-800 = tmavší při hoveru, font-medium = středně tučné, transition-colors = plynulá změna barev, group/link = pojmenovaná skupina pro vnořené efekty
                      target="_blank" // Otevření v novém okně
                      rel="noopener noreferrer" // Bezpečnostní atributy
                    >
                      Zobrazit projekt
                      <svg
                        className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {" "}
                        {/* w-4 h-4 = velikost ikony, ml-2 = levý margin, group-hover/link:translate-x-1 = posun doprava při hoveru nad linkem, transition-transform = plynulá transformace */}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PortfolioPage;
