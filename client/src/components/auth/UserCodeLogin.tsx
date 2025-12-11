"use client";

import { useState } from "react";
import { db } from "@/firebase/config";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function UserCodeLogin() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

 const login = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");

  const q = query(
    collection(db, "accessCodes"),
    where("code", "==", code)
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    setError("Invalid code");
    return;
  }

  const data = snapshot.docs[0].data();

  if (data.expiresAt.toMillis() < Date.now()) {
    setError("Code expired");
    return;
  }

  // No update allowed — users cannot modify accessCodes

router.push(`/portfolio/viewer?id=${data.portfolioId}`);
};

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-3">Enter Access Code</h1>

      <form onSubmit={login} className="space-y-4">
        <input
          className="border p-2 rounded w-full"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your access code"
        />

        {error && <p className="text-red-600">{error}</p>}

        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Continue
        </button>
      </form>
    </div>
  );
}
