import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CursorProvider } from './context/CursorContext';
import { smoothScrollTo } from './utils/scrollUtils';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CustomCursor from './components/layout/CustomCursor';
import ScrollProgressIndicator from './components/layout/ScrollProgressIndicator';
import BackToTopButton from './components/layout/BackToTopButton';
import Preloader from './components/layout/Preloader';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Prevent scrolling while loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  useEffect(() => {
    // Only run these effects after loading is complete
    if (!isLoading) {
      // Add js class to document element for progressive enhancement
      document.documentElement.classList.add('js');
    
    // Ensure content is visible by default, then add animation classes
    const sections = document.querySelectorAll('section');
    const hiddenElements = document.querySelectorAll('.scroll-hidden');
    
    // Add section-fade class only to sections that aren't the hero
    sections.forEach((section, index) => {
      if (index > 0) { // Skip the first section (Hero)
        section.classList.add('section-fade');
      }
    });
    
    // Enhanced scroll reveal animation with staggered timing
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add staggered delay for child elements
          const childElements = entry.target.querySelectorAll('.animate-on-scroll');
          childElements.forEach((child, childIndex) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, childIndex * 100); // 100ms delay between each child
          });
          
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe sections and hidden elements
    sections.forEach((section) => {
      observer.observe(section);
    });
    
    hiddenElements.forEach(el => observer.observe(el));

    // Add smooth scroll behavior to all anchor links with enhanced easing
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const elementId = target.getAttribute('href')?.substring(1);
        if (elementId) {
          smoothScrollTo(elementId, 80, 800);
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      sections.forEach(section => observer.unobserve(section));
      hiddenElements.forEach(el => observer.unobserve(el));
      document.removeEventListener('click', handleSmoothScroll);
    };
    }
  }, [isLoading]);

  return (
    <CursorProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" onComplete={handleLoadingComplete} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen smooth-scroll"
          >
            <ScrollProgressIndicator />
            <CustomCursor />
            <Header />
            
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Certifications />
              <Contact />
            </main>
            
            <Footer />
            <BackToTopButton />
          </motion.div>
        )}
      </AnimatePresence>
    </CursorProvider>
  );
}

export default App;