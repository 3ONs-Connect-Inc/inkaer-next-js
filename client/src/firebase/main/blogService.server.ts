
import { getFirestore } from "firebase-admin/firestore";
import type { BlogHeader, BlogPost } from "@/types";

const adminDb = getFirestore();

// Blog header (server only)
export const getBlogHeaderServer = async (): Promise<BlogHeader | null> => {
  const doc = await adminDb.doc("settings/blogHeader").get();
  return doc.exists ? (doc.data() as BlogHeader) : null;
};

export const getBlogPostsServer = async (): Promise<BlogPost[]> => {
  const snap = await adminDb.collection("posts").orderBy("timestamp", "desc").get();
  return snap.docs.map((d) => ({ ...(d.data() as BlogPost), id: d.id }));
};

export const getBlogPostBySlugServer = async (slug: string): Promise<BlogPost | null> => {
  const snap = await adminDb
    .collection("posts")
    .where("slug", "==", slug)
    .limit(1)
    .get();

  if (snap.empty) return null;

  const doc = snap.docs[0];
  return { ...(doc.data() as BlogPost), id: doc.id };
};