// "use client";

// import { useEffect } from "react";
// import { useQueryClient } from "@tanstack/react-query";
// import moment from "moment";
// import ArticleLayout from "@/components/blog/ArticleLayout";
// import { listenToBlogPostBySlug } from "@/firebase/main/blogService";
// import { useBlogPost } from "@/hooks/main/useBlog";

// export default function BlogDetailClient({ slug }: { slug: string }) {
//   const queryClient = useQueryClient();
//   const { data: post, isLoading, isError } = useBlogPost(slug);

//   useEffect(() => {
//     if (!slug) return;
//     const unsubscribe = listenToBlogPostBySlug(slug, (livePost) => {
//       queryClient.setQueryData(["blogPost", slug], livePost);
//     });
//     return () => unsubscribe();
//   }, [slug, queryClient]);

//   if (isLoading) return <p className="p-6">Loading post...</p>;
//   if (isError || !post) return <p className="p-6">Post not found</p>;

//   return (
//     <ArticleLayout
//       title={post.title}
//       excerpt={post.excerpt}
//       author={post.author}
//       timestamp={moment(post.timestamp).fromNow()}
//       readTime={post.readTime}
//       category={post.category}
//       image={post.image}
//       content={post.content}
//     />
//   );
// }
import React from 'react'

const BlogDetailClient = () => {
  return (
    <div>BlogDetailClient</div>
  )
}

export default BlogDetailClient