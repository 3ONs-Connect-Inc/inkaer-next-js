import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { verificationItems } from '@/constants';

const VerificationDetails: React.FC = () => {


  return (
    <section id="verification-details" className="py-10 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-7xl padding">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-bold-5xl ">
            What's Inside a Verification
          </h2>
          <p className="mt-6 desc">
            Every candidate goes through our comprehensive verification process
          </p>
        </div>
        
        <div className="mt-10 mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {verificationItems.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline">
                  <div className="flex flex-col xxs:flex-row items-center gap-4 text-left">
                    <div className={`p-3 rounded-lg ${item.bgColor}`}>
                      <item.icon className={`w-4 sm:w-6 h-4 sm:h-6 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="desc-bold">{item.title}</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <p className="desc leading-relaxed flex text-center">
                    {item.description}
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

export default VerificationDetails;