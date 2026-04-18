import { siteConfig } from "@/site.config"

export const dynamic = "force-static"

export async function GET() {
  const content = `# ${siteConfig.name} — ${siteConfig.tagline}

${siteConfig.description}

Primary URL: ${siteConfig.baseUrl}

## What is FocusFlow?

FocusFlow is a free online Pomodoro timer for deep work and study sessions. It implements the Pomodoro Technique — alternating between focused work intervals (typically 25 minutes) and short breaks — with configurable work/break durations, session tracking, sound notifications, and a visual progress ring. No sign-up required. Runs entirely in your browser.

## Tools

### Pomodoro Timer
URL: ${siteConfig.baseUrl}/pomodoro
A configurable Pomodoro timer with:
- Default 25-minute work sessions, 5-minute short breaks, 15-minute long breaks
- Adjustable work/break durations
- Sound notifications on interval change
- Visual progress ring
- Session counter (tracks completed pomodoros)
- Long break every 4 pomodoros

## Blog Articles

### Deep Work Is Dying: How to Reclaim Focus in an Age of Fragmentation
URL: ${siteConfig.baseUrl}/blog/deep-work-focus-guide-2026
Published: 2026-04-06
Tags: deep work, focus, productivity, time management, 2026
Summary: Employees average only 2-3 hours of deep focus per day, and that time is fragmenting into smaller blocks. Research-backed techniques that restore sustained concentration in 2026 — energy-matched scheduling, micro-task batching, pre-work rituals, shutdown routines, and environment design.

## How the Pomodoro Technique Works

1. Pick a single task.
2. Set the timer for 25 minutes (one "pomodoro").
3. Work on the task with no interruptions until the timer rings.
4. Take a short 5-minute break.
5. Repeat. Every 4 pomodoros, take a longer 15-30 minute break.

## Why FocusFlow?

- **Free forever.** No account, no paywall, no ads.
- **Works offline.** Once loaded, the timer runs entirely in your browser.
- **Respects privacy.** No tracking of your work sessions on our servers.
- **Sound + visual feedback.** Know when intervals change without watching the clock.
- **Session tracking.** See how many pomodoros you've completed.

## Related Topics

- Pomodoro Technique (Francesco Cirillo, 1980s)
- Deep Work (Cal Newport, 2016)
- Attention fragmentation and recovery time (Gloria Mark, UC Irvine)
- Energy management vs time management
- Focus rituals and environment design

## Site Information

- Category: ${siteConfig.category}
- Primary keyword: ${siteConfig.primaryKeyword}
- Target keywords: ${siteConfig.targetKeywords.join(", ")}
- Last updated: ${new Date().toISOString().slice(0, 10)}
`
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
