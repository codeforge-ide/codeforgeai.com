'use client';

import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FeatureCard, GlassCard, RevealText, ParallaxCard } from '../components/cards';

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const mainRef = useRef<HTMLDivElement>(null);

  // Smooth scroll progress animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax effects for hero section
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Section refs for scroll animations
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [showcaseRef, showcaseInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add glow effect to cards on hover
      const cards = document.querySelectorAll('.card-glow');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Add scroll progress indicator
  const progressBar = (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-purple-600 origin-left z-50"
      style={{ scaleX }}
    />
  );

  return (
    <main ref={mainRef} className="flex">
      {progressBar}
      
      {/* Sidebar with enhanced animations */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="fixed left-0 h-screen w-64 bg-black/30 backdrop-blur-md border-r border-purple-900/30 overflow-y-auto sidebar-animation"
      >
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Documentation</h3>
          <nav className="space-y-2">
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
                <a href="#decentralized" className="block text-sm text-gray-400 hover:text-purple-400">Decentralized Infrastructure</a>
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center cursor-pointer text-gray-300 hover:text-purple-400">
                Tooling
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                <a href="#decengit" className="block text-sm text-gray-400 hover:text-purple-400 relative">
                  DecenGit
                  <span className="absolute -right-2 -top-2 px-2 py-1 text-xs bg-purple-600 rounded-full">Coming Soon</span>
                </a>
                <a href="#smart-contracts" className="block text-sm text-gray-400 hover:text-purple-400">Smart Contracts</a>
                <a href="#ai-agents" className="block text-sm text-gray-400 hover:text-purple-400">AI Agents</a>
              </div>
            </details>
          </nav>
        </div>
      </motion.aside>

      <div className="ml-64 w-full">
        <div className="breathing-bg" />
        <div className="cursor" style={{ left: mousePosition.x - 10, top: mousePosition.y - 10 }} />
        <div className="cursor-trail" style={{ left: mousePosition.x - 50, top: mousePosition.y - 50 }} />

        {/* Enhanced hero section */}
        <motion.section
          ref={heroRef}
          style={{ y: heroY, opacity: heroOpacity }}
          className="section min-h-screen flex items-center justify-center relative overflow-hidden"
        >
          <div className="hero-glow" />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl relative z-10"
          >
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-green-400 bg-clip-text text-transparent">
              CodeForgeAI
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              The First Decentralized AI-Powered Developer Ecosystem
            </p>
            <p className="mt-6 text-lg text-gray-400">
              Combining blockchain technology, artificial intelligence, and collaborative development
              to create the future of coding.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <button className="px-8 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 border border-purple-600 rounded-lg hover:bg-purple-600/20 transition-colors">
                View Demo
              </button>
            </div>
          </motion.div>
        </motion.section>

        {/* Features section with material cards */}
        <motion.section
          ref={featuresRef}
          initial={{ opacity: 0 }}
          animate={featuresInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="section relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <FeatureCard
              title="AI Code Completion"
              description="Advanced code suggestions powered by AI"
              delay={0.2}
            />
            <FeatureCard
              title="Smart Contract Generation"
              description="Generate optimized smart contracts from natural language"
              delay={0.4}
            />
            <FeatureCard
              title="Decentralized Infrastructure"
              description="Built on blockchain technology for true ownership"
              delay={0.6}
            />
          </div>
        </motion.section>

        {/* Showcase section with parallax cards */}
        <motion.section
          ref={showcaseRef}
          initial={{ opacity: 0 }}
          animate={showcaseInView ? { opacity: 1 } : {}}
          className="section relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ParallaxCard depth={20} className="showcase-item card-glow">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Interactive Learning</h3>
              <p className="text-gray-300">AI-powered personalized tutorials and real-time assistance</p>
            </ParallaxCard>
            <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md showcase-item">
              <h3 className="text-2xl font-bold mb-4">Smart Contract Generation</h3>
              <p className="text-gray-300">Generate optimized smart contracts from natural language descriptions using advanced AI, making blockchain development accessible to everyone.</p>
            </div>

            <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md showcase-item">
              <h3 className="text-2xl font-bold mb-4">Agent Marketplace</h3>
              <p className="text-gray-300">Discover, share, and deploy autonomous agents in a community-driven marketplace. Accelerate development with pre-built solutions.</p>
            </div>

            <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md showcase-item">
              <h3 className="text-2xl font-bold mb-4">Interactive Learning</h3>
              <p className="text-gray-300">AI-powered personalized tutorials and real-time assistance to help you master blockchain development and DeFi concepts.</p>
            </div>

            <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md showcase-item">
              <h3 className="text-2xl font-bold mb-4">Security Analysis</h3>
              <p className="text-gray-300">Built-in AI security auditing tools to identify vulnerabilities and suggest fixes, ensuring robust and secure smart contracts.</p>
            </div>
          </div>
        </motion.section>

        {/* Add scroll indicator */}
        <div className="scroll-motion-indicator">
          {['hero', 'features', 'showcase', 'contact'].map((section, index) => (
            <div
              key={section}
              className={`scroll-dot ${scrollYProgress.get() > index * 0.25 ? 'active' : ''}`}
            />
          ))}
        </div>

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

        <section id="home" className="section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-green-400 bg-clip-text text-transparent">
              CodeForgeAI
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              The First Decentralized AI-Powered Developer Ecosystem
            </p>
            <p className="mt-6 text-lg text-gray-400">
              Combining blockchain technology, artificial intelligence, and collaborative development
              to create the future of coding.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <button className="px-8 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 border border-purple-600 rounded-lg hover:bg-purple-600/20 transition-colors">
                View Demo
              </button>
            </div>
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

        <section id="showcase" className="section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md showcase-item">
              <h3 className="text-2xl font-bold mb-4">Smart Contract Generation</h3>
              <p className="text-gray-300">Generate optimized smart contracts from natural language descriptions using advanced AI, making blockchain development accessible to everyone.</p>
            </div>

            <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md showcase-item">
              <h3 className="text-2xl font-bold mb-4">Agent Marketplace</h3>
              <p className="text-gray-300">Discover, share, and deploy autonomous agents in a community-driven marketplace. Accelerate development with pre-built solutions.</p>
            </div>

            <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md showcase-item">
              <h3 className="text-2xl font-bold mb-4">Interactive Learning</h3>
              <p className="text-gray-300">AI-powered personalized tutorials and real-time assistance to help you master blockchain development and DeFi concepts.</p>
            </div>

            <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md showcase-item">
              <h3 className="text-2xl font-bold mb-4">Security Analysis</h3>
              <p className="text-gray-300">Built-in AI security auditing tools to identify vulnerabilities and suggest fixes, ensuring robust and secure smart contracts.</p>
            </div>
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

        {/* Enhanced Installation Section */}
        <section id="installation" className="section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl w-full"
          >
            <RevealText>
              <h2 className="text-4xl font-bold mb-8 text-center">Installation</h2>
            </RevealText>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* CLI Tool Installation */}
              <GlassCard className="h-full">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">CLI Tool</h3>
                <p className="mb-4 text-gray-300">Install the CodeForgeAI CLI tool directly from GitHub:</p>
                
                <div className="terminal-window mb-4">
                  <div className="terminal-header">
                    <span className="terminal-button red"></span>
                    <span className="terminal-button yellow"></span>
                    <span className="terminal-button green"></span>
                  </div>
                  <div className="terminal-body bg-black/60 font-mono text-sm">
                    <div className="flex">
                      <span className="text-green-500 mr-2">$</span>
                      <span className="text-white">gh repo clone codeforge-ide/codeforgeai</span>
                    </div>
                    <div className="flex">
                      <span className="text-green-500 mr-2">$</span>
                      <span className="text-white">cd codeforgeai</span>
                    </div>
                    <div className="flex">
                      <span className="text-green-500 mr-2">$</span>
                      <span className="text-white">pip install -e .</span>
                    </div>
                    <div className="mt-2 text-gray-400">Installing dependencies...</div>
                    <div className="text-green-400">Successfully installed CodeForgeAI CLI</div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mt-2">After installation, run <code className="bg-black/30 px-2 py-1 rounded">codeforge --help</code> to see available commands.</p>
              </GlassCard>

              {/* GUI Application */}
              <GlassCard className="h-full">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Desktop Application</h3>
                <p className="mb-4 text-gray-300">Choose your preferred installation method:</p>
                
                <h4 className="text-lg font-semibold mb-2 text-white">Option 1: Download Releases</h4>
                <p className="mb-4 text-gray-300">Get pre-built binaries for your platform:</p>
                <a 
                  href="https://github.com/codeforge-ide/codeforge/releases" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600/30 rounded-lg hover:bg-purple-600/50 transition-colors w-fit mb-6"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                  <span>Download Latest Release</span>
                </a>
                
                <h4 className="text-lg font-semibold mb-2 text-white">Option 2: Build from Source</h4>
                <div className="terminal-window">
                  <div className="terminal-header">
                    <span className="terminal-button red"></span>
                    <span className="terminal-button yellow"></span>
                    <span className="terminal-button green"></span>
                  </div>
                  <div className="terminal-body bg-black/60 font-mono text-sm">
                    <div className="flex">
                      <span className="text-green-500 mr-2">$</span>
                      <span className="text-white">git clone https://github.com/codeforge-ide/codeforge.git</span>
                    </div>
                    <div className="flex">
                      <span className="text-green-500 mr-2">$</span>
                      <span className="text-white">cd codeforge</span>
                    </div>
                    <div className="flex">
                      <span className="text-green-500 mr-2">$</span>
                      <span className="text-white">flutter pub get</span>
                    </div>
                    <div className="flex">
                      <span className="text-green-500 mr-2">$</span>
                      <span className="text-white">flutter build &lt;platform&gt;</span>
                    </div>
                    <div className="text-gray-400 mt-1">Where &lt;platform&gt; is one of: linux, macos, windows</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* System Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <GlassCard>
                <h3 className="text-xl font-bold mb-4 text-purple-400">System Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">Minimum</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• 4GB RAM</li>
                      <li>• 2 CPU cores</li>
                      <li>• 1GB storage</li>
                      <li>• Python 3.8+</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Recommended</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• 8GB+ RAM</li>
                      <li>• 4+ CPU cores</li>
                      <li>• GPU with 4GB+ VRAM</li>
                      <li>• 5GB+ storage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">For Local AI</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• 16GB+ RAM</li>
                      <li>• 8+ CPU cores</li>
                      <li>• NVIDIA GPU (8GB+ VRAM)</li>
                      <li>• 20GB+ storage</li>
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Installation Verification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <GlassCard>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Verifying Installation</h3>
                <p className="mb-4 text-gray-300">After installation, run the following command to verify that CodeForgeAI was installed correctly:</p>
                <div className="terminal-window">
                  <div className="terminal-header">
                    <span className="terminal-button red"></span>
                    <span className="terminal-button yellow"></span>
                    <span className="terminal-button green"></span>
                  </div>
                  <div className="terminal-body bg-black/60 font-mono text-sm">
                    <div className="flex">
                      <span className="text-green-500 mr-2">$</span>
                      <span className="text-white">codeforge --version</span>
                    </div>
                    <div className="text-white">CodeForgeAI v1.2.0</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Troubleshooting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8"
            >
              <GlassCard>
                <h3 className="text-xl font-bold mb-2 text-purple-400">Troubleshooting</h3>
                <p className="text-gray-300 mb-4">Encountering issues during installation? Check our troubleshooting guide or ask the community for help.</p>
                <div className="flex flex-wrap gap-4">
                  <a href="#docs" className="px-4 py-2 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">View Documentation</a>
                  <a href="#community" className="px-4 py-2 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">Join Discord</a>
                  <a href="#github" className="px-4 py-2 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">Open an Issue</a>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </section>

        {/* New Documentation Sections */}
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
            {/* Screenshot section */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">CLI Screenshot</h3>
              <img 
                src="https://github.com/whisperrnote/whisperrcloud/blob/f7045d315e914ad32856d314c736cb430cee8819/images/codeforge-ide/codeforgeai.com/Screenshot%20from%202025-02-04%2016-58-36.png?raw=true" 
                alt="CLI Screenshot" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </section>

        <section id="decengit" className="section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-4xl"
          >
            <div className="bg-gradient-to-r from-purple-900/30 to-green-900/30 p-8 rounded-2xl backdrop-blur-md">
              <h2 className="text-4xl font-bold mb-6">DecenGit: The Future of Version Control</h2>
              <p className="text-xl text-gray-300 mb-6">
                A revolutionary decentralized alternative to traditional Git, powered by blockchain technology
                and enhanced with AI capabilities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/30 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Decentralized Storage</h3>
                  <p className="text-gray-300">Your code lives on the blockchain, ensuring permanent availability and true ownership</p>
                </div>
                <div className="bg-black/30 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">AI-Powered Merging</h3>
                  <p className="text-gray-300">Smart conflict resolution and automated code review suggestions</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button className="px-6 py-3 bg-purple-600/30 rounded-lg hover:bg-purple-600/50 transition-colors">
                  Join the Waitlist
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-4xl w-full"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Ecosystem Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md border border-purple-900/30">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Decentralized Infrastructure</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Blockchain-based code storage and version control</li>
                  <li>• Distributed computing resources</li>
                  <li>• Smart contract-powered collaboration</li>
                </ul>
              </div>
              <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md border border-purple-900/30">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Integration</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Advanced code completion and generation</li>
                  <li>• Automated code review and optimization</li>
                  <li>• Natural language to code translation</li>
                </ul>
              </div>
              <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md border border-purple-900/30">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Developer Tools</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Integrated development environment</li>
                  <li>• Smart contract development suite</li>
                  <li>• Cross-chain deployment tools</li>
                </ul>
              </div>
              <div className="bg-black/30 p-6 rounded-xl backdrop-blur-md border border-purple-900/30">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Community Features</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Decentralized governance</li>
                  <li>• Token-based incentives</li>
                  <li>• Collaborative project spaces</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

export default Home;
