import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Writing from './pages/Writing';
import Resume from './pages/Resume';
import './App.css';
import './components/Typography.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check if mobile
    setIsMobile(/Android|iPhone/i.test(navigator.userAgent));
    
    // Check for reduced motion preference
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    
    // Google Analytics (only in production)
    if (process.env.NODE_ENV === 'production') {
      // Add Google Analytics script
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-DTJQ3J1NVE';
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DTJQ3J1NVE');
      `;
      document.head.appendChild(script2);
    }
  }, []);

  const pageVariants = {
    initial: { x: -10, opacity: 0 },
    in: { x: 0, opacity: 1 },
    out: { y: 5, opacity: 0 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.35
  };

  const MainContent = ({ children }) => {
    if (isMobile || reducedMotion) {
      return <main>{children}</main>;
    }

    return (
      <AnimatePresence mode="wait">
        <motion.main
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    );
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </MainContent>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
