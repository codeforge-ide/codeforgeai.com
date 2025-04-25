import React from 'react';
import { motion } from 'framer-motion';

// Assume CommandDisplay is imported from its correct path
// import CommandDisplay from '@/components/CommandDisplay';

interface ConfigurationSectionProps {
  CommandDisplay: React.ComponentType<{ command: string }>;
}

const ConfigurationSection: React.FC<ConfigurationSectionProps> = ({ CommandDisplay }) => {
  return (
    <section id="configuration" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Configuration
        </h2>
        <div className="space-y-6">
          <p className="text-lg text-gray-300">
            CodeForgeAI uses a configuration file stored at <code className="text-purple-400 bg-gray-800 px-1 rounded">~/.codeforgeai.json</code>.
            You can manage settings using the CLI.
          </p>

          {/* View Config */}
          <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md border border-purple-900/20">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">View Current Configuration</h3>
            {CommandDisplay && <CommandDisplay command="codeforgeai config view" />}
          </div>

          {/* Update Config */}
          <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md border border-purple-900/20">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Update Configuration</h3>
            <p className="text-gray-300 mb-2">Example: Set the general AI model:</p>
            {CommandDisplay && <CommandDisplay command='codeforgeai config set general_model "ollama/mistral"' />}
             <p className="text-sm text-gray-400 mt-1">Replace <code className="text-purple-400">general_model</code> with the key you want to change and <code className="text-purple-400">"ollama/mistral"</code> with the desired value.</p>
          </div>

          {/* Key Options */}
          <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md border border-purple-900/20">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Key Configuration Options</h3>
            <ul className="space-y-3 text-gray-300">
              <li><strong className="text-purple-400">general_model</strong>: The AI model for general prompts (e.g., <code className="text-gray-400">"ollama/tinyllama"</code>, <code className="text-gray-400">"openai/gpt-3.5-turbo"</code>). Default: <code className="text-gray-400">"ollama/tinyllama"</code></li>
              <li><strong className="text-purple-400">code_model</strong>: The AI model for code-specific tasks (e.g., <code className="text-gray-400">"ollama/codellama"</code>). Default: <code className="text-gray-400">"ollama/codellama"</code></li>
              <li><strong className="text-purple-400">openai_api_key</strong>: Your OpenAI API key (if using OpenAI models).</li>
              <li><strong className="text-purple-400">ollama_base_url</strong>: The base URL for your Ollama instance (if not default <code className="text-gray-400">http://localhost:11434</code>).</li>
              {/* Add other relevant config options here */}
            </ul>
             <p className="text-sm text-gray-400 mt-3">Refer to the project documentation for a full list of configuration options.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ConfigurationSection;
