import React from 'react';

const PageFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    // Adjusted Footer Style
    <footer className="py-10 border-t border-gray-700/50 text-center bg-gray-900 mt-auto px-4"> {/* Simplified background, adjusted padding */}
      <div className="max-w-4xl mx-auto"> {/* Centering container */}
        <div className="mb-6"> {/* Adjusted margin */}
          <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> {/* Adjusted size, gradient */}
            CodeForgeAI
          </h2>
          <p className="text-gray-400 text-sm">The Next Generation AI-Powered IDE Integration</p> {/* Adjusted size */}
        </div>
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-3 mb-6"> {/* Adjusted gap, margin */}
          {/* Adjusted Link Styles */}
          <a href="#home" className="text-gray-400 hover:text-purple-300 text-sm font-medium transition-colors">Home</a>
          <a href="#about" className="text-gray-400 hover:text-purple-300 text-sm font-medium transition-colors">About</a>
          <a href="#showcase" className="text-gray-400 hover:text-purple-300 text-sm font-medium transition-colors">Features</a>
          <a href="#contact" className="text-gray-400 hover:text-purple-300 text-sm font-medium transition-colors">Contact</a>
          <a href="https://github.com/codeforge-ide/codeforgeai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-300 text-sm font-medium transition-colors">GitHub</a>
        </div>
        <div className="text-gray-500 text-xs"> {/* Adjusted size */}
          &copy; {currentYear} CodeForgeAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
