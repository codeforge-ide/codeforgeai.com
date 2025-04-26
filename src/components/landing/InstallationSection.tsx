import React from 'react';
import { motion } from 'framer-motion';

// Assume CommandDisplay is imported from its correct path
// import CommandDisplay from '@/components/CommandDisplay';

interface InstallationSectionProps {
  CommandDisplay: React.ComponentType<{ command: string }>;
}

const InstallationSection: React.FC<InstallationSectionProps> = ({ CommandDisplay }) => {
  return (
    <section id="installation" className="py-20 px-4"> {/* Added padding */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto" // Centering container
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> {/* Adjusted size, gradient */}
          Installation
        </h2>
        <div className="space-y-8"> {/* Increased spacing */}
          {/* Prerequisites Card */}
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-md border border-gray-700/60">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Prerequisites</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 pl-4"> {/* Added padding */}
              <li>Python 3.8 or higher</li>
              <li>Git</li>
              <li>Ollama (for local AI models, optional but recommended)</li>
              <li>An active internet connection (for initial setup and some features)</li>
            </ul>
          </div>

          {/* Installation Steps Card */}
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-md border border-gray-700/60">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Step-by-Step Installation</h3>
            <div className="space-y-5"> {/* Adjusted spacing */}
              <div>
                <p className="text-gray-300 mb-2 font-medium">1. Clone the repository:</p> {/* Added font-medium */}
                {CommandDisplay && <CommandDisplay command="git clone https://github.com/codeforge-ide/codeforgeai.git" />}
              </div>
              <div>
                <p className="text-gray-300 mb-2 font-medium">2. Navigate into the directory:</p> {/* Added font-medium */}
                {CommandDisplay && <CommandDisplay command="cd codeforgeai" />}
              </div>
              <div>
                <p className="text-gray-300 mb-2 font-medium">3. Install in development mode (recommended):</p> {/* Added font-medium */}
                {CommandDisplay && <CommandDisplay command="pip install -e ." />}
                <p className="text-sm text-gray-400 mt-2"> {/* Adjusted margin */}
                  Alternatively, for a standard installation: <code className="text-purple-300 bg-gray-700 px-1 rounded text-xs">pip install .</code> {/* Adjusted code style */}
                </p>
              </div>
              <div>
                <p className="text-gray-300 mb-2 font-medium">4. Verify your installation:</p> {/* Added font-medium */}
                {CommandDisplay && <CommandDisplay command="codeforgeai --version" />}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InstallationSection;
