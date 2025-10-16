"use client";

import { useBlogHeader, useBlogPosts } from "@/hooks/main/useBlog";
import BlogHero from "./BlogHero";
import FeaturedPost from "./FeaturedPost";
import BlogPostsGrid from "./BlogPostsGrid";
import { PageLoader } from "../ui/Spinner";

export default function Blog() {
  const { data: header, isLoading: headerLoading } = useBlogHeader();
  const { data: posts, isLoading: postsLoading } = useBlogPosts();

 if (headerLoading || postsLoading) {
    return <PageLoader />;
  }
 
  return (
    <div className="min-h-screen bg-white">
      <main className="py-16">
        <BlogHero header={header} />

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