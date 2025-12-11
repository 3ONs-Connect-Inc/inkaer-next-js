import {
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  where,
  limit,
  type Unsubscribe,
} from "firebase/firestore";
import type { BlogHeader, BlogPost } from "@/types/types";
import { db } from "../config";
import { deleteFileFromR2 } from "@/utils/actions/r2Delete";


// ---------------------
// Blog Header
// ---------------------

export const saveBlogHeader = async (header: BlogHeader) => {
  const ref = doc(db, "settings", "blogHeader");
  await setDoc(ref, header);
};

export const getBlogHeader = async (): Promise<BlogHeader | null> => {
  const ref = doc(db, "settings", "blogHeader");
  const snap = await getDoc(ref);
  return snap.exists() ? (snap.data() as BlogHeader) : null;
};

// ---------------------
// Blog Posts
// ---------------------
export const addBlogPost = async (post: BlogPost) => {
  const ref = collection(db, "posts");
  await addDoc(ref, post);
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const ref = collection(db, "posts");
  const snap = await getDocs(ref);
  return snap.docs.map((d) => ({ ...(d.data() as BlogPost), id: d.id }));
};

export const updateBlogPost = async (id: string, data: Partial<BlogPost>) => {
  const ref = doc(db, "posts", id);
  await updateDoc(ref, data);
};

export const deleteBlogPost = async (post: BlogPost) => {
  const ref = doc(db, "posts", post.id);
  await deleteDoc(ref);
  if (post.image) {
    await deleteFileFromR2(post.image);
  }
};

export const listenToBlogPosts = (
  callback: (posts: BlogPost[]) => void
): Unsubscribe => {
  const ref = query(collection(db, "posts"), orderBy("timestamp", "desc"));
  return onSnapshot(ref, (snap) => {
    const posts = snap.docs.map((d) => ({
      ...(d.data() as BlogPost),
      id: d.id,
    }));
    callback(posts);
  });
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const q = query(collection(db, "posts"), where("slug", "==", slug), limit(1));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const docSnap = snap.docs[0];
  return { ...(docSnap.data() as BlogPost), id: docSnap.id };
};

export const listenToBlogPostBySlug = (
  slug: string,
  callback: (post: BlogPost | null) => void
): Unsubscribe => {
  const q = query(collection(db, "posts"), where("slug", "==", slug), limit(1));
  return onSnapshot(q, (snap) => {
    if (snap.empty) {
      callback(null);
    } else {
      const docSnap = snap.docs[0];
      callback({ ...(docSnap.data() as BlogPost), id: docSnap.id });
    }
  });
};
