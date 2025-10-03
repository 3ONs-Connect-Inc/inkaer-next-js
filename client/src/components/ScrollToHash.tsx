"use client";

import { useEffect } from "react";

export default function ScrollToHash() {
  useEffect(() => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        // give Next.js a render tick
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, []);

  return null; // nothing to render
}
