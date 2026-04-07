"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Timer } from "lucide-react"
import { siteConfig } from "@/site.config"

const navLinks = [
  { href: "/pomodoro", label: "Timer" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="header-logo" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Timer size={22} />
          {siteConfig.name}
        </Link>
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`header-nav ${open ? "open" : ""}`}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
