import type { Metadata } from "next";
import BlogDetailClient from "../../BlogDetailClient";
import { getBlogPostsServer, getBlogPostBySlugServer } from "@/firebase/main/blogService.server";

type Params = Promise<{ id: string; slug: string }>;


// Generate all blog paths at build time
export async function generateStaticParams() {
  const posts = await getBlogPostsServer();
  return posts.map((post) => ({
    id: post.id,
    slug: post.slug,
  }));
}

// Generate SEO metadata
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params; // ✅ await params
  const post = await getBlogPostBySlugServer(slug);

  if (!post) {
    return {
      title: "Post not found – Inkaer",
      description: "The article you’re looking for doesn’t exist.",
    };
  }

  return {
    title: `${post.title} – Inkaer`,
    description: post.excerpt || `${post.title} - Read the full article on Inkaer.`,
  };
}

// Blog detail page
export default async function BlogDetailPage({ params }: { params: Params }) {
  const { slug } = await params; // ✅ await params
  return <BlogDetailClient slug={slug} />;
}
