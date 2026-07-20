// Magazine Banner — Large centred logo, coloured top bar, two-row nav
// Colours are driven entirely by CSS custom properties — never hardcode hex values here.
// The builder injects: --accent  --bg  --text  --nav-bg  --nav-text  --divider

export default function MagazineBanner({ articles = [], siteName = 'SacroPost News' }) {
  return (
    <header
      style={{
        background: 'var(--nav-bg)',
        borderBottom: '1px solid var(--divider)',
        padding: '0 2rem',
      }}
    >
      {/* TODO: implement Magazine Banner */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', height: 56 }}>
        <span style={{ color: 'var(--nav-text)', fontWeight: 800, fontSize: 18 }}>
          {siteName}
        </span>
      </div>
    </header>
  );
}
