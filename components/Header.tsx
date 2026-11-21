"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  // Track the current URL hash for anchor navigation.
  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash);
    };

    updateHash();

    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
    };
  }, []);

  // Determine the active navigation link.
  const isActive = (href: string) => {
    if (href === "#download") {
      return pathname === "/" && hash === "#download";
    }

    return pathname === href;
  };

  // Shared navigation styles.
  const navLinkClass = (href: string) =>
    `relative py-2 transition-colors ${
      isActive(href)
        ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-blue-600"
        : "text-slate-600 hover:text-blue-600"
    }`;

  return (
    <header className="relative z-20 border-b border-slate-100/80 bg-white/95">
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Eaglespress homepage"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/eaglespress-web-logo.png"
            alt="Eaglespress"
            width={260}
            height={65}
            preload
            className="h-10 w-auto object-contain sm:h-11"
          />
        </Link>

        {/* Navigation */}
        <nav
          aria-label="Main navigation"
          className="flex items-center gap-5 text-sm font-medium sm:gap-8 lg:gap-10"
        >
          <Link
            href="/"
            aria-current={isActive("/") ? "page" : undefined}
            className={navLinkClass("/")}
          >
            Home
          </Link>

          <Link
            href="/about"
            aria-current={isActive("/about") ? "page" : undefined}
            className={navLinkClass("/about")}
          >
            About
          </Link>

          <Link
            href="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
            className={navLinkClass("/contact")}
          >
            Contact
          </Link>

          <Link
            href="/download"
            aria-current={isActive("/download") ? "page" : undefined}
            className={`rounded-full px-5 py-2.5 text-xs font-semibold shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5 sm:px-7 sm:text-sm ${
              isActive("/download")
                ? "bg-blue-700 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Download
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
