
import { useQuery } from "@tanstack/react-query";
import { getBlogHeader, getBlogPostBySlug, getBlogPosts } from "@/firebase/main/blogService";
import type { BlogHeader, BlogPost } from "@/types/types";

// Blog header
export const useBlogHeader = () => {
  return useQuery<BlogHeader | null>({
    queryKey: ["blogHeader"],
    queryFn: getBlogHeader,
  });
};

// Blog posts
export const useBlogPosts = () => {
  return useQuery<BlogPost[]>({
    queryKey: ["blogPosts"],
    queryFn: getBlogPosts,
  });
};

export const useBlogPost = (slug: string) => {
  return useQuery<BlogPost | null>({
    queryKey: ["blogPost", slug],
    queryFn: () => getBlogPostBySlug(slug),
    enabled: !!slug,
    initialData: null,
  });
};
