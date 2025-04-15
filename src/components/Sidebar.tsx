import React, { forwardRef } from 'react';

const Sidebar = forwardRef<HTMLDivElement>((props, ref) => (
  <aside
    ref={ref}
    id="sidebar"
    className="h-screen w-64 overflow-y-auto bg-black/40 backdrop-blur-xl border-r border-purple-900/40 z-40 shadow-2xl hidden lg:block fixed left-0 top-0"
  >
    <div className="documentation-sidebar p-8">
      <h3 className="text-xl font-bold mb-8 text-purple-400 tracking-wide">Documentation</h3>
      <nav className="space-y-6 text-base">
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
));

Sidebar.displayName = 'Sidebar';
export default Sidebar;
