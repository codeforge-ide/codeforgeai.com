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
      className="command-display my-4 overflow-hidden rounded-lg border border-purple-500/30 bg-black/40 backdrop-blur-sm"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {description && (
        <div className="px-4 py-2 bg-purple-900/20 border-b border-purple-500/20">
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      )}
      
      <div className="terminal-header flex items-center justify-between px-4 py-2 bg-gray-900/50">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-xs text-gray-400">terminal</span>
      </div>
      
      <div className="px-4 py-3 font-mono relative group">
        <div className="flex">
          <span className="text-green-500 mr-2">$</span>
          <code className="text-purple-400">{command}</code>
        </div>
        
        <button 
          className="absolute right-2 top-3 bg-purple-600/30 hover:bg-purple-600/50 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => navigator.clipboard.writeText(command)}
        >
          Copy
        </button>
        
        {output && (
          <div className="mt-2 text-gray-400 text-sm border-t border-gray-700/50 pt-2">
            <pre className="whitespace-pre-wrap">{output}</pre>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CommandDisplay;
