"use client";

import { usePathname } from "next/navigation";
import { TopNav } from "./topnav";
import Footer from "./footer";

export function Navigation() {
  const pathname = usePathname();
  const showTopNav =
    pathname !== "/" &&
    !pathname.startsWith("/dashboard") &&
    !pathname.startsWith("/request") &&
    !pathname.startsWith("/documents");

  const showFooter =
    pathname !== "/" &&
    !pathname.startsWith("/dashboard") &&
    !pathname.startsWith("/request") &&
    !pathname.startsWith("/documents") &&
    !pathname.startsWith("/homepage") &&
    !pathname.startsWith("/announcements") &&
    !pathname.startsWith("/contact") &&
    !pathname.startsWith("/inquiry");

  return (
    <>
      {showTopNav && <TopNav />}
      {showFooter && <Footer />}
    </>
  );
}
