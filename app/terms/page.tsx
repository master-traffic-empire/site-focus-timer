import { siteConfig } from "@/site.config"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "FocusFlow terms of service. Read our terms and conditions for using the site.",
  alternates: { canonical: `${siteConfig.baseUrl}/terms` },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <div className="content-page">
        <h1>Terms of Service</h1>
        <p>Last updated: April 2026</p>

        <h2>Acceptance of Terms</h2>
        <p>
          By accessing and using FocusFlow ({siteConfig.domain}), you accept and agree to be
          bound by these Terms of Service. If you do not agree to these terms, please do not use the service.
        </p>

        <h2>Description of Service</h2>
        <p>
          FocusFlow provides a free online Pomodoro timer tool. The service is provided &quot;as is&quot;
          and &quot;as available&quot; without warranties of any kind, either express or implied.
        </p>

        <h2>Use of Service</h2>
        <p>You agree to use FocusFlow only for lawful purposes and in accordance with these terms. You agree not to:</p>
        <ul>
          <li>Use the service in any way that violates applicable laws or regulations</li>
          <li>Attempt to interfere with the proper working of the service</li>
          <li>Attempt to gain unauthorized access to any portion of the service</li>
          <li>Use automated means to access the service in a way that sends more requests than a human could reasonably produce</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          The content, features, and functionality of FocusFlow are owned by us and are protected
          by international copyright, trademark, and other intellectual property laws.
        </p>

        <h2>Disclaimer of Warranties</h2>
        <p>
          FocusFlow is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make
          no warranties, expressed or implied, regarding the reliability, accuracy, or availability
          of the service.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          In no event shall FocusFlow be liable for any indirect, incidental, special, consequential,
          or punitive damages arising out of or related to your use of the service.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Changes will be posted on this page.
          Your continued use of the service after changes constitutes acceptance of the new terms.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about these terms, please contact us through our website.
        </p>
      </div>
      <Footer />
    </>
  )
}
