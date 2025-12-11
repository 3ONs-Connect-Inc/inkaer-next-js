
import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { BlogHeader, BlogPost } from "@/types/types";
import { getBlogHeader, getBlogPosts, listenToBlogPosts } from "@/firebase/main/blogService";

export const useBlogHeader = () => {
  return useQuery<BlogHeader | null>({
    queryKey: ["blogHeader"],
    queryFn: getBlogHeader,
  });
};

export const useBlogPosts = () => {
  const queryClient = useQueryClient();

  const query = useQuery<BlogPost[]>({
    queryKey: ["blogPosts"],
    queryFn: getBlogPosts, // initial fetch
  });

  useEffect(() => {
    const unsubscribe = listenToBlogPosts((posts) => {
      queryClient.setQueryData(["blogPosts"], posts);
    });
    return () => unsubscribe();
  }, [queryClient]);

  return query;
};
