
import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/constants';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="relative group">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent"></div>

        {/* Scrolling container */}
        <div className="flex animate-scroll space-x-6 pl-6 group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card
              key={index}
              className="w-[350px] flex-none bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-4">
                  &quot;{testimonial.content}&quot;
                </blockquote>
                <div className="border-t border-gray-100 pt-3">
                  <div className="text-xs font-medium text-blue-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.location}</div>
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
