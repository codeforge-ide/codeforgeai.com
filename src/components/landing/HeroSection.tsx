import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-[calc(80vh-4rem)] text-center py-16 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
          CodeForgeAI
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300 mb-10 font-medium max-w-2xl mx-auto">
          The Next Generation AI-Powered IDE Integration
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a href="#showcase" className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-md shadow-md hover:bg-gray-600 transition-colors text-lg">
            Explore Features
          </a>
          <a href="#installation" className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-500 transition-colors text-lg">
            Get Started
          </a>
        </div>
      </motion.div>
      {/* Optional: Add background elements like grids or glows here */}
    </section>
  );
};

export default HeroSection;
