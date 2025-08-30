import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Cpu, Database, Coffee } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

const About: React.FC = () => {
  const { setIsHovering } = useCursor();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const techStack = [
    { name: 'Frontend', icon: <Code2 className="text-primary-500" size={24} />, color: 'from-blue-500 to-indigo-500' },
    { name: 'Backend', icon: <Cpu className="text-secondary-500" size={24} />, color: 'from-green-500 to-emerald-500' },
    { name: 'Database', icon: <Database className="text-accent-500" size={24} />, color: 'from-yellow-500 to-orange-500' },
    { name: 'Misc', icon: <Coffee className="text-error-500" size={24} />, color: 'from-red-500 to-pink-500' }
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
          className="text-center mb-20"
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
            className="relative"
          >
            <div className="relative z-10">
              <div className="card-neumorphic overflow-hidden rounded-2xl">
                <img 
                  src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?semt=ais_hybrid&w=740"
                  alt="Ravindu Perera working" 
                  className="w-full h-auto rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
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
          >

            <motion.div
              variants={fadeInUpVariant}
              custom={0}
              className="text-2xl md:text-3xl font-semibold mb-4"
            >
              Full-Stack Developer Student <span className="text-primary-500">@</span> iCET | OUSL Undergraduate
            </motion.div>
            
            <motion.p
              variants={fadeInUpVariant}
              custom={1}
              className="text-dark-600 dark:text-light-300 mb-6"
            >
              I'm a passionate Full-Stack Developer from Sri Lanka with a strong focus on creating efficient, scalable, and user-friendly solutions. I'm currently advancing my skills at iCET while pursuing my undergraduate degree at OUSL.
            </motion.p>
            
            <motion.p
              variants={fadeInUpVariant}
              custom={2}
              className="text-dark-600 dark:text-light-300 mb-6"
            >
              With expertise in both frontend and backend technologies, I specialize in building modern web applications using React, Angular, Java, and Spring Boot. I'm particularly enthusiastic about Java development and constantly exploring new technologies to enhance my skill set.
            </motion.p>
            
            <motion.p
              variants={fadeInUpVariant}
              custom={3}
              className="text-dark-600 dark:text-light-300 mb-8"
            >
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
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