import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useCursor } from '../../context/CursorContext';

type Skill = {
  name: string;
  level: number;
  category: string;
  icon: string;
  color: string;
  description: string;
};

const Skills: React.FC = () => {
  const { setIsHovering } = useCursor();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [showAllSkills, setShowAllSkills] = useState<boolean>(false);
  const visibleCount = 8;

  // Enhanced skills data with professional descriptions and color coding
  const skills: Skill[] = [
    // Frontend Development
    { 
      name: 'React.js', 
      level: 90, 
      category: 'Frontend', 
      icon: '⚛️', 
      color: 'from-blue-500 to-cyan-500',
      description: 'Advanced component architecture & state management'
    },
    { 
      name: 'Angular', 
      level: 85, 
      category: 'Frontend', 
      icon: '🅰️', 
      color: 'from-red-500 to-pink-500',
      description: 'Enterprise-scale applications with TypeScript'
    },
    { 
      name: 'HTML5', 
      level: 95, 
      category: 'Frontend', 
      icon: '🌐', 
      color: 'from-orange-500 to-red-500',
      description: 'Semantic markup & modern web standards'
    },
    { 
      name: 'CSS3', 
      level: 90, 
      category: 'Frontend', 
      icon: '🎨', 
      color: 'from-blue-400 to-blue-600',
      description: 'Advanced animations & responsive design'
    },
    { 
      name: 'JavaScript', 
      level: 92, 
      category: 'Frontend', 
      icon: '📜', 
      color: 'from-yellow-400 to-orange-500',
      description: 'ES6+ features & asynchronous programming'
    },
    { 
      name: 'Tailwind CSS', 
      level: 88, 
      category: 'Frontend', 
      icon: '💨', 
      color: 'from-teal-400 to-blue-500',
      description: 'Utility-first styling & custom design systems'
    },

    // Backend Development
    { 
      name: 'Java', 
      level: 95, 
      category: 'Backend', 
      icon: '☕', 
      color: 'from-orange-600 to-red-600',
      description: 'Enterprise applications & microservices'
    },
    { 
      name: 'Spring Boot', 
      level: 90, 
      category: 'Backend', 
      icon: '🍃', 
      color: 'from-green-500 to-emerald-500',
      description: 'RESTful APIs & dependency injection'
    },
    { 
      name: 'Node.js', 
      level: 82, 
      category: 'Backend', 
      icon: '🟢', 
      color: 'from-green-400 to-green-600',
      description: 'Server-side JavaScript & event-driven architecture'
    },
    { 
      name: 'Express.js', 
      level: 78, 
      category: 'Backend', 
      icon: '🚂', 
      color: 'from-gray-600 to-gray-800',
      description: 'Lightweight web framework & middleware'
    },

    // Database Management
    { 
      name: 'MySQL', 
      level: 85, 
      category: 'Database', 
      icon: '🐬', 
      color: 'from-blue-500 to-blue-700',
      description: 'Relational database design & optimization'
    },
    { 
      name: 'MongoDB', 
      level: 80, 
      category: 'Database', 
      icon: '🍃', 
      color: 'from-green-600 to-green-800',
      description: 'NoSQL document storage & aggregation'
    },

    // DevOps & Tools
    { 
      name: 'Git', 
      level: 87, 
      category: 'DevOps', 
      icon: '🔄', 
      color: 'from-orange-500 to-red-500',
      description: 'Version control & collaborative development'
    },
    { 
      name: 'AWS', 
      level: 75, 
      category: 'DevOps', 
      icon: '☁️', 
      color: 'from-yellow-500 to-orange-500',
      description: 'Cloud infrastructure & deployment strategies'
    },
    { 
      name: 'Docker', 
      level: 72, 
      category: 'DevOps', 
      icon: '🐳', 
      color: 'from-blue-400 to-blue-600',
      description: 'Containerization & microservices deployment'
    },

    // Development Tools
    { 
      name: 'Postman', 
      level: 90, 
      category: 'Tools', 
      icon: '📬', 
      color: 'from-orange-400 to-orange-600',
      description: 'API testing & documentation'
    },
    { 
      name: 'IntelliJ IDEA', 
      level: 95, 
      category: 'Tools', 
      icon: '🧠', 
      color: 'from-purple-500 to-purple-700',
      description: 'Advanced IDE & debugging workflows'
    },
    { 
      name: 'VS Code', 
      level: 92, 
      category: 'Tools', 
      icon: '💻', 
      color: 'from-blue-500 to-blue-700',
      description: 'Code editing & extension ecosystem'
    }
  ];

  // Get unique categories plus 'All'
  const categories = ['All', ...Array.from(new Set(skills.map(skill => skill.category)))];
  
  // Filter skills based on selected category
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  // Get skills to display (either first 8 or all based on showAllSkills state)
  const skillsToDisplay = showAllSkills ? filteredSkills : filteredSkills.slice(0, visibleCount);
  const hasMoreSkills = filteredSkills.length > visibleCount;

  // Category color mapping
  const categoryColors: { [key: string]: string } = {
    'Frontend': 'from-blue-500 to-cyan-500',
    'Backend': 'from-green-500 to-emerald-500',
    'Database': 'from-purple-500 to-violet-500',
    'DevOps': 'from-orange-500 to-red-500',
    'Tools': 'from-gray-500 to-slate-600'
  };

  // Counter component for animated skill level
  const AnimatedCounter: React.FC<{ value: number; inView: boolean }> = ({ value, inView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
        const timer = setInterval(() => {
          setCount(prev => {
            if (prev < value) {
              return prev + 1;
            }
            clearInterval(timer);
            return value;
          });
        }, 20);
        return () => clearInterval(timer);
      }
    }, [inView, value]);

    return <span>{count}</span>;
  };

  // Radial progress component
  const RadialProgress: React.FC<{ percentage: number; color: string; inView: boolean }> = ({ 
    percentage, 
    color, 
    inView 
  }) => {
    const radius = 45;
    const strokeWidth = 8;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" width={radius * 2} height={radius * 2}>
          {/* Background circle */}
          <circle
            stroke="currentColor"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            style={{ strokeDashoffset: 0 }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="text-light-300 dark:text-dark-600 opacity-30"
          />
          {/* Progress circle */}
          <motion.circle
            stroke="url(#gradient)"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-dark-800 dark:text-light-200">
            <AnimatedCounter value={percentage} inView={inView} />%
          </span>
        </div>
      </div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-light-100 via-light-200 to-light-300 dark:from-dark-900 dark:via-dark-800 dark:to-dark-700">
      <div className="container-custom" ref={ref}>
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            animate={inView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Technical Expertise
          </motion.h2>
          <motion.p 
            className="text-lg text-dark-600 dark:text-light-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Crafting exceptional digital experiences with cutting-edge technologies and industry best practices
          </motion.p>
          <motion.div 
            className="h-1.5 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full shadow-lg"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-white/70 dark:bg-dark-700/70 backdrop-blur-lg text-dark-700 dark:text-light-200 hover:bg-primary-100 dark:hover:bg-dark-600 border border-light-400/30 dark:border-dark-400/30'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + (showAllSkills ? '-all' : '-limited')}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {skillsToDisplay.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillCardVariants}
                className="group relative"
                onMouseEnter={() => {
                  setIsHovering(true);
                  setHoveredSkill(skill.name);
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setHoveredSkill(null);
                }}
              >
                <div className="card-glass p-6 rounded-2xl h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary-500/20 group-hover:-translate-y-2 border border-light-400/30 dark:border-dark-400/30">
                  {/* Skill Icon and Name */}
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-white to-light-100 dark:from-dark-600 dark:to-dark-700 flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <h4 className="font-bold text-lg text-dark-800 dark:text-light-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-dark-600 dark:text-light-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 min-h-[2.5rem] flex items-center">
                      {skill.description}
                    </p>
                  </div>

                  {/* Radial Progress */}
                  <div className="flex justify-center mb-4">
                    <RadialProgress 
                      percentage={skill.level} 
                      color={skill.color}
                      inView={inView} 
                    />
                  </div>

                  {/* Skill Level Text */}
                  <div className="text-center">
                    <span className="text-sm font-medium text-dark-600 dark:text-light-400">
                      {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Proficient' : 'Intermediate'}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColors[skill.category]} text-white shadow-md`}>
                      {skill.category}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show More/Less Arrow Button */}
        {hasMoreSkills && (
          <div className="flex justify-center mt-8">
            <motion.button
              onClick={() => setShowAllSkills((prev) => !prev)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none"
              whileTap={{ scale: 0.95 }}
              aria-label={showAllSkills ? 'Show Less' : 'Show More'}
            >
              {showAllSkills ? (
                <>
                  Show Less
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 15l-7-7-7 7" /></svg>
                </>
              ) : (
                <>
                  Show More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 9l7 7 7-7" /></svg>
                </>
              )}
            </motion.button>
          </div>
        )}

        {/* Skills Summary */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Years of Experience', value: 3, suffix: '+' },
              { label: 'Technologies Mastered', value: 18 },
              { label: 'Projects Completed', value: 25, suffix: '+' },
              { label: 'Average Skill Level', value: 87, suffix: '%' }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                  <AnimatedCounter value={stat.value} inView={inView} />{stat.suffix || ''}
                </div>
                <div className="text-sm text-dark-600 dark:text-light-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;