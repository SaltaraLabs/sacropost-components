"use client";
// Category Tabs — Scrollable category tabs, each showing their top stories
// All colours via CSS custom properties. Defaults: black on white.
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CategoryTabs({ articles = [] }) {
  // Derive categories from kicker field
  const categoryMap = {};
  for (const a of articles) {
    const cat = a.kicker ?? "General";
    if (!categoryMap[cat]) categoryMap[cat] = [];
    categoryMap[cat].push(a);
  }
  const categories = Object.keys(categoryMap);
  const [active, setActive] = useState(categories[0] ?? "");

  if (categories.length === 0) return null;

  const shown = (categoryMap[active] ?? []).slice(0, 4);
  const [lead, ...rest] = shown;

  return (
    <section style={{ background: "var(--bg,#fff)", borderBottom: "1px solid var(--border,#e5e7eb)" }}>
      {/* Tab strip */}
      <div style={{ borderBottom: "1px solid var(--border,#e5e7eb)", overflowX: "auto" }}>
        <div style={{ display: "flex", maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              padding: "14px 20px",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: ".08em",
              border: "none",
              background: "none",
              cursor: "pointer",
              color: active === cat ? "var(--accent,#000)" : "var(--text-muted,#888)",
              borderBottom: active === cat ? "2px solid var(--accent,#000)" : "2px solid transparent",
              marginBottom: -1,
              whiteSpace: "nowrap",
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles for active tab */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1.5rem", display: "grid", gridTemplateColumns: "2fr 1fr", gap: 28 }}>
        {/* Lead story */}
        {lead && (
          <Link href={`/news/${lead.slug}`} style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--card-bg,#f3f3f3)", borderRadius: 8, overflow: "hidden" }}>
              {lead.hero && <Image src={lead.hero} alt={lead.title} fill unoptimized sizes="700px" style={{ objectFit: "cover" }} />}
            </div>
            <div>
              <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--accent,#000)" }}>{lead.kicker ?? "News"}</span>
              <h2 style={{ fontSize: 22, fontWeight: 900, lineHeight: 1.2, color: "var(--text,#000)", margin: "6px 0 10px" }}>{lead.title}</h2>
              {lead.lead && <p style={{ fontSize: 14, color: "var(--text-muted,#555)", lineHeight: 1.6, margin: 0 }}>{lead.lead}</p>}
            </div>
          </Link>
        )}

        {/* Supporting stories */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {rest.map((a) => (
            <Link key={a.slug} href={`/news/${a.slug}`} style={{ textDecoration: "none", color: "inherit", display: "flex", gap: 12, padding: "14px 0", borderBottom: "1px solid var(--border,#e5e7eb)" }}>
              <div style={{ position: "relative", width: 80, flexShrink: 0, aspectRatio: "1", background: "var(--card-bg,#f3f3f3)", borderRadius: 5, overflow: "hidden" }}>
                {a.hero && <Image src={a.hero} alt={a.title} fill unoptimized sizes="80px" style={{ objectFit: "cover" }} />}
              </div>
              <div>
                <span style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--accent,#000)", display: "block", marginBottom: 4 }}>{a.kicker ?? "News"}</span>
                <span style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.35, color: "var(--text,#000)" }}>{a.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
