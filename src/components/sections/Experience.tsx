import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useCursor } from '../../context/CursorContext';

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
};

const Experience: React.FC = () => {
  const { setIsHovering } = useCursor();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences: ExperienceItem[] = [
    {
      title: "Fullstack Developer",
      company: "EvoPlan",
      period: "2024 - Present",
      description: [
        "Led a team of 45+ developers in designing and implementing a comprehensive planning system",
        "Built the user module with authentication and authorization features",
        "Optimized API performance, reducing response times by 40%"
      ],
      technologies: ["Java", "Spring Boot", "React", "MySQL"]
    },
    {
      title: "Full-Stack Developer",
      company: "BOC Bank System",
      period: "2025 - Present",
      description: [
        "Developed QR-based ATM guides for improved customer experience",
        "Created an interactive feedback dashboard to track customer satisfaction",
        "Collaborated with UI/UX team to enhance user interfaces"
      ],
      technologies: ["React", "Supabase"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-light-100 dark:bg-dark-800">
      <div className="container-custom" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="timeline-item"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="timeline-dot"></div>
              <div className="card-glass p-6 rounded-xl">
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
                <ul className="mb-4 space-y-2 text-dark-700 dark:text-light-300 list-disc list-inside">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-light-300 dark:bg-dark-600 text-dark-700 dark:text-light-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;