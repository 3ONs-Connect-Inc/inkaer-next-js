import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { benefits } from '@/constants';

const OrganizationalBenefits: React.FC = () => {

  return ( 
    <section className="py-10 sm:py-32 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="mx-auto max-w-7xl padding">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-bold-5xl flex justify-center text-center">
            Organizational Benefits
          </h2>
          <p className="mt-6 desc">
            Streamline your hiring process and focus on what matters most
          </p>
        </div>
        
        <div className="mt-8 mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {benefits.map((benefit) => (
              <AccordionItem 
                key={benefit.id} 
                value={benefit.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <AccordionTrigger className="px-2 sm:px-8 py-6 hover:no-underline">
                  <div className="flex flex-col xxs:flex-row items-center gap-2 sm:gap-4 text-left">
                    <div className={`p-3 rounded-lg ${benefit.bgColor}`}>
                      <benefit.icon className={` w-4 sm:w-6 h-4 sm:h-6 ${benefit.color}`} />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-xl font-semibold text-gray-900">{benefit.title}</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-2 sm:px-8 pb-6">
                  <p className="text-sm sm:text-lg  text-gray-600 flex justify-center text-center leading-relaxed ">
                    {benefit.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default OrganizationalBenefits;