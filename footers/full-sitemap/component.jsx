// Full Sitemap Footer — Logo + strapline, 4-col links, socials, copyright bar
// All colours via CSS custom properties. Defaults: black on white.
import Link from "next/link";

const COLS = [
  { heading: "News", links: ["Latest", "Trending", "Politics", "Sport", "Business"] },
  { heading: "Local", links: ["Borough News", "Council", "Planning", "Events", "Schools"] },
  { heading: "More", links: ["About", "Contact", "Advertise", "RSS Feed", "Newsletter"] },
  { heading: "Legal", links: ["Privacy Policy", "Terms of Use", "Copyright", "Cookies", "Corrections"] },
];

export default function FullSitemapFooter({ siteName = "SacroPost News", strapline = "Independent local news.", year = new Date().getFullYear() }) {
  return (
    <footer style={{ background: "var(--nav-bg,#000)", borderTop: "3px solid var(--accent,#fff)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 1.5rem 0" }}>
        {/* Logo + strapline */}
        <div style={{ marginBottom: 40 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontSize: 28, fontWeight: 900, color: "var(--nav-text,#fff)", display: "block", letterSpacing: "-0.02em" }}>{siteName}</span>
          </Link>
          <p style={{ fontSize: 13, color: "var(--nav-text,#fff)", opacity: 0.45, marginTop: 6 }}>{strapline}</p>
        </div>

        {/* Link columns */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,.08)" }}>
          {COLS.map((col) => (
            <div key={col.heading}>
              <h4 style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".12em", color: "var(--nav-text,#fff)", opacity: 0.4, marginBottom: 14 }}>
                {col.heading}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((l) => (
                  <Link key={l} href={`/${l.toLowerCase().replace(/\s+/g, "-")}`} style={{ fontSize: 13, color: "var(--nav-text,#fff)", opacity: 0.65, textDecoration: "none", fontWeight: 500 }}>
                    {l}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Copyright bar */}
        <div style={{ padding: "16px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "var(--nav-text,#fff)", opacity: 0.3 }}>© {year} {siteName}. All rights reserved.</span>
          <span style={{ fontSize: 11, color: "var(--nav-text,#fff)", opacity: 0.3 }}>Powered by SacroPost</span>
        </div>
      </div>
    </footer>
  );
}
