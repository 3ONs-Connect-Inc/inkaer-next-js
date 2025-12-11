"use client";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "@/firebase/config";
import { User } from "@/types/types";

export function useUserSearch() {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [queryText, setQueryText] = useState("");
  const [results, setResults] = useState<User[]>([]);

  useEffect(() => {
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const users: User[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data() as Partial<User>;
        return {
          id: docSnap.id,
          firstName: data.firstName ?? "",
          lastName: data.lastName ?? "",
          email: data.email ?? "",
          role: (data.role as "admin" | "user") ?? "user",
        };
      });
      setAllUsers(users);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!queryText.trim()) {
      setResults([]);
      return;
    }

    const filtered = allUsers.filter((u) =>
      u.email.toLowerCase().includes(queryText.toLowerCase())
    );
    setResults(filtered);
  }, [queryText, allUsers]);

  return {
    queryText,
    setQueryText,
    results,
  };
}
