import React from 'react';
import { motion } from 'framer-motion';

interface CommandDisplayProps {
  command: string;
  description?: string;
  output?: string;
}

const CommandDisplay: React.FC<CommandDisplayProps> = ({ command, description, output }) => {
  return (
    <motion.div
      className="command-display my-6 overflow-hidden rounded-xl border border-gray-700 bg-gray-900 p-3 text-sm text-gray-200 font-mono relative group"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {description && (
        <div className="px-6 py-3 bg-purple-900/20 border-b border-purple-500/20">
          <p className="text-base text-gray-200 font-medium">{description}</p>
        </div>
      )}
      <div className="terminal-header flex items-center justify-between px-6 py-3 bg-gray-900/60">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-xs text-gray-400 tracking-wider uppercase">terminal</span>
      </div>
      <div className="px-6 py-4 font-mono relative group bg-black/30">
        <div className="flex items-center text-lg">
          <span className="text-green-500 mr-2 select-none">$</span>
          <code className="text-purple-300 break-all">{command}</code>
        </div>
        <button
          className="absolute right-4 top-4 bg-purple-600/40 hover:bg-purple-600/70 text-xs py-1 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-semibold text-white"
          onClick={() => navigator.clipboard.writeText(command)}
        >
          Copy
        </button>
        {output && (
          <div className="mt-4 text-gray-300 text-sm border-t border-gray-700/40 pt-3">
            <pre className="whitespace-pre-wrap font-mono text-xs md:text-sm">{output}</pre>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CommandDisplay;
