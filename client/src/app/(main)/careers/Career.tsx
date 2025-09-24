"use client";

import HeroSection from "@/components/careers/HeroSection";
import WhyWorkSection from "@/components/careers/WhyWorkSection";
import { useCareersMeta } from "@/hooks/main/useCareers";
// import OpenPositions from "@/components/careers/OpenPositions";



export default function Career() {
  // const { data: openings = [] } = useCareerPosts()
  const { data: meta } = useCareersMeta();

  return (
    <div className="min-h-screen bg-white">
      <main className="py-16">
        <HeroSection title={meta?.heroTitle} subtitle={meta?.heroSubtitle} />
        <WhyWorkSection />
        {/* 
        <OpenPositions
          jobs={openings}
          footerTitle={meta?.footerTitle}
          footerSubtitle={meta?.footerSubtitle}
        />  
        */}
      </main>
    </div>  
  );
}
