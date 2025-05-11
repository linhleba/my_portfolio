
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      position: 'Front-End Developer',
      company: 'Tech Corp',
      location: 'Hanoi',
      period: 'Jan 2023–Present',
      achievements: [
        'Built responsive interfaces with React/Tailwind CSS.',
        'Integrated MySQL APIs.',
        'Improved performance by 20%.'
      ],
      current: true
    },
    {
      position: 'Junior Developer',
      company: 'Startup Inc',
      location: 'Ho Chi Minh City',
      period: 'Jun 2021–Dec 2022',
      achievements: [
        'Built UI with JavaScript/Bootstrap.',
        'Conducted user testing.'
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">My journey as a web developer</p>
        
        <div className="relative mt-12 ml-4 md:ml-8 border-l-2 border-primary/30 pl-6 md:pl-10 space-y-12 pb-6">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline node */}
              <div className="absolute -left-[34px] md:-left-[46px] top-0 w-6 h-6 md:w-8 md:h-8 bg-white rounded-full border-2 border-primary flex items-center justify-center">
                <Briefcase size={16} className="text-primary" />
              </div>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-bold text-lg md:text-xl">{exp.position}</h3>
                      <p className="text-muted-foreground">{exp.company} • {exp.location}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                      {exp.current && (
                        <Badge variant="secondary" className="ml-2">Current</Badge>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mt-4">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
