
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronRight, Award, Users, Code, Zap } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  type: 'full-time' | 'internship' | 'project' | 'freelance';
  icon: React.ReactNode;
  color: string;
  achievements: string[];
};

const Experience: React.FC = () => {
  const { setIsHovering } = useCursor();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Scroll progress for timeline animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Transform scroll progress to timeline height
  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'full-time':
        return <Briefcase className="w-4 h-4" />;
      case 'internship':
        return <Users className="w-4 h-4" />;
      case 'project':
        return <Zap className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'full-time':
        return 'Full-time';
      case 'internship':
        return 'Internship';
      case 'project':
        return 'Project';
      default:
        return 'Other';
    }
  };

  const experiences: ExperienceItem[] = [
    {
      title: "Trainee Software Engineer",
      company: "SYIGEN (Pvt) Ltd",
      period: "July 2025 – Present",
      location: "Colombo, Sri Lanka",
      type: "full-time",
      icon: <Briefcase className="w-5 h-5" />,
      color: "from-blue-500 to-indigo-600",
      description: [
        "Worked on real-world applications using Java, Spring Boot, MySQL, and RESTful APIs in a team-oriented environment.",
        "Contributed to frontend development using React and Next.js, ensuring responsive and accessible interfaces.",
        "Participated in full-stack feature implementation with version control, testing, and code reviews.",
        "Collaborated with cross-functional teams following Agile practices, improving sprint planning and task execution.",
        "Gained hands-on experience in debugging, performance optimization, and integrating third-party APIs."
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "RESTful APIs", "React", "Next.js"],
      achievements: [
        "Delivered 3 major features on schedule",
        "Improved API response time by 25%",
        "Mentored 2 junior developers"
      ]
    },
    {
      title: "Trainee Developer Student",
      company: "iCET",
      period: "July 2025 – Present",
      location: "Panadura, Sri Lanka",
      type: "internship",
      icon: <Code className="w-5 h-5" />,
      color: "from-green-500 to-emerald-600",
      description: [
        "Developed proficiency in Java, JavaScript, TypeScript, and SQL, alongside Spring Boot, React, Angular, and Express frameworks.",
        "Implemented layered architecture in projects while collaborating with senior developers.",
        "Applied industry-standard design patterns focusing on backend architecture principles.",
        "Built modular frontend and backend components throughout the software development lifecycle."
      ],
      technologies: ["Java", "JavaScript", "TypeScript", "SQL", "Spring Boot", "React", "Angular", "Express"],
      achievements: [
        "Completed 15+ coding challenges",
        "Built 5 full-stack applications",
        "Achieved 95% in technical assessments"
      ]
    },
    {
      title: "BOC Bank Digital Assistance & Feedback System",
      company: "BOC Bank Monaragala Branch",
      period: "May 2025",
      location: "Monaragala, Sri Lanka",
      type: "project",
      icon: <Award className="w-5 h-5" />,
      color: "from-purple-500 to-pink-600",
      description: [
        "Collaborated as a team of three to design, develop, and deploy three fully responsive web applications now actively used at the BOC Bank Monaragala Branch.",
        "Developed a QR-based guidance system to help customers use ATM/CRM machines via mobile-friendly tutorials.",
        "Created a feedback app allowing customers to rate services by scanning section-specific QR codes; feedback is stored in Supabase.",
        "Designed a secure admin dashboard with visual analytics (Chart.js) accessible only by bank managers (with real-time updates)."
      ],
      technologies: ["React", "Supabase", "Chart.js"],
      achievements: [
        "Deployed 3 live applications",
        "Improved customer satisfaction by 40%",
        "Reduced staff workload by 30%"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-light-50 via-light-100 to-light-200 dark:from-dark-900 dark:via-dark-800 dark:to-dark-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500 rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg"
          >
            <Briefcase className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-light-300 max-w-2xl mx-auto mb-8">
            Building innovative solutions and growing through hands-on experience in software development
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line - Static Background */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-light-300 dark:bg-dark-600 h-full rounded-full hidden lg:block"></div>
          
          {/* Central Timeline Line - Animated Progress with Glow */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full hidden lg:block shadow-lg"
            style={{ 
              height: timelineHeight,
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(147, 51, 234, 0.3)"
            }}
            ref={timelineRef}
          >
            {/* Animated glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 rounded-full blur-sm opacity-70"
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </motion.div>

          {experiences.map((exp, index) => {
            const [cardRef, cardInView] = useInView({
              triggerOnce: true,
              threshold: 0.3
            });

            return (
              <motion.div
                key={index}
                ref={cardRef}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Timeline Dot with Animation */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={cardInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.3 }}
                    className={`relative w-6 h-6 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white dark:border-dark-800 shadow-lg`}
                  >
                    {/* Pulse Animation */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={cardInView ? { scale: [1, 1.5, 1] } : { scale: 0 }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-full opacity-30`}
                    ></motion.div>
                  </motion.div>
                </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
                className={`relative w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <div className="group bg-white/90 dark:bg-dark-800/90 backdrop-blur-xl border border-white/20 dark:border-dark-600/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dark-800 dark:text-light-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <ChevronRight 
                      className={`w-5 h-5 text-dark-400 transition-transform duration-300 ${expandedCard === index ? 'rotate-90' : ''}`}
                    />
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-sm text-dark-500 dark:text-light-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-sm text-dark-500 dark:text-light-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                    <div className="flex items-center">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white`}>
                        {getTypeIcon(exp.type)}
                        <span className="ml-1">{getTypeLabel(exp.type)}</span>
                      </span>
                    </div>
                  </div>

                  {/* Description Preview */}
                  <div className="mb-4">
                    <p className="text-dark-600 dark:text-light-300 text-sm leading-relaxed">
                      {exp.description[0]}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-light-200 dark:bg-dark-700 text-dark-700 dark:text-light-300 rounded-lg border border-light-300 dark:border-dark-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium bg-light-300 dark:bg-dark-600 text-dark-600 dark:text-light-400 rounded-lg">
                        +{exp.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedCard === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-light-300 dark:border-dark-600 pt-4"
                      >
                        {/* Full Description */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-dark-800 dark:text-light-100 mb-2">Key Responsibilities:</h4>
                          <ul className="space-y-2 text-sm text-dark-600 dark:text-light-300">
                            {exp.description.map((item, i) => (
                              <motion.li 
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start"
                              >
                                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {item}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-dark-800 dark:text-light-100 mb-2">Key Achievements:</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {exp.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center p-2 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500"
                              >
                                <Award className="w-4 h-4 text-green-500 mr-2" />
                                <span className="text-sm text-green-700 dark:text-green-300">{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* All Technologies */}
                        <div>
                          <h4 className="font-semibold text-dark-800 dark:text-light-100 mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.span 
                                key={techIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: techIndex * 0.05 }}
                                className={`px-3 py-1 text-xs font-medium bg-gradient-to-r ${exp.color} text-white rounded-lg shadow-sm`}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* View More Button */}
                  <div className="flex justify-end mt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      {expandedCard === index ? 'Show Less' : 'View Details'}
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </motion.button>
                  </div>
                </div>

                {/* Floating Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 -z-10`}></div>
              </motion.div>

              {/* Side spacing for mobile */}
              <div className="w-full lg:w-5/12 lg:block hidden"></div>
            </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-dark-600 dark:text-light-300 mb-6">
            Ready to bring innovative solutions to your next project
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Download Resume
            <ExternalLink className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;