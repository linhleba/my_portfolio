import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGithubRepos, type GithubRepo } from '@/utils/github';
import { useToast } from '@/hooks/use-toast';

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
  const [displayMode, setDisplayMode] = useState<'featured' | 'github'>('featured');
  const { toast } = useToast();
  
  // Replace with your actual GitHub username
  const githubUsername = 'yourusername';
  const { data: githubRepos, isLoading, error } = useGithubRepos(githubUsername);
  
  // Show error toast if GitHub fetch fails
  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "Failed to load GitHub repositories. Showing featured projects instead.",
        variant: "destructive",
      });
      setDisplayMode('featured');
    }
  }, [error, toast]);

  return (
    <section id="projects" className="bg-gray-50 py-24 scroll-mt-16">
      <div className="section-container">
        <h2 className="section-title">My Recent Work</h2>
        <p className="section-subtitle">
          Here are a few design projects I've worked on recently. Want to see more? 
          <a href="mailto:email@example.com" className="text-primary hover:underline"> Email me</a>.
        </p>
        
        <div className="flex justify-center mt-8 mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                displayMode === 'featured' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setDisplayMode('featured')}
            >
              Featured Projects
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                displayMode === 'github' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setDisplayMode('github')}
            >
              GitHub Repositories
            </button>
          </div>
        </div>

        {displayMode === 'github' && isLoading && (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-gray-600">Loading GitHub repositories...</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {displayMode === 'featured' && 
            projects.map((project, index) => (
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

          {displayMode === 'github' && !isLoading && githubRepos?.map((repo: GithubRepo) => (
            <Card key={repo.id} className="card-hover overflow-hidden border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{repo.name}</h3>
                <p className="text-muted-foreground mb-4">
                  {repo.description || "No description available"}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.language && (
                    <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                      {repo.language}
                    </span>
                  )}
                  {repo.topics?.slice(0, 3).map((topic, index) => (
                    <span 
                      key={index}
                      className="bg-secondary/10 text-secondary-foreground text-xs px-3 py-1 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                  {repo.stargazers_count > 0 && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      {repo.stargazers_count}
                    </span>
                  )}
                </div>
                <div className="flex gap-4 mt-4">
                  {repo.homepage && (
                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium hover:text-primary">
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                  )}
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium hover:text-primary">
                    <Github size={16} className="mr-1" /> View Code
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            className="btn-outline"
            onClick={() => window.open(`https://github.com/${githubUsername}?tab=repositories`, '_blank')}
          >
            See More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
