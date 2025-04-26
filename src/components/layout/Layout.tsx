import React, { useState, useRef, ReactNode } from 'react';
import Sidebar from '@/components/Sidebar'; // Adjust path if necessary

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => setIsSidebarExpanded((prev: boolean) => !prev);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100"> {/* Updated background & text color */}
      {/* Sidebar */}
      <Sidebar
        ref={sidebarRef}
        isExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content Area */}
      <main
        className={`flex-1 min-h-screen transition-all duration-300 ease-in-out flex flex-col ${isSidebarExpanded ? 'ml-64' : 'ml-20'}`}
      >
        {children} {/* Render the page content passed as children */}
      </main>
    </div>
  );
};

export default Layout;
