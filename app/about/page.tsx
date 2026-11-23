import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Target, Gem, Users, Rocket } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Eaglespress",
  description:
    "Discover the story behind Eaglespress. We're on a mission to make news simple, smart, and accessible to everyone through personalized news discovery and AI-powered summaries.",
  openGraph: {
    title: "About Us | Eaglespress",
    description:
      "Learn about our mission, values, and the people behind Eaglespress.",
    images: ["/about-us-hero.png"],
  },
};

const values = [
  {
    title: "Our Vision",
    description: "A more informed world — one reader at a time.",
    icon: Eye,
  },
  {
    title: "Our Mission",
    description: "To make news simple, smart and accessible.",
    icon: Target,
  },
  {
    title: "Our Values",
    description: "Accuracy, innovation, community, impact.",
    icon: Gem,
  },
  {
    title: "Our Promise",
    description: "Reliable news. Personalized for you.",
    icon: Users,
  },
];

const About = () => {
  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-white text-[#10275B]">
        {/* Subtle background decorations */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-0 overflow-hidden"
        >
          <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-[110px]" />
          <div className="absolute -left-40 top-[450px] h-[400px] w-[400px] rounded-full bg-sky-100/30 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          {/* =========================================
              HERO / OUR STORY
          ========================================== */}
          <section
            aria-labelledby="story-heading"
            className="grid items-center gap-8 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:min-h-[420px] lg:grid-cols-[0.85fr_1.15fr] lg:gap-6 lg:py-12"
          >
            {/* Story content */}
            <div className="relative z-10 max-w-[490px]">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  About Us
                </span>
                <span className="h-[2px] w-9 rounded-full bg-blue-600" />
              </div>

              <h1
                id="story-heading"
                className="text-4xl font-extrabold tracking-tight text-[#10275B] sm:text-5xl lg:text-[52px] lg:leading-[1.12]"
              >
                Our Story
              </h1>

              <p className="mt-4 text-lg font-medium leading-relaxed text-blue-500 sm:text-xl">
                We’re on a mission to make news simple, smart and accessible to
                everyone.
              </p>

              <p className="mt-4 text-sm leading-[1.8] text-blue-500 sm:text-[15px]">
                Eaglespress was built with a simple idea — to help people{" "}
                <span className="font-semibold text-[#10275B]">
                  stay informed without the noise.
                </span>{" "}
                We combine trusted news sources with the power of AI to deliver
                personalized, relevant and easy-to-read content, so you can
                spend less time scrolling and more time on what matters.
              </p>

              <Link
                href="#our-mission"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
              >
                Our Mission
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* Hero image */}
            <div className="relative mx-auto w-full max-w-[700px]">
              <div
                aria-hidden="true"
                className="absolute inset-10 rounded-full bg-blue-200/40 blur-[70px]"
              />

              <Image
                src="/about-us-hero.png"
                alt="Eaglespress news platform displayed on a laptop and smartphone"
                width={1200}
                height={850}
                preload
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="relative z-10 h-auto w-full object-contain"
              />
            </div>
          </section>

          {/* =========================================
              OUR VALUES
          ========================================== */}
          <section
            id="our-mission"
            aria-labelledby="values-heading"
            className="scroll-mt-24 pb-16 sm:pb-20"
          >
            {/* Section heading */}
            <div className="mb-6">
              <span
                aria-hidden="true"
                className="mb-3 block h-[2px] w-9 rounded-full bg-blue-600"
              />

              <h2
                id="values-heading"
                className="text-3xl font-bold tracking-tight text-[#10275B] sm:text-4xl"
              >
                Our Values
              </h2>

              <p className="mt-1 max-w-xl text-sm leading-relaxed text-blue-500 sm:text-base">
                We believe in information, community and progress.
                <br className="hidden sm:block" />
                These values guide everything we do.
              </p>
            </div>

            {/* Value cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article
                    key={value.title}
                    className="group rounded-xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 sm:p-6"
                  >
                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-blue-200/80 transition-transform duration-300 group-hover:scale-110">
                      <Icon
                        size={30}
                        strokeWidth={2.8}
                        className="text-blue-600"
                      />
                    </div>

                    <h3 className="mt-3 text-base font-bold text-[#10275B] sm:text-lg">
                      {value.title}
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-blue-500">
                      {value.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>

          {/* =========================================
              OUR TEAM
          ========================================== */}
          <section
            aria-labelledby="team-heading"
            className="grid items-center gap-8 pb-16 sm:pb-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12"
          >
            {/* Team description */}
            <div className="max-w-[440px]">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  Our Team
                </span>
                <span className="h-[2px] w-9 rounded-full bg-blue-600" />
              </div>

              <h2
                id="team-heading"
                className="text-3xl font-bold leading-tight tracking-tight text-[#10275B] sm:text-4xl"
              >
                The People Behind Eaglespress
              </h2>

              <p className="mt-5 text-sm leading-[1.9] text-blue-500 sm:text-[15px]">
                We’re a passionate team of builders, creators, readers and
                dreamers. From developers and designers to content curators and
                community managers, we all share one goal — to bring you the
                best news experience possible.
              </p>
            </div>

            {/* Team image */}
            <div className="relative overflow-hidden rounded-2xl border border-blue-100 shadow-sm shadow-blue-100/40">
              <Image
                src="/our-team.png"
                alt="The Eaglespress team collaborating around a laptop"
                width={1200}
                height={750}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </section>

          {/* =========================================
              DOWNLOAD CTA
          ========================================== */}
          <section
            aria-labelledby="download-heading"
            className="relative mb-8 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-r from-sky-100 via-blue-100 to-blue-200/80 px-6 py-8 sm:px-8 sm:py-9 lg:px-10"
          >
            {/* Background decorations */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden"
            >
              <div className="absolute -bottom-24 -left-16 h-48 w-72 rotate-[-15deg] rounded-[50%] bg-blue-300/30 blur-xl" />
              <div className="absolute -right-16 -top-28 h-56 w-72 rounded-full bg-white/50 blur-2xl" />
              <div className="absolute -bottom-32 right-1/4 h-48 w-72 rounded-full bg-sky-300/20 blur-2xl" />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-6 lg:flex-row lg:gap-7">
              {/* Rocket icon */}
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-white bg-white/70 shadow-sm backdrop-blur-sm sm:h-28 sm:w-28">
                <Rocket size={43} strokeWidth={2} className="text-blue-600" />
              </div>

              {/* CTA text */}
              <div className="flex-1 text-center lg:text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
                  Join Our Journey
                </span>

                <h2
                  id="download-heading"
                  className="mt-1 text-2xl font-bold leading-tight tracking-tight text-[#10275B] sm:text-3xl"
                >
                  Be Part of a Smarter
                  <br className="hidden sm:block" />
                  News Experience
                </h2>

                <p className="mt-1 text-xs text-[#234477] sm:text-sm">
                  Download Eaglespress today and never miss what matters.
                </p>
              </div>

              {/* App store buttons */}
              <div
                className="flex shrink-0 flex-wrap items-center justify-center gap-3"
                aria-label="Download Eaglespress"
              >
                <Link
                  href="/download"
                  aria-label="Get Eaglespress on Google Play"
                  className="transition-transform duration-300 hover:-translate-y-1"
                >
                  <Image
                    src="/google-play-button.png"
                    alt="Get it on Google Play"
                    width={240}
                    height={80}
                    loading="lazy"
                    className="h-auto w-[145px] object-contain sm:w-[165px] lg:w-[158px] xl:w-[175px]"
                  />
                </Link>

                <Link
                  href="/download"
                  aria-label="Download Eaglespress on the App Store"
                  className="transition-transform duration-300 hover:-translate-y-1"
                >
                  <Image
                    src="/apple-store-button.png"
                    alt="Download on the App Store"
                    width={240}
                    height={80}
                    loading="lazy"
                    className="h-auto w-[145px] object-contain sm:w-[165px] lg:w-[158px] xl:w-[175px]"
                  />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
