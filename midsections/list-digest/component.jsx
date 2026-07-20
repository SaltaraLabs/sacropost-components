// List Digest — Text-first numbered list, no images. Fast. Clean. BBC-style.
// All colours via CSS custom properties. Defaults: black on white.
import Link from "next/link";

export default function ListDigest({ articles = [] }) {
  const items = articles.slice(0, 20);
  if (items.length === 0) return null;

  const cols = [items.slice(0, 10), items.slice(10, 20)];

  return (
    <section style={{ background: "var(--bg,#fff)", padding: "3rem 1.5rem", borderBottom: "1px solid var(--border,#e5e7eb)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 60px" }}>
        {cols.map((col, ci) => (
          <div key={ci}>
            {col.map((a, i) => {
              const num = ci * 10 + i + 1;
              return (
                <Link key={a.slug} href={`/news/${a.slug}`} style={{ display: "flex", gap: 18, padding: "16px 0", borderBottom: "1px solid var(--border,#e5e7eb)", textDecoration: "none", color: "inherit" }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: "var(--border,#e5e7eb)", lineHeight: 1, flexShrink: 0, width: 36, paddingTop: 2 }}>
                    {String(num).padStart(2, "0")}
                  </span>
                  <div>
                    <span style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--accent,#000)", display: "block", marginBottom: 5 }}>
                      {a.kicker ?? "News"}{a.area ? ` · ${a.area}` : ""}
                    </span>
                    <span style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.35, color: "var(--text,#000)", display: "block" }}>
                      {a.title}
                    </span>
                    {a.lead && (
                      <span style={{ fontSize: 12, color: "var(--text-muted,#666)", lineHeight: 1.5, display: "block", marginTop: 4 }}>
                        {a.lead.slice(0, 90)}{a.lead.length > 90 ? "…" : ""}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
