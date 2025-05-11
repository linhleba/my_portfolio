
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
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="section-container max-w-screen-xl">
        <h2 className="section-title">Testimonials</h2>
        <p className="section-subtitle">
          Here's what people are saying about working with me.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg h-full">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-4 sm:mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="italic text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">{testimonial.quote}</p>
                  <div className="mt-auto">
                    <p className="font-bold text-sm sm:text-base">{testimonial.author}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
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
