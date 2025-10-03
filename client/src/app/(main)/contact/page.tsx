import { Metadata } from "next";
import Contact from "./Contact";

export const metadata: Metadata = {
  title: "Contact Inkaer — Support, Partnerships & Careers",
  description:
    "Contact Inkaer for support, partnership inquiries, career opportunities, or press. We're here to help companies hire engineering talent faster.",
  openGraph: {
    title: "Contact Inkaer — Support, Partnerships & Careers",
    description:
      "Get in touch with Inkaer for support, partnerships, or career opportunities.",
    url: "https://inkaer.com/contact",
    siteName: "Inkaer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Inkaer — Support, Partnerships & Careers",
    description:
      "Reach out to Inkaer for support, partnerships, careers, or press inquiries.",
  },
};


export default function ContactPage() {
  return <Contact />;
}
