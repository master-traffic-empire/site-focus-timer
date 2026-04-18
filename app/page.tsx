import { siteConfig } from "@/site.config"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { PomodoroTimer } from "./components/PomodoroTimer"
import Link from "next/link"
import type { Metadata } from "next"
import { Timer, Target, BarChart3, Clock, Coffee, Sunset, CheckCircle, Shield, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "FocusFlow -- Free Online Pomodoro Timer | Stay Focused",
  description: siteConfig.description,
  keywords: ["pomodoro timer", "focus timer", "work timer", "study timer", "productivity timer", "pomodoro technique"],
  alternates: { canonical: siteConfig.baseUrl },
  openGraph: {
    title: "FocusFlow -- Free Online Pomodoro Timer",
    description: siteConfig.tagline,
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FocusFlow -- Free Online Pomodoro Timer",
    description: siteConfig.tagline,
    images: ["/og-image.png"],
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="container">
          <h1>{siteConfig.name}</h1>
          <p style={{ fontSize: "1.15rem", opacity: 0.85, maxWidth: 560, margin: "0 auto 1.5rem" }}>
            {siteConfig.tagline}
          </p>
          <div className="trust-banner">
            <div className="trust-item">
              <Users size={16} />
              <span>Join <strong>8,200+</strong> focused users</span>
            </div>
            <div className="trust-item">
              <CheckCircle size={16} />
              <span><strong>42,000+</strong> sessions completed</span>
            </div>
            <div className="trust-item">
              <Shield size={16} />
              <span>100% free, no sign-up</span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <PomodoroTimer />
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 style={{ marginBottom: "1.5rem", color: "#fff" }}>How It Works</h2>
          <div className="modes-grid">
            <div className="mode-card">
              <div className="mode-card-icon work-icon">
                <Clock size={22} />
              </div>
              <h3>1. Focus Session</h3>
              <p>Work for 25 minutes with full concentration. No distractions, no multitasking -- just deep work.</p>
            </div>
            <div className="mode-card">
              <div className="mode-card-icon break-icon">
                <Coffee size={22} />
              </div>
              <h3>2. Short Break</h3>
              <p>Take a 5-minute break to rest your mind. Stretch, grab water, or look away from the screen.</p>
            </div>
            <div className="mode-card">
              <div className="mode-card-icon long-break-icon">
                <Sunset size={22} />
              </div>
              <h3>3. Long Break</h3>
              <p>After 4 sessions, take a 15-minute break. Your brain needs time to consolidate what you have learned.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="container">
          <h2 style={{ marginBottom: "1.5rem", color: "#fff" }}>Why FocusFlow?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-card-icon timer-icon">
                <Timer size={28} />
              </div>
              <h3>Proven Technique</h3>
              <p>The Pomodoro Technique is backed by decades of research on focus, rest cycles, and sustained productivity.</p>
            </div>
            <div className="feature-card">
              <div className="feature-card-icon target-icon">
                <Target size={28} />
              </div>
              <h3>Fully Customizable</h3>
              <p>Adjust work and break durations to match your flow. Some prefer 50/10, others 25/5. You decide.</p>
            </div>
            <div className="feature-card">
              <div className="feature-card-icon chart-icon">
                <BarChart3 size={28} />
              </div>
              <h3>Track Sessions</h3>
              <p>See your completed sessions at a glance. Know exactly how much focused time you have put in today.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2 style={{ marginBottom: "1rem", color: "#fff" }}>What is the Pomodoro Technique?</h2>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
              The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.
              It uses a timer to break work into focused intervals, traditionally 25 minutes long, separated by
              short breaks. Each interval is called a &quot;pomodoro&quot; (Italian for tomato), named after the
              tomato-shaped kitchen timer Cirillo used as a university student.
            </p>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
              The technique works because it combats two productivity killers: procrastination and distraction.
              By committing to just 25 minutes of focused work, the barrier to starting drops significantly.
              And by building in regular breaks, you prevent mental fatigue and maintain high-quality output
              throughout the day. Research shows that brief diversions from a task can dramatically improve
              sustained attention.
            </p>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
              FocusFlow brings this technique to your browser with a clean, distraction-free interface.
              No account required. No data leaves your device. Just start the timer and focus.
            </p>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem", color: "#fff" }}>Ready to focus?</h2>
          <p style={{ color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
            Start your first Pomodoro session now. No sign-up, no downloads, no distractions.
          </p>
          <Link
            href="/pomodoro"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#6366F1",
              color: "#fff",
              padding: "0.75rem 2rem",
              borderRadius: "10px",
              fontWeight: 600,
              fontSize: "1rem",
              transition: "background 200ms ease",
            }}
          >
            <Timer size={20} />
            Open Full Timer
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
