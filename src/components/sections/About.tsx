import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useCursor } from '../../context/CursorContext';

const About: React.FC = () => {
  const { setIsHovering } = useCursor();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const techStack = [
    { 
      name: 'React', 
      icon: (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
          alt="React" 
          className="w-6 h-6" 
        />
      ), 
      color: 'from-blue-400 to-blue-600' 
    },
    { 
      name: 'Java', 
      icon: (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
          alt="Java" 
          className="w-6 h-6" 
        />
      ), 
      color: 'from-orange-500 to-red-500' 
    },
    { 
      name: 'Spring', 
      icon: (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" 
          alt="Spring Boot" 
          className="w-6 h-6" 
        />
      ), 
      color: 'from-green-500 to-emerald-600' 
    },
    { 
      name: 'MySQL', 
      icon: (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
          alt="MySQL" 
          className="w-6 h-6" 
        />
      ), 
      color: 'from-blue-500 to-indigo-600' 
    }
  ];

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
  <section id="about" className="section-padding bg-light-200 dark:bg-dark-700 relative overflow-hidden">
      {/* Background elements */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-400/20 to-secondary-400/10 rounded-full blur-3xl -z-10"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-500/10 to-primary-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container-custom">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20 animate-on-scroll fade-in-up"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-gradient">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full shadow-lg"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="relative animate-on-scroll fade-in-left"
          >
            <div className="relative z-10">
              <div className="card-neumorphic overflow-hidden rounded-2xl">
                <img 
                  src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?semt=ais_hybrid&w=740"
                  alt="Ravindu Perera working" 
                  className="w-full h-auto rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Coding-themed floating elements */}
              
              {/* Binary Code Stream - Top Left */}
              <motion.div
                className="absolute -top-4 -left-4 md:-top-8 md:-left-12 z-20 hidden sm:block"
                animate={{ 
                  y: [0, -15, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-mono px-2 py-1 md:px-3 md:py-2 rounded-lg shadow-lg">
                  <div>101010</div>
                  <div>110011</div>
                  <div className="hidden md:block">001100</div>
                </div>
              </motion.div>

              {/* Code Function - Top Right */}
              <motion.div
                className="absolute -top-4 -right-2 md:-top-12 md:-right-8 z-20 hidden sm:block"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut"
                }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-mono px-2 py-1 md:px-3 md:py-2 rounded-lg shadow-lg max-w-[100px] md:max-w-[120px]">
                  <div>function() {'{}'}</div>
                  <div className="text-green-300 hidden md:block">// code</div>
                </div>
              </motion.div>

              {/* Terminal Window - Left Side */}
              <motion.div
                className="absolute top-1/4 -left-6 md:top-1/3 md:-left-16 transform -translate-y-1/2 z-20 hidden md:block"
                animate={{ 
                  x: [0, -8, 0],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  ease: "easeInOut"
                }}
              >
                <div className="bg-gray-900 text-green-400 text-xs font-mono p-2 md:p-3 rounded-lg shadow-lg border border-gray-700 min-w-[80px] md:min-w-[100px]">
                  <div className="flex items-center mb-1">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full mr-1"></div>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-500 rounded-full mr-1"></div>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>$ npm dev</div>
                  <div className="text-green-300">✓ Ready</div>
                </div>
              </motion.div>

              {/* Git Commit - Right Side */}
              <motion.div
                className="absolute top-1/4 -right-4 md:top-1/3 md:-right-12 z-20 hidden md:block"
                animate={{ 
                  x: [0, 8, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4.5,
                  ease: "easeInOut"
                }}
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-mono px-2 py-1 md:px-3 md:py-2 rounded-lg shadow-lg">
                  <div>git commit</div>
                  <div className="text-yellow-200">"update"</div>
                </div>
              </motion.div>

              {/* Console Log - Bottom Left */}
              <motion.div
                className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-10 z-20 hidden sm:block"
                animate={{ 
                  y: [0, 8, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3.5,
                  ease: "easeInOut"
                }}
              >
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-mono px-2 py-1 md:px-3 md:py-2 rounded-lg shadow-lg">
                  <div>console.log(</div>
                  <div className="text-yellow-300">'Hello!'</div>
                  <div>);</div>
                </div>
              </motion.div>

              {/* JSON Object - Bottom Right */}
              <motion.div
                className="absolute -bottom-4 -right-2 md:-bottom-12 md:-right-6 z-20 hidden sm:block"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut"
                }}
              >
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-mono px-2 py-1 md:px-3 md:py-2 rounded-lg shadow-lg">
                  <div>{'{'}</div>
                  <div>"dev": true</div>
                  <div>{'}'}</div>
                </div>
              </motion.div>
            </div>
            {/* Floating Tech Stack */}
            <div className="absolute top-5 -right-5 md:top-10 md:-right-10 z-20 animate-float">
              <div className="card-glass p-3 md:p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  {techStack.slice(0, 2).map((tech, index) => (
                    <div key={index} className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-light-100 dark:bg-dark-600">
                      {tech.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 md:-bottom-10 md:-left-10 z-20 animate-float" style={{ animationDelay: '1s' }}>
              <div className="card-glass p-3 md:p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  {techStack.slice(2, 4).map((tech, index) => (
                    <div key={index} className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-light-100 dark:bg-dark-600">
                      {tech.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.2 }}
            className="animate-on-scroll fade-in-right"
          >

            <motion.div
              variants={fadeInUpVariant}
              custom={0}
              className="text-2xl md:text-3xl font-semibold mb-4"
            >
              Code Craftsman & Problem Solver <span className="text-primary-500">@</span> iCET | OUSL
            </motion.div>
            
            <motion.p
              variants={fadeInUpVariant}
              custom={1}
              className="text-dark-600 dark:text-light-300 mb-6"
            >
              I transform ideas into elegant code. As a passionate Full-Stack Developer, I specialize in building scalable applications using modern technologies. From crafting responsive frontends to architecting robust backends, I love every aspect of the development lifecycle.
            </motion.p>
            
            <motion.p
              variants={fadeInUpVariant}
              custom={2}
              className="text-dark-600 dark:text-light-300 mb-6"
            >
              My expertise spans across React, Angular, Java, Spring Boot, and database technologies. I'm particularly passionate about clean code principles, performance optimization, and creating seamless user experiences. Every line of code I write is driven by a commitment to quality and innovation.
            </motion.p>
            
            <motion.p
              variants={fadeInUpVariant}
              custom={3}
              className="text-dark-600 dark:text-light-300 mb-8"
            >
              When I'm not debugging or pushing commits, you'll find me exploring new frameworks, contributing to open-source projects, or mentoring fellow developers. I believe in continuous learning and staying updated with the latest tech trends.
            </motion.p>
            
            <motion.div
              variants={fadeInUpVariant}
              custom={4}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {techStack.map((stack, index) => (
                <div 
                  key={index}
                  className="card-glass p-4 rounded-xl text-center transition-transform duration-300 hover:scale-105"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br ${stack.color} flex items-center justify-center text-white`}>
                    {stack.icon}
                  </div>
                  <h4 className="font-medium">{stack.name}</h4>
                </div>
              ))}
            </motion.div>
            
            {/* Removed duplicate paragraphs now shown in the card above */}
            
            {/* Removed duplicate tech stack card under the description */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;