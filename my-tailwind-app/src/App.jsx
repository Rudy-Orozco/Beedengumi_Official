import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'; // Import the new AboutPage

// Create and export the context and hook
const AnimationContext = createContext();
export const useAnimationState = () => useContext(AnimationContext);

// The provider remains here to wrap the application
const AnimationProvider = ({ children }) => {
  const [hasPlayedHomeAnimation, setHasPlayedHomeAnimation] = useState(false);
  const handleAnimationComplete = () => setHasPlayedHomeAnimation(true);

  return (
    <AnimationContext.Provider value={{ hasPlayedHomeAnimation, handleAnimationComplete }}>
      {children}
    </AnimationContext.Provider>
  );
};

// This component contains the main logic, so it can use router hooks.
const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Total time for loading screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        // Pass location and key here to make page transitions work
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
      )}
    </AnimatePresence>
  );
};


// Main App Component: Sets up the Router and the top-level animation logic.
function App() {
  return (
    <AnimationProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </AnimationProvider>
  );
}

export default App;