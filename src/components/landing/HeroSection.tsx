import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-[calc(80vh-4rem)] text-center relative pt-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            CodeForgeAI
          </span>
        </h1>
        <p className="mt-4 text-2xl md:text-3xl text-gray-200 mb-10 font-medium">The Next Generation AI-Powered IDE</p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#showcase" className="px-8 py-4 bg-black/40 border border-purple-500/40 text-white font-bold rounded-xl shadow-lg hover:bg-black/60 transition-all text-lg hover:-translate-y-1">
            Explore Features
          </a>
          <a href="#installation" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-green-400/80 text-white font-bold rounded-xl shadow-lg hover:from-purple-500 hover:to-green-300 transition-all text-lg hover:-translate-y-1">
            Get Started
          </a>
        </div>
      </motion.div>
      {/* Optional: Add background elements like grids or glows here */}
    </section>
  );
};

export default HeroSection;
