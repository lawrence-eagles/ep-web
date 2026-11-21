import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Sparkles,
  Bookmark,
  Share2,
  Layers3,
  Tag,
  Star,
  Flame,
  PencilLine,
  BriefcaseBusiness,
  Smartphone,
  GraduationCap,
  Users,
  MapPin,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// PAGE CONFIGURATION & CACHING
// ─────────────────────────────────────────────────────────────

// Revalidate the homepage every hour.
export const revalidate = 3600;

// SEO metadata
export const metadata: Metadata = {
  title: "Eaglespress - Smarter News. Personalized for You.",
  description:
    "Discover the latest news from your favorite sources with Eaglespress. Get AI-powered summaries, personalized recommendations, and stay informed in one place.",
  keywords: [
    "Eaglespress",
    "AI news aggregator",
    "personalized news",
    "AI news summaries",
    "latest news",
    "news discovery",
  ],
  openGraph: {
    title: "Eaglespress - Smarter News. Personalized for You.",
    description:
      "Discover, read, share and stay informed with AI-powered news aggregation.",
    type: "website",
    images: ["/eaglespress-homepage-hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eaglespress - Smarter News. Personalized for You.",
    description:
      "Discover, read, share and stay informed with AI-powered news aggregation.",
    images: ["/eaglespress-homepage-hero.png"],
  },
};

// ─────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────

const GOOGLE_PLAY_URL = "https://play.google.com/store";
const APP_STORE_URL = "https://www.apple.com/app-store/";

const googlePlayImage = "/google-play-button.png";
const appleStoreImage = "/apple-store-button.png";

// ─────────────────────────────────────────────────────────────
// REUSABLE COMPONENTS
// ─────────────────────────────────────────────────────────────

function StoreButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Eaglespress on Google Play"
        className="inline-flex transition-transform duration-200 hover:scale-[1.04] active:scale-95"
      >
        <Image
          src={googlePlayImage}
          alt="Get it on Google Play"
          width={260}
          height={78}
          className={
            compact
              ? "h-[34px] w-auto object-contain"
              : "h-[44px] w-auto object-contain"
          }
        />
      </a>

      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Eaglespress on the Apple App Store"
        className="inline-flex transition-transform duration-200 hover:scale-[1.04] active:scale-95"
      >
        <Image
          src={appleStoreImage}
          alt="Download on the App Store"
          width={260}
          height={78}
          className={
            compact
              ? "h-[34px] w-auto object-contain"
              : "h-[44px] w-auto object-contain"
          }
        />
      </a>
    </div>
  );
}

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-6">
      <div className="mb-2 h-[2px] w-9 rounded-full bg-blue-500" />

      <h2 className="text-2xl font-bold tracking-tight text-[#102345] sm:text-3xl">
        {title}
      </h2>

      <p className="mt-1 text-sm leading-6 text-slate-500 sm:text-base">
        {description}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// FEATURE DATA
// ─────────────────────────────────────────────────────────────

const features = [
  {
    title: "Discover News",
    description: "Get the latest news from around the world.",
    icon: Globe,
    color: "blue",
  },
  {
    title: "AI Summaries",
    description: "Cut through the noise with quick, accurate summaries.",
    icon: Sparkles,
    color: "sky",
  },
  {
    title: "Hot Trending News",
    description: "Get hot trending news on the go.",
    icon: Flame,
    color: "orange",
  },
  {
    title: "Save for Later",
    description: "Read them anytime, anywhere.",
    icon: Bookmark,
    color: "emerald",
  },
  {
    title: "Share & Engage",
    description: "Share with your audience and join the conversation.",
    icon: Share2,
    color: "orange",
  },
  {
    title: "Multiple Sources",
    description: "Explore content from trusted sources worldwide.",
    icon: Layers3,
    color: "teal",
  },
  {
    title: "Follow Categories",
    description: "Get updates on what you love.",
    icon: Tag,
    color: "green",
  },
  {
    title: "Smart Recommendations",
    description: "Discover perfect, tailored content for your interests.",
    icon: Star,
    color: "amber",
  },
];

