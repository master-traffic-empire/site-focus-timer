import Link from "next/link"
import { siteConfig } from "@/site.config"

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem", marginBottom: "2rem" }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: "1.1rem", color: "#fff", marginBottom: "0.5rem" }}>
              {siteConfig.name}
            </div>
            <p style={{ margin: 0, fontSize: "0.85rem" }}>{siteConfig.tagline}</p>
          </div>
          <div>
            <div style={{ fontWeight: 600, color: "rgba(255,255,255,0.8)", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
              Tools
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
              <Link style={{ fontSize: "0.85rem" }} href="/pomodoro">Pomodoro Timer</Link>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 600, color: "rgba(255,255,255,0.8)", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
              Info
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
              <Link style={{ fontSize: "0.85rem" }} href="/about">About</Link>
              <Link style={{ fontSize: "0.85rem" }} href="/blog">Blog</Link>
              <Link style={{ fontSize: "0.85rem" }} href="/privacy">Privacy Policy</Link>
              <Link style={{ fontSize: "0.85rem" }} href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <span style={{ fontSize: "0.82rem" }}>&copy; {new Date().getFullYear()} {siteConfig.name}</span>
          <Link style={{ fontSize: "0.82rem" }} href="/llms.txt">llms.txt</Link>
        </div>
      </div>
    </footer>
  )
}
