import { siteConfig } from "@/site.config"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { PomodoroTimer } from "../components/PomodoroTimer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pomodoro Timer",
  description: "Free online Pomodoro timer with customizable work and break intervals, sound notifications, session tracking, and visual progress ring.",
  alternates: { canonical: `${siteConfig.baseUrl}/pomodoro` },
  openGraph: {
    title: "Pomodoro Timer -- FocusFlow",
    description: "Free online Pomodoro timer with customizable intervals, sound alerts, and session tracking.",
    url: `${siteConfig.baseUrl}/pomodoro`,
    siteName: siteConfig.name,
    type: "website",
  },
}

export default function PomodoroPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "FocusFlow Pomodoro Timer",
    description: "Free online Pomodoro timer with customizable work and break intervals, sound notifications, and session tracking.",
    url: `${siteConfig.baseUrl}/pomodoro`,
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    browserRequirements: "Requires a modern web browser with JavaScript enabled",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <section className="hero" style={{ padding: "2.5rem 0 2rem" }}>
        <div className="container">
          <h1 style={{ fontSize: "2.25rem" }}>Pomodoro Timer</h1>
          <p style={{ fontSize: "1rem", opacity: 0.8, maxWidth: 480, margin: "0 auto" }}>
            Focus for 25 minutes. Break for 5. Repeat. Customize the durations to fit your workflow.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <PomodoroTimer />
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2 style={{ marginBottom: "1rem", color: "#fff" }}>Tips for Effective Pomodoro Sessions</h2>
            <div style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
              <p>
                <strong style={{ color: "var(--color-text)" }}>Before you start:</strong> Write down the task you plan to work on.
                Having a clear goal for each session prevents drifting between tasks.
              </p>
              <p>
                <strong style={{ color: "var(--color-text)" }}>During focus time:</strong> Close unnecessary tabs, silence your phone,
                and commit fully to the task. If a distracting thought pops up, jot it on a notepad and return to it during break.
              </p>
              <p>
                <strong style={{ color: "var(--color-text)" }}>During breaks:</strong> Stand up and move. Look away from your screen.
                The break is for your brain to rest -- do not fill it with more screen time.
              </p>
              <p>
                <strong style={{ color: "var(--color-text)" }}>After 4 sessions:</strong> Take the long break seriously.
                15-30 minutes of genuine rest will make your next set of sessions significantly more productive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
