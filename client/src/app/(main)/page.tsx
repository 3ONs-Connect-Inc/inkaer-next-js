
import type { Metadata } from "next";
import HomeContent from "./HomeContent";
import ScrollToHash from "../ScrollToHash";

export const metadata: Metadata = {
  title: "Home – Inkaer",
  description:
    "Inkaer helps companies hire top engineering talent faster and smarter. Discover our platform, mission, and how we're redefining tech hiring.",
  openGraph: {
    title: "Home – Inkaer",
    description:
      "Inkaer helps companies hire top engineering talent faster and smarter. Discover our platform, mission, and how we're redefining tech hiring.",
    type: "website",
    siteName: "Inkaer",
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