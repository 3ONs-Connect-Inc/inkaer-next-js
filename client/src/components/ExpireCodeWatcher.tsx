"use client";
import { useEffect } from "react";
import { auth } from "@/firebase/config";
import { signOut, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "@/firebase/config";

export function ExpireCodeWatcher() {
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) return;

      const q = query(collection(db, "accessCodes"), where("usedBy", "==", user.uid));
      const snap = await getDocs(q);

      if (snap.empty) return;

      const data = snap.docs[0].data();

      if (data.expiresAt.toMillis() < Date.now()) {
        await signOut(auth);
        alert("Your access code has expired.");
      }
    });

    return () => unsub();
  }, []);

  return null;
}
