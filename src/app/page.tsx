"use client"; // Add this directive for client-side hooks (useState, useRef)

import React from 'react';

// Layout and Navbar
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/Navbar';

// Landing Page Sections
import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/AboutSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import InstallationSection from '@/components/landing/InstallationSection';
import ConfigurationSection from '@/components/landing/ConfigurationSection';
import QuickStartSection from '@/components/landing/QuickStartSection';
import ContactSection from '@/components/landing/ContactSection';
import PageFooter from '@/components/landing/PageFooter';

// Shared Components (Assuming path - adjust if necessary)
// If CommandDisplay doesn't exist or causes issues, comment it out
// and uncomment the DummyCommandDisplay
import CommandDisplay from '@/components/CommandDisplay';

// Fallback if CommandDisplay is not available
const DummyCommandDisplay = ({ command }: { command: string }) => (
  <div className="bg-gray-800 p-3 rounded mt-2 text-sm text-gray-300 font-mono">
    <span className="text-green-400">$</span> {command}
  </div>
);

export default function Home() {
  // Determine which CommandDisplay component to use
  // Check if the imported CommandDisplay is valid, otherwise use the dummy
  const ActualCommandDisplay = typeof CommandDisplay === 'function' ? CommandDisplay : DummyCommandDisplay;

  return (
    <Layout>
      {/* Navbar is placed inside the main content area managed by Layout */}
      <Navbar />

      {/* Page Sections */}
      {/* Removed redundant flex-1 container, Layout handles main area */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
        <HeroSection />
        <AboutSection />
        {/* Pass the determined CommandDisplay component */}
        <FeaturesSection CommandDisplay={ActualCommandDisplay} />
        <InstallationSection CommandDisplay={ActualCommandDisplay} />
        <ConfigurationSection CommandDisplay={ActualCommandDisplay} />
        <QuickStartSection CommandDisplay={ActualCommandDisplay} />
        <ContactSection />
      </div>

      {/* Footer is placed inside the main content area managed by Layout */}
      <PageFooter />
    </Layout>
  );
}
