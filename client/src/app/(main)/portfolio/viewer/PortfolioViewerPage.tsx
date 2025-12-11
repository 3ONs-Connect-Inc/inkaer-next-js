"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import ViewPortfolio from "@/components/portfolio";

export default function PortfolioViewerPage() {
  const params = useSearchParams();
  const id = params.get("id");

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const load = async () => {
      const snap = await getDoc(doc(db, "portfolio", id));
      if (snap.exists()) {
        setData(snap.data());
      }
      setLoading(false);
    };

    load();
  }, [id]);

  if (!id) return <p className="p-6">Invalid portfolio link</p>;
  if (loading) return <p className="p-6">Loading portfolio...</p>;
  if (!data) return <p className="p-6">Portfolio not found</p>;

  return <ViewPortfolio data={data} />;
}
