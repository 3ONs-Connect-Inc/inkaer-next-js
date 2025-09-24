import { api } from "./api";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  const response = await api.post("/contact", data);
  return response.data;
};
