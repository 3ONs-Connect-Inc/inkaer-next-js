"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, useState } from "react";
import { navbarLinks } from "@/constants";
import { cn } from "@/utils/clsx";

export interface SidebarProps {
  collapsed?: boolean;
}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  ({ collapsed = false }, ref) => {
    const pathname = usePathname() || "/";

    // Track open/closed state for each section
    const [openSections, setOpenSections] = useState<Record<string, boolean>>(
      () => Object.fromEntries(navbarLinks.map((link) => [link.title, true]))
    );

    const toggleSection = (title: string) => {
      setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
    };

    return (
      <aside
        ref={ref}
        className={cn(
          "fixed z-[999] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white [transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-slate-700 dark:bg-slate-900",
          collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
          collapsed ? "max-md:-left-full" : "max-md:left-0"
        )}
        aria-label="Sidebar"
      >
        {/* Logo */}
        <div className="flex gap-x-3 p-3">
          {collapsed ? (
            <Link href="/admin" aria-label="Go to admin" className="inline-block">
              <Image
                src="/logoIcon.svg"
                alt="Logo Collapsed"
                width={40}
                height={40}
                className="w-10 h-auto"
                priority
              />
            </Link>
          ) : (
            <>
              <Link
                href="/admin"
                aria-label="Go to admin (light)"
                className="inline-block"
              >
                <Image
                  src="/logoDark.svg"
                  alt="Logo Light"
                  width={160}
                  height={40}
                  className="dark:hidden w-40 h-auto"
                  priority
                />
              </Link>
              <Link
                href="/admin"
                aria-label="Go to admin (dark)"
                className="inline-block"
              >
                <Image
                  src="/logoLight.svg"
                  alt="Logo Dark"
                  width={160}
                  height={40}
                  className="hidden dark:block w-40 h-auto"
                  priority
                />
              </Link>
            </>
          )}
        </div>

        {/* Nav Sections */}
        <div className="relative z-[999] mt-4 flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden p-3 [scrollbar-width:_thin]">
          {navbarLinks.map((navbarLink) => {
            const isOpen = openSections[navbarLink.title];

            return (
              <nav
                key={navbarLink.title}
                className={cn("sidebar-group", collapsed && "md:items-center")}
                aria-labelledby={`sidebar-group-${navbarLink.title}`}
              >
                <p
                  id={`sidebar-group-${navbarLink.title}`}
                  className={cn(
                    "sidebar-group-title cursor-pointer select-none",
                    collapsed && "md:w-[45px]"
                  )}
                  onClick={() => toggleSection(navbarLink.title)}
                >
                  {navbarLink.title}
                </p>

                {isOpen &&
                  navbarLink.links.map((link) => {
                    // active logic: exact match for /admin, startsWith for nested routes
                    const isActive =
                      link.path === "/admin"
                        ? pathname === "/admin" || pathname === "/admin/"
                        : pathname.startsWith(link.path);

                    return (
                      <Link
                        key={link.label}
                        href={link.path}
                        className={cn(
                          "sidebar-item flex items-center gap-x-2 rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-slate-200 dark:hover:bg-slate-800",
                          collapsed && "md:w-[45px] justify-center",
                          isActive && "bg-inkaer-blue text-slate-50"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <link.icon size={22} className="flex-shrink-0" />
                        {!collapsed && (
                          <span className="whitespace-nowrap">{link.label}</span>
                        )}
                      </Link>
                    );
                  })}
              </nav>
            );
          })}
        </div>
      </aside>
    );
  }
);

Sidebar.displayName = "Sidebar";

export default Sidebar;
