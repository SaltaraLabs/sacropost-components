// Masthead — Classic newspaper: date bar → centred logo → category nav row
// All colours via CSS custom properties. Defaults: black on white.
import Link from "next/link";

const NAV = ["Home", "Latest", "Trending", "Politics", "Sport", "Business", "Contact"];

export default function Masthead({ siteName = "SacroPost News", categories = [] }) {
  const navItems = categories.length > 0 ? categories : NAV;
  const today = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  return (
    <header style={{ background: "var(--nav-bg,#000)", borderBottom: "1px solid var(--border,#222)" }}>
      {/* Top utility bar: date left, edition right */}
      <div style={{ borderBottom: "1px solid var(--border,#222)", padding: "6px 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "var(--nav-text,#fff)", opacity: 0.5 }}>{today}</span>
          <span style={{ fontSize: 11, color: "var(--nav-text,#fff)", opacity: 0.5 }}>Digital Edition</span>
        </div>
      </div>

      {/* Masthead logo row */}
      <div style={{ padding: "20px 1.5rem", textAlign: "center" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: "clamp(28px,5vw,52px)", fontWeight: 900, color: "var(--nav-text,#fff)", letterSpacing: "-0.02em", display: "block" }}>
            {siteName}
          </span>
        </Link>
      </div>

      {/* Category nav strip */}
      <div style={{ borderTop: "1px solid var(--border,#333)", borderBottom: "1px solid var(--border,#333)" }}>
        <nav style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", display: "flex", overflowX: "auto" }}>
          {navItems.map((item) => (
            <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} style={{
              padding: "11px 16px",
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: ".09em",
              color: "var(--nav-text,#fff)",
              textDecoration: "none",
              whiteSpace: "nowrap",
              opacity: 0.75,
            }}>
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
