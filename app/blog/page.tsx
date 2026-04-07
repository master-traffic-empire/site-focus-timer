import type { Metadata } from "next"
import { siteConfig } from "@/site.config"
import { getAllArticles } from "@/lib/articles"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog",
  description: "Productivity tips, focus strategies, and guides on the Pomodoro Technique from FocusFlow.",
  alternates: { canonical: `${siteConfig.baseUrl}/blog` },
}

export default async function BlogPage() {
  const articles = await getAllArticles()

  return (
    <>
      <Header />
      {articles.length === 0 ? (
        <div className="blog-empty">
          <h1>Blog</h1>
          <p>Articles on productivity, focus, and the Pomodoro Technique are coming soon.</p>
          <p style={{ marginTop: "1rem" }}>
            <Link href="/" style={{ color: "var(--color-secondary)" }}>
              Back to timer
            </Link>
          </p>
        </div>
      ) : (
        <div className="content-page">
          <h1>Blog</h1>
          <div style={{ display: "grid", gap: "1.5rem" }}>
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="mode-card"
              >
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}
