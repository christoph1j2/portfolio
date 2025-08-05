import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import TechnologyPage from './pages/TechnologyPage';
import ServicePage from './pages/ServicePage';
import WebPage from './pages/WebPage';
import { LaceHubPreview } from './pages/portfolio';

const App = () => {
  return (
    
    <BrowserRouter>
    <div className="app-container">
      <Routes>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="portfolio/lacehub" element={<LaceHubPreview />} />
          <Route path="technologie" element={<TechnologyPage />} />
          <Route path="web" element={<WebPage />} />
          <Route path="servis" element={<ServicePage />} />
          <Route path="*" element={<Home />} />
      </Routes>
    </div>
    </BrowserRouter>
    
  );
};

export default App;