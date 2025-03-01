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
      {/* Sidebar */}
      <aside className="fixed left-0 h-screen w-64 bg-black/30 backdrop-blur-md border-r border-purple-900/30 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Documentation</h3>
          <nav className="space-y-2">
            <details className="group">
              <summary className="flex items-center cursor-pointer text-gray-300 hover:text-purple-400">
                CLI Documentation
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                <a href="#installation" className="block text-sm text-gray-400 hover:text-purple-400">
                  Installation &amp; CLI Commands
                </a>
                <a href="#cli-usage" className="block text-sm text-gray-400 hover:text-purple-400">
                  Graphical CLI Overview
                </a>
                <a href="#cli-help" className="block text-sm text-gray-400 hover:text-purple-400">
                  Detailed CLI Help
                </a>
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center cursor-pointer text-gray-300 hover:text-purple-400">
                IDE (Under Development)
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                <span className="block text-sm text-gray-400">
                  IDE features are coming soon. This section is under development.
                </span>
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center cursor-pointer text-gray-300 hover:text-purple-400">
                Copilot-Agent (Under Development)
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                <span className="block text-sm text-gray-400">
                  Copilot-Agent integration is not yet available. Stay tuned!
                </span>
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center cursor-pointer text-gray-300 hover:text-purple-400">
                Degit (Under Development)
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                <span className="block text-sm text-gray-400">
                  Degit support is currently in progress and will be available soon.
                </span>
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center cursor-pointer text-gray-300 hover:text-purple-400">
                Getting Started
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                <a href="#installation" className="block text-sm text-gray-400 hover:text-purple-400">Installation</a>
                <a href="#quickstart" className="block text-sm text-gray-400 hover:text-purple-400">Quick Start</a>
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center cursor-pointer text-gray-300 hover:text-purple-400">
                Features
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                <a href="#ai-completion" className="block text-sm text-gray-400 hover:text-purple-400">AI Completion</a>
                <a href="#code-analysis" className="block text-sm text-gray-400 hover:text-purple-400">Code Analysis</a>
              </div>
            </details>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="ml-64 w-full">
        <div className="breathing-bg" />
        <div className="cursor" style={{ left: mousePosition.x - 10, top: mousePosition.y - 10 }} />
        <div className="cursor-trail" style={{ left: mousePosition.x - 50, top: mousePosition.y - 50 }} />

        {/* Updated navigation */}
        <nav className="fixed top-0 right-0 left-64 bg-black/50 backdrop-blur-md z-50 p-4">
          <div className="flex justify-between items-center">
            <ul className="flex gap-8">
              <li><a href="#home" className="text-white hover:text-purple-400">Home</a></li>
              <li><a href="#about" className="text-white hover:text-purple-400">About</a></li>
              <li><a href="#showcase" className="text-white hover:text-purple-400">Showcase</a></li>
              <li><a href="#contact" className="text-white hover:text-purple-400">Contact</a></li>
            </ul>
            <a 
              href="https://github.com/yourrepo/codeforgeai" 
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-4 py-2 bg-purple-600/30 rounded-lg hover:bg-purple-600/50 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </nav>

        {/* Existing sections with updated margins */}
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
        <section id="installation" className="section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl font-bold mb-8">Installation</h2>
            <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md">
              <code className="text-purple-400">npm install codeforgeai</code>
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
    </main>
  );
}
