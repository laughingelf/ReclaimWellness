// CommonHero.jsx
import { Link } from "react-router-dom";

const CommonHero = ({
  title,
  subtitle,
  chips = [],
  // easiest: pass a single image path
  image,                 // e.g. "/img/headers/services.jpg"
  alt = "Hero background",
  // or advanced: pass responsive sources
  bg,                    // { lgWebp, smWebp, fallback, alt }
  height = "short",      // "short" | "tall"
  focal = "center",      // object-position: "top" | "center" | "bottom" | "50% 30%" etc.
  badge,
  ctas = { primary: null, secondary: null, tertiary: null },
  fullBleed = false,
  overlay = { linear: 0.40, radialCenter: 0.30, radialMid: 0.12 },
}) => {
  const scrollToId = (id) => {
    const el = document.getElementById(id?.replace?.(/^#/, "") || "");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const hClass = height === "tall" ? "h-[65vh] md:h-[75vh]" : "h-[25vh] md:h-[30vh]";
  const wrapClass = fullBleed
    ? `relative w-screen left-1/2 -translate-x-1/2 ${hClass} shadow-lg`
    : `relative w-full ${hClass} shadow-lg`;

  const srcs = {
    lgWebp: bg?.lgWebp || image,
    smWebp: bg?.smWebp || image,
    fallback: bg?.fallback || image,
    alt: bg?.alt || alt,
  };

  const CTAButton = ({ btn, variant = "primary" }) => {
    if (!btn) return null;
    const base = "inline-flex items-center justify-center rounded-full font-semibold px-7 py-3 transition";
    const primary = "bg-[var(--teal-700)] hover:bg-[var(--teal-600)] text-white shadow-md";
    const secondary = "bg-white/90 text-[var(--teal-700)] border-2 border-[var(--teal-700)] hover:bg-[var(--teal-700)] hover:text-white shadow-sm";
    const className = `${base} ${variant === "primary" ? primary : secondary}`;
    const handleClick = (e) => { if (btn.onClickId) { e.preventDefault(); scrollToId(btn.onClickId); } };
    return btn.to ? (
      <Link to={btn.to} onClick={btn.onClickId ? handleClick : () => window.scrollTo(0,0)} className={className}>
        {btn.label}
      </Link>
    ) : (
      <button type="button" onClick={handleClick} className={className}>{btn.label}</button>
    );
  };

  const TertiaryLink = ({ btn }) =>
    btn ? (
      btn.to ? (
        <Link to={btn.to} onClick={btn.onClickId ? (e)=>{e.preventDefault();scrollToId(btn.onClickId);} : ()=>window.scrollTo(0,0)}
          className="mt-2 text-white/90 underline underline-offset-4 hover:text-white text-sm">
          {btn.label}
        </Link>
      ) : (
        <button type="button" onClick={()=>scrollToId(btn.onClickId)}
          className="mt-2 text-white/90 underline underline-offset-4 hover:text-white text-sm">
          {btn.label}
        </button>
      )
    ) : null;

  return (
    <section className={wrapClass}>
      <picture>
        {srcs.lgWebp && <source srcSet={srcs.lgWebp} type="image/webp" media="(min-width:1024px)" />}
        {srcs.smWebp && <source srcSet={srcs.smWebp} type="image/webp" />}
        <img
          className="w-full h-full object-cover"
          style={{ objectPosition: focal }}
          src={srcs.fallback || srcs.smWebp || srcs.lgWebp}
          alt={srcs.alt}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      {badge?.src && (
        <img src={badge.src} alt={badge.alt || "Badge"} className={badge.className || "absolute top-4 right-4 w-28 md:w-40 h-auto z-20"} />
      )}

      {/* Overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: `rgba(0,0,0,${overlay.linear})` }} />
      <div className="absolute inset-0 z-10 pointer-events-none"
           style={{ background: `radial-gradient(60% 60% at 50% 50%, rgba(0,0,0,${overlay.radialCenter}) 0%, rgba(0,0,0,${overlay.radialMid}) 55%, rgba(0,0,0,0) 100%)` }} />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        {title && (
          <h1 style={{ fontFamily: "Gwendolyn, cursive" }} className="text-white text-5xl md:text-7xl font-bold leading-none drop-shadow-lg">
            {title}
          </h1>
        )}
        {subtitle && <p className="mt-3 text-gray-100 text-lg md:text-2xl">{subtitle}</p>}

        {chips.length > 0 && (
          <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            {chips.map((c, i) => (
              <span key={i} className="inline-flex items-center rounded-full bg-white/80 text-[var(--teal-700)] px-3 py-1">{c}</span>
            ))}
          </div>
        )}

        {(ctas.primary || ctas.secondary) && (
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <CTAButton btn={ctas.primary} variant="primary" />
            <CTAButton btn={ctas.secondary} variant="secondary" />
          </div>
        )}
        {ctas.tertiary && <TertiaryLink btn={ctas.tertiary} />}
      </div>
    </section>
  );
};

export default CommonHero;
