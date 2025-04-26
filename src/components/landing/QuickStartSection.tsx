import React from 'react';
import { motion } from 'framer-motion';

// Assume CommandDisplay is imported from its correct path
// import CommandDisplay from '@/components/CommandDisplay';

interface QuickStartSectionProps {
  CommandDisplay: React.ComponentType<{ command: string }>;
}

const QuickStartSection: React.FC<QuickStartSectionProps> = ({ CommandDisplay }) => {
  return (
    <section id="quickstart" className="py-20 px-4"> {/* Added padding */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto" // Centering container
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> {/* Adjusted size, gradient */}
          Quick Start
        </h2>
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-md border border-gray-700/60"> {/* Card style */}
          <h3 className="text-xl font-semibold mb-5 text-purple-300">Basic Commands</h3> {/* Adjusted margin */}
          <div className="space-y-5"> {/* Adjusted spacing */}
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
           <p className="text-sm text-gray-400 mt-5"> {/* Adjusted margin */}
             Use <code className="text-purple-300 bg-gray-700 px-1.5 py-0.5 rounded text-sm">codeforgeai --help</code> to see all available commands. {/* Adjusted code style */}
           </p>
        </div>
      </motion.div>
    </section>
  );
};

export default QuickStartSection;
