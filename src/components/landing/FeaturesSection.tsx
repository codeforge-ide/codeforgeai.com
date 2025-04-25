import React from 'react';
import { motion } from 'framer-motion';

// Assume CommandDisplay is imported from its correct path
// import CommandDisplay from '@/components/CommandDisplay';

interface FeaturesSectionProps {
  CommandDisplay: React.ComponentType<{ command: string }>;
}

const features = [
  {
    title: "Project Analysis",
    description: "Analyze your project structure and get insights about your codebase with AI-powered tools.",
    command: "codeforgeai analyze"
  },
  {
    title: "AI Code Completion",
    description: "Get intelligent code suggestions and completions powered by advanced AI models.",
    command: "codeforgeai suggestion"
  },
  {
    title: "Code Explanation",
    description: "Get detailed explanations of complex code to understand functionality and logic.",
    command: "codeforgeai explain filename.py"
  },
  {
    title: "Smart Contract Analysis",
    description: "Analyze Web3 smart contracts for security vulnerabilities and optimization opportunities.",
    command: "codeforgeai web3 analyze-contract"
  },
  {
    title: "Git Integration",
    description: "Generate meaningful commit messages with appropriate emojis based on your changes.",
    command: "codeforgeai commit-message"
  },
  {
    title: "Command Processing",
    description: "Generate terminal commands for complex tasks using natural language instructions.",
    command: 'codeforgeai command "setup project"'
  }
];

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ CommandDisplay }) => {
  return (
    <section id="showcase" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto"
      >
        <h2 className="text-5xl font-bold mb-14 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-center">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-black/30 rounded-xl backdrop-blur-md border border-purple-900/20 hover:border-purple-500/30 transition-all hover:-translate-y-1 flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-400">{feature.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{feature.description}</p>
              {CommandDisplay && <CommandDisplay command={feature.command} />}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
