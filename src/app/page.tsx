"use client";
import React, { useState, useRef } from 'react';
import Sidebar from '@/components/Sidebar';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Import icons
import CommandDisplay  from '@/components/CommandDisplay';

export default function Home() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => setIsSidebarExpanded((prev: boolean) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev: boolean) => !prev); // Toggle mobile menu

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#0a0a0a] via-[#18122B] to-[#2D3250]">
      {/* Sidebar */}
      <Sidebar
        ref={sidebarRef}
        isExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      {/* Main Content - Use ml-* for spacing */}
      <main
        className={`flex-1 min-h-screen transition-all duration-300 ease-in-out flex flex-col ${isSidebarExpanded ? 'ml-64' : 'ml-20'}`}
      >
        {/* Navbar */}
        <nav className="sticky top-0 z-30 w-full bg-black/80 backdrop-blur-xl border-b border-purple-900/30 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo/Brand (Optional) */}
              <div className="flex-shrink-0">
                {/* <img className="h-8 w-auto" src="/logo.png" alt="CodeForgeAI" /> */}
                <span className="text-xl font-bold text-white">CodeForgeAI</span>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex md:items-center md:space-x-4">
                <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition">Home</a>
                <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition">About</a>
                <a href="#showcase" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition">Features</a>
                <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition">Contact</a>
                <a href="https://github.com/codeforge-ide/codeforgeai" target="_blank" rel="noopener noreferrer" className="ml-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-green-400/80 rounded-md text-sm font-medium text-white hover:from-purple-500 hover:to-green-300 transition-colors shadow-sm border border-purple-700/30">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.036 1.531 1.036.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.82c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.201 2.397.098 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu, show/hide based on menu state. */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-purple-900/30">
              <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition">Home</a>
              <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition">About</a>
              <a href="#showcase" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition">Features</a>
              <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition">Contact</a>
              <a href="https://github.com/codeforge-ide/codeforgeai" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition">
                GitHub
              </a>
            </div>
          </div>
        </nav>

        {/* Main Content Sections */}
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
          {/* Hero Section */}
          <section id="home" className="flex flex-col items-center justify-center min-h-[calc(80vh-4rem)] text-center relative pt-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
              <h1 className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-500 via-blue-400 to-green-400 bg-clip-text text-transparent mb-8 drop-shadow-lg tracking-tight">CodeForgeAI</h1>
              <p className="mt-4 text-2xl md:text-3xl text-gray-200 mb-10 font-medium">The Next Generation AI-Powered IDE</p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="#installation" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-green-400 text-white font-bold rounded-xl shadow-lg hover:from-purple-500 hover:to-green-300 transition-all text-lg">Get Started</a>
                <a href="#showcase" className="px-8 py-4 bg-black/40 border border-purple-500/40 text-white font-bold rounded-xl shadow-lg hover:bg-black/60 transition-all text-lg">Features</a>
              </div>
            </motion.div>
          </section>
          {/* About Section */}
          <section id="about" className="py-20">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-center">About CodeForgeAI</h2>
              <div className="space-y-8 text-xl text-gray-300 leading-relaxed text-center">
                <p>CodeForgeAI revolutionizes developer workflows with advanced AI assistance for everyday coding. Our CLI leverages local and cloud AI to analyze code, generate solutions, and boost productivity.</p>
                <p>Seamlessly integrating with your tools, CodeForgeAI adapts to your needs and brings powerful AI capabilities to your fingertips.</p>
              </div>
            </motion.div>
          </section>
          {/* Feature Showcase */}
          <section id="showcase" className="py-20">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="w-full max-w-6xl mx-auto">
              <h2 className="text-5xl font-bold mb-14 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-center">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md border border-purple-900/20 hover:border-purple-500/30 transition-all hover:-translate-y-1">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Project Analysis</h3>
                  <p className="text-gray-300 mb-4">Analyze your project structure and get insights about your codebase with AI-powered tools.</p>
                  <CommandDisplay command="codeforgeai analyze" />
                </div>
                
                <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md border border-purple-900/20 hover:border-purple-500/30 transition-all hover:-translate-y-1">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Code Completion</h3>
                  <p className="text-gray-300 mb-4">Get intelligent code suggestions and completions powered by advanced AI models.</p>
                  <CommandDisplay command="codeforgeai suggestion" />
                </div>
                
                <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md border border-purple-900/20 hover:border-purple-500/30 transition-all hover:-translate-y-1">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Code Explanation</h3>
                  <p className="text-gray-300 mb-4">Get detailed explanations of complex code to understand functionality and logic.</p>
                  <CommandDisplay command="codeforgeai explain filename.py" />
                </div>
                
                <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md border border-purple-900/20 hover:border-purple-500/30 transition-all hover:-translate-y-1">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Smart Contract Analysis</h3>
                  <p className="text-gray-300 mb-4">Analyze Web3 smart contracts for security vulnerabilities and optimization opportunities.</p>
                  <CommandDisplay command="codeforgeai web3 analyze-contract" />
                </div>
                
                <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md border border-purple-900/20 hover:border-purple-500/30 transition-all hover:-translate-y-1">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Git Integration</h3>
                  <p className="text-gray-300 mb-4">Generate meaningful commit messages with appropriate emojis based on your changes.</p>
                  <CommandDisplay command="codeforgeai commit-message" />
                </div>
                
                <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md border border-purple-900/20 hover:border-purple-500/30 transition-all hover:-translate-y-1">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Command Processing</h3>
                  <p className="text-gray-300 mb-4">Generate terminal commands for complex tasks using natural language instructions.</p>
                  <CommandDisplay command='codeforgeai command "setup project"' />
                </div>
              </div>
            </motion.div>
          </section>
          {/* Contact Section */}
          <section id="contact" className="py-20">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-xl w-full mx-auto">
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-center">Get In Touch</h2>
              <form className="space-y-6 bg-black/40 p-8 rounded-2xl border border-purple-900/30 shadow-xl">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-base font-medium text-gray-400">Email</label>
                  <input id="email" type="email" placeholder="Your email" className="w-full p-4 bg-black/30 border border-purple-900/30 rounded-lg backdrop-blur-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-base font-medium text-gray-400">Message</label>
                  <textarea id="message" placeholder="Your message" className="w-full p-4 bg-black/30 border border-purple-900/30 rounded-lg backdrop-blur-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none" rows={5} />
                </div>
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 rounded-lg transition-colors w-full md:w-auto text-lg font-bold text-white shadow-lg">Send Message</button>
              </form>
            </motion.div>
          </section>
          {/* Documentation Sections */}
          <section id="installation" className="pt-20">
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
                      <CommandDisplay 
                        command="git clone https://github.com/codeforge-ide/codeforgeai.git && cd codeforgeai"
                        description="Clone the repository and navigate to the project directory"
                      />
                    </div>
                    <div>
                      <p className="text-gray-300 mb-2">2. Install in development mode:</p>
                      <CommandDisplay 
                        command="pip install -e ."
                        description="Install the package in development mode"
                        output="Successfully installed codeforgeai-0.1.0"
                      />
                    </div>
                    <div>
                      <p className="text-gray-300 mb-2">3. Verify your installation:</p>
                      <CommandDisplay 
                        command="codeforgeai --help"
                        description="Check if the installation was successful"
                        output="Usage: codeforgeai [OPTIONS] COMMAND [ARGS]...

