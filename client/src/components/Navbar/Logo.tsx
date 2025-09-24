"use client";

import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <img
        src="/logo/logoDark.svg" 
        className="h-8 sm:h-8 w-auto"
        alt="Inkaer"
        loading="lazy"
      />
    </Link>
  );
};

export default Logo;
