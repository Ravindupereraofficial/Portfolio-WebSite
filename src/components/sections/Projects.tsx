import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  github?: string;
  live?: string;
};

const Projects: React.FC = () => {
  const { setIsHovering } = useCursor();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects: Project[] = [
        {
      id: 4,
      title: 'Employee Management System',
      description: 'Enterprise solution for managing customer data, interactions, and support tickets.',
      image: 'https://res.cloudinary.com/dtol8lk5b/image/upload/v1749293062/Neon_Retro_Stars_Marketing_Mockup_Website_Instagram_Post_5_prhulk.png',
      category: ['Backend'],
      technologies: ['Angular', 'Spring Boot', 'MySQL'],
      github: '#'
    },
    {
      id: 5,
      title: 'LibraEase',
      description: 'Modern library management system with book tracking, user accounts, and reservation features.',
      image: 'https://res.cloudinary.com/dtol8lk5b/image/upload/v1749293076/Neon_Retro_Stars_Marketing_Mockup_Website_Instagram_Post_2_st42sl.png',
      category: ['Frontend', 'Backend'],
      technologies: ['Java', 'JavaFX', 'MySQL'],
      github: 'https://github.com/Ravindupereraofficial/LibraEase-Library-Management-System'
    },
    {
  id: 6,
  title: 'BOC Bank Digital Assistance & Feedback System',
  description: 'QR-based ATM/CRM guidance system, a feedback app and a secure admin dashboard with real-time analytics.',
  image: 'https://res.cloudinary.com/dtol8lk5b/image/upload/v1749293079/Neon_Retro_Stars_Marketing_Mockup_Website_Instagram_Post_4_maeagv.png',
  category: ['Full-Stack'],
  technologies: ['React', 'Supabase', 'Chart.js'],
  github: '#' 
},
    {
      id: 1,
      title: 'Mos Burger',
      description: 'A restaurant management system with online ordering capabilities, reservation management, and admin dashboard.',
      image: 'https://res.cloudinary.com/dtol8lk5b/image/upload/v1749293079/Neon_Retro_Stars_Marketing_Mockup_Website_Instagram_Post_bsphtv.png',
      category: ['Frontend', 'Backend'],
      technologies: ['Springboot', 'js','Mysql'],
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Ecomerce Grocery Delivery App',
      description: 'Ecomerce grocery delivery application with real-time tracking and order management.',
      image: 'https://res.cloudinary.com/dtol8lk5b/image/upload/v1749293079/Neon_Retro_Stars_Marketing_Mockup_Website_Instagram_Post_3_eietua.png',
      category: ['Frontend', 'Backend'],
      technologies: ['Express', 'React', 'MongoDB', 'Cloudinary'],
      github: 'https://github.com/Ravindupereraofficial/Grocery_Delivery_Ecom_BackEnd',
      live: '#'
    },
    {
      id: 3,
      title: 'Askify',
      description: 'Q&A platform for developers with markdown support, voting system and user reputation.',
      image: 'https://res.cloudinary.com/dtol8lk5b/image/upload/v1749293078/Neon_Retro_Stars_Marketing_Mockup_Website_Instagram_Post_1_fdut1s.png',
      category: ['Frontend'],
      technologies: ['JavaScript','SpeechSynthesis','Gemini'],
      github: 'https://github.com/Ravindupereraofficial/Askify-Online_English_Learning_Platform',
      live: 'https://ravindupereraofficial.github.io/Askify-Online_English_Learning_Platform/'
    },


  ];

  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Frontend', 'Backend'];

  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="section-padding bg-light-200 dark:bg-dark-700">
      <div className="container-custom" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Projects</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-8"></div>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 sticky top-0 z-20 bg-light-200/80 dark:bg-dark-700/80 backdrop-blur-md py-2 rounded-xl shadow-sm">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full font-semibold tracking-wide shadow-sm border border-primary-500/30 transition-all duration-300 ${
                  filter === category 
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg scale-105' 
                    : 'bg-light-300 dark:bg-dark-600 text-dark-700 dark:text-light-300 hover:bg-primary-100 dark:hover:bg-dark-500/60'
                }`}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <div className="masonry-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: index * 0.13, type: 'spring', stiffness: 60 }}
              className="mb-6 break-inside-avoid"
            >
              <div 
                className="card-glass overflow-hidden group relative transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary-500/60 hover:ring-2 hover:ring-primary-400/30"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="relative overflow-hidden h-52 sm:h-64">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 flex items-end">
                    <div className="flex gap-3">
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-light-100/80 rounded-full text-dark-800 hover:bg-light-100 transition-colors shadow-md"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-primary-500/80 rounded-full text-white hover:bg-primary-500 transition-colors shadow-md"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  {/* Glassmorphism overlay for details on hover */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <div className="bg-white/70 dark:bg-dark-800/80 backdrop-blur-md rounded-xl p-4 shadow-lg">
                      <h3 className="text-lg font-bold mb-1 text-dark-900 dark:text-light-200">{project.title}</h3>
                      <p className="text-sm text-dark-600 dark:text-light-400 mb-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-0.5 text-xs font-semibold bg-gradient-to-r from-primary-100 via-secondary-100 to-primary-200 dark:from-primary-900 dark:via-secondary-900 dark:to-primary-800 text-primary-700 dark:text-primary-200 rounded-full shadow-sm border border-primary-200/40 dark:border-primary-800/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {project.category.map((cat, catIdx) => (
                          <span
                            key={catIdx}
                            className={`px-2 py-0.5 text-[11px] font-bold rounded-full border ${
                              cat === 'Frontend' ? 'bg-gradient-to-r from-pink-400 to-pink-600 text-white border-pink-400/40' :
                              cat === 'Backend' ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white border-blue-400/40' :
                              cat === 'Full-Stack' ? 'bg-gradient-to-r from-green-400 to-green-600 text-white border-green-400/40' :
                              'bg-light-200 dark:bg-dark-700 text-dark-700 dark:text-light-200 border-light-400/30 dark:border-dark-400/30'
                            }`}
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Always visible details below image */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-dark-900 dark:text-light-200 flex items-center gap-2">
                    {project.title}
                    {project.live && <span className="ml-1 inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" title="Live" />}
                  </h3>
                  <p className="text-dark-600 dark:text-light-400 mb-4 line-clamp-3 min-h-[48px]">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full shadow-sm border border-primary-200/40 dark:border-primary-800/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 flex-wrap mb-2">
                    {project.category.map((cat, catIdx) => (
                      <span
                        key={catIdx}
                        className={`px-2 py-0.5 text-[11px] font-bold rounded-full border ${
                          cat === 'Frontend' ? 'bg-gradient-to-r from-pink-400 to-pink-600 text-white border-pink-400/40' :
                          cat === 'Backend' ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white border-blue-400/40' :
                          cat === 'Full-Stack' ? 'bg-gradient-to-r from-green-400 to-green-600 text-white border-green-400/40' :
                          'bg-light-200 dark:bg-dark-700 text-dark-700 dark:text-light-200 border-light-400/30 dark:border-dark-400/30'
                        }`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-2">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-light-100/80 rounded-full text-dark-800 hover:bg-light-100 transition-colors shadow-md"
                        title="View on GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-primary-500/80 rounded-full text-white hover:bg-primary-500 transition-colors shadow-md"
                        title="View Live"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;