import React from 'react';
import { motion } from 'framer-motion';

// Assume CommandDisplay is imported from its correct path
// import CommandDisplay from '@/components/CommandDisplay';

interface InstallationSectionProps {
  CommandDisplay: React.ComponentType<{ command: string }>;
}

const InstallationSection: React.FC<InstallationSectionProps> = ({ CommandDisplay }) => {
  return (
    <section id="installation" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Installation
        </h2>
        <div className="space-y-6">
          {/* Prerequisites */}
          <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md border border-purple-900/20">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Prerequisites</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Python 3.8 or higher</li>
              <li>Git</li>
              <li>Ollama (for local AI models, optional but recommended)</li>
              <li>An active internet connection (for initial setup and some features)</li>
            </ul>
          </div>

          {/* Installation Steps */}
          <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md border border-purple-900/20">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Step-by-Step Installation</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 mb-2">1. Clone the repository:</p>
                {CommandDisplay && <CommandDisplay command="git clone https://github.com/codeforge-ide/codeforgeai.git" />}
              </div>
              <div>
                <p className="text-gray-300 mb-2">2. Navigate into the directory:</p>
                {CommandDisplay && <CommandDisplay command="cd codeforgeai" />}
              </div>
              <div>
                <p className="text-gray-300 mb-2">3. Install in development mode (recommended for easy updates):</p>
                {CommandDisplay && <CommandDisplay command="pip install -e ." />}
                <p className="text-sm text-gray-400 mt-1">Alternatively, for a standard installation: <code className="text-purple-400">pip install .</code></p>
              </div>
              <div>
                <p className="text-gray-300 mb-2">4. Verify your installation:</p>
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
