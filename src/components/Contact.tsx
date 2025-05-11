
import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="bg-primary text-white py-16 sm:py-20 md:py-24 lg:py-32 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Interested in collaborating?</h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-10 opacity-90">
            I'm always open to discussing product design work or partnership opportunities.
          </p>
          
          <Button className="bg-white text-primary hover:bg-gray-100 mb-12 sm:mb-16 py-6 px-8 text-lg">
            Start a conversation
          </Button>
          
          <div className="pt-8 sm:pt-10 border-t border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Connect with me</h3>
            <div className="flex justify-center space-x-6 sm:space-x-8">
              <a href="mailto:your.email@example.com" className="hover:text-secondary transition-colors p-2">
                <Mail size={24} className="sm:size-[28px]" />
              </a>
              <a href="https://github.com/yourusername" className="hover:text-secondary transition-colors p-2">
                <Github size={24} className="sm:size-[28px]" />
              </a>
              <a href="https://linkedin.com/in/yourusername" className="hover:text-secondary transition-colors p-2">
                <Linkedin size={24} className="sm:size-[28px]" />
              </a>
              <a href="https://twitter.com/yourusername" className="hover:text-secondary transition-colors p-2">
                <Twitter size={24} className="sm:size-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
