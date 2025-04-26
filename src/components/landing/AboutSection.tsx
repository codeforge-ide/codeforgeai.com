import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4"> {/* Added padding */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center" // Ensure text alignment
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> {/* Adjusted gradient and size */}
          About CodeForgeAI
        </h2>
        <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed"> {/* Adjusted size, color, spacing */}
          <p>
            CodeForgeAI is an innovative command-line interface (CLI) tool designed to supercharge your development workflow. It integrates powerful AI capabilities directly into your terminal, providing intelligent code analysis, suggestions, explanations, and more.
          </p>
          <p>
            Built with flexibility in mind, CodeForgeAI supports various AI models, including local ones via Ollama, allowing you to tailor the experience to your privacy and performance needs. Seamlessly integrating with your tools, CodeForgeAI adapts to your needs and brings powerful AI capabilities to your fingertips.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
