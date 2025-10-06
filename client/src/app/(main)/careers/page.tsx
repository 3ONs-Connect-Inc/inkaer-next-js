
import { Metadata } from "next";
import Career from "./Career";
import { PageLoader } from "@/components/ui/Spinner";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Careers – Inkaer",
  description:
    "Discover exciting career opportunities at Inkaer. Join our innovative team transforming the hiring industry. Browse open roles in tech, design, marketing, and more — and apply today!",
  openGraph: {
    title: "Careers – Inkaer",
    description:
      "Discover exciting career opportunities at Inkaer. Join our innovative team transforming the hiring industry. Browse open roles in tech, design, marketing, and more — and apply today!",
    url: "https://inkaer.com/careers",
    siteName: "Inkaer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers – Inkaer",
    description:
      "Discover exciting career opportunities at Inkaer. Join our innovative team transforming the hiring industry. Browse open roles in tech, design, marketing, and more — and apply today!",
  },
};

export default function CareersPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Career />
    </Suspense>
  );

}
