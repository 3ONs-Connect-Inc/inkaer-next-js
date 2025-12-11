
import type { Metadata } from "next";
import PortfolioViewerPage from "./PortfolioViewerPage";


export const metadata: Metadata = {
  title: "Inkaer Portfolio – Verified Engineering Talent Showcase",
  description:
    "Explore real engineering portfolios from verified Inkaer talent. Review skills, past projects, and technical strengths to help you hire top engineers with confidence.",
  openGraph: {
    title: "Inkaer Portfolio – Verified Engineering Talent Showcase",
    description:
      "Browse detailed engineering portfolios from vetted Inkaer talent. See skills, experience, and project work to make informed hiring decisions.",
    url: "https://inkaer.com/portfolio",
    siteName: "Inkaer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inkaer Portfolio – Verified Engineering Talent Showcase",
    description:
      "Explore engineering portfolios from verified Inkaer talent and discover top engineers ready to join your team.",
  },
};




export default function PortfolioViewer() {
  return <PortfolioViewerPage />;
}
  