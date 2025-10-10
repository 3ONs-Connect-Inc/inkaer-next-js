import type { CareerPost } from "@/types";
import { adminDb } from "../admin"; 
import type { BlogHeader, BlogPost } from "@/types";

// Blog header
export const getBlogHeaderServer = async (): Promise<BlogHeader | null> => {
  const doc = await adminDb.doc("settings/blogHeader").get();
  return doc.exists ? (doc.data() as BlogHeader) : null;
};

export const getBlogPostsServer = async (): Promise<BlogPost[]> => {
  const snap = await adminDb.collection("posts").orderBy("timestamp", "desc").get();
  return snap.docs.map((d) => ({ ...(d.data() as BlogPost), id: d.id }));
};

export const getBlogPostBySlugServer = async (slug: string): Promise<BlogPost | null> => {
  const snap = await adminDb.collection("posts").where("slug", "==", slug).limit(1).get();
  if (snap.empty) return null;

  const doc = snap.docs[0];
  return { ...(doc.data() as BlogPost), id: doc.id };
};
   


//CAREERS
const CAREERS_COL = "careers";

// list all careers (for generateStaticParams)
export async function getCareerPostsServer(): Promise<CareerPost[]> {
  const snap = await adminDb.collection(CAREERS_COL).orderBy("createdAt", "desc").get();
  return snap.docs.map((d) => ({
    ...(d.data() as CareerPost),
    id: d.id,   // put id last to avoid overwrite
  }));
}

// Get single career post by ID
export async function getCareerPostByIdServer(id: string): Promise<CareerPost | null> {
  const doc = await adminDb.collection(CAREERS_COL).doc(id).get();
  if (!doc.exists) return null;
  return {
    ...(doc.data() as CareerPost),
    id: doc.id,
  } as CareerPost;
}

  