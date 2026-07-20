// Magazine Banner — Accent top bar + large centred logo on white + category nav below
// All colours via CSS custom properties. Defaults: black on white.
import Link from "next/link";

const NAV = ["Home", "News", "Sport", "Business", "Culture", "Opinion", "Travel", "Contact"];

export default function MagazineBanner({ siteName = "SacroPost", categories = [] }) {
  const navItems = categories.length > 0 ? categories : NAV;

  return (
    <header style={{ background: "var(--bg,#fff)" }}>
      {/* Accent top bar */}
      <div style={{ background: "var(--accent,#000)", height: 4 }} />

      {/* Logo row */}
      <div style={{ padding: "28px 1.5rem 20px", textAlign: "center", borderBottom: "1px solid var(--border,#e5e7eb)" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: "clamp(32px,6vw,64px)", fontWeight: 900, color: "var(--text,#000)", letterSpacing: "-0.03em", display: "block", lineHeight: 1 }}>
            {siteName}
          </span>
        </Link>
        <span style={{ fontSize: 11, color: "var(--text-muted,#888)", letterSpacing: ".15em", textTransform: "uppercase", marginTop: 6, display: "block" }}>
          Independent News
        </span>
      </div>

      {/* Category nav */}
      <nav style={{ borderBottom: "1px solid var(--border,#e5e7eb)", background: "var(--nav-bg,#000)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", display: "flex", justifyContent: "center", overflowX: "auto" }}>
          {navItems.map((item) => (
            <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} style={{
              padding: "12px 18px",
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: ".1em",
              color: "var(--nav-text,#fff)",
              textDecoration: "none",
              whiteSpace: "nowrap",
              opacity: 0.8,
            }}>
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
