// import { Metadata } from "next";
// import BlogDetailClient from "../../BlogDetailClient";
// import { } from "@/firebase/main/blogService";
// import { getBlogPostBySlugServer } from "@/firebase/main/blogService.server";

// type Props = {
//   params: { slug: string };
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const post = await getBlogPostBySlugServer(params.slug); 
//   if (!post) {
//     return {
//       title: "Post not found – Inkaer",
//       description: "The article you’re looking for doesn’t exist.",
//     };
//   }

//   return {
//     title: `${post.title} – Inkaer`,
//     description:
//       post.excerpt || `${post.title} - Read the full article on Inkaer.`,
//     openGraph: {
//       title: post.title,
//       description: post.excerpt,
//       type: "article",
//       authors: [post.author || "Inkaer"],
//     },
//   };
// }

// export default function BlogDetailPage({ params }: Props) {
//   return <BlogDetailClient slug={params.slug} />;
// }
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page