const featureColors: Record<
  string,
  { icon: string; background: string; border: string }
> = {
  blue: {
    icon: "text-blue-500",
    background: "bg-blue-50",
    border: "border-blue-100",
  },
  sky: {
    icon: "text-blue-500",
    background: "bg-sky-50",
    border: "border-sky-100",
  },
  emerald: {
    icon: "text-emerald-600",
    background: "bg-emerald-50",
    border: "border-emerald-100",
  },
  orange: {
    icon: "text-orange-500",
    background: "bg-orange-50",
    border: "border-orange-100",
  },
  teal: {
    icon: "text-teal-600",
    background: "bg-teal-50",
    border: "border-teal-100",
  },
  green: {
    icon: "text-green-600",
    background: "bg-green-50",
    border: "border-green-100",
  },
  amber: {
    icon: "text-amber-500",
    background: "bg-amber-50",
    border: "border-amber-100",
  },
};

// ─────────────────────────────────────────────────────────────
// AUDIENCE DATA
// ─────────────────────────────────────────────────────────────

const audiences = [
  {
    title: "Content Creators & Bloggers",
    description:
      "Get fresh content ideas and stay ahead with newly aggregated news.",
    icon: PencilLine,
    image: "/home-cards/content-creators-and-bloggers.png",
  },
  {
    title: "Busy Professionals",
    description:
      "Get a personalized feed that fits your interests. Stay informed in minutes.",
    icon: BriefcaseBusiness,
    image: "/home-cards/busy-professionals.png",
  },
  {
    title: "Commuters & On-the-Go Readers",
    description: "Quick, one-handed scanning. Save for later and read anytime.",
    icon: Smartphone,
    image: "/home-cards/commuters-and-on-the-go-readers.png",
  },
  {
    title: "Students & Researchers",
    description:
      "Broad, current coverage of topics you track. Bookmark for later reference.",
    icon: GraduationCap,
    image: "/home-cards/students-and-researchers.png",
  },
  {
    title: "Community-Minded Readers",
    description: "Like, comment and share. Turn reading into a conversation.",
    icon: Users,
    image: "/home-cards/community-minded-readers.png",
  },
];

