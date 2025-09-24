import RequestShortlist from "../request-shortlist/RequestShortlist";
import CandidatePackage from "./CandidatePackage";
import CaseStudy from "./CaseStudy";
import Endorsements from "./Endorsements";
import FAQ from "./FAQ";
import Features from "./Features";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import OrganizationalBenefits from "./OrganizationalBenefits";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import VerificationDetails from "./VerificationDetails";

const Guest = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Endorsements />
        <Testimonials />
        <Features />
        <OrganizationalBenefits />
        <HowItWorks />
        <CandidatePackage />
        <VerificationDetails />
        <Pricing />
        <FAQ />
        <CaseStudy />
        <RequestShortlist />
      </main>
    </div>
  );
};

export default Guest;
