// Magazine Mosaic — 1 large feature + 5 smaller cards, asymmetric grid
// All colours via CSS custom properties. Defaults: black on white.
import Link from "next/link";
import Image from "next/image";

function Card({ article, large = false }) {
  return (
    <Link href={`/news/${article.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
      <article style={{ position: "relative", height: "100%", borderRadius: 8, overflow: "hidden", background: "var(--card-bg,#f3f3f3)" }}>
        {article.hero && (
          <Image src={article.hero} alt={article.title} fill unoptimized sizes={large ? "700px" : "300px"} style={{ objectFit: "cover" }} />
        )}
        {/* Overlay gradient */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.75) 0%, transparent 60%)" }} />
        {/* Text */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: large ? "24px 24px" : "14px 16px" }}>
          <span style={{ display: "block", fontSize: large ? 11 : 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--accent,#fff)", marginBottom: large ? 8 : 4 }}>
            {article.kicker ?? "News"}
          </span>
          <h3 style={{ fontSize: large ? 26 : 14, fontWeight: 900, lineHeight: 1.2, color: "#fff", margin: 0 }}>
            {article.title}
          </h3>
          {large && article.lead && (
            <p style={{ fontSize: 14, color: "rgba(255,255,255,.75)", lineHeight: 1.5, margin: "8px 0 0" }}>
              {article.lead.slice(0, 120)}…
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}

export default function MagazineMosaic({ articles = [] }) {
  const [feature, ...smalls] = articles.slice(0, 6);
  if (!feature) return null;

  return (
    <section style={{ background: "var(--bg,#fff)", padding: "3rem 1.5rem", borderBottom: "1px solid var(--border,#e5e7eb)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "3fr 2fr", gridTemplateRows: "repeat(3, 180px)", gap: 12 }}>
        {/* Large feature — spans all 3 rows */}
        <div style={{ gridRow: "1 / 4" }}>
          <Card article={feature} large />
        </div>
        {/* 4 smalls in the right column (first 4) */}
        {smalls.slice(0, 4).map((a) => (
          <div key={a.slug}>
            <Card article={a} />
          </div>
        ))}
      </div>
    </section>
  );
}
