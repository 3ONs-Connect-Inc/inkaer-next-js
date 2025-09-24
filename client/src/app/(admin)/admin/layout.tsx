"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, role, loading } = useSelector((state: RootState) => state.session);
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace("/sign-in");
      } else if (role !== "admin") {
        router.replace("/unauthorized");
      } else {
        //only mark authorized if role === "admin"
        setAuthorized(true);
      }
    }
  }, [user, role, loading, router]);

  if (loading) return null;

  // Don’t render children until we know the user is authorized
  if (!authorized) return null;

  return <>{children}</>;
}
