
"use client";

import {  useState } from 'react';
import Logo from '../Logo';
import { usePathname, useRouter } from 'next/navigation';
import DesktopNav from './DesktopNav';
//import DesktopNav from '../GuestNavbar/DesktopNav';
import { Menu, X } from 'lucide-react';
import MobileNav from '../GuestNavbar/MobileNav';
import { useActiveHash } from '@/context/ActiveHashContext';


const LoggedInNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="mx-auto max-w-7xl padding">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <DesktopNav isActive={isActive} handleScroll={handleScroll} />

          <div className="lg:hidden mt-4">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md ml-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <MobileNav
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          isActive={isActive}
          handleScroll={handleScroll}
        />
      </nav>
    </header>
  );
};
export default LoggedInNavbar;