Options:
  --help  Show this message and exit.

Commands:
  analyze          Analyze project structure
  command          Generate terminal commands
  commit-message   Generate commit messages
  config           View or modify configuration
  explain          Explain code in a file
  prompt           Send a prompt to the AI
  suggestion       Get code suggestions
  web3             Web3 development commands"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="configuration">
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
                  <CommandDisplay 
                    command="codeforgeai config"
                    description="View your current configuration settings"
                    output="{
  \u0022general_model\u0022: \u0022tinyllama\u0022,
  \u0022code_model\u0022: \u0022qwen2.5-coder:0.5b\u0022,
  \u0022format_line_separator\u0022: 5
}"
                  />
                </div>
                
                <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md border border-purple-900/20">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Update Configuration</h3>
                  <CommandDisplay 
                    command="codeforgeai config --set code_model=qwen2.5-coder:2b"
                    description="Update a specific configuration setting"
                    output="Configuration updated successfully!"
                  />
                </div>

                <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md border border-purple-900/20">
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

          <section id="quickstart">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-4xl w-full"
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Quick Start</h2>
              <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md border border-purple-900/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Basic Commands</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-300 mb-2">Analyze your project structure:</p>
                    <CommandDisplay 
                      command="codeforgeai analyze"
                      description="Get an overview of your project codebase"
                      output="Analyzing project structure...
