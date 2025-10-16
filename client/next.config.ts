
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // static export for Hostinger
  images: {
    unoptimized: true, // no Next Image optimization
  },
  trailingSlash: true, // so /blog/ becomes /blog/index.html
  // prevent redirect issues
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
