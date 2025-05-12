
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, FileText } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    window.open('https://example.com/resume.pdf', '_blank');
  };

  return (
    <section id="hero" className="bg-white pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40 relative">
      <div className="section-container max-w-screen-xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
            Frontend Developer <br className="hidden sm:block" />& Problem Solver
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-10 max-w-4xl mx-auto">
            I code beautifully simple things, and I love what I do. <span className="inline-block">✨</span>
          </p>
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mb-10 animate-float">
            <img 
              src="https://mattfarley.ca/img/mf-avatar.svg" 
              alt="Avatar illustration"
              className="w-full h-full object-contain" 
            />
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button 
              className="group btn-primary flex items-center gap-2 text-base md:text-lg py-6 px-8"
              onClick={scrollToProjects}
            >
              View my work
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              className="group btn-outline flex items-center gap-2 text-base md:text-lg py-6 px-8"
              variant="outline"
              onClick={openResume}
            >
              Resume
              <FileText size={20} className="group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-gray-100 to-transparent"></div>
    </section>
  );
};

export default Hero;
