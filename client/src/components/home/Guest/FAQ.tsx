import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/constants';

const FAQ: React.FC = () => {
 
  return (
    <section id="faq" className="py-20 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl padding">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-bold-5xl  mb-8">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 desc leading-8max-w-2xl mx-auto">
              Everything you need to know about our verified engineer delivery service.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible key={index} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <CollapsibleTrigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200 group">
                  <h3 className="desc-bold  group-hover:text-blue-600 transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <ChevronDown className="h-5 w-5 text-gray-500 group-hover:text-blue-600 transition-all duration-200 group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-small leading-7 mt-3">
                      {faq.answer}
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="desc mb-4">
              Still have questions?
            </p>
            <a 
              href="/contact"
              className="btn-responsive inline-flex items-center bg-blue-600 text-lg text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;