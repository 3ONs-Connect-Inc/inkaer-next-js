import type { Metadata } from "next";
import BlogDetailClient from "../../BlogDetailClient";
import { getBlogPostBySlugServer, getBlogPostsServer } from "@/firebase/main/adminServer";

type Params = { id: string; slug: string };

//  Safe static params generation
export async function generateStaticParams() {
    const posts = await getBlogPostsServer();
    return posts.map((post) => ({
      id: post.id,
      slug: post.slug,
    }));
}

//  Safe metadata generation
export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  const { slug } = params;

  const post = await getBlogPostBySlugServer(slug);

  if (!post) {
    return {
      title: "Post not found – Inkaer",
      description: "The article you’re looking for doesn’t exist.",
    };
  }

  const metaTitle = `${post.title} – Inkaer`;
  const metaDescription = post.excerpt || `${post.title} - Read the full article on Inkaer.`;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://inkaer.com/blog/${post.id}/${post.slug}`,
      siteName: "Inkaer",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
  };
}

//  Page component
export default async function BlogDetailPage({ params }: { params: Params }) {
  const { slug } = params;

  return <BlogDetailClient slug={slug} />;
}