// ─────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#102345]">
      {/* ═══════════════════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════════════════ */}

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
              className="relative py-2 text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-blue-600"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="py-2 text-slate-600 transition-colors hover:text-blue-600"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="py-2 text-slate-600 transition-colors hover:text-blue-600"
            >
              Contact
            </Link>

            <Link
              href="#download"
              className="rounded-full bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700 sm:px-7 sm:text-sm"
            >
              Download
            </Link>
          </nav>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════ */}

      <section className="relative isolate">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute right-[-10%] top-[-10%] h-[550px] w-[750px] rounded-full bg-blue-100/50 blur-[100px]" />
          <div className="absolute left-[-15%] top-[30%] h-[300px] w-[400px] rounded-full bg-sky-50 blur-[90px]" />
        </div>

        <div className="mx-auto grid max-w-[1320px] items-center gap-6 px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-2 lg:px-12 lg:pb-14 lg:pt-10">
          {/* Hero content */}
          <div className="relative z-10 max-w-[550px]">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-blue-600 sm:text-sm">
              AI-POWERED NEWS AGGREGATOR
            </p>

            <h1 className="text-[38px] font-extrabold leading-[1.15] tracking-[-0.045em] text-[#102345] sm:text-5xl lg:text-[52px]">
              Smarter News.
              <br />
              Personalized for You.
            </h1>

            <p className="mt-5 max-w-[440px] text-sm leading-7 text-slate-500 sm:text-base sm:leading-[1.8]">
              Eaglespress brings you the latest news from your favorite sources,
              powered by AI. Discover, read, share and stay informed — all in
              one place.
            </p>

            <div id="download" className="mt-6 scroll-mt-24">
              <StoreButtons />
            </div>
          </div>

          {/* Hero image */}
          <div className="relative mx-auto w-full max-w-[760px] lg:-ml-2">
            <Image
              src="/eaglespress-homepage-hero.png"
              alt="Eaglespress news platform displayed on a laptop and smartphone"
              width={1100}
              height={800}
              preload
              fetchPriority="high"
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHAT YOU GET / FEATURES
      ═══════════════════════════════════════════════════════ */}

      <section
        id="features"
        className="mx-auto max-w-[1320px] px-5 pb-10 sm:px-8 sm:pb-14 lg:px-12"
      >
        <SectionHeading
          title="What You Get"
          description="Everything you need to stay informed, connected and ahead."
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            const colors = featureColors[feature.color];

            return (
              <article
                key={feature.title}
                className="group rounded-xl border border-slate-200/80 bg-white p-5 shadow-[0_3px_15px_rgba(15,50,100,0.015)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(30,100,200,0.08)] sm:p-5"
              >
                <div
                  className={`mb-3 flex h-14 w-14 items-center justify-center rounded-full border ${colors.background} ${colors.border}`}
                >
                  <Icon size={31} strokeWidth={1.9} className={colors.icon} />
                </div>

                <h3 className="text-base font-semibold tracking-tight text-[#102345]">
                  {feature.title}
                </h3>

                <p className="mt-1.5 max-w-[230px] text-sm leading-[1.65] text-slate-500">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHO IS EAGLESPRESS FOR?
      ═══════════════════════════════════════════════════════ */}

      <section
        id="audience"
        className="mx-auto max-w-[1320px] px-5 pb-10 sm:px-8 sm:pb-12 lg:px-12"
      >
        <SectionHeading
          title="Who Is Eaglespress For?"
          description="Built for curious minds, busy lives and passionate readers."
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {audiences.map((audience) => {
            const Icon = audience.icon;

            return (
              <article
                key={audience.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-[0_3px_15px_rgba(15,50,100,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(30,100,200,0.08)] sm:p-3.5"
              >
                {/* Audience icon */}
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                  <Icon size={22} strokeWidth={2} className="text-blue-600" />
                </div>

                {/* Audience title */}
                <h3 className="min-h-[40px] text-sm font-semibold leading-[1.45] text-[#102345]">
                  {audience.title}
                </h3>

                {/* Audience description */}
                <p className="mb-3 mt-1 text-xs leading-[1.65] text-slate-500">
                  {audience.description}
                </p>

                {/* Audience image */}
                <div className="relative mt-auto aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-100">
                  <Image
                    src={audience.image}
                    alt={audience.title}
                    width={600}
                    height={450}
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 45vw, 20vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          DOWNLOAD CTA
      ═══════════════════════════════════════════════════════ */}

      <section className="mx-auto max-w-[1320px] px-5 pb-5 sm:px-8 sm:pb-6 lg:px-12">
        <div className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 via-blue-500 to-indigo-500 px-6 py-8 text-white shadow-sm sm:px-10 lg:px-12">
          {/* Decorative background shapes */}
          <div className="pointer-events-none absolute -left-10 bottom-[-90px] -z-10 h-52 w-52 rounded-full border-[30px] border-white/10 bg-white/10" />

          <div className="pointer-events-none absolute -right-16 bottom-[-110px] -z-10 h-64 w-64 rounded-full bg-indigo-400/50 blur-2xl" />

          <div className="pointer-events-none absolute right-[-35px] top-[-100px] -z-10 h-56 w-56 rounded-full border-[35px] border-white/10" />

          <div className="relative mx-auto flex max-w-[1000px] flex-col items-center justify-between gap-6 sm:flex-row sm:gap-8">
            {/* CTA text */}
            <div className="max-w-[420px] text-center sm:text-left">
              <h2 className="text-xl font-bold leading-tight tracking-tight sm:text-2xl">
                Be Part of a Smarter
                <br />
                News Experience
              </h2>

              <p className="mt-2 text-xs leading-relaxed text-blue-50 sm:text-sm">
                Download Eaglespress today and never miss what matters.
              </p>
            </div>

            {/* CTA store buttons */}
            <StoreButtons />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════ */}

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

              <p className="mt-3 text-xs font-medium text-slate-500">
                Follow us
              </p>

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
    </main>
  );
}
