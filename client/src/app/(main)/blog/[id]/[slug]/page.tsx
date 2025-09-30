import { Metadata } from "next";
import BlogDetailClient from "../../BlogDetailClient";
import { getBlogPostBySlugServer, getBlogPostsServer } from "@/firebase/main/blogService.server";

type Props = {
  params: Promise<{ id: string; slug: string }>; // 👈 params is a Promise now
};

// Generate static params for SSG
export async function generateStaticParams() {
  const posts = await getBlogPostsServer();
  return posts.map((post) => ({
    id: post.id,
    slug: post.slug,
  }));
}

// Generate metadata dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // 👈 await before using
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
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.author || "Inkaer"],
    },
  };
}

// Page component
export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params; // 👈 await before passing
  return <BlogDetailClient slug={slug} />;
}
