import type { Metadata } from "next";
import { Suspense } from "react";
import { PageLoader } from "@/components/ui/Spinner";
import Blog from "./BlogPage";


export const metadata: Metadata = {
  title: "Inkaer Blog – Engineering Insights and Updates",
  description:
    "Explore the latest articles, engineering trends, and insights from Inkaer’s experts.",
  openGraph: {
    title: "Inkaer Blog – Engineering Insights and Updates",
    description:
      "Explore the latest articles, engineering trends, and insights from Inkaer’s experts.",
    type: "website",
    url: "https://inkaer.com/blog",
    siteName: "Inkaer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inkaer Blog – Engineering Insights and Updates",
    description:
      "Explore the latest articles, engineering trends, and insights from Inkaer’s experts.",
  },
};  

export default function BlogPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Blog />
    </Suspense>
  );
}
