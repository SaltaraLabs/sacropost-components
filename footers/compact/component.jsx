// Compact Footer — Logo left · nav centre · copyright right. Single row.
// All colours via CSS custom properties. Defaults: black on white.
import Link from "next/link";

const LINKS = ["About", "Contact", "Privacy", "Terms", "Copyright"];

export default function CompactFooter({ siteName = "SacroPost News", year = new Date().getFullYear() }) {
  return (
    <footer style={{ background: "var(--nav-bg,#000)", borderTop: "1px solid var(--border,#222)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "18px 1.5rem", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        <span style={{ fontSize: 15, fontWeight: 900, color: "var(--nav-text,#fff)", letterSpacing: "-0.01em", flexShrink: 0 }}>
          {siteName}
        </span>
        <nav style={{ display: "flex", gap: 0, flex: 1, flexWrap: "wrap" }}>
          {LINKS.map((l) => (
            <Link key={l} href={`/${l.toLowerCase()}`} style={{ padding: "4px 12px", fontSize: 11, color: "var(--nav-text,#fff)", opacity: 0.5, textDecoration: "none", fontWeight: 500 }}>
              {l}
            </Link>
          ))}
        </nav>
        <span style={{ fontSize: 11, color: "var(--nav-text,#fff)", opacity: 0.35, flexShrink: 0 }}>
          © {year} {siteName}
        </span>
      </div>
    </footer>
  );
}
