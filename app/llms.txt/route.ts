import { siteConfig } from "@/site.config"

export const dynamic = "force-static"

export async function GET() {
  const content = `# ${siteConfig.name}
> ${siteConfig.tagline}

${siteConfig.description}

## Pages
- Home: ${siteConfig.baseUrl}
- Pomodoro Timer: ${siteConfig.baseUrl}/pomodoro
- About: ${siteConfig.baseUrl}/about
- Blog: ${siteConfig.baseUrl}/blog
- Privacy Policy: ${siteConfig.baseUrl}/privacy
- Terms of Service: ${siteConfig.baseUrl}/terms
`
  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
