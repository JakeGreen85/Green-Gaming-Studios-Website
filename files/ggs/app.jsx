/* ============================================================
   app.jsx — Nav, Footer, App shell (smooth-scroll, tweaks)
   ============================================================ */

function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top: id === "top" ? 0 : top, behavior: "smooth" });
}

function Nav({ heroVariant, accent }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState("top");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  // dark hero at top → light nav text until scrolled
  const lightText = heroVariant === "immersive" && !scrolled;
  const onNav = (e, id) => { e.preventDefault(); setOpen(false); smoothScrollTo(id); };

  return (
    <nav className={`nav ${scrolled ? "nav-solid" : ""} ${lightText ? "nav-light" : ""} ${open ? "nav-open" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="nav-logo" onClick={(e)=>onNav(e,"top")} aria-label="Green Gaming Studios — home">
          <img src={lightText ? "ggs/logo-white.png" : "ggs/logo-ink.png"} alt="GGS" />
          <span className="nav-word">GREEN GAMING STUDIOS</span>
        </a>
        <ul className="nav-links">
          {NAV.slice(1).map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className={active === n.id ? "is-active" : ""} onClick={(e)=>onNav(e,n.id)}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <a className="btn btn-accent nav-cta" href={LINKS.steam} {...(LINKS.steam === "#" ? { onClick: (e)=>onNav(e,"wishlist") } : { target: "_blank", rel: "noopener noreferrer" })}>Wishlist</a>
          <button className="nav-burger" onClick={()=>setOpen(o=>!o)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div className="nav-drawer">
        {NAV.slice(1).map((n) => (
          <a key={n.id} href={`#${n.id}`} onClick={(e)=>onNav(e,n.id)}>{n.label}</a>
        ))}
      </div>
    </nav>
  );
}

function Footer() {
  const onNav = (e, id) => { e.preventDefault(); smoothScrollTo(id); };
  return (
    <footer className="footer on-dark">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <Logo variant="white" size={56} />
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <span className="mono-label">Explore</span>
            <a href="#games" onClick={(e)=>onNav(e,"games")}>Games</a>
            <a href="#world" onClick={(e)=>onNav(e,"world")}>What we make</a>
            <a href="#project" onClick={(e)=>onNav(e,"project")}>In the oven</a>
            <a href="#founder" onClick={(e)=>onNav(e,"founder")}>Founder</a>
          </div>
          <div className="footer-col">
            <span className="mono-label">Community</span>
            <a href={LINKS.discord} {...(LINKS.discord === "#" ? { onClick: (e)=>e.preventDefault() } : { target: "_blank", rel: "noopener noreferrer" })}>Discord</a>
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="footer-col">
            <span className="mono-label">Studio</span>
            <a href="#contact" onClick={(e)=>onNav(e,"contact")}>Contact</a>
          </div>
        </div>
      </div>
      <div className="wrap footer-base">
        <span className="mono-label">© 2026 Green Gaming Studios — made by hand, with too much coffee.</span>
        <span className="mono-label">Treat people well · Play together</span>
      </div>
    </footer>
  );
}

/* ---------------- App ---------------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroStyle": "immersive",
  "accent": "#d98a3d",
  "grain": true,
  "motion": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // apply accent + accent-derived shades
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", t.accent);
    root.style.setProperty("--accent-deep", shade(t.accent, -0.16));
    root.style.setProperty("--accent-soft", shade(t.accent, 0.22));
  }, [t.accent]);

  React.useEffect(() => {
    document.body.classList.toggle("no-grain", !t.grain);
    document.body.classList.toggle("no-motion", !t.motion);
  }, [t.grain, t.motion]);

  // Failsafe: if hero entrance animations don't play (offscreen/throttled
  // iframe, reduced-motion), force the visible end-state so content is never
  // stuck at opacity:0. Re-armed whenever the hero style changes.
  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("anim-done");
    const id = setTimeout(() => root.classList.add("anim-done"), 1600);
    return () => clearTimeout(id);
  }, [t.heroStyle]);

  const onNav = (e, id) => { e.preventDefault(); smoothScrollTo(id); };

  return (
    <>
      {t.grain && <div className="grain" />}
      <Nav heroVariant={t.heroStyle} accent={t.accent} />
      <main>
        <Hero variant={t.heroStyle} onNav={onNav} />
        <GamesSection />
        <WorldSection />
        <ProjectSection />
        <FounderSection />
        <WishlistSection />
        <ContactSection />
      </main>
      <Footer />

      <TweaksPanel>
        <TweakSection label="Hero direction" />
        <TweakRadio
          label="Style" value={t.heroStyle}
          options={["editorial", "immersive", "playful"]}
          onChange={(v) => setTweak("heroStyle", v)}
        />
        <TweakSection label="Brand" />
        <TweakColor
          label="Accent" value={t.accent}
          options={["#d98a3d", "#c8553d", "#6f8f5f", "#3f7e8c", "#a26ea1"]}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakSection label="Texture & motion" />
        <TweakToggle label="Paper grain" value={t.grain} onChange={(v)=>setTweak("grain", v)} />
        <TweakToggle label="Animations" value={t.motion} onChange={(v)=>setTweak("motion", v)} />
      </TweaksPanel>
    </>
  );
}

// lighten/darken a hex color by amount (-1..1)
function shade(hex, amt) {
  const c = hex.replace("#", "");
  let r = parseInt(c.substring(0,2),16), g = parseInt(c.substring(2,4),16), b = parseInt(c.substring(4,6),16);
  const f = (v) => Math.max(0, Math.min(255, Math.round(amt < 0 ? v * (1+amt) : v + (255-v)*amt)));
  const h = (v) => f(v).toString(16).padStart(2,"0");
  return `#${h(r)}${h(g)}${h(b)}`;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
