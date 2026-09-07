/* ============================================================
   data.jsx — content + shared atoms (exported to window)
   ============================================================ */
const { useState, useEffect, useRef, useCallback } = React;

// Central place for all external links. Swap "#" for the real URL when ready.
const LINKS = {
  instagram: "https://www.instagram.com/greengamingstudios",
  discord: "https://discord.gg/rqdqVN8SMA",
  steam: "https://store.steampowered.com/app/3526420/Rebels_of_the_Realm/",
};

const NAV = [
  { id: "top",     label: "Studio" },
  { id: "games",   label: "Games" },
  { id: "world",   label: "What we make" },
  { id: "project", label: "In Development" },
  { id: "founder", label: "Founder" },
  { id: "contact", label: "Say hi" },
];

const GAMES = [
  {
    title: "Rebels of the Realm",
    tagline: "Join the rebellion in Rebels of the Realm. Where the fate of the world is a group effort, and every battle is a chance to be heroic in the most unexpectedly fun ways!",
    status: "In development",
    year: "TBA",
    platforms: ["PC", "Steam", "Co-op 2–4"],
    cover: "ggs/rotr-header.png",
    featured: true,
  },
];

const PROJECT = {
  title: "Rebels of the Realm",
  tagline: "Join the rebellion in Rebels of the Realm. Where the fate of the world is a group effort, and every battle is a chance to be heroic in the most unexpectedly fun ways!",
  stage: "Alpha · Combat & Realm Building",
  art: "ggs/rotr-header.png",
  focus: ["Co-op combat flow", "Low-poly character art", "Character Progression"],
};

const VALUES = [
  { k: "01", t: "Players first, always", d: "Every decision runs through one question — does this make the time someone spends with us better?" },
  { k: "02", t: "No live service, no grind", d: "Rebels respects your time. Play once, twice, or a hundred times — it's complete either way." },
  { k: "03", t: "Made for two", d: "Co-op from the ground up. The best stories happen when someone's in the chair next to you." },
  { k: "04", t: "Made to last", d: "Not designed to be replaced. Games that stay in rotation because they earned it." },
];

const DEVLOG = [
  { tag: "Devlog", date: "Master's finished", title: "Now building Rebels full-time", read: "fresh start", img: "screenshot · game scene" },
  { tag: "Design", date: "In progress", title: "Co-op combat that doesn't require coordination headsets", read: "ongoing", img: "ui · combat" },
  { tag: "Art", date: "In progress", title: "Low-poly characters with personality", read: "ongoing", img: "art · character set" },
  { tag: "Systems", date: "In progress", title: "Building the realm", read: "ongoing", img: "screenshot · world" },
];

const FOUNDER = {
  name: "J. Green",
  role: "Founder · Developer",
  img: "portrait · you",
  note: [
    "Hi — I just finished my Master's in Games, and I'm building Rebels of the Realm full-time.",
    "I believe in co-op games that respect player agency and don't ask you to grind. Games made with obsessive care for how they play. It's slower, but it's honest.",
  ],
  sign: "— J. Green, founder",
};

const FACTS = [
  { k: "Role", v: "Solo developer" },
  { k: "Studied", v: "Master's in Games" },
  { k: "Building", v: "Rebels of the Realm" },
  { k: "Approach", v: "Player-first co-op" },
];

const RECOGNITION = [];

/* Atoms */

function Logo({ variant = "ink", showWord = true, size = 34 }) {
  const src = variant === "white" ? "ggs/logo-white.png" : "ggs/logo-black.png";
  return (
    <span className="logo-lockup" style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <img src={src} alt="GGS" style={{ height: size, width: "auto", display: "block" }} />
      {showWord && (
        <span style={{
          fontFamily: "var(--mono)", fontWeight: 700, fontSize: size * 0.34,
          letterSpacing: ".06em", lineHeight: 1.05,
          color: variant === "white" ? "var(--on-dark)" : "var(--ink)",
        }}>
          GREEN GAMING<br/>STUDIOS
        </span>
      )}
    </span>
  );
}

function Placeholder({ label, dark = false, style, ratio, children, className = "" }) {
  const s = { ...style };
  if (ratio) s.aspectRatio = ratio;
  return (
    <div className={`ph ${dark ? "dark" : ""} ${className}`} style={s}>
      {children}
      {label && <span className="ph-tag">{label}</span>}
    </div>
  );
}

const _revealEls = new Set();
function _checkReveals() {
  const vh = window.innerHeight || document.documentElement.clientHeight;
  _revealEls.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < vh * 0.9 && r.bottom > -40) {
      el.classList.add("in");
      _revealEls.delete(el);
    }
  });
}
let _revealBound = false;
function _bindReveal() {
  if (_revealBound) return;
  _revealBound = true;
  window.addEventListener("scroll", _checkReveals, { passive: true });
  window.addEventListener("resize", _checkReveals);
}
function Reveal({ children, delay, as = "div", className = "", style, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in");
      return;
    }
    _revealEls.add(el);
    _bindReveal();
    _checkReveals();
    const t1 = setTimeout(_checkReveals, 220);
    const t2 = setTimeout(_checkReveals, 900);
    return () => { _revealEls.delete(el); clearTimeout(t1); clearTimeout(t2); };
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={`reveal ${className}`} data-d={delay} style={style} {...rest}>
      {children}
    </Tag>
  );
}

function Marquee({ items, sep = "✦", speed = 38, reverse = false, className = "", style }) {
  const row = items.concat(items);
  return (
    <div className={`marquee ${className}`} style={style}>
      <div className="marquee-track" style={{ animationDuration: `${speed}s`, animationDirection: reverse ? "reverse" : "normal" }}>
        {row.map((it, i) => (
          <span className="marquee-item" key={i}>
            {it}<span className="marquee-sep">{sep}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, {
  NAV, VALUES, DEVLOG, GAMES, PROJECT, FOUNDER, FACTS, RECOGNITION, LINKS,
  Logo, Placeholder, Reveal, Marquee,
});
