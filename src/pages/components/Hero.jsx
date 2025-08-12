import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-[65vh] md:h-[75vh] shadow-lg">
      {/* Background image */}
      <picture>
        <source srcSet="/img/rws-hero2.webp" type="image/webp" media="(min-width: 1024px)" />
        <source srcSet="/img/rws-hero2-sm.webp" type="image/webp" />
        <img
          className="w-full h-full object-cover"
          src="/img/rws-hero2-sm.png"
          alt="Ocean sunset with wet stones on the shore, nature and wellness theme"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      {/* Veteran-owned badge */}
      <img
        src="/img/vet-owned.webp"
        alt="Veteran Owned"
        className="absolute top-4 right-4 w-28 md:w-40 h-auto z-20"
      />

      {/* Overlays for readability (linear + radial) */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Centered content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <h1
          style={{ fontFamily: "Gwendolyn, cursive" }}
          className="text-white text-6xl md:text-8xl font-bold leading-none drop-shadow-lg"
        >
          Reclaim Wellness
        </h1>
        <p className="mt-3 text-gray-100 text-xl md:text-2xl">
          Trauma-Focused Care • Non-Profit 501(c)(3)
        </p>

        {/* Trust chips (optional but helpful for donors) */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
          <span className="inline-flex items-center rounded-full bg-white/85 text-[var(--teal-700)] px-3 py-1">
            EIN 93-2642672
          </span>
          <span className="inline-flex items-center rounded-full bg-white/70 text-[var(--teal-700)] px-3 py-1">
            Donations are tax-deductible
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/contact"
            aria-label="Book an appointment"
            className="inline-flex items-center justify-center rounded-full bg-[var(--teal-700)] hover:bg-[var(--teal-600)]
                       text-white font-semibold px-8 py-3 shadow-md transition"
          >
            Book an Appointment
          </Link>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/donate#donate-options"
            aria-label="Donate"
            className="inline-flex items-center justify-center rounded-full bg-white/90 text-[var(--teal-700)]
                       border-2 border-[var(--teal-700)] hover:bg-[var(--teal-700)] hover:text-white
                       font-semibold px-8 py-3 shadow-sm transition"
          >
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
