
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Languages = () => {
  const languages = [
    { 
      name: 'English',
      certifications: [
        { name: 'IELTS 6.5', level: 'Proficient' },
        { name: 'TOEIC 845', level: 'Advanced' }
      ]
    },
    {
      name: 'Vietnamese',
      certifications: [
        { name: 'Native', level: 'Fluent' }
      ]
    }
  ];

  return (
    <section id="languages" className="bg-gray-50 py-16 sm:py-20">
      <div className="section-container">
        <h2 className="section-title">Language Proficiency</h2>
        <p className="section-subtitle">Communication skills across multiple languages</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {languages.map((language, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{language.name}</h3>
                <ul className="space-y-3">
                  {language.certifications.map((cert, certIndex) => (
                    <li key={certIndex} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="flex-grow">{cert.name}</span>
                      <Badge variant="outline" className="ml-auto">
                        {cert.level}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
