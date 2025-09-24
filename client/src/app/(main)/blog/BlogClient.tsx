"use client";

import BlogHero from "@/components/blog/BlogHero";
import BlogPostsGrid from "@/components/blog/BlogPostsGrid";
import FeaturedPost from "@/components/blog/FeaturedPost";
import { useBlogHeader, useBlogPosts } from "@/hooks/main/useBlog";


export default function BlogClient({ initialMeta }: { initialMeta: any }) {
  const { data: header, isLoading: headerLoading } = useBlogHeader();
  const { data: posts, isLoading: postsLoading } = useBlogPosts();

  if (headerLoading || postsLoading) {
    return <p className="text-center py-20">Loading blog...</p>;
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="py-16">
        <BlogHero header={header || initialMeta?.header} />

        {posts && posts.length > 0 ? (
          <FeaturedPost post={posts[0]} />
        ) : (
          <p className="text-center py-16 text-gray-500">No blog posts yet.</p>
        )}

        <BlogPostsGrid header={header} posts={posts?.slice(1) || []} />
      </main>
    </div>
  );
}
