import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useCursor } from '../../context/CursorContext';

type Skill = {
  name: string;
  level: number;
  category: string;
  icon: string;
};

const Skills: React.FC = () => {
  const { setIsHovering } = useCursor();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Skills data
  const skills: Skill[] = [
    // Frontend
    { name: 'React.js', level: 90, category: 'Frontend', icon: '⚛️' },
    { name: 'Angular', level: 85, category: 'Frontend', icon: '🅰️' },
    { name: 'HTML5', level: 95, category: 'Frontend', icon: '🌐' },
    { name: 'CSS3', level: 90, category: 'Frontend', icon: '🎨' },
    { name: 'JavaScript', level: 90, category: 'Frontend', icon: '📜' },
    { name: 'Tailwind', level: 85, category: 'Frontend', icon: '💨' },

    // Backend
    { name: 'Java', level: 95, category: 'Backend', icon: '☕' },
    { name: 'Spring Boot', level: 90, category: 'Backend', icon: '🍃' },
    { name: 'Node.js', level: 80, category: 'Backend', icon: '🟢' },
    { name: 'Express', level: 75, category: 'Backend', icon: '🚂' },

    // Database & Tools
    { name: 'MySQL', level: 85, category: 'Database', icon: '🐬' },
    { name: 'MongoDB', level: 80, category: 'Database', icon: '🍃' },
    { name: 'Git', level: 85, category: 'Tools', icon: '🔄' },
    { name: 'AWS', level: 70, category: 'Tools', icon: '☁️' },
    { name: 'Postman', level: 90, category: 'Tools', icon: '📬' },
    { name: 'IntelliJ IDEA', level: 95, category: 'Tools', icon: '🧠' }
  ];

  // Group skills by category
  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5
      }
    })
  };

  return (
    <section id="skills" className="section-padding bg-light-100 dark:bg-dark-800">
      <div className="container-custom" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        {categories.map((category, catIndex) => (
          <div key={category} className="mb-16 last:mb-0">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.1 * catIndex }}
              className="text-xl md:text-2xl font-semibold mb-8 border-l-4 border-primary-500 pl-4"
            >
              {category}
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.filter(skill => skill.category === category).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  custom={index}
                  variants={fadeInVariant}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="card-glass p-5 rounded-xl hover:shadow-lg transition-all duration-300"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-light-300 dark:bg-dark-600 flex items-center justify-center mr-4 text-2xl">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-lg">{skill.name}</h4>
                  </div>
                  <div className="w-full bg-light-300 dark:bg-dark-600 h-3 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.1 * (index + 1) }}
                      className={`h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full`}
                    ></motion.div>
                  </div>
                  <p className="text-right mt-1 text-sm text-dark-500 dark:text-light-400">{skill.level}%</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;