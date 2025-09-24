import CandidatePackage from "../Guest/CandidatePackage";
import CaseStudy from "../Guest/CaseStudy";
import Endorsements from "../Guest/Endorsements";
import FAQ from "../Guest/FAQ";
import Features from "../Guest/Features";
import Hero from "../Guest/Hero";
import HowItWorks from "../Guest/HowItWorks";
import OrganizationalBenefits from "../Guest/OrganizationalBenefits";
import Pricing from "../Guest/Pricing";
import RequestShortlist from "../request-shortlist/RequestShortlist";
import Testimonials from "../Guest/Testimonials";
import VerificationDetails from "../Guest/VerificationDetails";

const LoggedInUser = () => {
  return (
    <div className="min-h-screen  bg-white">
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

export default LoggedInUser;
