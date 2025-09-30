"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import useClickOutside from "@/hooks/main/useClickOutside";
import { useMediaQuery } from '@uidotdev/usehooks';
import { cn } from "@/utils/clsx";
import { Sidebar } from "@/components/admin/layouts/sidebar";
import { Header } from "@/components/admin/layouts/header";


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, role, loading } = useSelector((state: RootState) => state.session);
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

    const isDesktopDevice = useMediaQuery("(min-width: 896px)");
  const [collapsed, setCollapsed] = useState<boolean>(() => !isDesktopDevice);
  const sidebarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setCollapsed(!isDesktopDevice);
  }, [isDesktopDevice]);

  useClickOutside([sidebarRef], () => {
    if (!isDesktopDevice && !collapsed) {
      setCollapsed(true);
    }
  });

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

  //if (loading) return null;
   if (loading || !authorized) return null;

  // Don’t render children until we know the user is authorized
  //if (!authorized) return null;


 return (
    <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-950">
      <div
        className={cn(
          "pointer-events-none fixed inset-0 -z-10 bg-black opacity-0 transition-opacity",
          !collapsed && "max-md:pointer-events-auto max-md:z-50 max-md:opacity-30"
        )}
      />
      <Sidebar ref={sidebarRef} collapsed={collapsed} />
      <div
        className={cn(
          "transition-[margin] duration-300",
          collapsed ? "md:ml-[70px]" : "md:ml-[240px]"
        )}
      >
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-6">
          {children}
        </div>
      </div>
    </div>
  );
}