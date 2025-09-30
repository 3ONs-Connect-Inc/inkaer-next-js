
import type { Metadata } from "next";
import BlogDetailClient from "../../BlogDetailClient";
import { getBlogPostsServer, getBlogPostBySlugServer } from "@/firebase/main/blogService.server";

type Props = {
  params: { id: string; slug: string };
};

// Generate all blog paths at build time
export async function generateStaticParams() {
  const posts = await getBlogPostsServer();
  return posts.map((post) => ({
    id: post.id,
    slug: post.slug,
  }));
}

// Generate SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPostBySlugServer(params.slug);

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


export default function BlogDetailPage({ params }: Props) {
  return <BlogDetailClient slug={params.slug} />;
}
