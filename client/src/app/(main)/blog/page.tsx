import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import { PageLoader } from "@/components/ui/Spinner";
import { Suspense } from "react";
import { getBlogHeaderServer, getBlogPostsServer } from "@/firebase/main/adminServer";

// Dynamic metadata
export async function generateMetadata(): Promise<Metadata> {
  const header = await getBlogHeaderServer();
 const posts = await getBlogPostsServer();

  return {
    title: `${header?.heroTitle || "Blog"} – Inkaer`,
    description:
      header?.heroSubtitle ||
      posts?.[0]?.excerpt?.slice(0, 150) + "…" ||
      "Read the latest articles, insights, and engineering trends from Inkaer.",
    openGraph: {
      title: header?.heroTitle || "Blog – Inkaer",
      description:
        header?.heroSubtitle ||
        posts?.[0]?.excerpt?.slice(0, 150) + "…" ||
        "Read the latest articles, insights, and engineering trends from Inkaer.",
      type: "article",
      authors: [posts?.[0]?.author || "Inkaer"],
    },
    twitter: {
      card: "summary_large_image",
      title: header?.heroTitle || "Blog – Inkaer",
      description:
        header?.heroSubtitle ||
      posts?.[0]?.excerpt?.slice(0, 150) + "…" ||
        "Read the latest articles, insights, and engineering trends from Inkaer.",
    },
  };
}

export default async function BlogPage() {
  const initialMeta = await getBlogHeaderServer();

  return (
    <Suspense fallback={<PageLoader />}>
      <BlogClient initialMeta={initialMeta} />
    </Suspense>
  );
}
