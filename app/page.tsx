import type { Metadata } from "next";
import Image from "next/image";
import StoreButtons from "@/components/home/StoreButtons";
import SectionHeading from "@/components/home/SectionHeading";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { features, featureColors, audiences } from "@/utils/home/data";

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
// MAIN PAGE
// ─────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#102345]">
      {/* ═══════════════════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════════════════ */}

      <Header />

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

      <Footer />
    </main>
  );
}
