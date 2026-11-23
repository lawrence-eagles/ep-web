"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Reference to the mobile menu toggle button.
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Reference to the mobile navigation container.
  const mobileNavigationRef = useRef<HTMLDivElement>(null);

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

  // Close the mobile menu when the route changes.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close the mobile menu when Escape is pressed.
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        // Only restore focus if focus is currently inside mobile navigation.
        if (mobileNavigationRef.current?.contains(document.activeElement)) {
          menuButtonRef.current?.focus();
        }

        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  // Close the mobile menu when transitioning to desktop.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    const handleResize = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
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

  // Close the mobile menu after navigation.
  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-20 border-b border-slate-100/80 bg-white/95">
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Eaglespress homepage"
          className="flex shrink-0 items-center"
          onClick={handleNavigation}
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

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 text-sm font-medium sm:flex sm:gap-8 lg:gap-10"
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

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:hidden"
        >
          {isMenuOpen ? (
            // Close icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={mobileNavigationRef}
        id="mobile-navigation"
        className={`absolute left-0 top-full w-full border-b border-slate-100 bg-white shadow-lg transition-all duration-200 ease-in-out sm:hidden ${
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-[1320px] flex-col gap-1 px-5 py-4 sm:px-8"
        >
          <Link
            href="/"
            aria-current={isActive("/") ? "page" : undefined}
            onClick={handleNavigation}
            tabIndex={isMenuOpen ? 0 : -1}
            className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
              isActive("/")
                ? "bg-blue-50 text-blue-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            aria-current={isActive("/about") ? "page" : undefined}
            onClick={handleNavigation}
            tabIndex={isMenuOpen ? 0 : -1}
            className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
              isActive("/about")
                ? "bg-blue-50 text-blue-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
            onClick={handleNavigation}
            tabIndex={isMenuOpen ? 0 : -1}
            className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
              isActive("/contact")
                ? "bg-blue-50 text-blue-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
            }`}
          >
            Contact
          </Link>

          <Link
            href="/download"
            aria-current={isActive("/download") ? "page" : undefined}
            onClick={handleNavigation}
            tabIndex={isMenuOpen ? 0 : -1}
            className={`mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold shadow-md shadow-blue-500/20 transition-colors ${
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
