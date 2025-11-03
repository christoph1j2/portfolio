import { motion } from 'motion/react';
import { MdSpeed, MdBuild, MdBackup, MdWifi } from 'react-icons/md';
import { FaWindows, FaTools } from 'react-icons/fa';
import Footer from "../components/Footer/Footer";
import Navigation from '../components/Navigation/Navigation';
import SEO from '../components/SEO/SEO';
import { ReactTyped } from 'react-typed';
import { useContactForm } from '../contexts/ContactFormContext';

const ServicePage = () => {
  const { openContactForm } = useContactForm();
  return (
    <>
    <SEO 
      title="IT Servis - ECL IT | Opravy počítačů a notebooků Mariánské Lázně"
      description="Profesionální IT servis v Mariánských Lázních a okolí. Opravy počítačů, notebooků, instalace systémů, zálohování dat a rychlá pomoc s IT problémy."
      canonicalUrl="https://www.ecl-it.cz/servis"
      keywords="IT servis, opravy počítačů, servis notebooků, Mariánské Lázně, instalace Windows, zálohování dat, rychlý servis, lokální IT podpora"
    />
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
              color: '#1f2937'
            }}
            className='antonRegular min-h-[210px] md:min-h-[110px]  items-center justify-center flex-wrap leading-8'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className='antonRegular text-cyan-400'>/</span> PC SERVIS, KDE <ReactTyped strings={[
              'DOSTANETE POČÍTAČ DO FORMY',
              'VÁM POSTAVÍM NOVÝ STROJ NA MÍRU',
              'NENECHÁTE CELOU VÝPLATU',
              'NEČEKÁTE TÝDNY NA OPRAVU',
              '',
              ]}
              typeSpeed={120}
              backSpeed={120}
              loop
              backDelay={1000}
              style={{ fontFamily: 'Anton, sans-serif' }}
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
            Opravy, údržba a stavba počítačů v Teplé, Mariánských Lázních a okolí. Jsem student s praxí, dávám důraz na rychlost, srozumitelnost a cenu, která dává smysl. Vhodné pro jednotlivce, seniory i malé firmy.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
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
            Naše služby
          </motion.h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {[
              {
                icon: <MdBuild className="text-3xl" />,
                title: "Stavba nebo upgrade PC",
                description: "Poradím s výběrem komponent a postavím počítač přesně podle vašich potřeb - herní, pracovní nebo školní."
              },
              {
                icon: <FaTools className="text-3xl" />,
                title: "Výměna komponent",
                description: "Výměna disku, RAM, grafické karty nebo jiných komponent. Rychle a bezpečně, bez zbytečného rizika."
              },
              {
                icon: <MdSpeed className="text-3xl" />,
                title: "Vyčištění a zrychlení",
                description: "Vyčištění od prachu, výměna teplovodivé pasty, odstranění nepotřebného softwaru, optimalizace systému."
              },
              {
                icon: <FaWindows className="text-3xl" />,
                title: "Instalace systému",
                description: "Reinstalace Windows nebo čistá instalace, včetně ovladačů a základních programů. Možnost zálohování dat."
              },
              {
                icon: <MdBackup className="text-3xl" />,
                title: "Záloha a přenos dat",
                description: "Záloha důležitých souborů a přenesení na nový disk nebo jiný počítač."
              },
              {
                icon: <MdWifi className="text-3xl" />,
                title: "Pomoc s připojením a sítí",
                description: "Nastavení Wi-Fi & LAN, sdílení souborů nebo síťových zařízení v domácnosti."
              }
            ].map((service, index) => (
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
                className="hover:scale-105 hover:bg-[#76b6eb27]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div style={{ color: '#0d47a1', marginBottom: '1rem' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
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
        
        <div style={{ maxWidth: '80rem', margin: '0 auto' }} className='md:f'>
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
            Přehled cen
          </motion.h2>
          
          <motion.p 
            style={{ 
              textAlign: 'center',
              fontSize: '1.125rem', 
              color: '#6b7280', 
              marginBottom: '3rem',
              maxWidth: '600px',
              margin: '0 auto 3rem auto'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transparentní ceník našich služeb
          </motion.p>

          <motion.div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '3rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              maxWidth: '800px',
              margin: '0 auto'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div style={{ 
              display: 'grid', 
              gap: '1.5rem'
            }}>
              {[
                { service: "Diagnostika a oprava PC", price: "dle závažnosti"},
                { service: "Instalace systému Windows", price: "od 400 Kč" },
                { service: "Vyčištění počítače (HW + SW)", price: "od 500 Kč" },
                { service: "Sestavení PC / upgrade", price: "dle dohody" },
                { service: "Výměna komponent", price: "od 200 Kč / kus" },
                { service: "Záloha a přenos dat", price: "od 500 Kč" },
                { service: "Pomoc se sítí", price: "od 500 Kč" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  style={{
                    padding: '1.5rem',
                    backgroundColor: '#f8fafc',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0'
                  }}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <span className="font-semibold text-[#1f2937] text-base mb-2 sm:mb-0">
                    {item.service}
                  </span>
                  <span className="text-xs sm:text-base font-bold text-[#0d47a1] sm:ml-4">
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <motion.p 
              style={{ 
                marginTop: '2rem', 
                fontSize: '0.95rem', 
                color: '#6b7280',
                textAlign: 'center',
                fontStyle: 'italic'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Uvedené ceny jsou orientační. Finální cena závisí na konkrétní situaci a domluvě.<br></br>
              Pokud jste nenašli požadovanou službu, specifikujte požadavek přes formulář níže. :-)
            </motion.p>

            {/* Informace o mobilním servisu – dojezd k zákazníkovi dle domluvy */}
            <motion.div
              style={{
                marginTop: '0.75rem',
                textAlign: 'center',
                color: '#374151',
                background: '#eff6ff',
                border: '1px solid #bfdbfe',
                borderRadius: '10px',
                padding: '0.9rem 1.2rem'
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.15 }}
            >
              Jsem mobilní – po domluvě přijedu osobně k vám a pokusíme se vyřešit problém přímo na místě.
            </motion.div>
            
            <motion.div
              style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <button
                onClick={() => openContactForm('contact')}
                style={{
                  background: 'linear-gradient(to right, #0d47a1, #1565c0)',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '1rem 2.5rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                }}
                className='hover:scale-105'
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.transform = 'scale(1.05)';
                  (e.target as HTMLButtonElement).style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.transform = 'scale(1)';
                  (e.target as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                }}
              >
                Potřebuji pomoc s počítačem
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServicePage;
