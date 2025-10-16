
import type { Metadata } from "next";
import { getBlogPosts } from "@/firebase/main/blogService";
import BlogDetails from "@/components/Blog/BlogDetails";

interface Props {
  searchParams: { id?: string; slug?: any };
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { id, slug } = searchParams;
  let post = null;
  try {
    const posts = await getBlogPosts();
    post = posts.find((p) => p.id === id);
  } catch (e) {
    console.error("Error metadata fetch post:", e);
  }

  if (!post) {
    return {
      title: "Post not found – Inkaer",
      description: "The requested post does not exist.",
    };
  }

  const title = `${post.title} – Inkaer`;
  const description = post.excerpt?.slice(0, 160) || "Inkaer Blog Post";
  const author = post.author || "Inkaer";
  const url = `https://inkaer.com/blog/post/?id=${id}&slug=${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      authors: [author],
      url,
      images: post.image ? [post.image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default function BlogDetailPage({ searchParams }: Props) {
  return <BlogDetails  slug={searchParams.slug} />;
}
