import type { SiteConfig } from "@base/types"

export const siteConfig: SiteConfig = {
  slug: "focus-timer",
  name: "FocusFlow",
  tagline: "Pomodoro timer for deep work sessions",
  description: "Free online Pomodoro timer with customizable work and break intervals, sound notifications, session tracking, and visual progress ring. Stay focused and productive with the Pomodoro technique.",
  domain: "focus.thicket.sh",
  baseUrl: "https://focus.thicket.sh",
  category: "productivity",

  primaryKeyword: "pomodoro timer",
  targetKeywords: [
    "pomodoro timer online",
    "focus timer",
    "work timer",
    "study timer",
    "productivity timer",
    "25 minute timer",
    "pomodoro technique",
    "free pomodoro timer",
    "online focus timer",
    "deep work timer",
  ],
  twitterHandle: "",

  colors: {
    primary: "#0B0F19",
    secondary: "#6366F1",
    accent: "#F59E0B",
    surface: "#111827",
    surfaceDark: "#0B0F19",
    text: "#F1F5F9",
    textMuted: "#94A3B8",
    border: "#1E293B",
  },

  fonts: {
    display: "Space Grotesk",
    body: "Inter",
    mono: "JetBrains Mono",
  },

  gaMeasurementId: "G-E0CF8H2DGH",

  itemsPerPage: 24,
  featuredCount: 6,

  geo: {
    llmsTxtEnabled: true,
    llmsFullTxtEnabled: false,
    mdRoutesEnabled: false,
    structuredApiEnabled: true,
  },

  blog: {
    enabled: true,
    basePath: "/blog",
  },

  monetization: {
    adsenseEnabled: false,
    adsenseClientId: "",
    affiliateEnabled: false,
  },
}
