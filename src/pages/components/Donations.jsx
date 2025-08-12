// components/SponsorAndDonations.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HeartHandshake, DollarSign, CalendarDays, Paintbrush } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const DONATE_URL = "https://www.zeffy.com/embed/donation-form/reclaim-wellness-donation?modal=true";
const FB_URL = "https://www.facebook.com/ReclaimWellnessTraumaCare/";

const SponsorAndDonations = () => {
  return (
    <section className="px-4 py-14 space-y-12">
      {/* Sponsor a Veteran */}
      <motion.article
        id="sponsor"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl mx-auto relative rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--line-200)] shadow-lg overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--teal-50)] via-[var(--surface)] to-[var(--surface)]" />
        <div className="relative p-8 md:p-10">
          <div className="flex items-center gap-2 text-[var(--teal-700)] text-xs font-semibold tracking-widest uppercase">
            <HeartHandshake className="w-4 h-4" /> Sponsor a Veteran
          </div>

          <div className="mt-4 flex justify-center">
            <picture>
              <source srcSet="/img/sponsor-vet.webp" type="image/webp" />
              <img
                src="/img/sponsor-vet.png"
                alt="Sponsor Veterans logo"
                className="max-w-md w-full h-auto"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
            </picture>
          </div>

          <div className="mt-6 space-y-4 text-[var(--ink-700)] text-lg leading-relaxed max-w-prose mx-auto">
            <p>
              <strong>Veterans near you need your help.</strong> Many leave the service with difficult, lasting trauma.
              At Reclaim Wellness we support recovery through somatic healing, touch therapy, and connections to local programs.
            </p>
            <p>
              When your business sponsors a Veteran, you’ll be featured on our website and at our next fundraising event. Monthly
              supporters also receive a sticker to display your support.
            </p>

            <div className="flex flex-wrap gap-2 items-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--surface)] text-[var(--ink-800)] ring-1 ring-[var(--line-200)] px-3 py-1 text-sm">
                <DollarSign className="w-4 h-4" /> $60/mo or $250 one-time
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--teal-50)] text-[var(--teal-800)] ring-1 ring-[var(--line-200)] px-3 py-1 text-sm">
                100% goes to Veteran services
              </span>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--teal-700)] hover:bg-[var(--teal-600)] text-white font-semibold px-8 py-3 shadow-md transition"
            >
              Sponsor a Veteran Today
            </a>
          </div>
        </div>
      </motion.article>

      {/* Donation Options */}
      <motion.article
        id="donate-options"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto relative rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--line-200)] shadow-lg overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface)] via-[var(--teal-50)] to-[var(--surface)]" />
        <div className="relative p-8 md:p-10">
          <h2 className="text-3xl font-bold text-center text-[var(--ink-900)] underline underline-offset-4">
            Support Reclaim Wellness Trauma Care
          </h2>
          <p className="mt-3 text-center text-[var(--ink-700)]">
            Your generosity funds trauma-informed wellness and healing programs in our community.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Yoga */}
            <div className="bg-white rounded-xl shadow-md ring-1 ring-[var(--line-200)] p-6">
              <div className="flex items-center gap-2 text-[var(--ink-900)] font-semibold">
                <CalendarDays className="w-5 h-5 text-[var(--teal-700)]" /> Yoga Classes
              </div>
              <p className="mt-3 text-[var(--ink-700)]">
                Sundays • 8:30 AM • Central Park. Suggested minimum donation <strong>$10</strong> per participant.
              </p>
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[var(--teal-700)] hover:bg-[var(--teal-600)] text-white font-semibold px-5 py-2.5 shadow-sm transition"
              >
                Donate Today
              </a>
            </div>

            {/* Mobile Paint Parties */}
            <div className="bg-white rounded-xl shadow-md ring-1 ring-[var(--line-200)] p-6">
              <div className="flex items-center gap-2 text-[var(--ink-900)] font-semibold">
                <Paintbrush className="w-5 h-5 text-[var(--teal-700)]" /> Mobile Paint Parties
              </div>
              <p className="mt-3 text-[var(--ink-700)]">
                We bring supplies and guide a fun painting experience:
              </p>
              <ul className="mt-2 list-disc pl-5 text-[var(--ink-700)]">
                <li><strong>$35</strong> per participant (regular class)</li>
                <li><strong>$45</strong> per participant (pre-sketched canvas)</li>
              </ul>
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[var(--teal-700)] hover:bg-[var(--teal-600)] text-white font-semibold px-5 py-2.5 shadow-sm transition"
              >
                Donate Today
              </a>
            </div>

            {/* Events */}
            <div className="bg-white rounded-xl shadow-md ring-1 ring-[var(--line-200)] p-6">
              <div className="flex items-center gap-2 text-[var(--ink-900)] font-semibold">
                <HeartHandshake className="w-5 h-5 text-[var(--teal-700)]" /> Attend Our Events
              </div>
              <p className="mt-3 text-[var(--ink-700)]">
                We host auctions, art festivals, and vendor events. Follow us to see what’s next.
              </p>
              <a
                href={FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white text-[var(--teal-700)]
                           border-2 border-[var(--teal-700)] hover:bg-[var(--teal-700)] hover:text-white font-semibold px-5 py-2.5 shadow-sm transition"
              >
                Follow on Facebook
              </a>
            </div>
          </div>

          <p className="mt-8 text-center text-[var(--ink-700)]">
            Thank you for your support. Every donation—big or small—makes a real difference.
          </p>
        </div>
      </motion.article>
    </section>
  );
};

export default SponsorAndDonations;
