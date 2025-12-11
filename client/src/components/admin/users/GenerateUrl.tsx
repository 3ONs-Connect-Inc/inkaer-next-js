"use client";

import { useState } from "react";
import { db } from "@/firebase/config";
import {
  collection,
  addDoc,
  Timestamp,
  query,
  limit,
  getDocs
} from "firebase/firestore";
import { nanoid } from "nanoid";

export default function GenerateUrl() {
  const [generated, setGenerated] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generate = async () => {
    setError(null);

    //  Get the latest portfolio
    const portfolioQuery = query(
      collection(db, "portfolio"),
      limit(1)
    );

    const snapshot = await getDocs(portfolioQuery);

    if (snapshot.empty) {
      setError("No portfolio found. Create a portfolio first.");
      return;
    }

    //  Extract the latest portfolio's ID
    const latestPortfolio = snapshot.docs[0];
    const portfolioId = latestPortfolio.id;

    //  Generate unique access code
    const code = nanoid(10);
    const now = Timestamp.now();
    const expiresAt = Timestamp.fromMillis(
      now.toMillis() + 7 * 24 * 60 * 60 * 1000
    );

    // Save access code document
    await addDoc(collection(db, "accessCodes"), {
      code,
      portfolioId,
      createdAt: now,
      expiresAt,
      usedBy: null,
    });

    setGenerated(`${code}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4 font-bold">Generate Access Code</h1>

      <button
        onClick={generate}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Generate Code
      </button>

      {error && (
        <p className="mt-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </p>
      )}

      {generated && (
        <h2 className="mt-6 p-3 bg-green-100 rounded">
           <strong>{generated}</strong>
        </h2>
      )}
    </div>
  );
}
