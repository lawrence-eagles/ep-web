import Link from "next/link";
import { MapPin } from "lucide-react";
import Image from "next/image";
import StoreButtons from "@/components/home/StoreButtons";

const Footer = () => {
  return (
    <footer className="relative mt-0 overflow-hidden border-t border-slate-100 bg-[#f8fbff]">
      {/* Footer background decoration */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-48 overflow-hidden">
        <div className="absolute -bottom-32 left-[-10%] h-64 w-[65%] rotate-[-8deg] rounded-[50%] bg-blue-100/30 blur-2xl" />
        <div className="absolute -bottom-36 right-[-10%] h-64 w-[65%] rotate-[8deg] rounded-[50%] bg-blue-100/40 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 pb-6 pt-8 sm:px-8 lg:px-12">
        {/* Footer columns */}
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Eaglespress homepage"
              className="inline-flex"
            >
              <Image
                src="/eaglespress-web-logo.png"
                alt="Eaglespress"
                width={220}
                height={55}
                className="h-9 w-auto object-contain"
              />
            </Link>

            <p className="mt-3 text-xs font-medium text-slate-500">Follow us</p>

            <div className="mt-2 flex items-center gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white transition-transform hover:-translate-y-1"
              >
                <span className="text-lg font-bold">f</span>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white transition-transform hover:-translate-y-1"
              >
                <span className="text-sm font-bold">◎</span>
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#102345] text-white transition-transform hover:-translate-y-1"
              >
                <span className="text-sm font-semibold">𝕏</span>
              </a>
            </div>
          </div>

          {/* Download */}
          <div>
            <h3 className="mb-4 text-xs font-semibold text-[#102345]">
              Download the App
            </h3>

            <StoreButtons compact />
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-3 text-xs font-semibold text-[#102345]">
              Company
            </h3>

            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-blue-600"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="transition-colors hover:text-blue-600"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-and-conditions"
                  className="transition-colors hover:text-blue-600"
                >
                  Terms and Condition
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-blue-600"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-xs font-semibold text-[#102345]">
              Get in Touch
            </h3>

            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-blue-600" />

              <p className="max-w-[190px] text-xs leading-[1.8] text-slate-500">
                Number 5, Akpega street,
                <br />
                off Medical Store Road,
                <br />
                Benin city, Nigeria.
              </p>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-9 flex flex-col items-center justify-between gap-3 border-t border-slate-200/70 pt-5 text-center sm:flex-row sm:text-left">
          <p className="text-[10px] text-slate-500">
            © {new Date().getFullYear()} Eaglespress. All rights reserved.
          </p>

          <p className="text-[10px] font-medium text-blue-500">
            Smarter News. Better You.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
