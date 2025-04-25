import React from 'react';

const PageFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 border-t border-purple-900/30 text-center bg-gradient-to-r from-black/40 via-purple-900/10 to-black/40 shadow-inner mt-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
            CodeForgeAI
          </h2>
          <p className="text-gray-400">The Next Generation AI-Powered IDE</p>
        </div>
        <div className="flex justify-center flex-wrap gap-x-10 gap-y-4 mb-8">
          <a href="#home" className="text-gray-400 hover:text-purple-400 font-semibold transition">Home</a>
          <a href="#about" className="text-gray-400 hover:text-purple-400 font-semibold transition">About</a>
          <a href="#showcase" className="text-gray-400 hover:text-purple-400 font-semibold transition">Features</a>
          <a href="#contact" className="text-gray-400 hover:text-purple-400 font-semibold transition">Contact</a>
          <a href="https://github.com/codeforge-ide/codeforgeai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 font-semibold transition">GitHub</a>
        </div>
        <div className="text-gray-500 text-sm">
          &copy; {currentYear} CodeForgeAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
