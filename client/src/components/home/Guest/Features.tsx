
import React from 'react';
import { features } from '@/constants';

const Features: React.FC = () => {

  return (
    <section id="features" className="py-3 sm:py-6 bg-white">
      <div className="mx-auto max-w-7xl padding">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-bold-5xl">
            Why Teams Choose Inkaer
          </h2>
        </div>
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-4 sm:p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className={`text-5xl font-extrabold mb-4 bg-gradient-to-r
                 ${feature.color === 'text-green-600' ? 
                 'from-green-500 to-green-700'
                  : feature.color === 'text-blue-600' 
                  ? 'from-blue-500 to-blue-700' 
                  : 'from-orange-500 to-orange-700'}
                   bg-clip-text text-transparent`}>
                {feature.number}
              </div>
              <h3 className="text-bold-2xl  mb-4">
                {feature.title}</h3>
              <p className="desc">
                {feature.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Features;
