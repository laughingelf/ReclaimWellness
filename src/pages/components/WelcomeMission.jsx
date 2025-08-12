// components/WelcomeMission.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, BadgeCheck } from "lucide-react";
import { fadeUp } from "./Animations";

const WelcomeMission = () => {
  return (
    <section id="welcome" className="py-14 px-4">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl mx-auto relative rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--line-200)] shadow-lg overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--teal-50)] via-[var(--surface)] to-[var(--surface)]" />
        <div className="relative p-8 md:p-10">
          <div className="flex items-center gap-2 text-[var(--teal-700)] text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-4 h-4" /> Trauma-Informed, Non-Profit Care
          </div>

          <h2 style={{ fontFamily: "Love Light, cursive" }} className="text-5xl md:text-6xl mt-2 text-[var(--ink-900)]">
            Welcome to Your Healing Journey
          </h2>

          <div className="mt-4 space-y-4 text-[var(--ink-700)] text-lg leading-relaxed max-w-prose">
            <p>
              Reclaim Wellness is a compassionate non-profit dedicated to supporting individuals on their healing journey from
              physical or sexual trauma. We offer trauma-informed care and therapeutic services—including deep relaxation massage—
              to help manage anxiety, depression, and emotional stress in a safe, nurturing space.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--teal-50)] text-[var(--teal-700)] ring-1 ring-[var(--line-200)] px-3 py-1">
                <ShieldCheck className="w-4 h-4" /> 501(c)(3) • EIN 93-2642672
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--surface)] text-[var(--ink-700)] ring-1 ring-[var(--line-200)] px-3 py-1">
                <BadgeCheck className="w-4 h-4" /> Donations are tax-deductible
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/donate"
              className="inline-flex items-center justify-center rounded-full bg-[var(--teal-700)] hover:bg-[var(--teal-600)] text-white font-semibold px-6 py-3 shadow-md"
            >
              Sponsor a Veteran
            </Link>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/donate#donate-options"
              className="inline-flex items-center justify-center rounded-full bg-[var(--surface)] text-[var(--teal-700)] border-2 border-[var(--teal-700)] hover:bg-[var(--teal-700)] hover:text-white font-semibold px-6 py-3 shadow-sm transition"
            >
              Donate
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WelcomeMission;
