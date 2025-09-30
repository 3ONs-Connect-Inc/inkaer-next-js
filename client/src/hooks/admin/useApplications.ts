
import { useEffect, useState } from "react";
import { db } from "@/firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export interface Application {
  id: string;
  jobId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  coverLetter?: string | null;
  resumeUrl: string;
  createdAt?: Date | null;
}

export function useApplications() {
  const [data, setData] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
      const q = query(collection(db, "applications"), orderBy("createdAt", "desc"));
      const unsubscribe = onSnapshot(
        q,
        (snap) => {
          const apps = snap.docs.map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              jobId: data.jobId,
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              phone: data.phone ?? null,
              coverLetter: data.coverLetter ?? null,
              resumeUrl: data.resumeUrl,
              createdAt: data.createdAt?.toDate?.() ?? null,
            } as Application;
          });
          setData(apps);
          setIsLoading(false);
        },
        (err) => {
          console.error("Error fetching applications:", err);
          setIsError(true);
          setIsLoading(false);
        }
      );

      return () => unsubscribe();
    } catch (err) {
      console.error(err);
      setIsError(true);
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, isError };
}
