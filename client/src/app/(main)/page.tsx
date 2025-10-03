
import type { Metadata } from "next";
import HomeContent from "./HomeContent";
import ScrollToHash from "../../components/ScrollToHash";

export const metadata: Metadata = {
  title: "Hire Engineering Talent Faster | Inkaer",
  description:
    "Inkaer helps companies hire top engineering talent with AI-powered candidate verification, industry fit tagging, and skill-based assessments. Build smarter teams, faster.",
  openGraph: {
    title: "Hire Engineering Talent Faster | Inkaer",
    description:
      "Discover how Inkaer helps companies find, verify, and hire engineering talent more effectively with AI-driven tools and interview validation.",
    url: "https://inkaer.com",
    siteName: "Inkaer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Engineering Talent Faster | Inkaer",
    description:
      "Smarter, faster hiring with Inkaer. Verified engineering candidates, industry-fit tagging, and AI-powered hiring tools.",
  },
};

export default function HomePage() {
  return (
    <>
      <ScrollToHash />  
      <HomeContent />
    </>
  );
}