// Minimal Strip — Logo left, nav right, single row. Ultra-clean.
// All colours via CSS custom properties. Defaults: black on white.
import Link from "next/link";

const NAV = ["Latest", "Trending", "Search"];

export default function MinimalStrip({ siteName = "SacroPost", categories = [] }) {
  const navItems = categories.length > 0 ? categories.slice(0, 5) : NAV;

  return (
    <header style={{ background: "var(--nav-bg,#fff)", borderBottom: "1px solid var(--border,#e5e7eb)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", height: 58, gap: 32 }}>
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <span style={{ fontSize: 20, fontWeight: 900, color: "var(--nav-text,#000)", letterSpacing: "-0.02em" }}>
            {siteName}
          </span>
        </Link>

        <div style={{ width: 1, height: 20, background: "var(--border,#e5e7eb)" }} />

        <nav style={{ display: "flex", gap: 0, flex: 1, overflowX: "auto" }}>
          {navItems.map((item) => (
            <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} style={{
              padding: "0 14px",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--nav-text,#333)",
              textDecoration: "none",
              opacity: 0.8,
              whiteSpace: "nowrap",
            }}>
              {item}
            </Link>
          ))}
        </nav>

        {/* Search icon */}
        <Link href="/news" style={{ color: "var(--nav-text,#000)", opacity: 0.6, flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
