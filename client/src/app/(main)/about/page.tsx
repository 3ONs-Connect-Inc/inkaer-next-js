
import type { Metadata } from "next";
import About from "./About";

export const metadata: Metadata = {
  title: "About – Inkaer",
  description:
    "Learn about Inkaer’s mission, values, and the team behind our platform. Discover how we’re transforming the way companies hire top engineering talent.",
  openGraph: {
    title: "About – Inkaer",
    description:
      "Learn about Inkaer’s mission, values, and the team behind our platform. Discover how we’re transforming the way companies hire top engineering talent.",
    url: "https://inkaer.com/about",
    siteName: "Inkaer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About – Inkaer",
    description:
      "Learn about Inkaer’s mission, values, and the team behind our platform.",
  },
};
export default function AboutPage() {
  return <About />;
}