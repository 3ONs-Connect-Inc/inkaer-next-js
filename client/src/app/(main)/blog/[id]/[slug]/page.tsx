import type { Metadata } from "next";
import BlogDetailClient from "../../BlogDetailClient";
import { getBlogPostBySlugServer, getBlogPostsServer } from "@/firebase/main/adminServer";

type Params = { id: string; slug: string };

//  Safe static params generation
export async function generateStaticParams() {
  try {
    const posts = await getBlogPostsServer();

    if (!posts || posts.length === 0) {
      // Return at least one dummy route to avoid build crash
      return [{ id: "placeholder", slug: "placeholder" }];
    }

    return posts.map((post) => ({
      id: post.id,
      slug: post.slug,
    }));
  } catch {
    // In case Firestore fails entirely
    return [{ id: "placeholder", slug: "placeholder" }];
  }
}

//  Safe metadata generation
export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  const { slug } = params;

  if (slug === "placeholder") {
    return {
      title: "Post not found – Inkaer",
      description: "The article you’re looking for doesn’t exist or is unavailable.",
    };
  }

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

  if (slug === "placeholder") {
    return (
      <div className="p-8 text-center text-gray-600">
        Post not found.
      </div>
    );
  }

  return <BlogDetailClient slug={slug} />;
}
