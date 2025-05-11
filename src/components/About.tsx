
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, BarChart } from 'lucide-react';

const services = [
  {
    icon: <Palette size={40} className="text-primary mb-5" />,
    title: "Design",
    description: "I create designs that are both beautiful and functional, focusing on strong typography and clean design patterns."
  },
  {
    icon: <Code size={40} className="text-primary mb-5" />,
    title: "Development",
    description: "I code things from scratch and enjoy bringing ideas to life in the browser using modern technologies."
  },
  {
    icon: <BarChart size={40} className="text-primary mb-5" />,
    title: "Strategy",
    description: "My approach to design and development is strategic, focusing on users' needs and business goals."
  }
];

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-24">
      <div className="section-container">
        <h2 className="section-title">Hi, I'm Your Name. Nice to meet you.</h2>
        <p className="section-subtitle">
          Based in San Francisco, I'm a front-end developer passionate about building 
          accessible web apps that users love. I specialize in creating digital experiences 
          that are both functional and beautiful.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
