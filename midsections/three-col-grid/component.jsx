// Three Column Grid — Classic tabloid three-up article grid
// All colours via CSS custom properties. Defaults: black on white.
import Link from "next/link";
import Image from "next/image";

export default function ThreeColGrid({ articles = [] }) {
  const items = articles.slice(0, 12);
  if (items.length === 0) return null;

  return (
    <section style={{ background: "var(--bg,#fff)", padding: "3rem 1.5rem", borderBottom: "1px solid var(--border,#e5e7eb)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
          {items.map((a) => (
            <Link key={a.slug} href={`/news/${a.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <article>
                {/* Thumbnail */}
                <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--card-bg,#f3f3f3)", borderRadius: 6, overflow: "hidden", marginBottom: 14 }}>
                  {a.hero && (
                    <Image src={a.hero} alt={a.title} fill unoptimized sizes="400px" style={{ objectFit: "cover" }} />
                  )}
                </div>
                {/* Kicker */}
                <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--accent,#000)" }}>
                  {a.kicker ?? "News"}
                </span>
                {/* Headline */}
                <h3 style={{ fontSize: 17, fontWeight: 800, lineHeight: 1.25, color: "var(--text,#000)", margin: "6px 0 8px" }}>
                  {a.title}
                </h3>
                {/* Lead */}
                {a.lead && (
                  <p style={{ fontSize: 13, color: "var(--text-muted,#555)", lineHeight: 1.55, margin: 0 }}>
                    {a.lead.length > 100 ? a.lead.slice(0, 100) + "…" : a.lead}
                  </p>
                )}
                {/* Meta */}
                <div style={{ display: "flex", gap: 8, marginTop: 10, fontSize: 11, color: "var(--text-muted,#888)" }}>
                  {a.author && <span>{a.author}</span>}
                  {a.author && a.date && <span>·</span>}
                  {a.date && <span>{a.date}</span>}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
