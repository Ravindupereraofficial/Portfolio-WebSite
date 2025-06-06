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
      id: 1,
      title: 'Mos Burger',
      description: 'A restaurant management system with online ordering capabilities, reservation management, and admin dashboard.',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
      category: ['Frontend', 'Backend'],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Ecomerce Grocery Delivery App',
      description: 'Ecomerce grocery delivery application with real-time tracking and order management.',
      image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg',
      category: ['Frontend', 'Backend'],
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'AWS'],
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Askify',
      description: 'Q&A platform for developers with markdown support, voting system and user reputation.',
      image: 'https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg',
      category: ['Frontend', 'Backend'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Customer Management System',
      description: 'Enterprise solution for managing customer data, interactions, and support tickets.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      category: ['Backend'],
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
      github: '#'
    },
    {
      id: 5,
      title: 'LibraEase',
      description: 'Modern library management system with book tracking, user accounts, and reservation features.',
      image: 'https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg',
      category: ['Frontend', 'Backend'],
      technologies: ['Java', 'JavaFX', 'MySQL'],
      github: '#'
    },
    {
      id: 6,
      title: 'Traffic Light Controller',
      description: 'Intelligent traffic control system simulation with machine learning for optimizing traffic flow.',
      image: 'https://images.pexels.com/photos/1755683/pexels-photo-1755683.jpeg',
      category: ['Backend'],
      technologies: ['Java', 'Python', 'TensorFlow'],
      github: '#'
    }
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
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  filter === category 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-light-300 dark:bg-dark-600 text-dark-700 dark:text-light-300 hover:bg-light-400 dark:hover:bg-dark-500'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4 break-inside-avoid"
            >
              <div 
                className="card-glass overflow-hidden transition-all duration-300 hover:shadow-xl group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="relative overflow-hidden h-48 sm:h-64">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
                    <div className="flex gap-3">
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-light-100/80 rounded-full text-dark-800 hover:bg-light-100 transition-colors"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-primary-500/80 rounded-full text-white hover:bg-primary-500 transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-dark-600 dark:text-light-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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