Found 42 files in 8 directories
Main technologies: Python, JavaScript, HTML/CSS
Project type: Web Application with API"
                    />
                  </div>
                  <div>
                    <p className="text-gray-300 mb-2">Get AI assistance for coding tasks:</p>
                    <CommandDisplay 
                      command='codeforgeai prompt "Create a function to calculate Fibonacci numbers"'
                      description="Ask the AI for code solutions"
                      output="def fibonacci(n):
    \u0022\u0022\u0022
    Calculate the nth number in the Fibonacci sequence.
    
    Args:
        n: A positive integer
        
    Returns:
        The nth Fibonacci number
    \u0022\u0022\u0022
    if n <= 0:
        raise ValueError(\u0022Input must be a positive integer\u0022)
    elif n == 1:
        return 0
    elif n == 2:
        return 1
    
    # Initialize the first two Fibonacci numbers
    a, b = 0, 1
    
    # Calculate the nth Fibonacci number
    for _ in range(3, n+1):
        a, b = b, a + b
        
    return b"
                    />
                  </div>
                  <div>
                    <p className="text-gray-300 mb-2">Get explanations for code in a file:</p>
                    <CommandDisplay 
                      command="codeforgeai explain path/to/file.py"
                      description="Get a detailed explanation of code functionality"
                      output="# Code Explanation for file.py

This file contains a Flask web application that serves as a REST API. Here's a breakdown:

1. Imports and setup:
   - Flask framework and related modules
   - Database connection utilities
   - Authentication helpers

2. Routes:
   - GET /api/users - Returns a list of users (requires authentication)
   - POST /api/login - Handles user authentication and returns JWT tokens
   - PUT /api/users/:id - Updates user information

3. Key functionality:
   - JWT-based authentication
   - Database connection pooling
   - Request rate limiting"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
          
          {/* Add more documentation sections for completeness */}
          {/* Each section follows the same pattern with styled headings, code blocks and explanatory text */}
          {/* ... */}
          
          {/* Footer */}
          <footer className="py-12 border-t border-purple-900/30 text-center bg-gradient-to-r from-black/40 via-purple-900/10 to-black/40 rounded-b-2xl shadow-inner mt-8"></footer>
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">CodeForgeAI</h2>
                <p className="text-gray-400">The Next Generation AI-Powered IDE</p>
              </div>
              <div className="flex justify-center space-x-10 mb-8">
                <a href="#home" className="text-gray-400 hover:text-purple-400 font-semibold">Home</a>
                <a href="#about" className="text-gray-400 hover:text-purple-400 font-semibold">About</a>
                <a href="#showcase" className="text-gray-400 hover:text-purple-400 font-semibold">Features</a>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 font-semibold">Contact</a>
              </div>
              <div className="text-gray-500 text-sm">&copy; CodeForgeAI. All rights reserved.</div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
