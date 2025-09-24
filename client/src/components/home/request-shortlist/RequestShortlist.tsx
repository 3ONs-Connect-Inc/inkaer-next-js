"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/Modal";
import EmployerInfoSection from "./EmployerInfoSection";
import CandidateRequirementsSection from "./CandidateRequirementsSection";
import { useShortlistMutation } from "@/hooks/main/useShortlistMutation";
import { BtnLoader } from "@/components/ui/Spinner";
import { commonDomains } from "@/constants";
  

const RequestShortlist: React.FC = () => {
  const [candidateDomain, setCandidateDomain] = useState("");
  const [candidateOtherDomain, setCandidateOtherDomain] = useState("");
  const [industryValue, setIndustryValue] = useState("");
  const [industryOther, setIndustryOther] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [locationOther, setLocationOther] = useState("");
  const [urgencyValue, setUrgencyValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const mutation = useShortlistMutation();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";

    const domain = email.split("@")[1]?.toLowerCase();

    // Check if domain is too short
    if (domain && domain.length < 4) {
      return "Please enter a valid business email address";
    }

    // Reject common free/personal domains
    if (domain && commonDomains.includes(domain)) {
      return "Please use your work email address (personal email domains are not allowed)";
    }

    return "";
  };  

  const resetForm = () => {
    formRef.current?.reset(); // reset all uncontrolled inputs
    setCandidateDomain("");
    setCandidateOtherDomain("");
    setIndustryValue("");
    setIndustryOther("");
    setLocationValue("");
    setLocationOther("");
    setUrgencyValue("");
    setEmailError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: (formData.get("name") as string) || "",
      company: (formData.get("company") as string) || "",
      roleTitle: (formData.get("roleTitle") as string) || "",
      tools: (formData.get("tools") as string) || "",
      domain:
        candidateDomain === "others" ? candidateOtherDomain : candidateDomain,
      industry:
        industryValue === "others" ? industryOther : industryValue || "",
      location:
        locationValue === "others" ? locationOther : locationValue || "",
      urgency: urgencyValue || (formData.get("urgency") as string) || "",
      email: (formData.get("email") as string) || "",
    };

    const emailErr = validateEmail(payload.email);
    if (emailErr) {
      setEmailError(emailErr);
      return;
    }

    try {
      await mutation.mutateAsync(payload);
      setSubmitted(true);
      resetForm();
    } catch (error) {
      console.error("Shortlist request failed:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  const handleCloseModal = () => {
    setSubmitted(false);
    resetForm();
  };

  return (
    <section
      id="request-shortlist"
      className="py-20 sm:py-32 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative mx-auto max-w-7xl padding">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-bold-white leading-tight text-white mb-12">
              Request Your Shortlist
            </h2>
            <p className="mt-6 desc-white max-w-2xl mx-auto">
              Tell us what you need and get your verified engineer shortlist in
              48 hours.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-3 sm:p-12 relative">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-3xl"></div>

            <div className="relative">
              <form ref={formRef} className="space-y-8" onSubmit={handleSubmit}>
                <EmployerInfoSection
                  industryValue={industryValue}
                  setIndustryValue={setIndustryValue}
                  industryOther={industryOther}
                  setIndustryOther={setIndustryOther}
                  locationValue={locationValue}
                  setLocationValue={setLocationValue}
                  locationOther={locationOther}
                  setLocationOther={setLocationOther}
                  emailError={emailError}
                  setEmailError={setEmailError}
                  validateEmail={validateEmail}
                  urgencyValue={urgencyValue}
                  setUrgencyValue={setUrgencyValue}
                />

                <CandidateRequirementsSection
                  candidateDomain={candidateDomain}
                  setCandidateDomain={setCandidateDomain}
                  candidateOtherDomain={candidateOtherDomain}
                  setCandidateOtherDomain={setCandidateOtherDomain}
                />

                <div className="pt-4 flex flex-col items-center">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={mutation.isPending}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    {mutation.isPending ? <BtnLoader /> : "Get My Shortlist"}
                  </Button>
                  <p className="text-sm text-gray-500 mt-3 text-center">
                    We&apos;ll reply within 24 hours.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={submitted}
        title="Thank you!"
        message="We’ve received your shortlist request. Check your email for confirmation."
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default RequestShortlist;
