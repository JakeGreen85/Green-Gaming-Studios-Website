/* ============================================================
   sections.jsx — Games, World, Project, Devlog, Founder, Recognition, Contact
   ============================================================ */

/* ---------- GAMES (the catalog) ---------- */
function GamesSection() {
  const STATUS = {
    "In development": "status-dev",
    "Released": "status-live",
    "Coming soon": "status-soon"
  };
  return (
    <section className="section games" id="games">
      <div className="wrap">
        <div className="games-head">
          <Reveal><p className="eyebrow">The catalog</p>
            <h2 className="display-l">Games Portfolio</h2>
          </Reveal>
          <Reveal delay="1" className="games-head-aside">
            <p className="lede">Everything we've made and everything we're making</p>
          </Reveal>
        </div>

        <div className="games-list">
          {GAMES.map((g, i) =>
          <Reveal as="article" className={`game-card ${g.featured ? "game-featured" : ""}`} key={i} delay={String(i % 3 + 1)}>
              <div className="game-cover" style={{ aspectRatio: g.featured ? "3 / 2" : "4 / 3", overflow: "hidden" }}>
                <img src={g.cover} alt={`${g.title} — co-op action RPG key art`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <span className={`game-status ${STATUS[g.status] || ""}`}>
                  <span className="dot" aria-hidden="true"></span>{g.status}
                </span>
              </div>
              <div className="game-info">
                <div className="game-info-top">
                  <h3 className="display-m game-title">{g.title}</h3>
                  <p className="game-tagline">{g.tagline}</p>
                </div>
                <div className="game-platforms">
                  {g.platforms.map((p) => <span className="chip" key={p}>{p}</span>)}
                </div>
              </div>
            </Reveal>
          )}


        </div>
      </div>
    </section>);

}

/* ---------- WHAT WE MAKE (dark band) ---------- */
function WorldSection() {
  return (
    <section className="section on-dark world" id="world">
      <div className="wrap">
        <Reveal><p className="eyebrow no-rule">What we make</p></Reveal>
        <div className="world-grid">
          <Reveal as="h2" className="display-l world-statement">
            We make games you finish with someone, not games that try to keep you forever.
          </Reveal>
          <Reveal className="world-aside" delay="1">
            <p className="lede">
              Every Green Gaming Studios world is built around a second chair — couches,
              long-distance calls, the friend who's bad at games but shows up anyway.
            </p>
          </Reveal>
        </div>

        <div className="values-grid">
          {VALUES.map((v, i) =>
          <Reveal className="value" key={v.k} delay={String(i % 4 + 1)}>
              <span className="value-k mono-label">{v.k}</span>
              <h3 className="display-m value-t">{i === 1 ? "No forced grind" : v.t}</h3>
              <p className="value-d">{i === 1 ? "Rebels of the Realm respects your time. Play once, twice, or a hundred times — it's complete either way." : v.d}</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- IN THE OVEN (current project teaser) ---------- */
function ProjectSection() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;if (!el) return;
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const p = 1 - (r.top + r.height) / (window.innerHeight + r.height); // 0..1
      el.style.setProperty("--p", Math.max(0, Math.min(1, p)).toFixed(3));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="section project" id="project" ref={ref}>
      <div className="wrap">
        <div className="project-head">
          <Reveal><p className="eyebrow">IN DEVELOPMENT</p></Reveal>
          <Reveal as="h2" className="display-l" delay="1">{PROJECT.title}</Reveal>
        </div>

        <Reveal className="project-stage">
          <Placeholder className="project-art" ratio="16 / 9">
            <img src={PROJECT.art} alt={`${PROJECT.title} — co-op action RPG key art by Green Gaming Studios`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </Placeholder>
          <div className="project-tags">
            <span className="chip">Co-op (2–4)</span>
            <span className="chip">Action RPG</span>
            <span className="chip" style={{ opacity: "0" }}>No grind</span>
            <span className="chip" style={{ opacity: "0" }}>{PROJECT.stage}</span>
          </div>
        </Reveal>

        <div className="project-grid">
          <Reveal className="project-copy">
            <p className="lede">{PROJECT.tagline}</p>
          </Reveal>
          <Reveal className="project-thumbs" delay="1">
            <div className="focus-list">
              {PROJECT.focus.map((f, idx) =>
              <div className="focus-item" key={f}>
                  <span className="focus-dot">• </span>
                  <span>{f}</span>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}

/* ---------- DEVLOG ---------- */
function DevlogSection() {
  return (
    <section className="section devlog" id="devlog">
      <div className="wrap">
        <div className="devlog-head">
          <Reveal><p className="eyebrow">From the workshop</p>
            <h2 className="display-l">Devlog &amp; notes</h2>
          </Reveal>
          <Reveal delay="1">
            <a className="btn btn-ghost" href="#" onClick={(e) => e.preventDefault()}>All posts</a>
          </Reveal>
        </div>
        <div className="devlog-grid">
          {DEVLOG.map((p, i) =>
          <Reveal as="article" className={`post ${i === 0 ? "post-lead" : ""}`} key={i} delay={String(i % 4 + 1)}>
              <Placeholder className="post-img" label={p.img} ratio={i === 0 ? "16 / 10" : "16 / 11"} />
              <div className="post-body">
                <div className="post-meta">
                  <span className="chip">{p.tag}</span>
                  <span className="mono-label">{p.date} · {p.read}</span>
                </div>
                <h3 className={i === 0 ? "display-m" : "post-title"}>{i === 0 ? "Now building Rebels of the Realm full-time" : i === 1 ? "Co-op combat that pushes friendships" : p.title}</h3>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- FOUNDER (solo studio) ---------- */
function FounderSection() {
  return (
    <section className="section on-dark founder" id="founder">
      <div className="wrap">
        <div className="founder-head">
          <Reveal><p className="eyebrow no-rule">The founder</p>
            <h2 className="display-l">Built with care,<br />by one developer.</h2>
          </Reveal>
        </div>

        <div className="founder-grid">
          <Reveal className="founder-portrait">
            <Placeholder dark className="founder-img" label={FOUNDER.img} ratio="4 / 5" />
            <div className="founder-card">
              <span className="founder-name display-m">{FOUNDER.name}</span>
              <span className="founder-role mono-label">{FOUNDER.role}</span>
            </div>
          </Reveal>

          <Reveal className="founder-copy" delay="1">
            {FOUNDER.note.map((p, i) =>
            <p className="lede founder-note" key={i}>{i === 0 ? "Hi — I'm the whole studio - for now." : "I believe in co-op games that respect player agency and don't ask you to grind. Games made with obsessive care for how they play"}</p>
            )}
            <p className="founder-sign">{FOUNDER.sign}</p>
          </Reveal>
        </div>

        <Reveal className="facts">
          {FACTS.map((f) =>
          <div className="fact" key={f.k}>
              <span className="fact-k mono-label">{f.k}</span>
              <span className="fact-v display-m">{f.v}</span>
            </div>
          )}
        </Reveal>
      </div>
    </section>);

}

/* ---------- WISHLIST CTA (Rebels of the Realm) ---------- */
function WishlistSection() {
  return (
    <section className="section wishlist" id="wishlist">
      <div className="wishlist-art" style={{ backgroundImage: "url('ggs/rotr-header.png')" }} aria-hidden="true"></div>
      <div className="wishlist-veil" aria-hidden="true"></div>
      <div className="wrap wishlist-inner">
        <Reveal className="wishlist-copy">
          <p className="eyebrow no-rule wishlist-eyebrow">Coming to PC</p>
          <h2 className="display-xl wishlist-title">Wishlist<br />Rebels of the Realm</h2>
          <p className="lede wishlist-lede">Wishlisting tells me you're in — and it's the single biggest thing that helps a solo studio get noticed on launch day.</p>
          <div className="wishlist-actions">
            <a className="btn btn-accent" href={LINKS.steam} {...(LINKS.steam === "#" ? { onClick: (e) => e.preventDefault() } : { target: "_blank", rel: "noopener noreferrer" })}>Wishlist on Steam <span className="arrow">↗</span></a>
            <a className="btn btn-ghost-light" href={LINKS.discord} {...(LINKS.discord === "#" ? { onClick: (e) => e.preventDefault() } : { target: "_blank", rel: "noopener noreferrer" })}>Join the Discord</a>
          </div>
        </Reveal>
      </div>
    </section>);

}

/* ---------- CONTACT / COMMUNITY ---------- */
function ContactSection() {
  const links = [
  { k: "Community", t: "Discord", d: "Hang out, playtest, break things", href: LINKS.discord },
  { k: "Follow", t: "@greengamingstudios", d: "Instagram", href: LINKS.instagram }];

  return (
    <section className="section on-dark contact" id="contact">
      <div className="wrap">
        <Reveal className="contact-top">
          <p className="eyebrow no-rule">Say hi</p>
          <h2 className="display-xl contact-title">Pull up<br />a chair.</h2>
        </Reveal>
        <div className="contact-grid">
          {links.map((l, i) =>
          <Reveal as="a" href={l.href} {...(l.href === "#" ? { onClick: (e) => e.preventDefault() } : { target: "_blank", rel: "noopener noreferrer" })} className="contact-card" key={i} delay={String(i % 4 + 1)}>
              <span className="mono-label contact-k">{l.k}</span>
              <span className="contact-t display-m" style={{ fontSize: "19px", width: "323px", padding: "0px", margin: "0px 0px 0px -1px" }}>{l.t}</span>
              <span className="contact-d">{l.d}</span>
              <span className="contact-arrow" aria-hidden="true">↗</span>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

Object.assign(window, {
  GamesSection, WorldSection, ProjectSection, DevlogSection, FounderSection, WishlistSection, ContactSection
});