
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div>
            <a href="#" className="text-2xl font-bold text-primary">Your Name</a>
          </div>
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#about" className="text-gray-700 hover:text-primary font-medium">About</a>
            <a href="#skills" className="text-gray-700 hover:text-primary font-medium">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-primary font-medium">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-primary font-medium">Contact</a>
            <Button variant="outline">Resume</Button>
          </nav>
          <div className="md:hidden flex items-center">
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
