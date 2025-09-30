
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/config";

export interface ShortlistRequest {
  id: string;
  company: string;
  createdAt: any; // Firestore Timestamp
  email: string;
  industry: string;
  location: string;
  domain: string;
  name: string;
  roleTitle: string;
  tools: string;
  urgency: string;
}

async function fetchShortlistRequests(): Promise<ShortlistRequest[]> {
  const q = query(collection(db, "shortlistRequests"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as ShortlistRequest[];
}

export function useShortlistRequests() {
  return useQuery<ShortlistRequest[]>({
    queryKey: ["shortlistRequests"],
    queryFn: fetchShortlistRequests,
  });
}
