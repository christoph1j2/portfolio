import { motion } from 'motion/react';
import { MdSpeed, MdBuild, MdBackup, MdWifi } from 'react-icons/md';
import { FaWindows, FaTools } from 'react-icons/fa';
import { FaHandshake, FaUserShield, FaRegClock, FaBolt, FaHeart } from 'react-icons/fa';
import Footer from "../components/Footer/Footer";
import Navigation from '../components/Navigation/Navigation';
import { ReactTyped } from 'react-typed';
import { useContactForm } from '../contexts/ContactFormContext';
import { useState } from 'react';

const ServicePage = () => {
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
              color: '#1f2937'
            }}
            className='antonRegular min-h-[210px] md:min-h-0  items-center justify-center flex-wrap leading-8'
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
            Opravy, údržba a stavba počítačů v Teplé a okolí. Jsem student s praxí, dávám důraz na rychlost, srozumitelnost a cenu, která dává smysl. Vhodné pro jednotlivce, seniory i malé firmy.
          </motion.p>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section style={{ padding: '4rem 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <motion.h2
            className="antonRegular"
            style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2.5rem', color: '#1f2937' }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Proč zvolit právě mě?
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.75rem' }}>
            {[{
              icon: <MdSpeed className="text-3xl" />,
              title: 'Rychlé řešení',
              text: 'Většinu běžných úkonů zvládnu do 24–48 hodin, ne týdny.'
            }, {
              icon: <FaHandshake className="text-3xl" />,
              title: 'Osobní přístup',
              text: 'Žádná anonymní fronta – řešíte věci přímo se mnou.'
            }, {
              icon: <FaUserShield className="text-3xl" />,
              title: 'Upřímné doporučení',
              text: 'Když se oprava nevyplatí, řeknu to. Žádné tahání peněz.'
            }, {
              icon: <FaRegClock className="text-3xl" />,
              title: 'Flexibilita',
              text: 'Možnost domluvit večerní / víkendové převzetí nebo opravu u vás.'
            }, {
              icon: <FaBolt className="text-3xl" />,
              title: 'Expresní servis',
              text: 'Dostupná priorita do 24 h za příplatek.'
            }, {
              icon: <FaHeart className="text-3xl" />,
              title: 'Lidská komunikace',
              text: 'Bez zbytečných zkratek a „IT řeči“. Vše vysvětlím srozumitelně.'
            }].map((feat, i) => (
              <motion.div key={i}
                style={{ background: '#f8fafc', padding: '1.75rem', borderRadius: '14px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '.75rem' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="hover:shadow-lg hover:bg-[#ecf6ff] transition"
              >
                <div style={{ color: '#0d47a1' }}>{feat.icon}</div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1f2937' }}>{feat.title}</h3>
                <p style={{ color: '#566170', lineHeight: 1.5 }}>{feat.text}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.75rem' }}>
            <button
              onClick={() => openContactForm('contact')}
              style={{
                background: 'linear-gradient(to right,#0d47a1,#1565c0)',
                color: '#fff', fontWeight: 600, padding: '0.95rem 2.2rem', borderRadius: '9px', border: 'none', cursor: 'pointer', fontSize: '1rem'
              }}
              className='hover:scale-105 transition'
            >Chci nezávazně poradit</button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: '4rem 2rem', background: '#f3f4f6' }}>
        <div style={{ maxWidth: '70rem', margin: '0 auto' }}>
          <motion.h2
            style={{ fontSize: '2.1rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2.2rem', color: '#1f2937' }}
            initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55 }}
          >Jak to probíhá</motion.h2>
          <div style={{ display: 'grid', gap: '1.75rem', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))' }}>
            {[{
              step: '1', title: 'Kontakt', text: 'Zavoláte nebo napíšete (formulář / e‑mail / IG). Stručně popíšete problém.'
            }, { step: '2', title: 'Domluva', text: 'Upřesníme symptomy, řeknu orientační cenu a navržený postup.' }, {
              step: '3', title: 'Předání / návštěva', text: 'Přivezete zařízení nebo přijedu já – dle typu problému.'
            }, { step: '4', title: 'Diagnostika', text: 'U běžných věcí do 24 h. Pokud hrozí vyšší náklad, ozvu se předem.' }, {
              step: '5', title: 'Oprava', text: 'Provedu servis, optimalizaci nebo stavbu / upgrade.' }, { step: '6', title: 'Předání & platba', text: 'Vysvětlím co bylo uděláno, doporučení do budoucna. Platba převodem / hotově.' }]
              .map((s, i) => (
                <motion.div key={i}
                  style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.5rem 1.35rem', position: 'relative' }}
                  initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: i * 0.07 }}
                  className='hover:shadow-md transition'
                >
                  <div style={{ position: 'absolute', top: '-14px', left: '16px', background: '#0d47a1', color: '#fff', fontWeight: 700, fontSize: '.85rem', padding: '.4rem .7rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(13,71,161,0.35)' }}>KROK {s.step}</div>
                  <h3 style={{ marginTop: '.75rem', fontSize: '1.05rem', fontWeight: 700, color: '#1f2937', marginBottom: '.55rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '.9rem', color: '#5d6875', lineHeight: 1.5 }}>{s.text}</p>
                </motion.div>
              ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button onClick={() => openContactForm('contact')} style={{ background: '#0d47a1', color: '#fff', padding: '.9rem 2.2rem', fontWeight: 600, border: 'none', borderRadius: 10, cursor: 'pointer' }} className='hover:scale-105 transition'>Chci začít</button>
          </div>
        </div>
      </section>

      {/* Express Service Highlight */}
      <section style={{ padding: '3.5rem 1.75rem', background: 'linear-gradient(135deg,#0d47a1,#1565c0)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65 }} style={{ maxWidth: '70rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '.5px' }}>EXPRES SERVIS DO 24 HODIN</h2>
          <p style={{ fontSize: '1.05rem', maxWidth: '760px', margin: '0 auto 1.75rem auto', lineHeight: 1.6 }}>Potřebujete počítač opravdu rychle? Pokud je kapacita, za prioritní příplatek (+40% oproti běžné sazbě) upřednostním váš případ a dostanete výsledek co nejdřív.</p>
          <button onClick={() => openContactForm('contact')} style={{ background: '#2fffd6', color: '#07315f', fontWeight: 700, padding: '.95rem 2.4rem', borderRadius: '9px', border: 'none', cursor: 'pointer', boxShadow: '0 6px 18px rgba(0,0,0,.25)' }} className='hover:scale-105 transition'>Chci expres</button>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '4rem 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <motion.h2 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '2.2rem', color: '#1f2937' }} initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55 }}>Co říkají klienti</motion.h2>
          <div style={{ display: 'grid', gap: '1.75rem', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>
            {[{
              quote: 'Rychlá komunikace, opraveno do druhého dne a ještě vysvětleno, co se stalo. Super přístup.', name: 'Petra K.', role: 'Domácí uživatelka'
            }, { quote: 'Postavil mi PC na střih videa a vysvětlil rozdíly mezi komponenty. Funguje skvěle.', name: 'Tomáš L.', role: 'Mladý tvůrce' }, {
              quote: 'Záchrana dat z disku, který jiní odepsali. Doporučuju všem známým.', name: 'Milan S.', role: 'Malá firma'
            }, { quote: 'Oprava a vyčištění starého notebooku – běží zase plynule a tiše.', name: 'Alena R.', role: 'Důchodkyně' }].map((t, i) => (
              <motion.div key={i} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '1.75rem 1.5rem', borderRadius: '14px', display: 'flex', flexDirection: 'column', gap: '.9rem', position: 'relative' }} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: i * 0.07 }}>
                <div style={{ fontSize: '2.5rem', lineHeight: 1, position: 'absolute', top: '-10px', left: '10px', color: '#0d47a133' }}>“</div>
                <p style={{ fontSize: '.95rem', color: '#374151', lineHeight: 1.55 }}>{t.quote}</p>
                <div style={{ marginTop: '.25rem' }}>
                  <strong style={{ color: '#0d47a1' }}>{t.name}</strong><br />
                  <span style={{ fontSize: '.75rem', letterSpacing: '.5px', textTransform: 'uppercase', color: '#6b7280', fontWeight: 600 }}>{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button onClick={() => openContactForm('contact')} style={{ background: 'linear-gradient(90deg,#0d47a1,#1e63b8)', color: '#fff', fontWeight: 600, padding: '0.9rem 2.3rem', border: 'none', borderRadius: '10px', cursor: 'pointer' }} className='hover:scale-105 transition'>Chci se také ozvat</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection onCTA={() => openContactForm('contact')} />

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
              Uvedené ceny jsou orientační. Finální cena závisí na konkrétní situaci a domluvě.
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
              Jsem mobilní – po domluvě přijedu osobně k vám a vyřeším problém přímo na místě.
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

// FAQ component (inline for now; can be extracted later)
interface FAQItem { q: string; a: string; }
const FAQSection: React.FC<{ onCTA: () => void }> = ({ onCTA }) => {
  const [open, setOpen] = useState<number | null>(0);
  const faqs: FAQItem[] = [
    { q: 'Co když se oprava nevyplatí?', a: 'Řeknu vám to na rovinu a doporučím alternativu (např. bazarové / nové komponenty). Nic nenutím.' },
    { q: 'Můžete zachránit data?', a: 'U většiny funkčních disků ano – provedu zálohu do bezpečného úložiště a data přenesu. U poškozených médií záleží na stavu.' },
    { q: 'Děláte opravy u mě doma?', a: 'Ano – základní úkony (výměna RAM, SSD, čištění, software) lze řešit přímo u vás. Složitější věci odvezu.' },
    { q: 'Jak probíhá platba?', a: 'Hotově nebo převodem po dokončení. U dražších komponent dohoda / případně záloha.' },
    { q: 'Expres servis opravdu do 24 hodin?', a: 'Pokud mám kapacitu – za prioritní příplatek dám váš případ dopředu. Potvrdím při domluvě.' },
  ];
  return (
    <section style={{ padding: '4rem 2rem', background: '#f3f4f6' }}>
      <div style={{ maxWidth: '70rem', margin: '0 auto' }}>
        <motion.h2 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '2.2rem', color: '#1f2937' }} initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55 }}>Často kladené otázky</motion.h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={i} layout initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .45, delay: i * 0.05 }} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
                <button onClick={() => setOpen(isOpen ? null : i)} style={{ width: '100%', textAlign: 'left', padding: '1.1rem 1.25rem', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 600, color: '#0d47a1', fontSize: '.95rem' }}>
                  <span>{f.q}</span>
                  <span style={{ transition: 'transform .3s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', fontSize: '1.1rem', color: '#1f2937' }}>⌄</span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  style={{ overflow: 'hidden' }}
                  transition={{ duration: .35 }}
                >
                  <div style={{ padding: isOpen ? '0 1.25rem 1.15rem 1.25rem' : '0 1.25rem', fontSize: '.9rem', color: '#4b5563', lineHeight: 1.55 }}>
                    {f.a}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.75rem' }}>
          <button onClick={onCTA} style={{ background: 'linear-gradient(90deg,#0d47a1,#1565c0)', color: '#fff', padding: '.9rem 2.4rem', borderRadius: '10px', border: 'none', cursor: 'pointer', fontWeight: 600 }} className='hover:scale-105 transition'>Chci se zeptat na něco dalšího</button>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
