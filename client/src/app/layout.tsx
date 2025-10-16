import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "../components/providers";
import ScrollToTop from "@/components/ScrollToTop";
import BackToTopButton from "@/components/BackToTopButton";
import { ActiveHashProvider } from "@/context/ActiveHashContext";
 
export const metadata: Metadata = {
  title: "Inkaer – Hiring the Best Engineers, Made Simple",
  description:
    "Inkaer connects companies with verified engineering talent - helping you hire faster, build stronger teams, and stay ahead.",
  icons: { icon: "/favicon.svg" },
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <AppProviders >
           <ActiveHashProvider>
    <ScrollToTop />
          <BackToTopButton />
          {children}  
           </ActiveHashProvider>
            </AppProviders>
      </body>
    </html>
  );
}
