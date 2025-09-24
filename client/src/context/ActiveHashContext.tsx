
"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type ActiveHashContextType = {
  activeHash: string;
  setActiveHash: (hash: string) => void;
};

const ActiveHashContext = createContext<ActiveHashContextType | undefined>(undefined);

export const ActiveHashProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    // Only keep hash if on homepage
    if (pathname === "/") {
      setActiveHash(window.location.hash);
    } else {
      setActiveHash(""); // clear when leaving homepage
    }

    const onHashChange = () => {
      if (pathname === "/") {
        setActiveHash(window.location.hash);
      }
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  return (
    <ActiveHashContext.Provider value={{ activeHash, setActiveHash }}>
      {children}
    </ActiveHashContext.Provider>
  );
};

export const useActiveHash = () => {
  const ctx = useContext(ActiveHashContext);
  if (!ctx) throw new Error("useActiveHash must be used inside ActiveHashProvider");
  return ctx;
};
