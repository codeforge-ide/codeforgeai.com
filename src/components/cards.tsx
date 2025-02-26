import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description,
  icon,
  delay = 0 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className="p-6 bg-black/40 rounded-xl backdrop-blur-md showcase-item relative overflow-hidden"
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(138, 43, 226, 0.3)"
      }}
    >
      <div className="glow-effect absolute inset-0 pointer-events-none"></div>
      {icon && <div className="text-purple-400 mb-4 text-3xl">{icon}</div>}
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
      <div className="card-reflection"></div>
    </motion.div>
  );
};

export const GlassCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}> = ({ children, className = "", delay = 0, hover = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className={`p-6 bg-black/30 rounded-xl backdrop-blur-md border border-purple-900/30 shadow-xl ${className}`}
      whileHover={hover ? { 
        scale: 1.02,
        boxShadow: "0 15px 30px -5px rgba(138, 43, 226, 0.3)"
      } : {}}
    >
      {children}
    </motion.div>
  );
};

export const RevealText: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
