import type { Metadata } from "next";
import BlogDetails from "./BlogDetailPage";


export const metadata: Metadata = {
  title: "Inkaer Blog Post – Engineering and Innovation",
  description:
    "Dive into detailed insights, project highlights, and innovations from the Inkaer engineering team.",
  openGraph: {
    title: "Inkaer Blog Post – Engineering and Innovation",
    description:
      "Dive into detailed insights, project highlights, and innovations from the Inkaer engineering team.",
    type: "article",
    url: "https://inkaer.com/blog/post",
    siteName: "Inkaer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inkaer Blog Post – Engineering and Innovation",
    description:
      "Dive into detailed insights, project highlights, and innovations from the Inkaer engineering team.",
  },
};


export default function BlogDetailPage() {
  return <BlogDetails  />;
}
  