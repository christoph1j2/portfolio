import HeroSection from '../components/Hero/HeroSection';
import AboutSection from '../components/About/AboutSection';
import ContactSection from '../components/Contact/ContactSection';
import Footer from '../components/Footer/Footer';
import WaveTransition from '../components/Transitions/WaveTransition';
import ProjectsSection from '../components/Projects/ProjectsSection';
import ModernTransition from '../components/Transitions/ModernTransition';
import TechSection from '../components/Technology/TechSection';
import OfferSection from '../components/Offers/OfferSection';
import Navigation from '../components/Navigation/Navigation';
import SEO from '../components/SEO/SEO';

const Home = () => {
  return (
    <div className="app-container">
      <SEO 
        title="ECL IT – Weby na míru, tvorba webů & PC servis | Mariánské Lázně, Teplá"
        description="ECL IT - Tvorba moderních webů, IT podpora, opravy počítačů. V Plzni, Teplé, Mariánských Lázních a Západních Čechách."
        canonicalUrl="https://www.ecl-it.cz/"
        ogType="website"
      />
      <Navigation/>
      <HeroSection/>

      <WaveTransition 
        color="#0d47a1" 
        backgroundColor="#f3f4f6"
        height="h-12 md:h-20"
        className="-mt-1" 
      />

      <div id='projects'>
        <ProjectsSection/>
      </div>
      <ModernTransition 
        fromColor="#f3f4f6"
        toColor="#ffde59"
        height="h-32 md:h-40"
        className="transition-section"
      />
      <div id="about">
        <AboutSection/>
      </div>
      <div id="tech">
        <TechSection/>
      </div>
      <WaveTransition 
        color="#0d47a1" 
        backgroundColor="#f3f4f6"
        height="h-12 md:h-20"
        className="-mt-1" 
      />
      <div id="offers">
        <OfferSection/>
      </div>
      <div id="contact">
        <ContactSection/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;