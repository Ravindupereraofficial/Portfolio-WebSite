import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ArrowDown, FileDown, Eye } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';



const Hero: React.FC = () => {
  const { setIsHovering } = useCursor();

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Background gradient/particles effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 dark:from-primary-500/10 dark:to-secondary-500/10"></div>
      <div className="absolute inset-0 overflow-hidden opacity-50">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary-300/20 to-secondary-300/20 dark:from-primary-500/20 dark:to-secondary-500/20 animate-float"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary-600 dark:text-primary-400 font-medium mb-2"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient"
            >
              Ravindu Perera
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-4 font-medium text-dark-600 dark:text-light-300 h-8"
            >
              <Typewriter
                options={{
                  strings: [
                    "Full-Stack Developer", 
                    "Java Enthusiast", 
                    "Innovator"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-dark-600 dark:text-light-400 text-lg max-w-xl mb-8"
            >
              Creating impactful digital solutions through code. Passionate about building exceptional applications with modern technologies and best practices.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="https://drive.google.com/file/d/1rN0tvUV7clcj0X7aTd_GMunonxdFfNv1/view?usp=sharing" 
                className="btn-primary flex items-center gap-2"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <FileDown size={18} />
                Download CV
              </a>
              <a 
                href="#projects" 
                className="btn-secondary flex items-center gap-2"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Eye size={18} />
                See Projects
              </a>
            </motion.div>
          </motion.div>
          
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl"></div>
              <div className="card-neumorphic p-3 rounded-full">
                <div className="overflow-hidden rounded-full w-64 h-64 sm:w-80 sm:h-80 ring-4 ring-primary-500/20">
                  <img 
                    src="/public/main.jpg" 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-dark-500 dark:text-light-400 mb-2">Scroll down</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="text-primary-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;