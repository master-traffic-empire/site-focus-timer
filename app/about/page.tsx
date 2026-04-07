import { siteConfig } from "@/site.config"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "FocusFlow is a free, open-source Pomodoro timer designed for deep work. Learn about the project and the Pomodoro Technique.",
  alternates: { canonical: `${siteConfig.baseUrl}/about` },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="content-page">
        <h1>About FocusFlow</h1>
        <p>
          FocusFlow is a free online Pomodoro timer built for people who value deep, focused work.
          No accounts, no tracking, no distractions -- just a clean timer that helps you get things done.
        </p>

        <h2>Why We Built This</h2>
        <p>
          Most productivity tools try to do too much. They add social features, gamification layers,
          and endless settings that become distractions themselves. FocusFlow takes the opposite approach:
          one screen, one purpose, zero friction.
        </p>
        <p>
          The Pomodoro Technique works because of its simplicity. You set a timer, you focus, you rest.
          Your tool should be just as simple.
        </p>

        <h2>How It Works</h2>
        <ul>
          <li>Set your work interval (default: 25 minutes)</li>
          <li>Set your short break (default: 5 minutes)</li>
          <li>Set your long break (default: 15 minutes, every 4 sessions)</li>
          <li>Press start and focus until the timer sounds</li>
          <li>Take your break, then repeat</li>
        </ul>

        <h2>Privacy First</h2>
        <p>
          Everything runs in your browser. No data is sent to any server. No cookies are set beyond
          basic analytics. Your focus sessions, settings, and progress stay on your device.
        </p>

        <h2>Open and Free</h2>
        <p>
          FocusFlow is free to use with no limitations. No premium tier, no feature gates, no ads.
          We believe productivity tools should be accessible to everyone -- students, professionals,
          and anyone who wants to work better.
        </p>
      </div>
      <Footer />
    </>
  )
}
