import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

type Certification = {
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
};

const Certifications: React.FC = () => {
  const { setIsHovering } = useCursor();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const certifications: Certification[] = [
    {
      title: "Postman API Fundamentals",
      issuer: "Postman",
      date: "2023",
      icon: <Award size={24} className="text-primary-500" />
    },
    {
      title: "Generative AI Fundamentals",
      issuer: "Pieces",
      date: "2023",
      icon: <Award size={24} className="text-secondary-500" />
    }
  ];

  return (
    <section className="section-padding bg-light-200 dark:bg-dark-700">
      <div className="container-custom" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Certifications</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-light-300 dark:bg-dark-600 flex items-center justify-center mr-4">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{cert.title}</h3>
                  <p className="text-sm text-dark-500 dark:text-light-400">{cert.issuer}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                  {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;