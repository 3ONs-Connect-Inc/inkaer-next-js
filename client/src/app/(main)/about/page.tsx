
import type { Metadata } from "next";
import About from "./About";

export const metadata: Metadata = {
  title: "About Inkaer — Mission, Team & Values",
  description:
    "Learn about Inkaer’s mission to improve engineering hiring. Meet our team and discover how we combine verification, interviews, and tagging to create better hiring outcomes.",
  openGraph: {
    title: "About Inkaer — Mission, Team & Values",
    description:
      "Discover Inkaer: our mission to refine engineering hiring, our team, and core values that guide product decisions.",
    url: "https://inkaer.com/about",
    siteName: "Inkaer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Inkaer — Mission, Team & Values",
    description:
      "Learn about Inkaer’s mission, team, and how we improve engineering hiring.",
  },
};


export default function AboutPage() {
  return <About />;
}