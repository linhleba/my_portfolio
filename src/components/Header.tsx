
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { X, Menu } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div>
            <a href="#" className="text-xl sm:text-2xl font-bold text-primary">Your Name</a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary font-medium">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-primary font-medium">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-primary font-medium">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary font-medium">Contact</button>
            <Button variant="outline">Resume</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="p-2" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && isMobile && (
          <div className="md:hidden bg-white py-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="px-4 py-2 text-gray-700 hover:text-primary font-medium">About</button>
              <button onClick={() => scrollToSection('skills')} className="px-4 py-2 text-gray-700 hover:text-primary font-medium">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="px-4 py-2 text-gray-700 hover:text-primary font-medium">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="px-4 py-2 text-gray-700 hover:text-primary font-medium">Contact</button>
              <div className="px-4 py-2">
                <Button variant="outline" className="w-full">Resume</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
