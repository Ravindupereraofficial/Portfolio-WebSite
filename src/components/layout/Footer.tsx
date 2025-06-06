import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

const Footer: React.FC = () => {
  const { setIsHovering } = useCursor();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github size={20} />, 
      url: 'https://github.com/ravindu-perera' 
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={20} />, 
      url: 'https://linkedin.com/in/ravindu-perera' 
    },
    { 
      name: 'Email', 
      icon: <Mail size={20} />, 
      url: 'mailto:contact@ravindu.dev' 
    }
  ];

  return (
    <footer className="bg-light-200 dark:bg-dark-700 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <p className="text-dark-700 dark:text-light-300 text-center md:text-left">
              &copy; {new Date().getFullYear()} Ravindu Perera. All rights reserved.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-light-300 dark:bg-dark-600 hover:bg-primary-500 dark:hover:bg-primary-500 text-dark-800 hover:text-white dark:text-light-200 transition-colors duration-300"
                aria-label={link.name}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-primary-500 text-white shadow-lg hover:bg-primary-600 transition-colors duration-300"
        aria-label="Scroll to top"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;