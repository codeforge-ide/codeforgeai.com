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
    <main>
      <div className="breathing-bg" />
      <div 
        className="cursor"
        style={{ left: mousePosition.x - 10, top: mousePosition.y - 10 }}
      />
      <div 
        className="cursor-trail"
        style={{ left: mousePosition.x - 50, top: mousePosition.y - 50 }}
      />

      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50 p-4">
        <ul className="flex justify-center gap-8">
          <li><a href="#home" className="text-white hover:text-purple-400">Home</a></li>
          <li><a href="#about" className="text-white hover:text-purple-400">About</a></li>
          <li><a href="#showcase" className="text-white hover:text-purple-400">Showcase</a></li>
          <li><a href="#contact" className="text-white hover:text-purple-400">Contact</a></li>
        </ul>
      </nav>

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
    </main>
  );
}
