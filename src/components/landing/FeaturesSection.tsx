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
    <section id="showcase" className="py-20 px-4"> {/* Added padding */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto" // Use max-width for centering container
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-14 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-center"> {/* Adjusted size, gradient */}
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjusted gap */}
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Refined Card Styles
              className="p-6 bg-gray-800/50 rounded-lg shadow-lg border border-gray-700/60 hover:border-purple-500/70 transition-all hover:shadow-purple-500/10 flex flex-col"
            >
               <h3 className="text-xl font-semibold mb-3 text-purple-300">{feature.title}</h3>
               <p className="text-gray-300 mb-4 flex-grow text-base">{feature.description}</p>
               <CommandDisplay command={feature.command} />
             </motion.div>
           ))}
         </div>
       </motion.div>
     </section>
   );
 };

 export default FeaturesSection;