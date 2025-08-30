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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image and Tech Stack Card */}
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="relative drop-shadow-xl flex justify-center"
            >
              <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                <div className="card-neumorphic overflow-hidden rounded-3xl shadow-2xl border-2 border-primary-100 dark:border-dark-500 w-full h-full flex items-center justify-center">
                  <img 
                    src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?semt=ais_hybrid&w=740"
                    alt="Ravindu Perera working" 
                    className="object-cover w-full h-full rounded-3xl transform hover:scale-105 transition-transform duration-500 shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
            {/* Tech Stack Card */}
            <motion.div
              variants={fadeInUpVariant}
              custom={5}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="w-full max-w-md"
            >
              <div className="card-glass p-6 rounded-2xl shadow-xl border border-primary-100 dark:border-dark-500 flex flex-col items-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                  {techStack.map((stack, index) => (
                    <div 
                      key={index}
                      className="flex flex-col items-center"
                    >
                      <div className={`w-14 h-14 mb-2 rounded-full bg-gradient-to-br ${stack.color} flex items-center justify-center text-white shadow-lg`}>
                        {stack.icon}
                      </div>
                      <h4 className="font-semibold tracking-wide text-center text-sm md:text-base">{stack.name}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

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
              className="mb-8"
            >
              <div className="card-glass p-8 rounded-3xl shadow-xl border border-primary-100 dark:border-dark-500 bg-white/80 dark:bg-dark-800/80 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gradient bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent tracking-tight">
                  Full-Stack Developer Student <span className="text-primary-500">@</span> iCET
                </h3>
                <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white text-xs font-semibold mb-2 shadow-lg">OUSL Undergraduate</span>
                <p className="text-dark-600 dark:text-light-300 mt-2 text-base md:text-lg text-center">
                  With expertise in both frontend and backend technologies, I specialize in building modern web applications using <span className="font-semibold text-blue-500">React</span>, <span className="font-semibold text-pink-500">Angular</span>, <span className="font-semibold text-yellow-600">Java</span>, and <span className="font-semibold text-green-600">Spring Boot</span>. I'm particularly enthusiastic about Java development and constantly exploring new technologies to enhance my skill set.
                </p>
                <p className="text-dark-600 dark:text-light-300 mt-2 text-base md:text-lg text-center">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community. I believe in continuous learning and creative problem-solving.
                </p>
                <div className="flex gap-4 mt-4">
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-sm font-semibold">Frontend</span>
                  <span className="inline-block px-4 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 text-sm font-semibold">Backend</span>
                </div>
              </div>
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