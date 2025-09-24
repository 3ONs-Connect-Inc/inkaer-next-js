"use client";


import { BtnLoader } from "@/components/ui/Spinner";
import { useContactMutation } from "@/hooks/main/useContactMutation";
import type { ContactFormData } from "@/utils/actions/contact";

interface ContactFormProps {
  formData: ContactFormData;
    handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isPending: boolean;
}

const ContactForm:React.FC<ContactFormProps> = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    isPending,  
    isSuccess,
    isError,
  } = useContactMutation();

  return (
    <div className="mt-12 lg:mt-0">
      <div className="bg-white p-3 sm:p-8 rounded-lg shadow-lg border border-gray-200">
        <h3 className="text-bold-2xl font-semibold text-gray-900 mb-6">
          Send us a message
        </h3>
        
        {isSuccess && (
          <p className="text-green-600 font-medium mb-4">
            ✅ Thank you! Your message has been sent.
          </p>
        )}
        {isError && (
          <p className="text-red-600 font-medium mb-4">
            ❌ Something went wrong. Please try again.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="john@company.com"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your Company"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="How can we help you?"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tell us about your hiring needs..."
            />
          </div>

          <button
            type="submit"
            className="w-full btn-responsive bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
          >
            {isPending ? <BtnLoader /> : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
