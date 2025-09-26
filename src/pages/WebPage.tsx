import { motion } from 'motion/react';
import { MdLanguage, MdSpeed,  MdDevices, MdTrendingUp, MdSupportAgent,  MdPinDrop } from 'react-icons/md';
import { FaReact, FaNodeJs, FaRocket, FaPhp, FaBootstrap } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMysql, SiPostgresql, SiSpring, SiNestjs } from 'react-icons/si';
import Footer from "../components/Footer/Footer";
import Navigation from '../components/Navigation/Navigation';
import { ReactTyped } from 'react-typed';
import { useContactForm } from '../contexts/ContactFormContext';

const WebPage = () => {
  const { openContactForm } = useContactForm();
  return (
    <>
    <Navigation />
      {/* Hero Section */}
      <section style={{ 
        position: 'relative',
        padding: '4rem 2rem', 
        backgroundColor: '#f3f4f6',
        overflow: 'hidden',
        top: '3.5em',
      }}>
        {/* Decorative background elements */}
        <div className="absolute top-10 right-20 w-32 h-32 rounded-full opacity-20 animate-pulse z-[-1]" 
             style={{backgroundColor: '#a5ccff', animationDuration: '3s'}}></div>
        <div className="absolute bottom-32 left-16 w-40 h-24 opacity-15 animate-bounce z-[-1]" 
             style={{backgroundColor: '#a5ccff', borderRadius: '50% 20% 80% 30%', animationDelay: '1s', animationDuration: '4s'}}></div>
        
        <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center', zIndex: 10 }}>
          <motion.h1 
            style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem',
              color: '#1f2937',
            }}
            className='antonRegular min-h-[160px] md:min-h-[110px]  items-center justify-center flex-wrap  leading-8'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span style={{  }} className='antonRegular text-cyan-400'>/</span> TVORBA WEBU, CO <ReactTyped strings={[
              'TĚ PRODÁ',
              'ZVEDNE TVŮJ BYZNYS',
              'USNADNÍ ŽIVOT',
              'PŘITÁHNE ZÁKAZNÍKY',
              'ZVÝŠÍ TVOU VIDITELNOST',
              ]}
              typeSpeed={120}
              backSpeed={120}
              loop
              backDelay={1000}
              style={{
                fontFamily: 'Anton, sans-serif',
              }}
               />
          </motion.h1>
          
          <motion.p 
            style={{ 
              fontSize: '1.25rem', 
              color: '#6b7280', 
              maxWidth: '60rem', 
              margin: '0 auto 3rem auto',
              lineHeight: '1.8'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vytváření webovek je moje vášeň. A design je vášeň mé přítelkyně. Specializujeme se na moderní, responzivní a funkční weby, které nejen vypadají skvěle, ale také plní svůj účel. Ať už potřebujete jednoduchou prezentační stránku nebo komplexní webovou aplikaci, jsme tu, abychom pomohli.
          </motion.p>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section style={{ 
        padding: '4rem 2rem', 
        backgroundColor: '#ffffff'
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <motion.h2 
            style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              textAlign: 'center', 
              marginBottom: '3rem',
              color: '#1f2937'
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Proč si vybrat právě nás?
          </motion.h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {[
              {
                icon: <MdSpeed className="text-3xl" />,
                title: "Rychlý vývoj",
                description: "Díky moderním nástrojům dodáváme kvalitní řešení v krátkém časovém intervalu."
              },
              {
                icon: <MdDevices className="text-3xl" />,
                title: "Moderní & responzivní design",
                description: "Všechny stránky jsou pečlivě navrženy a jsou optimalizované pro mobily, tablety i počítače."
              },
              {
                icon: <MdTrendingUp className="text-3xl" />,
                title: "SEO optimalizace",
                description: "Vaše stránky budou nalezitelné ve vyhledávačích a rychle načítatelné."
              },
              {
                icon: <MdPinDrop className="text-3xl" />,
                title: "Západočeská kvalita",
                description: "Místní podpora a osobní přístup. Všechny projekty jsou konzultovány přímo s klientem."
              },
              {
                icon: <MdSupportAgent className="text-3xl" />,
                title: "Dlouhodobá podpora",
                description: "Poskytujeme ongoing support, aktualizace a technickou pomoc i po dokončení."
              },
              {
                icon: <FaRocket className="text-3xl" />,
                title: "Moderní technologie",
                description: "Používáme nejnovější frameworky a nástroje pro maximální výkonnost."
              },
              
            ].map((item, index) => (
              <motion.div
                key={index}
                style={{
                  padding: '2rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}

              >
                <div style={{ color: '#0d47a1', marginBottom: '1rem' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Technologies */}
          <motion.div
            style={{ textAlign: 'center', marginTop: '3rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
              Hlavní technologie, které tvoří naše projekty
            </h3>
            <p style={{ 
              color: '#6b7280', 
              marginBottom: '2rem', 
              fontSize: '1rem',
              maxWidth: '600px',
              margin: '0 auto 2rem auto'
            }}>
              Moderní technologie pro rychlé a spolehlivé webové řešení
            </p>
            <div 
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '1.5rem',
              maxWidth: '800px',
              margin: '0 auto 2rem auto'
            }}>
              {[
                { icon: <FaReact />, name: "React", color: "#61DAFB" },
                { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
                { icon: <FaPhp />, name: "PHP", color: "#777BB4" },
                { icon: <FaBootstrap />, name: "Bootstrap", color: "#563D7C" },
                { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4" },
                { icon: <SiSpring />, name: "Spring", color: "#6DB33F" },
                { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
                { icon: <SiNestjs />, name: "Nest.js", color: "#E0234E" },
                { icon: <SiMysql />, name: "MySQL", color: "#4479A1" },
                { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },

              ].map((tech, index) => (
                <motion.div
                  key={index}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    padding: '1.25rem',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    minWidth: '120px',
                    transition: 'all 0.3s ease'
                  }}
                  className={`hover:scale-105 bg-[#f8fafc] hover:bg-[#76b6eb27]`}
                >
                  <div style={{ 
                    fontSize: '2.5rem', 
                    color: tech.color, 
                    marginBottom: '0.75rem',
                    transition: 'transform 0.3s ease'
                  }}>
                    {tech.icon}
                  </div>
                  <span style={{ 
                    fontSize: '0.875rem', 
                    color: '#374151',
                    fontWeight: '600',
                    textAlign: 'center'
                  }}>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              style={{ textAlign: 'center', marginTop: '2rem' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p style={{ 
                color: '#6b7280', 
                fontSize: '0.95rem',
                marginBottom: '1rem'
              }}>
                A to je jen začátek! Používáme mnohem více technologií...
              </p>
              <a 
                href="/technologie" 
                style={{ 
                  color: '#0d47a1',
                  textDecoration: 'none',
                  fontWeight: '600',
                  padding: '0.75rem 1.5rem',
                  border: '2px solid #0d47a1',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.backgroundColor = '#0d47a1';
                  (e.target as HTMLAnchorElement).style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.backgroundColor = 'transparent';
                  (e.target as HTMLAnchorElement).style.color = '#0d47a1';
                }}
              >
                Zobrazit všechny technologie →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ 
        position: 'relative',
        padding: '4rem 2rem', 
        backgroundColor: '#f3f4f6',
        overflow: 'hidden'
      }}>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-36 opacity-18 animate-ping" 
             style={{backgroundColor: '#a5ccff', borderRadius: '30% 70% 40% 60%', animationDelay: '2s', animationDuration: '5s'}}></div>
        
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <motion.h2 
            style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              textAlign: 'center', 
              marginBottom: '1rem',
              color: '#1f2937'
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className='text-cyan-400'>/</span> CENÍK SLUŽEB
          </motion.h2>
          
          <motion.p 
            style={{ 
              textAlign: 'center', 
              color: '#6b7280', 
              marginBottom: '3rem',
              fontSize: '1.1rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ceny jsou orientační. Vždy záleží na rozsahu, složitosti a domluvě. <br />
            Nabízíme řešení, která dávají smysl.
          </motion.p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem',
            justifyContent: 'center'
          }}>
            {[
              {
                title: "Prezentační web",
                subtitle: "Ideální pro řemeslníky, živnostníky, malé podniky a firmy",
                price: "od 4 999,- Kč",
                priceWithDPH: "6 049,- Kč s DPH",
                gradient: "linear-gradient(to right, #0d47a1, #1565c0)",
                bgGradient: "linear-gradient(to bottom right, #e3f2fd, #bbdefb)",
                borderColor: "#90caf9",
                bulletColor: "#0d47a1",
                features: [
                  "Responzivní web na míru (bez využití šablony)",
                  "Kontaktní formulář",
                  "Propojení na Google Maps, sociální sítě",
                  "Základní SEO nastavení",
                  "Nasazení na doménu a hosting",
                ],
                popular: true,
              },
              {
                title: "Webová aplikace",
                subtitle: "Vhodné pro menší firmy se specifickými potřebami",
                price: "od 9 999,- Kč",
                priceWithDPH: "12 099,- Kč s DPH",
                gradient: "linear-gradient(to right, #1976d2, #42a5f5)",
                bgGradient: "linear-gradient(to bottom right, #dcedf9, #b3d9f2)",
                borderColor: "#81c7e8",
                bulletColor: "#1976d2",
                features: [
                  "Uživatelské účty, přihlašování",
                  "Práce s databází (MySQL / PostgreSQL / SQLite)",
                  "Admin rozhraní (např. správa obsahu)",
                  "API integrace (REST)",
                  "Pokročilejší logika, custom skripty"
                ],
                popular: false,
              },
              {
                title: "Individuální řešení",
                subtitle: "Pro firmy s konkrétní představou a vlastním zadáním",
                price: "od 14 999,- Kč",
                priceWithDPH: "18 149,- Kč s DPH",
                gradient: "linear-gradient(to right, #1565c0, #0d47a1)",
                bgGradient: "linear-gradient(to bottom right, #f3e5f5, #e1bee7)",
                borderColor: "#ba68c8",
                bulletColor: "#7b1fa2",
                features: [
                  "Společně navrhneme architekturu a klíčové funkce",
                  "Backend & frontend přesně podle potřeby",
                  "Pravidelné konzultace a upřímný feedback",
                  "Možnost dlouhodobé spolupráce a rozvoje",
                  "Flexibilní přístup k vývoji"
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                style={{
                  position: 'relative',
                  background: plan.bgGradient,
                  borderRadius: '12px',
                  border: `1px solid ${plan.borderColor}`,
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    zIndex: 10,
                  }}>
                    Nejpopulárnější
                  </div>
                )}
                
                <div 
                  style={{
                    background: plan.gradient,
                    color: 'white',
                    padding: '2rem',
                    textAlign: 'center'
                  }}
                >
                  <MdLanguage style={{ fontSize: '2.5rem', marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    {plan.title}
                  </h3>
                  <p style={{ opacity: 0.9, marginBottom: '1rem' }}>
                    {plan.subtitle}
                  </p>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    {plan.price}
                  </div>
                  {/* <div style={{ fontSize: '1rem', color: '#e0e0e0' }}>
                    {plan.priceWithDPH}
                  </div> */}
                </div>

                <div style={{ padding: '2rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '2rem' }}>
                    {plan.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0.75rem',
                          marginBottom: '0.5rem',
                          backgroundColor: 'rgba(59, 130, 246, 0.1)',
                          borderRadius: '8px',
                          fontSize: '0.95rem',
                          color: '#4b5563'
                        }}
                      >
                        <span 
                          style={{
                            width: '8px',
                            height: '8px',
                            backgroundColor: plan.bulletColor,
                            borderRadius: '50%',
                            marginRight: '0.75rem',
                            flexShrink: 0
                          }}
                        ></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button 
                    style={{
                      width: '100%',
                      background: plan.gradient,
                      color: 'white',
                      fontWeight: 'bold',
                      padding: '1rem 1.5rem',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLButtonElement).style.transform = 'scale(1.05)';
                      (e.target as HTMLButtonElement).style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLButtonElement).style.transform = 'scale(1)';
                      (e.target as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onClick={() => openContactForm('order')}
                  >
                    Nezávazná poptávka
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Doplňkové služby */}
          <motion.div 
            style={{ 
              textAlign: 'center', 
              marginTop: '3rem',
              padding: '2rem',
              backgroundColor: 'rgba(255,255,255,0.8)',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
              Doplňkové služby
            </h4>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div style={{ 
                backgroundColor: 'rgba(255,255,255,0.9)', 
                borderRadius: '12px', 
                padding: '1.5rem',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}>
                <table style={{ 
                  width: '100%', 
                  borderCollapse: 'collapse',
                  fontSize: '0.95rem'
                }}>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ 
                        padding: '1rem 0', 
                        textAlign: 'left', 
                        color: '#4b5563',
                        fontWeight: '500'
                      }}>
                        Správa hostingu + domény
                      </td>
                      <td style={{ 
                        padding: '1rem 0', 
                        textAlign: 'right',
                        fontWeight: 'bold', 
                        color: '#0d47a1' 
                      }}>
                        od 500 Kč / rok
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ 
                        padding: '1rem 0', 
                        textAlign: 'left', 
                        color: '#4b5563',
                        fontWeight: '500'
                      }}>
                        Úpravy na hotovém webu
                      </td>
                      <td style={{ 
                        padding: '1rem 0', 
                        textAlign: 'right',
                        fontWeight: 'bold', 
                        color: '#0d47a1' 
                      }}>
                        dle domluvy
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ 
                        padding: '1rem 0', 
                        textAlign: 'left', 
                        color: '#4b5563',
                        fontWeight: '500'
                      }}>
                        Redesign / modernizace webu
                      </td>
                      <td style={{ 
                        padding: '1rem 0', 
                        textAlign: 'right',
                        fontWeight: 'bold', 
                        color: '#0d47a1' 
                      }}>
                        od 2 999 Kč
                      </td>
                    </tr>
                    <tr>
                      <td style={{ 
                        padding: '1rem 0', 
                        textAlign: 'left', 
                        color: '#4b5563',
                        fontWeight: '500'
                      }}>
                        Školení / konzultace
                      </td>
                      <td style={{ 
                        padding: '1rem 0', 
                        textAlign: 'right',
                        fontWeight: 'bold', 
                        color: '#0d47a1' 
                      }}>
                        500 Kč
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
            </div>
          </motion.div>

          {/* Specifické požadavky */}
          <motion.div 
            style={{ 
              textAlign: 'center', 
              marginTop: '2rem',
              padding: '2rem',
              backgroundColor: 'rgba(255,255,255,0.9)',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
              Máte specifické požadavky?
            </h3>
            <p style={{ color: '#6b7280', marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
              Kontaktujte nás pro individuální konzultaci 
              a cenovou nabídku šitou na míru vašim potřebám.
            </p>
            <button 
              onClick={() => openContactForm('contact')}
              style={{
                background: 'linear-gradient(to right, #0d47a1, #1565c0)',
                top: '1rem',
                color: 'white',
                fontWeight: 'bold',
                padding: '1rem 2rem',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.1rem',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
              }}
              className='hover:scale-105 hover:shadow-lg'
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.transform = 'scale(1.05)';
                (e.target as HTMLButtonElement).style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.transform = 'scale(1)';
                (e.target as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
              }}
            >
                Diskutujme váš projekt
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WebPage;
