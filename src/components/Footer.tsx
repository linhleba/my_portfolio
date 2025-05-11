
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  // Replace with your own social media links
  const githubUsername = 'yourusername';

  return (
    <footer className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a 
              href={`https://github.com/${githubUsername}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/yourname" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            Designed and built with ❤️ by Linh Le Ba © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
