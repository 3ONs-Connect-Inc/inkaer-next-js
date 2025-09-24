"use client";
import { tabs } from '@/constants';
import React, {  useState } from 'react';
import { TabsNav } from '../TabsNav';


const CandidatePackage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('interview');

  return (
    <section id="candidate-package" className="py-20  bg-gray-50">
      <div className="mx-auto max-w-7xl padding">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-bold-5xl">
            Candidate Package Sample
          </h2>
          <p className="mt-6 desc">
            See the three deliverables you'll receive for every candidate in your shortlist
          </p>
        </div>  

        <div className="mt-16">
             <TabsNav activeTab={activeTab} setActiveTab={setActiveTab} />
          {/* Tab Content */}
          <div className="mt-8">
            {tabs.find(tab => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidatePackage;