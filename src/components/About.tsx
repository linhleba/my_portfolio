
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
    <section id="about" className="bg-gray-50 py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="section-container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Hi, I'm Linh</h2>
        <p className="section-subtitle text-lg sm:text-xl md:text-2xl max-w-5xl mx-auto">
        Innovative web developer with over 3 years of experience in NextJS, ReactJS, and Angular and specialize in creating responsive, high-performance web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 md:mt-16">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg h-full">
              <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col">
                <div className="flex justify-center mb-2">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-base sm:text-lg">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
