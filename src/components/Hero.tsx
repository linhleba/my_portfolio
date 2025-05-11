
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-white pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="section-container">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Designer, Frontend Developer <br />& Problem Solver
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl">
            I design and code beautifully simple things, and I love what I do. <span className="inline-block">✨</span>
          </p>
          <div className="w-64 h-64 mb-10 animate-float">
            <img 
              src="https://mattfarley.ca/img/mf-avatar.svg" 
              alt="Avatar illustration"
              className="w-full h-full object-contain" 
            />
          </div>
          <div className="mt-10">
            <a href="#projects">
              <Button className="group btn-primary flex items-center gap-2">
                View my work
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-gray-100 to-transparent"></div>
    </section>
  );
};

export default Hero;
