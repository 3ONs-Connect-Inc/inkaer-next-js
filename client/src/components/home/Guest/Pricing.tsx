
import React from 'react';

const Pricing: React.FC = () => {


  return (
    <section id="pricing" className="py-20  bg-white">
      <div className="mx-auto max-w-7xl padding">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-bold-5xl mb-6">
        Pricing
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 px-8 py-6 mb-8 inline-block">
            <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent ">
            Success-Based Fee
            </div>
          </div>
          
          <p className="desc leading-8  max-w-2xl mx-auto">
            Pay only when you hire. No upfront costs, no monthly subscriptions. Just verified engineers delivered fast.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
