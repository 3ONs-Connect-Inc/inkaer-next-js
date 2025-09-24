"use client";

import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useActiveHash } from "@/context/ActiveHashContext";

// Custom X icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const Footer: React.FC = () => {
const router = useRouter();
  const pathname = usePathname();
   const { activeHash, setActiveHash } = useActiveHash();

  const isActive = (hash: string) => activeHash === hash;

  const handleScroll = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();

    if (pathname === "/") {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        history.pushState(null, "", hash);
        setActiveHash(hash);
      }
    } else {
        router.push("/" + hash, { scroll: false });
      // store hash → homepage effect will handle scroll
      setActiveHash(hash);
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="mx-auto max-w-7xl padding">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          {/* Logo and tagline */}
          <div className="lg:max-w-md">
            <Link href="/">
              <Image
                src="/logo/logoLight.svg"
                alt="Inkaer"
                width={120}
                height={32}
                  className="h-8 w-auto mb-4"
              />
            </Link>
            <p className="text-sm sm:text-base text-gray-400 mb-6">
              Hiring the best engineers, made simple.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/inkaerhq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Inkaer on Instagram"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com/inkaerhq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Inkaer on Facebook"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/inkaerhq"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Inkaer on X"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <XIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/inkaer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Inkaer on LinkedIn"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right side navigation */}
          <div className="flex gap-16">
            {/* Product */}
            <div>
              <h3 className="text-sm sm:text-base text-white font-semibold mb-4">
                Product
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-400">
                {[
                  { hash: "#how-it-works", label: "How It Works" },
                  { hash: "#features", label: "Benefits" },
                  { hash: "#pricing", label: "Pricing" },
                  { hash: "#faq", label: "FAQ" },
                ].map(({ hash, label }) => (
                  <li key={hash}>
                    <a
                      href={hash}
                      onClick={(e) => handleScroll(e, hash)}
                      className={`hover:text-white transition-colors ${
                        isActive(hash)
                          ? "text-blue-700 font-semibold"
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white text-sm sm:text-base font-semibold mb-4">
                Company
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-400">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t text-sm sm:text-base border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; 2025 Inkaer. All rights reserved.</p>
          <div className="flex flex-col xs:flex-row space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms and Conditions
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
