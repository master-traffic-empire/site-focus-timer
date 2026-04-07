import { siteConfig } from "@/site.config"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "FocusFlow privacy policy. Learn how we handle your data.",
  alternates: { canonical: `${siteConfig.baseUrl}/privacy` },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <div className="content-page">
        <h1>Privacy Policy</h1>
        <p>Last updated: April 2026</p>

        <h2>Overview</h2>
        <p>
          FocusFlow (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the website at{" "}
          <a href={siteConfig.baseUrl}>{siteConfig.domain}</a>. This page explains how we
          collect, use, and protect your information.
        </p>

        <h2>Information We Collect</h2>
        <p>
          FocusFlow is designed to be privacy-first. All timer data, settings, and session history
          are stored locally in your browser and never transmitted to our servers.
        </p>
        <p>We collect minimal analytics data through Google Analytics, including:</p>
        <ul>
          <li>Pages visited and time spent on pages</li>
          <li>Approximate geographic location (country/city level)</li>
          <li>Browser type and device category</li>
          <li>Referring website</li>
        </ul>

        <h2>Cookies</h2>
        <p>
          We use cookies only for analytics purposes. You can disable cookies in your browser
          settings without affecting the functionality of the timer.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We use Google Analytics (GA4) to understand how visitors use our site. Google Analytics
          collects anonymous usage data. You can opt out of Google Analytics by installing the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics Opt-out Browser Add-on
          </a>.
        </p>

        <h2>Data Storage</h2>
        <p>
          Timer settings and session data are stored in your browser&apos;s local storage.
          This data never leaves your device. Clearing your browser data will remove this information.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Our service is not directed to children under 13. We do not knowingly collect personal
          information from children under 13.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Changes will be posted on this page
          with an updated revision date.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy, please contact us through our website.
        </p>
      </div>
      <Footer />
    </>
  )
}
