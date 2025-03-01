'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="flex">
      {/* Updated Sidebar */}
      <aside className="fixed left-0 h-screen w-64 bg-black/30 backdrop-blur-md border-r border-purple-900/30">
        <div className="documentation-sidebar">
          <h3 className="text-lg font-semibold mb-6 text-purple-400">Documentation</h3>
          <nav className="space-y-4">
            {/* Getting Started Section */}
            <details className="group">
              <summary className="text-gray-300 hover:text-purple-400 font-medium">
                Getting Started
              </summary>
              <div className="pl-4 pt-2 pb-1 space-y-3">
                <a href="#installation" className="block text-sm text-gray-400 hover:text-purple-400 py-1">
                  Installation
                </a>
                <a href="#configuration" className="block text-sm text-gray-400 hover:text-purple-400 py-1">
                  Configuration
                </a>
                <a href="#quickstart" className="block text-sm text-gray-400 hover:text-purple-400 py-1">
                  Quick Start
                </a>
              </div>
            </details>

            {/* Core Features Section */}
            <details className="group">
              <summary className="text-gray-300 hover:text-purple-400 font-medium">
                Core Features
              </summary>
              <div className="pl-4 pt-2 pb-1 space-y-3">
                <a href="#project-analysis" className="block text-sm text-gray-400 hover:text-purple-400 py-1">
                  Project Analysis
                </a>
                <a href="#ai-prompting" className="block text-sm text-gray-400 hover:text-purple-400 py-1">
                  AI Prompting
                </a>
                <a href="#code-explanation" className="block text-sm text-gray-400 hover:text-purple-400 py-1">
                  Code Explanation
                </a>
              </div>
            </details>

            {/* Rest of the details sections follow the same pattern */}
            <details className="group">
              <summary className="flex items-center cursor-pointer text-gray-300 hover:text-purple-400">
                Core Features
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                <a href="#project-analysis" className="block text-sm text-gray-400 hover:text-purple-400">Project Analysis</a>
                <a href="#ai-prompting" className="block text-sm text-gray-400 hover:text-purple-400">AI Prompting</a>
                <a href="#code-explanation" className="block text-sm text-gray-400 hover:text-purple-400">Code Explanation</a>
                <a href="#code-editing" className="block text-sm text-gray-400 hover:text-purple-400">Code Editing</a>
                <a href="#suggestions" className="block text-sm text-gray-400 hover:text-purple-400">Code Suggestions</a>
                <a href="#git-integration" className="block text-sm text-gray-400 hover:text-purple-400">Git Integration</a>
              </div>
            </details>

            <details className="group">
              <summary className="flex items-center cursor-pointer text-gray-300 hover:text-purple-400">
                AI Models & Integration
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                <a href="#local-models" className="block text-sm text-gray-400 hover:text-purple-400">Local Models</a>
                <a href="#secret-ai" className="block text-sm text-gray-400 hover:text-purple-400">Secret AI Integration</a>
              </div>
            </details>

            <details className="group">
              <summary className="flex items-center cursor-pointer text-gray-300 hover:text-purple-400">
                Web3 Development
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                <a href="#web3-scaffold" className="block text-sm text-gray-400 hover:text-purple-400">Project Scaffolding</a>
                <a href="#web3-analysis" className="block text-sm text-gray-400 hover:text-purple-400">Smart Contract Analysis</a>
                <a href="#web3-gas" className="block text-sm text-gray-400 hover:text-purple-400">Gas Estimation</a>
                <a href="#web3-tests" className="block text-sm text-gray-400 hover:text-purple-400">Test Generation</a>
              </div>
            </details>

            <details className="group">
              <summary className="flex items-center cursor-pointer text-gray-300 hover:text-purple-400">
                Advanced Usage
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                <a href="#command-processing" className="block text-sm text-gray-400 hover:text-purple-400">Command Processing</a>
                <a href="#code-format" className="block text-sm text-gray-400 hover:text-purple-400">Code Format Processing</a>
                <a href="#directory-analysis" className="block text-sm text-gray-400 hover:text-purple-400">Directory Analysis</a>
              </div>
            </details>
          </nav>
        </div>
      </aside>

      {/* Updated Main Content */}
      <div className="ml-64 min-h-screen w-[calc(100%-16rem)]">
        <div className="breathing-bg" />
        <div className="cursor" style={{ left: mousePosition.x - 10, top: mousePosition.y - 10 }} />
        <div className="cursor-trail" style={{ left: mousePosition.x - 50, top: mousePosition.y - 50 }} />

        {/* Fixed Navigation */}
        <nav className="fixed top-0 right-0 left-64 bg-black/50 backdrop-blur-md z-50 border-b border-purple-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <ul className="flex items-center space-x-8">
                <li><a href="#home" className="text-white hover:text-purple-400">Home</a></li>
                <li><a href="#about" className="text-white hover:text-purple-400">About</a></li>
                <li><a href="#showcase" className="text-white hover:text-purple-400">Showcase</a></li>
                <li><a href="#contact" className="text-white hover:text-purple-400">Contact</a></li>
              </ul>
              
              <a href="https://github.com/yourrepo/codeforgeai" 
                 target="_blank"
                 rel="noopener noreferrer" 
                 className="flex items-center gap-2 px-4 py-2 bg-purple-600/30 rounded-lg hover:bg-purple-600/50 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </nav>

        {/* Main Content Sections */}
        <div className="main-content">
          <section id="home" className="section">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-green-400 bg-clip-text text-transparent">
                CodeForgeAI
              </h1>
              <p className="mt-4 text-xl text-gray-300">
                The Next Generation AI-Powered IDE
              </p>
            </motion.div>
          </section>

          <section id="about" className="section">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl font-bold mb-8">About Us</h2>
              <p className="text-lg text-gray-300">
                CodeForgeAI is revolutionizing the way developers write code with
                advanced AI assistance and real-time collaboration features.
              </p>
            </motion.div>
          </section>

          <section id="showcase" className="section">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md">
                <h3 className="text-2xl font-bold mb-4">AI Code Completion</h3>
                <p className="text-gray-300">Advanced code suggestions powered by AI</p>
              </div>
              {/* Add more showcase items */}
            </motion.div>
          </section>

          <section id="contact" className="section">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-xl w-full"
            >
              <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-3 bg-black/30 rounded-lg backdrop-blur-md"
                />
                <textarea
                  placeholder="Your message"
                  className="w-full p-3 bg-black/30 rounded-lg backdrop-blur-md"
                  rows={4}
                />
                <button className="px-8 py-3 bg-purple-600 rounded-lg hover:bg-purple-700">
                  Send Message
                </button>
              </form>
            </motion.div>
          </section>

          {/* New Documentation Sections */}
          <section id="installation" className="section pt-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-4xl w-full"
            >
              <h2 className="text-4xl font-bold mb-8">Installation</h2>
              <div className="space-y-6">
                <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md">
                  <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Python 3.8 or higher</li>
                    <li>Git</li>
                    <li>Ollama (for local AI models)</li>
                  </ul>
                </div>

                <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md">
                  <h3 className="text-xl font-semibold mb-4">Step-by-Step Installation</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-300 mb-2">1. Clone the repository:</p>
                      <code className="block bg-black/50 p-3 rounded-lg font-mono text-purple-400">
                        git clone https://github.com/codeforge-ide/codeforgeai.git
                        cd codeforgeai
                      </code>
                    </div>
                    <div>
                      <p className="text-gray-300 mb-2">2. Install in development mode:</p>
                      <code className="block bg-black/50 p-3 rounded-lg font-mono text-purple-400">
                        pip install -e .
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="quickstart" className="section">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl font-bold mb-8">Quick Start</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300">Get started with CodeForgeAI in minutes...</p>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </main>
  );
}
