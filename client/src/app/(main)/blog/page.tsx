import type { Metadata } from "next";
import { getBlogHeader, getBlogPosts } from "@/firebase/main/blogService";
import { Suspense } from "react";
import { PageLoader } from "@/components/ui/Spinner";
import Blog from "@/components/Blog";

export async function generateMetadata(): Promise<Metadata> {
  let header: any = null;
  let posts: any[] = [];

  try {
    header = await getBlogHeader();
    posts = await getBlogPosts();
  } catch (e) {
    console.error("Metadata fetch error:", e);
  }

  const title = `${header?.heroTitle || "Blog"} – Inkaer`;
  const description =
    header?.heroSubtitle ||
    posts?.[0]?.excerpt?.slice(0, 150) + "…" ||
    "Read the latest articles, insights, and engineering trends from Inkaer.";

  const author = posts?.[0]?.author || "Inkaer";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: "https://inkaer.com/blog",
      siteName: "Inkaer",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    other: {
      author, 
    },
  };
}

export default function BlogPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Blog  />
    </Suspense>
  );
}


