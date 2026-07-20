"use client";
// Search Bar Midsection — Rochdale Siren style
// The homepage IS the search box. Discovery happens via keyword, not scrolling.
// All colours via CSS custom properties. Defaults: black on white.

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SearchBarMidsection({ articles = [], trendingTopics = [], siteName = "SacroPost" }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) router.push(`/news?search=${encodeURIComponent(query.trim())}`);
  };

  const topics =
    trendingTopics.length > 0
      ? trendingTopics
      : [...new Set(articles.flatMap((a) => a.keywords ?? []))].slice(0, 14);

  const recent = articles.slice(0, 3);

  return (
    <section style={{ background: "var(--bg,#fff)", borderBottom: "1px solid var(--border,#e5e7eb)", padding: "5rem 1.5rem 4rem" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>

        <p style={{ color: "var(--text-muted,#555)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".12em", marginBottom: 20, textAlign: "center" }}>
          Search {siteName}
        </p>

        <form onSubmit={handleSearch} style={{ display: "flex", gap: 8, marginBottom: 32 }}>
          <div style={{ flex: 1, display: "flex", alignItems: "center", background: "var(--card-bg,#f5f5f5)", border: "1.5px solid var(--border,#e5e7eb)", borderRadius: 10, padding: "0 16px", gap: 10 }}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, opacity: 0.4 }}>
              <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM19 19l-4.35-4.35" stroke="var(--text,#000)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles by keyword, topic or place…"
              style={{ flex: 1, border: "none", background: "transparent", fontSize: 15, color: "var(--text,#000)", padding: "15px 0", outline: "none" }}
            />
          </div>
          <button type="submit" style={{ padding: "0 28px", background: "var(--accent,#000)", color: "var(--accent-text,#fff)", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
            Search
          </button>
        </form>

        {topics.length > 0 && (
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 11, color: "var(--text-muted,#888)", marginBottom: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".08em" }}>Trending</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {topics.map((t, i) => (
                <Link key={i} href={`/news?search=${encodeURIComponent(t)}`} style={{ padding: "5px 13px", border: "1px solid var(--border,#e5e7eb)", borderRadius: 999, fontSize: 12, color: "var(--text-muted,#555)", textDecoration: "none", fontWeight: 500, background: "var(--card-bg,#f9f9f9)" }}>
                  #{String(t).replace(/\s+/g, "")}
                </Link>
              ))}
            </div>
          </div>
        )}

        {recent.length > 0 && (
          <div style={{ borderTop: "1px solid var(--border,#e5e7eb)", paddingTop: 24 }}>
            <p style={{ fontSize: 11, color: "var(--text-muted,#888)", marginBottom: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".08em" }}>Latest</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {recent.map((a) => (
                <Link key={a.slug} href={`/news/${a.slug}`} style={{ display: "flex", alignItems: "baseline", gap: 10, textDecoration: "none", color: "var(--text,#000)" }}>
                  <span style={{ fontSize: 10, color: "var(--accent,#000)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", flexShrink: 0 }}>{a.kicker ?? "News"}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.4 }}>{a.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
