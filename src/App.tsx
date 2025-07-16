import HeroSection from './components/Hero/HeroSection';
//import AboutSection from './components/About/AboutSection';
import './App.css';
import WaveTransition from './components/WaveTransition';
import ProjectsSection from './components/Projects/ProjectsSection';

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

      {/* <AboutSection/> */}
      <ProjectsSection/>
    </div>
  );
};

export default App;