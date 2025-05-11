
import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="bg-primary text-white py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Interested in collaborating?</h2>
          <p className="text-xl mb-10 opacity-90">
            I'm always open to discussing product design work or partnership opportunities.
          </p>
          
          <Button className="bg-white text-primary hover:bg-gray-100 mb-16">
            Start a conversation
          </Button>
          
          <div className="pt-10 border-t border-white/20">
            <h3 className="text-2xl font-bold mb-6">Connect with me</h3>
            <div className="flex justify-center space-x-8">
              <a href="mailto:your.email@example.com" className="hover:text-secondary transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://github.com/yourusername" className="hover:text-secondary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" className="hover:text-secondary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com/yourusername" className="hover:text-secondary transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
