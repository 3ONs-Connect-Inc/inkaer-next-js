"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { listenToBlogPostBySlug } from "@/firebase/main/blogService";
import { useBlogPost } from "@/hooks/main/useBlog";
import ArticleLayout from "@/components/blog/ArticleLayout";

export default function BlogDetails() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const queryClient = useQueryClient();

  const { data: post, isLoading, isError } = useBlogPost(slug || "");

  useEffect(() => {
    if (!slug) return;

    const unsubscribe = listenToBlogPostBySlug(slug, (livePost) => {
      queryClient.setQueryData(["blogPost", slug], livePost);
    });

    return () => unsubscribe();
  }, [slug, queryClient]);

  if (!slug) {
    return <p className="p-6">Invalid post link.</p>;
  }

  if (isLoading) {
    return <p className="p-6">Loading post...</p>;
  }

  if (isError || !post) {
    return <p className="p-6">Post not found</p>;
  }

  return (
    <ArticleLayout
      title={post.title}
      excerpt={post.excerpt}
      author={post.author}
      timestamp={moment(post.timestamp).fromNow()}
      category={post.category}
      image={post.image}
      content={post.content}
    />
  );
}
