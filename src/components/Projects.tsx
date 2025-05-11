
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "Project One",
    description: "A web application built with React and Tailwind CSS that allows users to manage their daily tasks.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Project+1",
    tags: ["React", "Tailwind CSS", "Firebase"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with product filtering, cart functionality, and a seamless checkout process.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Project+2",
    tags: ["Next.js", "TypeScript", "Stripe"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    title: "Project Three",
    description: "A real-time dashboard that visualizes data from multiple sources with customizable widgets.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Project+3",
    tags: ["Vue.js", "D3.js", "Node.js"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    title: "Project Four",
    description: "A mobile-responsive landing page for a startup with animations and interactive elements.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Project+4",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    title: "Project Five",
    description: "A blog platform with a custom CMS that allows content creators to publish and manage articles.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Project+5",
    tags: ["React", "GraphQL", "MongoDB"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    title: "Project Six",
    description: "A weather application that provides real-time forecasts based on the user's location.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Project+6",
    tags: ["React", "API Integration", "Geolocation"],
    liveLink: "#",
    codeLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-24">
      <div className="section-container">
        <h2 className="section-title">My Recent Work</h2>
        <p className="section-subtitle">
          Here are a few design projects I've worked on recently. Want to see more? 
          <a href="mailto:email@example.com" className="text-primary hover:underline"> Email me</a>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden border-0 shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a href={project.liveLink} className="flex items-center text-sm font-medium hover:text-primary">
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  <a href={project.codeLink} className="flex items-center text-sm font-medium hover:text-primary">
                    <Github size={16} className="mr-1" /> Code
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="btn-outline">See More Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
