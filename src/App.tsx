import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';
import './App.css';
import WaveTransition from './components/Transitions/WaveTransition';
import ProjectsSection from './components/Projects/ProjectsSection';
import ModernTransition from './components/Transitions/ModernTransition';
import TechSection from './components/Technology/TechSection';
import OfferSection from './components/Offers/OfferSection';

const App = () => {
  return (
    <div className="app-container">
      <HeroSection/>

      <WaveTransition 
        color="#0d47a1" 
        backgroundColor="#f3f4f6"
        height="h-12 md:h-20"
        className="-mt-1" 
      />

      <ProjectsSection/>
      <ModernTransition 
        fromColor="#f3f4f6"
        toColor="#ffde59"
        height="h-32 md:h-40"
        className="transition-section"
      />
      <AboutSection/>
      <TechSection/>
      <WaveTransition 
        color="#0d47a1" 
        backgroundColor="#f3f4f6"
        height="h-12 md:h-20"
        className="-mt-1" 
      />
      <OfferSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default App;