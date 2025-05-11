
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certificates = [
    {
      title: 'React Developer Certificate',
      issuer: 'Coursera',
      date: 'June 2024',
      link: 'https://coursera.org/verify/xyz',
      hasVerification: true
    },
    {
      title: 'UI/UX Design Fundamentals',
      issuer: 'Udemy',
      date: 'March 2023',
      hasVerification: false
    }
  ];

  return (
    <section id="certifications" className="py-16 sm:py-20">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">Professional qualifications and achievements</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
          {certificates.map((cert, index) => (
            <Card key={index} className="card-hover border border-gray-200 overflow-hidden">
              <CardHeader className="pb-2">
                <Badge className="self-start mb-2">{cert.issuer}</Badge>
                <h3 className="font-bold text-lg md:text-xl">{cert.title}</h3>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center text-muted-foreground mt-1">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{cert.date}</span>
                </div>
              </CardContent>
              
              {cert.hasVerification && (
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Verify Certificate
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
