
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "Working with them was a fantastic experience. They delivered a beautiful website that perfectly represents my brand.",
    author: "Jane Smith",
    position: "CEO, Design Studio",
    avatar: "https://placehold.co/100/6e07f3/fff?text=JS"
  },
  {
    quote: "Their attention to detail and creative problem-solving made all the difference in our project. Highly recommended!",
    author: "Alex Johnson",
    position: "Marketing Director",
    avatar: "https://placehold.co/100/6e07f3/fff?text=AJ"
  },
  {
    quote: "They not only built a website that looks great but also focused on performance and accessibility. A true professional.",
    author: "Michael Brown",
    position: "Product Manager",
    avatar: "https://placehold.co/100/6e07f3/fff?text=MB"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-white py-24">
      <div className="section-container">
        <h2 className="section-title">Testimonials</h2>
        <p className="section-subtitle">
          Here's what people are saying about working with me.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="italic text-gray-700 mb-6">"{testimonial.quote}"</p>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
