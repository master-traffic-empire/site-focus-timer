import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import { siteConfig } from "@/site.config"
import { RootLayout } from "@base/layouts/RootLayout"
import { generateSiteMetadata } from "@base/lib/metadata"
import "@base/styles/globals.css"
import "./globals.css"

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700"],
  display: "swap",
})

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: siteConfig.colors.primary,
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = generateSiteMetadata(siteConfig)

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout
      siteConfig={siteConfig}
      fontVariables={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      {children}
    </RootLayout>
  )
}
