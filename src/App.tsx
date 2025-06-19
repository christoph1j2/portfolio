//import React from 'react';
import HeroSection from './components/HeroSection';


const App = () => {
  return (
    <HeroSection> 
      <div className="text-center text-white">
        <h1 className="heading-flex mb-4">
          <span className="angle-bracket">&lt;</span>
          <span className="slash-ecl">
            <span className="slash">/</span><span className="ecl">ECL</span>
          </span>
          <span className="angle-bracket">&gt;</span>
        </h1>
        
      </div>
    </HeroSection>
  );
};

export default App;