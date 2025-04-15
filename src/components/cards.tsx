import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / card.offsetWidth) * 100;
      const y = ((e.clientY - rect.top) / card.offsetHeight) * 100;
      card.style.setProperty('--x', `${x}%`);
      card.style.setProperty('--y', `${y}%`);
    };
    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, type: 'spring', stiffness: 100 }}
      viewport={{ once: true, margin: '-100px' }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/60 to-purple-900/30 border border-purple-900/40 shadow-xl p-8 flex flex-col items-center group hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/10 via-green-400/5 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      {icon && <div className="text-purple-400 mb-4 text-4xl drop-shadow-lg">{icon}</div>}
      <h3 className="text-2xl font-bold mb-3 text-white text-shadow text-center tracking-tight">{title}</h3>
      <p className="text-gray-300 text-center mb-2">{description}</p>
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
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        damping: 15
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`p-6 bg-black/30 rounded-xl backdrop-blur-md border border-purple-900/30 shadow-xl relative overflow-hidden ${className} elevation-2`}
      whileHover={hover ? { 
        scale: 1.03,
        boxShadow: "0 20px 40px -10px rgba(138, 43, 226, 0.4)",
        borderColor: "rgba(138, 43, 226, 0.5)"
      } : {}}
    >
      <div className="relative z-10">
        {children}
      </div>
      <div className="card-reflection"></div>
      <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-purple-600/0 via-purple-600 to-purple-600/0"></div>
    </motion.div>
  );
};

export const RevealText: React.FC<{
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}> = ({ children, className = "", direction = 'up', delay = 0 }) => {
  const getInitialPosition = () => {
    switch(direction) {
      case 'up': return { opacity: 0, y: 40 };
      case 'down': return { opacity: 0, y: -40 };
      case 'left': return { opacity: 0, x: 40 };
      case 'right': return { opacity: 0, x: -40 };
      default: return { opacity: 0, y: 20 };
    }
  };

  const getFinalPosition = () => {
    return { 
      opacity: 1, 
      y: direction === 'up' || direction === 'down' ? 0 : undefined,
      x: direction === 'left' || direction === 'right' ? 0 : undefined
    };
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      transition={{ 
        duration: 0.8,
        delay, 
        type: "spring", 
        stiffness: 50 
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FlipCard: React.FC<{
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}> = ({ front, back, className = "" }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  
  return (
    <div 
      className={`perspective-1000 ${className}`} 
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative preserve-3d w-full h-full cursor-pointer"
        style={{ height: '300px' }}
      >
        <div className="absolute w-full h-full backface-hidden elevation-3 rounded-xl p-6 bg-black/40 backdrop-blur-md border border-purple-900/30">
          {front}
        </div>
        <div 
          className="absolute w-full h-full backface-hidden elevation-3 rounded-xl p-6 bg-gradient-to-br from-purple-900/50 to-black/60 backdrop-blur-md border border-purple-600/30"
          style={{ transform: 'rotateY(180deg)' }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
};

export const ParallaxCard: React.FC<{
  children: React.ReactNode;
  depth?: number;
  className?: string;
}> = ({ children, depth = 20, className = "" }) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setMousePosition({
      x: (x - centerX) / centerX,
      y: (y - centerY) / centerY
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-xl overflow-hidden elevation-3 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        rotateY: isHovered ? mousePosition.x * depth : 0,
        rotateX: isHovered ? -mousePosition.y * depth : 0,
        scale: isHovered ? 1.05 : 1
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        animate={{
          x: isHovered ? mousePosition.x * 10 : 0,
          y: isHovered ? mousePosition.y * 10 : 0
        }}
        className="relative z-10 p-6 bg-black/40 backdrop-blur-md border border-purple-900/30 h-full"
      >
        {children}
      </motion.div>
      {isHovered && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-green-500/20 z-0"
          style={{ 
            transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`,
            filter: 'blur(30px)'
          }}
        />
      )}
    </motion.div>
  );
};

// New TextGradient component for consistent gradient text
export const TextGradient: React.FC<{
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
}> = ({ children, className = "", from = "purple-400", to = "purple-600" }) => {
  return (
    <span className={`bg-gradient-to-r from-${from} to-${to} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

// New component for highlighted code
export const CodeHighlight: React.FC<{
  children: React.ReactNode;
  language?: string;
  className?: string;
}> = ({ children, language = "bash", className = "" }) => {
  return (
    <pre className={`p-4 rounded-lg bg-black/50 border border-purple-900/30 overflow-auto ${className}`}>
      <code className={`language-${language}`}>
        {children}
      </code>
    </pre>
  );
};
