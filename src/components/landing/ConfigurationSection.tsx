import React from 'react';
import { motion } from 'framer-motion';

// Assume CommandDisplay is imported from its correct path
// import CommandDisplay from '@/components/CommandDisplay';

interface ConfigurationSectionProps {
  CommandDisplay: React.ComponentType<{ command: string }>;
}

const ConfigurationSection: React.FC<ConfigurationSectionProps> = ({ CommandDisplay }) => {
  return (
    <section id="configuration" className="py-20 px-4"> {/* Added padding */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto" // Centering container
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> {/* Adjusted size, gradient */}
          Configuration
        </h2>
        <div className="space-y-8"> {/* Increased spacing */}
          <p className="text-lg text-gray-300 leading-relaxed"> {/* Adjusted size, color */}
            CodeForgeAI uses a configuration file stored at <code className="text-purple-300 bg-gray-700 px-1.5 py-0.5 rounded text-sm">~/.codeforgeai.json</code>. You can manage settings using the CLI. {/* Adjusted code style */}
          </p>

          {/* View Config Card */}
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-md border border-gray-700/60">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">View Current Configuration</h3>
            {CommandDisplay && <CommandDisplay command="codeforgeai config view" />}
          </div>

          {/* Update Config Card */}
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-md border border-gray-700/60">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Update Configuration</h3>
            <p className="text-gray-300 mb-2">Example: Set the general AI model:</p>
            {CommandDisplay && <CommandDisplay command='codeforgeai config set general_model "ollama/mistral"' />}
             <p className="text-sm text-gray-400 mt-2"> {/* Adjusted margin */}
               Replace <code className="text-purple-300 bg-gray-700 px-1 rounded text-xs">general_model</code> with the key and <code className="text-purple-300 bg-gray-700 px-1 rounded text-xs">"ollama/mistral"</code> with the value. {/* Adjusted code style */}
             </p>
          </div>

          {/* Key Options Card */}
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-md border border-gray-700/60">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Key Configuration Options</h3>
            <ul className="space-y-3 text-gray-300">
              <li><strong className="text-purple-300 font-medium">general_model</strong>: Model for general prompts (e.g., <code className="text-gray-400 text-xs">"ollama/tinyllama"</code>). Default: <code className="text-gray-400 text-xs">"ollama/tinyllama"</code></li> {/* Adjusted styles */}
              <li><strong className="text-purple-300 font-medium">code_model</strong>: Model for code tasks (e.g., <code className="text-gray-400 text-xs">"ollama/codellama"</code>). Default: <code className="text-gray-400 text-xs">"ollama/codellama"</code></li> {/* Adjusted styles */}
              <li><strong className="text-purple-300 font-medium">openai_api_key</strong>: Your OpenAI API key (if using OpenAI models).</li>
              <li><strong className="text-purple-300 font-medium">ollama_base_url</strong>: The base URL for your Ollama instance (if not default <code className="text-gray-400 text-xs">http://localhost:11434</code>).</li>
              {/* Add other relevant config options here */}
            </ul>
             <p className="text-sm text-gray-400 mt-4"> {/* Adjusted margin */}
               Refer to the project documentation for a full list of options.
             </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ConfigurationSection;
