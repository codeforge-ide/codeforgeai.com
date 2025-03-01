'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuOpen && 
          sidebarRef.current && 
          !sidebarRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleClickOutside);
    
    // Handle body scroll when menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Close menu on window resize if screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
    <main className="flex">
      {/* Mobile nav overlay */}
      <div 
        ref={overlayRef}
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'active' : ''}`} 
        onClick={() => setMobileMenuOpen(false)}
      />
      
      {/* Sidebar with proper structure */}
      <aside 
        ref={sidebarRef}
        id="sidebar" 
        className={`${mobileMenuOpen ? 'open' : ''} bg-black/30 backdrop-blur-md border-r border-purple-900/30 z-40`}
      >
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
                <a href="#code-editing" className="block text-sm text-gray-400 hover:text-purple-400 py-1">
                  Code Editing
                </a>
                <a href="#suggestions" className="block text-sm text-gray-400 hover:text-purple-400 py-1">
                  Code Suggestions
                </a>
                <a href="#git-integration" className="block text-sm text-gray-400 hover:text-purple-400 py-1">
                  Git Integration
                </a>
              </div>
            </details>

            <details className="group">
              <summary className="text-gray-300 hover:text-purple-400 font-medium">
                AI Models & Integration
              </summary>
              <div className="pl-4 pt-2 pb-1 space-y-3">
                <a href="#local-models" className="block text-sm text-gray-400 hover:text-purple-400 py-1">
                  Local Models
                </a>
                <a href="#secret-ai" className="block text-sm text-gray-400 hover:text-purple-400 py-1">
                  Secret AI Integration
                </a>
              </div>
            </details>

            <details className="group">
              <summary className="text-gray-300 hover:text-purple-400 font-medium">
                Web3 Development
              </summary>
              <div className="pl-4 pt-2 pb-1 space-y-3">
                <a href="#web3-scaffold" className="block text-sm text-gray-400 hover:text-purple-400 py-1">
                  Project Scaffolding
                </a>
                <a href="#web3-analysis" className="block text-sm text-gray-400 hover:text-purple-400 py-1">
                  Smart Contract Analysis
                </a>
                <a href="#web3-gas" className="block text-sm text-gray-400 hover:text-purple-400 py-1">
                  Gas Estimation
                </a>
                <a href="#web3-tests" className="block text-sm text-gray-400 hover:text-purple-400 py-1">
                  Test Generation
                </a>
              </div>
            </details>

            <details className="group">
              <summary className="text-gray-300 hover:text-purple-400 font-medium">
                Advanced Usage
              </summary>
              <div className="pl-4 pt-2 pb-1 space-y-3">
                <a href="#command-processing" className="block text-sm text-gray-400 hover:text-purple-400 py-1">
                  Command Processing
                </a>
                <a href="#code-format" className="block text-sm text-gray-400 hover:text-purple-400 py-1">
                  Code Format Processing
                </a>
                <a href="#directory-analysis" className="block text-sm text-gray-400 hover:text-purple-400 py-1">
                  Directory Analysis
                </a>
              </div>
            </details>
          </nav>
        </div>
      </aside>

      {/* Main content with proper padding and structure */}
      <div id="content" className="min-h-screen w-full md:ml-64">
        <div className="breathing-bg" />
        <div className="cursor" style={{ left: mousePosition.x - 10, top: mousePosition.y - 10 }} />
        <div className="cursor-trail" style={{ left: mousePosition.x - 50, top: mousePosition.y - 50 }} />

        {/* Improved navigation with mobile toggle button */}
        <nav className="fixed top-0 right-0 left-0 md:left-64 bg-black/50 backdrop-blur-md z-30 border-b border-purple-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex md:hidden">
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                  className="text-white p-2 rounded-md hover:bg-purple-900/30"
                  aria-label="Toggle navigation menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              
              <ul className="hidden md:flex items-center space-x-8">
                <li><a href="#home" className="text-white hover:text-purple-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-white hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#showcase" className="text-white hover:text-purple-400 transition-colors">Showcase</a></li>
                <li><a href="#contact" className="text-white hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
              
              <a href="https://github.com/codeforge-ide/codeforgeai" 
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
          {/* Hero Section with improved styling */}
          <section id="home" className="section flex flex-col items-center justify-center min-h-[90vh] text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-green-400 bg-clip-text text-transparent mb-6">
                CodeForgeAI
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-gray-300 mb-8">
                The Next Generation AI-Powered IDE
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#installation" className="px-8 py-3 bg-purple-600/70 hover:bg-purple-600/90 rounded-lg transition-colors">
                  Get Started
                </a>
                <a href="#showcase" className="px-8 py-3 bg-black/30 border border-purple-500/30 hover:bg-black/50 rounded-lg transition-colors">
                  Features
                </a>
              </div>
            </motion.div>
          </section>

          {/* About Section with improved content */}
          <section id="about" className="section">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-4xl"
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">About CodeForgeAI</h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  CodeForgeAI is revolutionizing the way developers work with advanced AI assistance for everyday coding tasks. Our CLI tool leverages the power of local and cloud AI models to help you analyze code, generate solutions, and improve your workflow.
                </p>
                <p>
                  Built with a focus on developer productivity, CodeForgeAI integrates seamlessly with your existing tools while adding powerful AI capabilities that adapt to your specific needs.
                </p>
              </div>
            </motion.div>
          </section>

          {/* Feature Showcase with actual content from README */}
          <section id="showcase" className="section">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="w-full max-w-6xl"
            >
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-center">Key Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Feature Card 1 */}
                <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md border border-purple-900/20 hover:border-purple-500/30 transition-all hover:-translate-y-1">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Project Analysis</h3>
                  <p className="text-gray-300 mb-4">Analyze your project structure and get insights about your codebase with AI-powered tools.</p>
                  <code className="text-xs bg-black/50 p-2 rounded block text-gray-300">codeforgeai analyze</code>
                </div>
                
                {/* Feature Card 2 */}
                <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md border border-purple-900/20 hover:border-purple-500/30 transition-all hover:-translate-y-1">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Code Completion</h3>
                  <p className="text-gray-300 mb-4">Get intelligent code suggestions and completions powered by advanced AI models.</p>
                  <code className="text-xs bg-black/50 p-2 rounded block text-gray-300">codeforgeai suggestion</code>
                </div>
                
                {/* Feature Card 3 */}
                <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md border border-purple-900/20 hover:border-purple-500/30 transition-all hover:-translate-y-1">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Code Explanation</h3>
                  <p className="text-gray-300 mb-4">Get detailed explanations of complex code to understand functionality and logic.</p>
                  <code className="text-xs bg-black/50 p-2 rounded block text-gray-300">codeforgeai explain filename.py</code>
                </div>
                
                {/* Feature Card 4 */}
                <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md border border-purple-900/20 hover:border-purple-500/30 transition-all hover:-translate-y-1">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Smart Contract Analysis</h3>
                  <p className="text-gray-300 mb-4">Analyze Web3 smart contracts for security vulnerabilities and optimization opportunities.</p>
                  <code className="text-xs bg-black/50 p-2 rounded block text-gray-300">codeforgeai web3 analyze-contract</code>
                </div>
                
                {/* Feature Card 5 */}
                <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md border border-purple-900/20 hover:border-purple-500/30 transition-all hover:-translate-y-1">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Git Integration</h3>
                  <p className="text-gray-300 mb-4">Generate meaningful commit messages with appropriate emojis based on your changes.</p>
                  <code className="text-xs bg-black/50 p-2 rounded block text-gray-300">codeforgeai commit-message</code>
                </div>
                
                {/* Feature Card 6 */}
                <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md border border-purple-900/20 hover:border-purple-500/30 transition-all hover:-translate-y-1">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Command Processing</h3>
                  <p className="text-gray-300 mb-4">Generate terminal commands for complex tasks using natural language instructions.</p>
                  <code className="text-xs bg-black/50 p-2 rounded block text-gray-300">codeforgeai command "setup project"</code>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Contact Section - Simplified */}
          <section id="contact" className="section">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-xl w-full"
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Get In Touch</h2>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full p-3 bg-black/30 border border-purple-900/30 rounded-lg backdrop-blur-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                  <textarea
                    id="message"
                    placeholder="Your message"
                    className="w-full p-3 bg-black/30 border border-purple-900/30 rounded-lg backdrop-blur-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    rows={4}
                  />
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 rounded-lg transition-colors w-full md:w-auto">
                  Send Message
                </button>
              </form>
            </motion.div>
          </section>

          {/* Documentation Sections with improved styling and content from README */}
          <section id="installation" className="section pt-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-4xl w-full"
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Installation</h2>
              <div className="space-y-6">
                <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md border border-purple-900/20">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Prerequisites</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Python 3.8 or higher</li>
                    <li>Git</li>
                    <li>Ollama (for local AI models)</li>
                  </ul>
                </div>

                <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md border border-purple-900/20">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Step-by-Step Installation</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-300 mb-2">1. Clone the repository:</p>
                      <code className="block bg-black/50 p-3 rounded-lg font-mono text-purple-400 overflow-x-auto">
                        git clone https://github.com/codeforge-ide/codeforgeai.git<br/>
                        cd codeforgeai
                      </code>
                    </div>
                    <div>
                      <p className="text-gray-300 mb-2">2. Install in development mode:</p>
                      <code className="block bg-black/50 p-3 rounded-lg font-mono text-purple-400">
                        pip install -e .
                      </code>
                    </div>
                    <div>
                      <p className="text-gray-300 mb-2">3. Verify your installation:</p>
                      <code className="block bg-black/50 p-3 rounded-lg font-mono text-purple-400">
                        codeforgeai --help
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="configuration" className="section">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-4xl w-full"
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Configuration</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-300">
                  CodeForgeAI uses a configuration file stored at <code className="text-purple-400">~/.codeforgeai.json</code>. 
                  The first time you run a command, this file will be created with default settings.
                </p>
                
                <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md border border-purple-900/20">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">View Current Configuration</h3>
                  <code className="block bg-black/50 p-3 rounded-lg font-mono text-purple-400">
                    codeforgeai config
                  </code>
                </div>
                
                <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md border border-purple-900/20"></div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Key Configuration Options</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li><strong className="text-purple-400">general_model</strong>: The AI model for general prompts (default: "tinyllama")</li>
                    <li><strong className="text-purple-400">code_model</strong>: The AI model for code-specific tasks (default: "qwen2.5-coder:0.5b")</li>
                    <li><strong className="text-purple-400">format_line_separator</strong>: Number of newlines between extracted code blocks (default: 5)</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="quickstart" className="section">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-4xl w-full"
            ></motion.div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Quick Start</h2>
              <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md border border-purple-900/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Basic Commands</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-300 mb-2">Analyze your project structure:</p>
                    <code className="block bg-black/50 p-3 rounded-lg font-mono text-purple-400">
                      codeforgeai analyze
                    </code>
                  </div>
                  <div>
                    <p className="text-gray-300 mb-2">Get AI assistance for coding tasks:</p>
                    <code className="block bg-black/50 p-3 rounded-lg font-mono text-purple-400">
                      codeforgeai prompt "Create a function to calculate Fibonacci numbers"
                    </code>
                  </div>
                  <div>
                    <p className="text-gray-300 mb-2">Get explanations for code in a file:</p>
                    <code className="block bg-black/50 p-3 rounded-lg font-mono text-purple-400">
                      codeforgeai explain path/to/file.py
                    </code>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
          
          {/* Add more documentation sections for completeness */}
          {/* Each section follows the same pattern with styled headings, code blocks and explanatory text */}
          {/* ... */}
          
          {/* Footer Section */}
          <footer className="py-12 mt-24 border-t border-purple-900/30 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">CodeForgeAI</h2>
                <p className="text-gray-400">The Next Generation AI-Powered IDE</p>
              </div>
              <div className="flex justify-center space-x-8 mb-8">
                <a href="#home" className="text-gray-400 hover:text-purple-400">Home</a>
                <a href="#about" className="text-gray-400 hover:text-purple-400">About</a>
                <a href="#showcase" className="text-gray-400 hover:text-purple-400">Features</a>
                <a href="#contact" className="text-gray-400 hover:text-purple-400">Contact</a>
              </div>
              <div className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} CodeForgeAI. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
