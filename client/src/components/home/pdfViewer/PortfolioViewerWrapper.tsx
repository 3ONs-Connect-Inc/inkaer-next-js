
"use client";

import dynamic from "next/dynamic";

export const PortfolioViewer = dynamic(() => import("./PortfolioViewerInner"), {
  ssr: false, // ⬅ prevents pdfjs from running on server
});
