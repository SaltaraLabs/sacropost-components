// Two Column Stream — Main story stream (2/3) + Latest sidebar (1/3)
// All colours via CSS custom properties. Defaults: black on white.
import Link from "next/link";
import Image from "next/image";

export default function TwoColStream({ articles = [] }) {
  const main = articles.slice(0, 6);
  const sidebar = articles.slice(0, 10);
  if (main.length === 0) return null;

  return (
    <section style={{ background: "var(--bg,#fff)", padding: "3rem 1.5rem", borderBottom: "1px solid var(--border,#e5e7eb)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr", gap: 48 }}>

        {/* Main stream */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {main.map((a) => (
            <Link key={a.slug} href={`/news/${a.slug}`} style={{ textDecoration: "none", color: "inherit", display: "flex", gap: 20 }}>
              <div style={{ position: "relative", width: 200, flexShrink: 0, aspectRatio: "4/3", background: "var(--card-bg,#f3f3f3)", borderRadius: 6, overflow: "hidden" }}>
                {a.hero && <Image src={a.hero} alt={a.title} fill unoptimized sizes="200px" style={{ objectFit: "cover" }} />}
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--accent,#000)" }}>
                  {a.kicker ?? "News"}
                </span>
                <h3 style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.2, color: "var(--text,#000)", margin: "6px 0 10px" }}>{a.title}</h3>
                {a.lead && <p style={{ fontSize: 14, color: "var(--text-muted,#555)", lineHeight: 1.6, margin: "0 0 10px" }}>{a.lead}</p>}
                <div style={{ fontSize: 11, color: "var(--text-muted,#888)", display: "flex", gap: 8 }}>
                  {a.author && <span>{a.author}</span>}
                  {a.date && <><span>·</span><span>{a.date}</span></>}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Sidebar */}
        <aside>
          <div style={{ borderBottom: "2px solid var(--accent,#000)", paddingBottom: 8, marginBottom: 18 }}>
            <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--text,#000)" }}>Latest</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {sidebar.map((a, i) => (
              <Link key={a.slug} href={`/news/${a.slug}`} style={{
                textDecoration: "none", color: "inherit",
                padding: "14px 0",
                borderBottom: "1px solid var(--border,#e5e7eb)",
                display: "flex", gap: 12, alignItems: "flex-start",
              }}>
                <span style={{ fontSize: 22, fontWeight: 900, color: "var(--border,#e5e7eb)", lineHeight: 1, flexShrink: 0, width: 28 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <span style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--accent,#000)", display: "block", marginBottom: 4 }}>
                    {a.kicker ?? "News"}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.35, color: "var(--text,#000)" }}>{a.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
