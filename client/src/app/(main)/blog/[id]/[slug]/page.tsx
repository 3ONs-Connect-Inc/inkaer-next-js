// app/(main)/blog/[id]/[slug]/page.tsx
import { Metadata } from "next";
import BlogDetailClient from "../../BlogDetailClient";
import { getBlogPostBySlugServer, getBlogPostsServer } from "@/firebase/main/blogService.server";

type Props = {
  params: Promise<{ id: string; slug: string }>; // 👈 make params a Promise
};

// Required for `output: export`
export async function generateStaticParams() {
  const posts = await getBlogPostsServer();

  return posts.map((post) => ({
    id: post.id,
    slug: post.slug,
  }));
}

// SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // 👈 await params
  const post = await getBlogPostBySlugServer(slug);

  if (!post) {
    return {
      title: "Post not found – Inkaer",
      description: "The article you’re looking for doesn’t exist.",
    };
  }

  return {
    title: `${post.title} – Inkaer`,
    description:
      post.excerpt || `${post.title} - Read the full article on Inkaer.`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.author || "Inkaer"],
    },
  };
}

// Blog detail page
export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params; // 👈 await params
  return <BlogDetailClient slug={slug} />;
}
