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
    <main ref={mainRef} className="flex min-h-screen">
      {progressBar}
      
      {/* Enhanced 3D Sidebar */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="fixed left-0 h-screen w-64 bg-black/30 backdrop-blur-lg border-r border-purple-900/30 overflow-y-auto sidebar-animation elevation-3 transform-gpu"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="p-6">
          <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Documentation
          </h3>
          <nav className="space-y-4">
            <motion.details
              className="group"
              initial={false}
              animate={{ rotateX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <summary className="flex items-center cursor-pointer text-gray-300 hover:text-purple-400">
                Getting Started
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                <a href="#installation" className="block text-sm text-gray-400 hover:text-purple-400">Installation</a>
                <a href="#quickstart" className="block text-sm text-gray-400 hover:text-purple-400">Quick Start</a>
              </div>
            </motion.details>
            <motion.details
              className="group"
              initial={false}
              animate={{ rotateX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <summary className="flex items-center cursor-pointer text-gray-300 hover:text-purple-400">
                Features
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                <a href="#ai-completion" className="block text-sm text-gray-400 hover:text-purple-400">AI Completion</a>
                <a href="#code-analysis" className="block text-sm text-gray-400 hover:text-purple-400">Code Analysis</a>
                <a href="#decentralized" className="block text-sm text-gray-400 hover:text-purple-400">Decentralized Infrastructure</a>
              </div>
            </motion.details>
            <motion.details
              className="group"
              initial={false}
              animate={{ rotateX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
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
            </motion.details>
          </nav>
        </div>
      </motion.aside>

      <div className="ml-64 w-full">
        <div className="breathing-bg" />
        <div className="cursor" style={{ left: mousePosition.x - 10, top: mousePosition.y - 10 }} />
        <div className="cursor-trail" style={{ left: mousePosition.x - 50, top: mousePosition.y - 50 }} />

        {/* Installation Section */}
        <section id="installation" className="section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl w-full space-y-12"
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

        {/* Features Section */}
        <section id="features" className="section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-6xl w-full"
          >
            <RevealText>
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Core Features
              </h2>
            </RevealText>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="AI Code Completion"
                description="Advanced code suggestions powered by cutting-edge AI models"
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
          </motion.div>
        </section>

        {/* Showcase Section */}
        <section id="showcase" className="section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-6xl w-full"
          >
            <RevealText>
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Technology Showcase
              </h2>
            </RevealText>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ParallaxCard depth={20}>
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
          </motion.div>
        </section>

        {/* Community Section */}
        <section id="community" className="section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-4xl w-full"
          >
            <h2 className="text-4xl font-bold mb-8">Join Our Community</h2>
            <p className="text-lg text-gray-300 mb-6">
              Become a part of the CodeForgeAI community and collaborate with developers from around the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#discord" className="px-4 py-2 bg-purple-600/30 rounded-lg hover:bg-purple-600/50 transition-colors">Join Discord</a>
              <a href="#github" className="px-4 py-2 bg-purple-600/30 rounded-lg hover:bg-purple-600/50 transition-colors">Contribute on GitHub</a>
              <a href="#forum" className="px-4 py-2 bg-purple-600/30 rounded-lg hover:bg-purple-600/50 transition-colors">Visit Forum</a>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

export default Home;
