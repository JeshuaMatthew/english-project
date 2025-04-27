import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; // Import AnimatePresence

import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground'; // Import the background

// Import Pages
import AboutMe from './pages/AboutMe';
import HowToOperate from './pages/HowToOperate';
import ExpositionText from './pages/ExpositionText';
import FormalEmail from './pages/FormalEmail';
import SystemDocumentation from './pages/SystemDocumentation';
import InformativeArticle from './pages/InformativeArticle';
import HomePage from './pages/HomePage';

// A component to handle animated routes
const AnimatedRoutes: React.FC = () => {
  const location = useLocation(); // Get current location

  return (
    // AnimatePresence detects when direct children change and animates them
    // mode='wait' ensures the exiting component finishes animating before the new one enters
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}> {/* Pass location and unique key */}
        <Route path='/' element={<HomePage/>} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/how-to-operate" element={<HowToOperate />} />
        <Route path="/formal-email" element={<FormalEmail />} />
        <Route path="/exposition-text" element={<ExpositionText />} />
        <Route path="/system-docs" element={<SystemDocumentation />} />
        <Route path="/informative-article" element={<InformativeArticle />} />
        {/* Add a 404 or default route if needed */}
      </Routes>
    </AnimatePresence>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      {/* Wrap everything in a relative container to position the background */}
      <div className="relative min-h-screen text-text-primary bg-background"> {/* Ensure parent has position: relative and covers screen */}
        <AnimatedBackground /> {/* Add the background component here */}

        {/* Ensure content is layered above the background */}
        <div className="relative z-10 flex flex-col min-h-screen"> {/* z-10 ensures content is above background (-z-10) */}
          <Navbar />
          {/* Make main flexible to push footer down */}
          <main className="flex-grow container mx-auto px-4 py-8"> {/* Added container/padding for content layout */}
              <AnimatedRoutes /> {/* Use the animated routes component */}
          </main>
          {/* Optional Footer */}
          <footer className="text-center text-text-secondary py-4 mt-auto border-t border-gray-700"> {/* Use mt-auto with flex-grow on main */}
            © {new Date().getFullYear()} Jeshua Matthew.H
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;