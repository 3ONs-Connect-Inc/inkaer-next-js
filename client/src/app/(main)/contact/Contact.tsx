"use client";

import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import Modal from "@/components/Modal";
import type { ContactFormData } from "@/utils/actions/contact";
import { useState } from "react";
import { useContactMutation } from "@/hooks/main/useContactMutation";


const initialForm: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const mutation = useContactMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData, {
      onSuccess: () => {
        setSubmitted(true);
        setFormData(initialForm);
      },
      onError: (err: any) => {
        alert("Something went wrong: " + err.message);
      },
    });
  };

  const handleCloseModal = () => {
    setSubmitted(false);
    setFormData(initialForm);
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="py-16">
        <ContactHero />

        <section className="py-16">
          <div className="mx-auto max-w-7xl padding lg:grid lg:grid-cols-2 lg:gap-16">
            <ContactInfo />
            <ContactForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isPending={mutation.isPending}
            />
          </div>
        </section>
      </main>

      <Modal
        isOpen={submitted}
        title="Thank you!"
        message="We’ve received your message. Our team will get back to you shortly."
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Contact;
