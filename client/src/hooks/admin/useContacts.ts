import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/config";

export interface Contact {
  id: string;
  company: string;
  createdAt: any; 
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  subject: string;
}

async function fetchContacts(): Promise<Contact[]> {
  const q = query(collection(db, "contactMessages"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Contact[];
}

export function useContacts() {
  return useQuery<Contact[]>({
    queryKey: ["contactMessages"],
    queryFn: fetchContacts,
  });
}
