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
              {/* 3D Background blur effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl"></div>
              
              {/* 3D SVG Elements around photo */}
              
              {/* Floating Code Brackets - Top Left */}
              <motion.div
                className="absolute -top-8 -left-8 z-20"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
              >
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-primary-500 opacity-80">
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                  <path d="M20 15 L10 30 L20 45 M40 15 L50 30 L40 45" 
                        stroke="url(#gradient1)" 
                        strokeWidth="3" 
                        fill="none" 
                        strokeLinecap="round"/>
                </svg>
              </motion.div>

              {/* Floating React Atom - Top Right */}
              <motion.div
                className="absolute -top-6 -right-6 z-20"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { repeat: Infinity, duration: 8, ease: "linear" },
                  scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                }}
              >
                <svg width="50" height="50" viewBox="0 0 50 50" className="text-blue-500">
                  <defs>
                    <linearGradient id="reactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#61DAFB" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  <circle cx="25" cy="25" r="3" fill="url(#reactGradient)"/>
                  <ellipse cx="25" cy="25" rx="18" ry="7" stroke="url(#reactGradient)" strokeWidth="2" fill="none"/>
                  <ellipse cx="25" cy="25" rx="18" ry="7" stroke="url(#reactGradient)" strokeWidth="2" fill="none" transform="rotate(60 25 25)"/>
                  <ellipse cx="25" cy="25" rx="18" ry="7" stroke="url(#reactGradient)" strokeWidth="2" fill="none" transform="rotate(120 25 25)"/>
                </svg>
              </motion.div>

              {/* Floating Cube - Left Side */}
              <motion.div
                className="absolute top-1/2 -left-12 transform -translate-y-1/2 z-20"
                animate={{ 
                  rotateX: [0, 360],
                  rotateY: [0, 180],
                  y: [0, -15, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut"
                }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-green-500">
                  <defs>
                    <linearGradient id="cubeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                  <path d="M20 5 L35 15 L35 25 L20 35 L5 25 L5 15 Z" 
                        fill="url(#cubeGradient)" 
                        stroke="#047857" 
                        strokeWidth="1"/>
                  <path d="M20 5 L20 35 M5 15 L35 15 M5 25 L20 35 L35 25" 
                        stroke="#047857" 
                        strokeWidth="1" 
                        opacity="0.7"/>
                </svg>
              </motion.div>

              {/* Floating HTML Tag - Right Side */}
              <motion.div
                className="absolute top-1/4 -right-10 z-20"
                animate={{ 
                  x: [0, 10, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut"
                }}
              >
                <svg width="45" height="45" viewBox="0 0 45 45" className="text-orange-500">
                  <defs>
                    <linearGradient id="htmlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F97316" />
                      <stop offset="100%" stopColor="#EA580C" />
                    </linearGradient>
                  </defs>
                  <path d="M5 5 L8 35 L22.5 40 L37 35 L40 5 Z" 
                        fill="url(#htmlGradient)" 
                        stroke="#C2410C" 
                        strokeWidth="1"/>
                  <path d="M22.5 8 L22.5 37 M12 15 L33 15 M14 25 L31 25" 
                        stroke="#C2410C" 
                        strokeWidth="1" 
                        opacity="0.7"/>
                </svg>
              </motion.div>

              {/* Floating Gear - Bottom Left */}
              <motion.div
                className="absolute -bottom-8 -left-6 z-20"
                animate={{ 
                  rotate: [0, 360]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 10,
                  ease: "linear"
                }}
              >
                <svg width="55" height="55" viewBox="0 0 55 55" className="text-purple-500">
                  <defs>
                    <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                  <path d="M27.5 5 L32 10 L39 8 L42 15 L49 17 L47 24 L52 29 L45 34 L47 41 L40 44 L35 51 L28 49 L23 54 L18 47 L11 49 L8 42 L1 40 L3 33 L-2 28 L5 23 L3 16 L10 13 L15 6 L22 8 Z" 
                        fill="url(#gearGradient)" 
                        stroke="#6D28D9" 
                        strokeWidth="1"/>
                  <circle cx="27.5" cy="27.5" r="8" fill="none" stroke="#6D28D9" strokeWidth="2"/>
                  <circle cx="27.5" cy="27.5" r="4" fill="#6D28D9"/>
                </svg>
              </motion.div>

              {/* Floating Database Symbol - Bottom Right */}
              <motion.div
                className="absolute -bottom-6 -right-8 z-20"
                animate={{ 
                  y: [0, -8, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3.5,
                  ease: "easeInOut"
                }}
              >
                <svg width="50" height="50" viewBox="0 0 50 50" className="text-indigo-500">
                  <defs>
                    <linearGradient id="dbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#4F46E5" />
                    </linearGradient>
                  </defs>
                  <ellipse cx="25" cy="12" rx="20" ry="6" fill="url(#dbGradient)" stroke="#3730A3" strokeWidth="1"/>
                  <path d="M5 12 L5 25 Q5 31 25 31 Q45 31 45 25 L45 12" 
                        fill="url(#dbGradient)" 
                        stroke="#3730A3" 
                        strokeWidth="1"/>
                  <path d="M5 25 L5 38 Q5 44 25 44 Q45 44 45 38 L45 25" 
                        fill="url(#dbGradient)" 
                        stroke="#3730A3" 
                        strokeWidth="1"/>
                  <ellipse cx="25" cy="25" rx="20" ry="6" fill="none" stroke="#3730A3" strokeWidth="1"/>
                </svg>
              </motion.div>

              {/* Coffee Cup - Far Right */}
              <motion.div
                className="absolute top-3/4 right-12 z-20"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut"
                }}
              >
                <svg width="35" height="35" viewBox="0 0 35 35" className="text-amber-600">
                  <defs>
                    <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D97706" />
                      <stop offset="100%" stopColor="#92400E" />
                    </linearGradient>
                  </defs>
                  <rect x="8" y="15" width="15" height="12" rx="2" fill="url(#coffeeGradient)" stroke="#78350F" strokeWidth="1"/>
                  <path d="M23 18 Q28 18 28 22 Q28 26 23 26" stroke="#78350F" strokeWidth="1" fill="none"/>
                  <path d="M11 12 Q11 8 13 8 Q15 8 15 12" stroke="#78350F" strokeWidth="1" fill="none"/>
                  <path d="M17 12 Q17 8 19 8 Q21 8 21 12" stroke="#78350F" strokeWidth="1" fill="none"/>
                </svg>
              </motion.div>

              {/* Main photo container */}
              <div className="card-neumorphic p-3 rounded-full relative z-10">
                <div className="overflow-hidden rounded-full w-64 h-64 sm:w-80 sm:h-80 ring-4 ring-primary-500/20">
                  <img 
                    src="https://res.cloudinary.com/dtol8lk5b/image/upload/v1749293782/WhatsApp_Image_2024-12-01_at_12.07.26_0903b7c7_juvvun.jpg" 
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