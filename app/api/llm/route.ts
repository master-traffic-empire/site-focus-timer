import { siteConfig } from "@/site.config"

export const dynamic = "force-static"

export async function GET() {
  const payload = {
    site: {
      name: siteConfig.name,
      url: siteConfig.baseUrl,
      tagline: siteConfig.tagline,
      description: siteConfig.description,
      category: siteConfig.category,
      primaryKeyword: siteConfig.primaryKeyword,
      targetKeywords: siteConfig.targetKeywords,
      lastUpdated: new Date().toISOString(),
    },
    tools: [
      {
        name: "Pomodoro Timer",
        slug: "pomodoro",
        url: `${siteConfig.baseUrl}/pomodoro`,
        markdownUrl: `${siteConfig.baseUrl}/pomodoro.md`,
        description:
          "Configurable Pomodoro timer with 25/5/15-minute defaults, custom intervals, sound notifications, session tracking, and visual progress ring.",
        pricing: "free",
        tags: ["pomodoro", "focus", "timer", "productivity", "study"],
      },
    ],
    articles: [
      {
        title:
          "Deep Work Is Dying: How to Reclaim Focus in an Age of Fragmentation",
        slug: "deep-work-focus-guide-2026",
        url: `${siteConfig.baseUrl}/blog/deep-work-focus-guide-2026`,
        publishedAt: "2026-04-06",
        category: "Productivity",
        tags: ["deep work", "focus", "productivity", "time management", "2026"],
        readingTime: 8,
      },
    ],
    feeds: {
      rss: `${siteConfig.baseUrl}/rss.xml`,
      atom: `${siteConfig.baseUrl}/atom.xml`,
      sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
      llmsTxt: `${siteConfig.baseUrl}/llms.txt`,
      llmsFullTxt: `${siteConfig.baseUrl}/llms-full.txt`,
    },
  }

  return Response.json(payload, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Access-Control-Allow-Origin": "*",
    },
  })
}
