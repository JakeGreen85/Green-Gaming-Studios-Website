/* ============================================================
   hero.jsx — three explorable hero directions
   A. Editorial (paper, type-forward, parallax low-poly)
   B. Immersive (dark, animated controller mark + glow)
   C. Playful  (paper, kinetic rotating word + stickers)
   ============================================================ */
const { useState: _uS, useEffect: _uE, useRef: _uR } = React;

function HeroCTAs({ onNav, dark }) {
  return (
    <div className="hero-ctas">
      <a className="btn btn-accent" href="#project" onClick={(e) => onNav(e, "project")}>
        See what's in progress <span className="arrow">↗</span>
      </a>
      <a className={`btn btn-ghost`} href="#world" onClick={(e) => onNav(e, "world")}>
        Meet the studio
      </a>
    </div>);

}

/* ---------- A · EDITORIAL ---------- */
function HeroEditorial({ onNav }) {
  const ref = _uR(null);
  _uE(() => {
    const el = ref.current;if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--mx", x.toFixed(3));
      el.style.setProperty("--my", y.toFixed(3));
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <header ref={ref} className="hero hero-editorial" id="top">
      <img className="hero-ghost" src="ggs/logo-ink.png" alt="" aria-hidden="true" />
      <span className="float-shape fs1" aria-hidden="true"></span>
      <span className="float-shape fs2" aria-hidden="true"></span>
      <span className="float-shape fs3" aria-hidden="true"></span>
      <span className="float-shape fs4" aria-hidden="true"></span>
      <div className="wrap hero-inner">
        <p className="eyebrow hero-eyebrow">INDIE GAME STUDIO · EST. 2024</p>
        <h1 className="display-xl hero-title">
          <span className="line"><span className="w">We make</span></span>
          <span className="line"><span className="w">small worlds</span></span>
          <span className="line"><span className="w">worth <em>staying</em> in.</span></span>
        </h1>
        <p className="lede hero-lede">
          Green Gaming Studios is an indie studio crafting handcrafted worlds
          with obsessive care — one developer, no shortcuts.
        </p>
        <HeroCTAs onNav={onNav} />
      </div>
      <div className="hero-foot wrap">
        <span className="mono-label">↓ Scroll to wander in</span>
        <span className="mono-label"></span>
      </div>
    </header>);

}

/* ---------- B · IMMERSIVE ---------- */
function HeroImmersive({ onNav }) {
  const ref = _uR(null);
  _uE(() => {
    const el = ref.current;if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", ((e.clientX - r.left) / r.width - .5).toFixed(3));
      el.style.setProperty("--my", ((e.clientY - r.top) / r.height - .5).toFixed(3));
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);
  // drifting motes
  const motes = Array.from({ length: 22 });
  return (
    <header ref={ref} className="hero hero-immersive on-dark" id="top">
      <div className="glow" aria-hidden="true"></div>
      <div className="motes" aria-hidden="true">
        {motes.map((_, i) =>
        <span key={i} style={{
          left: `${i * 37 % 100}%`,
          top: `${i * 53 % 100}%`,
          animationDelay: `${i % 7 * -1.6}s`,
          animationDuration: `${9 + i % 5 * 2.5}s`,
          transform: `scale(${0.5 + i % 4 * 0.35})`
        }} />
        )}
      </div>
      <div className="wrap hero-imm-inner">
        <img className="hero-mark" src="ggs/logo-white.png" alt="Green Gaming Studios" />
        <p className="eyebrow no-rule hero-imm-eyebrow">Green Gaming Studios</p>
        <h1 className="display-l hero-imm-title">
          Cozy worlds, built by hand.
        </h1>
        <HeroCTAs onNav={onNav} dark />
      </div>
      <div className="hero-foot wrap on-dark-foot">
        <span className="mono-label">EST. 2024</span>
        <span className="mono-label">↓ WANDER IN</span>
      </div>
    </header>);

}

/* ---------- C · PLAYFUL ---------- */
function HeroPlayful({ onNav }) {
  const words = ["worlds", "weekends", "long nights", "small adventures", "characters"];
  const [i, setI] = _uS(0);
  _uE(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), 2100);
    return () => clearInterval(id);
  }, []);
  return (
    <header className="hero hero-playful" id="top">
      <span className="sticker st1" aria-hidden="true">✦</span>
      <span className="sticker st2" aria-hidden="true">◗</span>
      <span className="sticker st3" aria-hidden="true">✺</span>
      <div className="wrap hero-play-inner">
        <p className="eyebrow">Hi — we're Green Gaming Studios 👋</p>
        <h1 className="display-l hero-play-title">
          We build<br />
          <span className="rotator">
            <span className="rotator-word" key={i}>{words[i]}</span>
          </span><br />
          you'll want to share.
        </h1>
        <p className="lede" style={{ margin: "8px 0 0" }}>
          A solo indie studio making warm, handcrafted games.
          No live-service treadmill — just worlds I'd want to live in.
        </p>
        <HeroCTAs onNav={onNav} />
      </div>
      <Marquee
        className="hero-play-marquee"
        items={["HANDCRAFTED", "INDIE MADE", "COZY WORLDS", "SMALL TEAM", "BIG HEART", "EST. 2024"]}
        sep=" ✦ " speed={34} />
      
    </header>);

}

function Hero({ variant, onNav }) {
  if (variant === "immersive") return <HeroImmersive onNav={onNav} />;
  if (variant === "playful") return <HeroPlayful onNav={onNav} />;
  return <HeroEditorial onNav={onNav} />;
}

Object.assign(window, { Hero });