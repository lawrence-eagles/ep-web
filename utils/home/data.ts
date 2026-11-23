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
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// FEATURE DATA
// ─────────────────────────────────────────────────────────────

export const features = [
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

export const featureColors: Record<
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

export const audiences = [
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
