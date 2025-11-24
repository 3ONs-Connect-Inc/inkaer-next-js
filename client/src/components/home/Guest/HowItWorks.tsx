
import React from 'react';

const HowItWorks: React.FC = () => {
   const steps = [
        {
      number: "1",
      title: "Share your role. We align on requirements.",
      description: "Tell us about your engineering role requirements, tech stack, and team culture fit.",
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "2",
      title: "We deliver 3–5 verified engineers within 48h.",
      description:
        "Each candidate comes with an Inkaer-verified portfolio, reviewed resume, and a recorded technical interview.",
      color: "from-green-500 to-green-600",
    },
    {
      number: "3",
      title: "You pick 1–2. We book final interviews in 24h.",
      description: "Select your preferred candidates and we’ll coordinate your final interviews within 24 hours.",
      color: "from-orange-500 to-orange-600",
    },
  ];
  return (
    <section id="how-it-works" className="py-6  bg-gray-50">
      <div className="mx-auto max-w-7xl padding">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-bold-5xl ">
            How It Works
          </h2>
        </div>
        
       <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${step.color}`}></div>
              <div className="p-4 sm:p-8">
                <div className="flex flex-col  sm:flex-row items-center mb-6">
                  <div className="flex h-6 sm:h-10 w-6 sm:w-10  mb-0 sm:mb-2   mr-0 sm:mr-2 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm sm:text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-bold-2xl">{step.title}</h3>
                </div>
                <p className="desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div> 
      </div>
    </section>
  );
};

export default HowItWorks;
