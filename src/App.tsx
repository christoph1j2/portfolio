//import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';

const App = () => {
  return (
    <div className="app">
      <ParticlesBackground />
      <div className="content" style={{ position: 'relative', zIndex: 10 }}>
        <h1>Ernst Christoph Leschka</h1>
        {/* Your app content goes here */}
      </div>
    </div>
  );
};

export default App;