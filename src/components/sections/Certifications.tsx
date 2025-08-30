import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, ExternalLink, Shield, Code, Cpu, DollarSign, Zap } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

type Certification = {
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
  category: string;
  color: string;
  description: string;
  skills: string[];
};

const Certifications: React.FC = () => {
  const { setIsHovering } = useCursor();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const certifications: Certification[] = [
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "2025",
      icon: <Zap size={24} className="text-white" />,
      category: "API Development",
      color: "from-orange-500 to-red-500",
      description: "API testing, documentation, and automation fundamentals",
      skills: ["API Testing", "REST APIs", "Postman", "Automation"]
    },
    {
      title: "Foundations of Operationalizing MITRE ATT&CK v13",
      issuer: "AttackIQ",
      date: "2025",
      icon: <Shield size={24} className="text-white" />,
      category: "Cybersecurity",
      color: "from-red-500 to-pink-500",
      description: "Cybersecurity framework and threat modeling expertise",
      skills: ["MITRE ATT&CK", "Threat Intelligence", "Security", "Risk Assessment"]
    },
    {
      title: "Gen AI Certificate",
      issuer: "Pieces",
      date: "2025",
      icon: <Cpu size={24} className="text-white" />,
      category: "Artificial Intelligence",
      color: "from-purple-500 to-indigo-500",
      description: "Generative AI applications and implementation strategies",
      skills: ["AI/ML", "GPT", "LLMs", "Generative AI"]
    },
    {
      title: "ChatGPT Prompt Engineering for Developers",
      issuer: "DeepLearning.AI",
      date: "2025",
      icon: <Code size={24} className="text-white" />,
      category: "AI Development",
      color: "from-blue-500 to-cyan-500",
      description: "Advanced prompt engineering and AI integration techniques",
      skills: ["Prompt Engineering", "ChatGPT", "AI Integration", "NLP"]
    },
    {
      title: "Introduction to FinOps Foundation",
      issuer: "FinOps Foundation",
      date: "2025",
      icon: <DollarSign size={24} className="text-white" />,
      category: "Cloud Finance",
      color: "from-green-500 to-emerald-500",
      description: "Cloud financial management and cost optimization practices",
      skills: ["FinOps", "Cloud Cost Management", "AWS", "Cost Optimization"]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-light-100 via-light-200 to-light-300 dark:from-dark-800 dark:via-dark-700 dark:to-dark-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6"
          >
            <Award className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient bg-gradient-to-r from-primary-500 via-secondary-500 to-purple-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-light-300 max-w-2xl mx-auto mb-8">
            Validated expertise across cutting-edge technologies and industry best practices
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-500 via-secondary-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Main Card */}
              <div className="relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl border border-white/20 dark:border-dark-600/30 rounded-2xl p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                
                {/* Floating Icon */}
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${cert.color} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {cert.icon}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="inline-block px-3 py-1 bg-light-300/50 dark:bg-dark-600/50 backdrop-blur-sm rounded-full text-xs font-semibold text-dark-600 dark:text-light-300 mb-3">
                    {cert.category}
                  </div>
                  
                  {/* Title and Issuer */}
                  <h3 className="font-bold text-xl mb-2 text-dark-800 dark:text-light-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-dark-500 dark:text-light-400 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-2"></span>
                    {cert.issuer}
                  </p>
                  
                  {/* Description */}
                  <p className="text-sm text-dark-600 dark:text-light-300 mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-gradient-to-r from-light-200 to-light-300 dark:from-dark-700 dark:to-dark-600 text-xs font-medium text-dark-700 dark:text-light-200 rounded-lg border border-light-400/30 dark:border-dark-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-light-300 dark:border-dark-600">
                    <div className="flex items-center text-sm text-dark-500 dark:text-light-400">
                      <Calendar size={14} className="mr-2" />
                      {cert.date}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <ExternalLink size={14} />
                    </motion.button>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r ${cert.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                <div className="absolute inset-[2px] bg-white dark:bg-dark-800 rounded-2xl -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-dark-600 dark:text-light-300 mb-6">
            Continuously expanding knowledge through industry-recognized programs
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            View All Credentials
            <ExternalLink size={16} className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;