import React from 'react';
import { motion } from 'framer-motion';

// Assume CommandDisplay is imported from its correct path
// import CommandDisplay from '@/components/CommandDisplay';

interface QuickStartSectionProps {
  CommandDisplay: React.ComponentType<{ command: string }>;
}

const QuickStartSection: React.FC<QuickStartSectionProps> = ({ CommandDisplay }) => {
  return (
    <section id="quickstart" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Quick Start
        </h2>
        <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md border border-purple-900/20">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">Basic Commands</h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-300 mb-2">Analyze your project structure:</p>
              {CommandDisplay && <CommandDisplay command="codeforgeai analyze" />}
            </div>
            <div>
              <p className="text-gray-300 mb-2">Get AI assistance for coding tasks (e.g., write a function):</p>
              {CommandDisplay && <CommandDisplay command='codeforgeai prompt "write a python function to reverse a string"' />}
            </div>
            <div>
              <p className="text-gray-300 mb-2">Get explanations for code in a file:</p>
              {CommandDisplay && <CommandDisplay command="codeforgeai explain path/to/your/file.py" />}
            </div>
             <div>
              <p className="text-gray-300 mb-2">Generate a commit message for staged changes:</p>
              {CommandDisplay && <CommandDisplay command="codeforgeai commit-message" />}
            </div>
             <div>
              <p className="text-gray-300 mb-2">Generate a terminal command using natural language:</p>
              {CommandDisplay && <CommandDisplay command='codeforgeai command "list all files larger than 1MB"' />}
            </div>
          </div>
           <p className="text-sm text-gray-400 mt-4">Use <code className="text-purple-400">codeforgeai --help</code> to see all available commands and options.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default QuickStartSection;
