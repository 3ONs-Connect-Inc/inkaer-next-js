export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
 role: "admin" | "user";
}

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  category: string;
  tags: string;
  excerpt: string;
  content: string;
  author: string;
  //readTime: string;
  image: string;
  timestamp: any;
};



export const CATEGORIES = [
  "Engineering",
  "Hiring",
  "Company",
  "Product",
  "Culture",
  "Announcements",
] as const;

export const TAG_OPTIONS = [
  "Featured",
  "Trending",
  "How-To",
  "Case Study",
  "News",
  "Opinion",
];

export const generateSlug = (title: string) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const classNames = (...c: (string | false | null | undefined)[]) =>
  c.filter(Boolean).join(" ");


export type CareerPost = {
  id: string;
  title: string;
  description: string;
  tagline: string;
  department: string;
  location: string;
  type: string;
  salary?: string;
  fullDescription: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  createdAt: number;
  updatedAt: number;
};

  

export type CareersMeta = {
id?: string
heroTitle: string
heroSubtitle: string
footerTitle: string
footerSubtitle: string
updatedAt: number
}
export interface BlogHeader {
  heroTitle: string;
  heroSubtitle: string;
  footerTitle: string;
  footerSubtitle: string;
}


