"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FeatureCard, GlassCard, RevealText, TextGradient, CodeHighlight } from "@/components/cards";
import CommandDisplay from "@/components/CommandDisplay";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  // Mouse position for any custom effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Sidebar open state for mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#18122B] to-[#2D3250]">
      {/* Responsive layout: sidebar and content as siblings */}
      <div className="flex min-h-screen">
        {/* Sidebar: always visible on lg+, drawer on mobile */}
        <div className="z-40">
          <div className="hidden lg:block h-full">
            <Sidebar />
          </div>
          {/* Mobile sidebar drawer */}
          <div className={sidebarOpen ? "fixed inset-0 z-50 flex" : "hidden"}>
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
            <div className="relative w-64 h-full bg-black/80 border-r border-purple-900/40 shadow-2xl animate-slideInLeft">
              <Sidebar />
              <button className="absolute top-4 right-4 text-gray-400 hover:text-purple-400" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">✕</button>
            </div>
          </div>
        </div>
        {/* Main content area */}
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Top nav */}
          <nav className="sticky top-0 bg-black/70 backdrop-blur-lg z-30 border-b border-purple-900/30 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
              <div className="flex items-center gap-4">
                {/* Mobile sidebar toggle */}
                <button className="lg:hidden text-gray-300 hover:text-purple-400 p-2" onClick={() => setSidebarOpen(true)} aria-label="Open sidebar">
                  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">CodeForgeAI</span>
              </div>
              <ul className="hidden md:flex items-center gap-8">
                <li><a href="#home" className="text-white hover:text-purple-400 font-semibold transition-colors">Home</a></li>
                <li><a href="#about" className="text-white hover:text-purple-400 font-semibold transition-colors">About</a></li>
                <li><a href="#showcase" className="text-white hover:text-purple-400 font-semibold transition-colors">Features</a></li>
                <li><a href="#contact" className="text-white hover:text-purple-400 font-semibold transition-colors">Contact</a></li>
              </ul>
              <a href="https://github.com/codeforge-ide/codeforgeai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-green-400/80 rounded-lg hover:from-purple-500 hover:to-green-300 transition-colors shadow-md">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">GitHub</span>
              </a>
            </div>
          </nav>
          {/* Main Content Sections */}
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
            {/* Hero Section */}
            <section id="home" className="flex flex-col items-center justify-center min-h-[80vh] text-center relative">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
                <h1 className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-500 via-blue-400 to-green-400 bg-clip-text text-transparent mb-8 drop-shadow-lg tracking-tight">CodeForgeAI</h1>
                <p className="mt-4 text-2xl md:text-3xl text-gray-200 mb-10 font-medium">The Next Generation AI-Powered IDE</p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a href="#installation" className="px-10 py-4 bg-gradient-to-r from-purple-600 to-green-400 text-white font-bold rounded-xl shadow-lg hover:from-purple-500 hover:to-green-300 transition-all text-lg">Get Started</a>
                  <a href="#showcase" className="px-10 py-4 bg-black/40 border border-purple-500/40 text-white font-bold rounded-xl shadow-lg hover:bg-black/60 transition-all text-lg">Features</a>
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
                  {/* ...feature cards, CommandDisplay, etc... */}
                  <div className="p-6 bg-black/30 rounded-xl backdrop-blur-md border border-purple-900/20 hover:border-purple-500/30 transition-all hover:-translate-y-1">
                    <h3 className="text-2xl font-bold mb-4 text-purple-400">Project Analysis</h3>
                    <p className="text-gray-300 mb-4">Analyze your project structure and get insights about your codebase with AI-powered tools.</p>
                    <CommandDisplay command="codeforgeai analyze" />
                  </div>
                  {/* ...other feature cards... */}
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
                  <button className="px-10 py-3 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 rounded-lg transition-colors w-full md:w-auto text-lg font-bold text-white shadow-lg">Send Message</button>
                </form>
              </motion.div>
            </section>
            {/* Documentation Sections */}
            {/* ...installation, configuration, quickstart, etc... (preserved as before) ... */}
            {/* Footer */}
            <footer className="py-16 mt-auto border-t border-purple-900/30 text-center bg-black/30">
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
                <div className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} CodeForgeAI. All rights reserved.</div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
