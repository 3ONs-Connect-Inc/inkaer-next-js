
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { type ContactFormData, submitContactForm } from "@/utils/actions/contact";

export const useContactMutation = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",  
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      console.log("✅ Contact form submitted successfully");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    },
    onError: (error) => {
      console.error("❌ Contact form submission failed:", error);
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return {
...mutation,
  formData,
    handleChange,
    handleSubmit,
  };
};
