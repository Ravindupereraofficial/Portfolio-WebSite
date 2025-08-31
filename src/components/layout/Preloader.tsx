import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [codeIndex, setCodeIndex] = useState(0);
  const [showMatrix, setShowMatrix] = useState(false);

  const loadingSteps = [
    "🚀 Initializing quantum processors...",
    "⚡ Loading neural networks...",
    "🔧 Compiling reality matrix...",
    "🎨 Rendering digital universe...",
    "🧠 Optimizing AI algorithms...",
    "✨ Synchronizing dimensions...",
    "🌟 Welcome to the future!"
  ];

  const codeSnippets = [
    "const universe = new Reality();",
    "universe.initialize({",
    "  dimensions: '∞',",
    "  creativity: 'maximum',",
    "  possibilities: 'unlimited'",
    "});",
    "",
    "class Developer extends Human {",
    "  constructor() {",
    "    super();",
    "    this.passion = Infinity;",
    "    this.skills = new Set(['React', 'Java']);",
    "  }",
    "",
    "  createMagic() {",
    "    return this.imagination * this.code;",
    "  }",
    "}",
    "",
    "const ravindu = new Developer();",
    "ravindu.createMagic();"
  ];

  const matrixChars = "01RAVINDU";

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 12 + 3;
        const newProgress = prev + increment;
        
        if (newProgress >= 100) {
          setIsComplete(true);
          setShowMatrix(true);
          setTimeout(() => {
            onComplete();
          }, 2000);
          return 100;
        }
        
        const stepIndex = Math.floor((newProgress / 100) * loadingSteps.length);
        setCurrentStep(Math.min(stepIndex, loadingSteps.length - 1));
        
        return newProgress;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete, loadingSteps.length]);

  // Code typing animation
  useEffect(() => {
    if (progress > 20 && codeIndex < codeSnippets.length) {
      const timeout = setTimeout(() => {
        setCodeIndex(prev => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [progress, codeIndex, codeSnippets.length]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0, 
          scale: 1.1,
          filter: "blur(10px)"
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden"
      >
        {/* Animated Constellation Background */}
        <div className="absolute inset-0">
          {Array.from({ length: 100 }).map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Matrix Rain Effect */}
        {showMatrix && (
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`matrix-${i}`}
                className="absolute text-green-400 font-mono text-sm opacity-70"
                style={{
                  left: `${i * 5}%`,
                  top: '-100px',
                }}
                animate={{
                  y: ['0vh', '120vh'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "linear"
                }}
              >
                {Array.from({ length: 20 }).map((_, j) => (
                  <div key={j} className="leading-4">
                    {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        )}

        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={`shape-${i}`}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + (i % 2) * 30}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg width="60" height="60" viewBox="0 0 60 60">
                <defs>
                  <linearGradient id={`gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
                {i % 3 === 0 && (
                  <polygon 
                    points="30,5 55,50 5,50" 
                    fill={`url(#gradient-${i})`} 
                    opacity="0.6"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                )}
                {i % 3 === 1 && (
                  <rect 
                    x="10" y="10" width="40" height="40" 
                    fill={`url(#gradient-${i})`} 
                    opacity="0.6"
                    stroke="#fff"
                    strokeWidth="1"
                    rx="5"
                  />
                )}
                {i % 3 === 2 && (
                  <circle 
                    cx="30" cy="30" r="25" 
                    fill={`url(#gradient-${i})`} 
                    opacity="0.6"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                )}
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.line
              key={`line-${i}`}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              opacity="0.4"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Main Content Container */}
        <div className="relative z-20 flex items-center justify-center min-h-screen p-6">
          <div className="max-w-4xl w-full">
            
            {/* Holographic Logo */}
            <motion.div
              initial={{ scale: 0, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ 
                duration: 1.5, 
                type: "spring", 
                stiffness: 100,
                delay: 0.2 
              }}
              className="text-center mb-12"
            >
              <motion.div
                className="relative inline-block"
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/50 border border-white/20">
                  <span className="text-white font-black text-3xl tracking-wider">RP</span>
                </div>
                
                {/* Holographic Ring */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  animate={{
                    boxShadow: [
                      '0 0 20px #06B6D4',
                      '0 0 40px #8B5CF6',
                      '0 0 20px #06B6D4'
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              
              {/* Enhanced Terminal */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="relative"
              >
                <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                  
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
                    <div className="flex space-x-3">
                      <motion.div 
                        className="w-4 h-4 bg-red-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div 
                        className="w-4 h-4 bg-yellow-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      />
                      <motion.div 
                        className="w-4 h-4 bg-green-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      />
                    </div>
                    <div className="text-gray-400 text-sm font-mono">quantum-terminal.tsx</div>
                  </div>

                  {/* Code Display */}
                  <div className="font-mono text-sm space-y-1 max-h-80 overflow-hidden">
                    {codeSnippets.slice(0, codeIndex).map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <span className="text-gray-500 mr-4 w-8 text-right text-xs">
                          {line ? index + 1 : ''}
                        </span>
                        <span className={`
                          ${line.includes('const') || line.includes('class') ? 'text-purple-400' : ''}
                          ${line.includes('new') || line.includes('this') ? 'text-blue-400' : ''}
                          ${line.includes("'") || line.includes('"') ? 'text-green-400' : ''}
                          ${line.includes('//') ? 'text-gray-500' : ''}
                          ${!line ? '' : 'text-cyan-300'}
                        `}>
                          {line}
                          {index === codeIndex - 1 && (
                            <motion.span
                              animate={{ opacity: [1, 0, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                              className="text-white ml-1 bg-white w-2 h-4 inline-block"
                            />
                          )}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Terminal Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10" />
              </motion.div>

              {/* Status Panel */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="space-y-6"
              >
                
                {/* System Status */}
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30">
                  <h3 className="text-white font-bold text-xl mb-4">System Status</h3>
                  
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-cyan-300 font-medium text-lg mb-4"
                  >
                    {loadingSteps[currentStep]}
                  </motion.div>

                  {/* Progress Visualization */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>Progress</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    
                    <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                      
                      {/* Progress Shine Effect */}
                      <motion.div
                        className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ['-100px', '400px'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'CPU', value: `${Math.round(progress * 0.8)}%`, color: 'text-green-400' },
                    { label: 'Memory', value: `${Math.round(progress * 0.6)}%`, color: 'text-blue-400' },
                    { label: 'GPU', value: `${Math.round(progress * 0.9)}%`, color: 'text-purple-400' },
                    { label: 'Magic', value: `${Math.round(progress)}%`, color: 'text-pink-400' },
                  ].map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5 + index * 0.1 }}
                      className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10"
                    >
                      <div className="text-gray-400 text-sm">{metric.label}</div>
                      <div className={`${metric.color} font-bold text-lg`}>
                        {metric.value}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Completion Effect */}
        {isComplete && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 50, opacity: [0, 0.5, 0] }}
            transition={{ duration: 2 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
          </motion.div>
        )}

        {/* DNA Helix */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-20">
          <motion.svg
            width="100"
            height="300"
            animate={{ rotateZ: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.circle
                key={i}
                cx={50 + Math.sin(i * 0.5) * 20}
                cy={i * 15}
                r="3"
                fill="#06B6D4"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </motion.svg>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
