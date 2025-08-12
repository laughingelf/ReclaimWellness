// components/Eligibility.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "./animations";

const Eligibility = () => {
  return (
    <section className="px-4 pb-14">
      <motion.article
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto relative rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--line-200)] shadow-lg overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface)] via-[var(--teal-50)] to-[var(--surface)]" />
        <div className="relative p-8 md:p-10">
          <h2 className="text-3xl font-bold text-center text-[var(--ink-900)] underline underline-offset-4">
            Affordable Healing for Veterans & Low-Income Clients
          </h2>

          <div className="mt-6 space-y-4 text-[var(--ink-700)] max-w-3xl mx-auto">
            <p>
              We’re committed to making trauma-informed massage therapy accessible to those who need it most. Services are provided
              at no cost to qualifying individuals, including <strong>veterans</strong> and those experiencing <strong>financial hardship</strong>.
            </p>
            <p>To qualify, please provide one of the following:</p>
            <ul className="list-disc list-inside">
              <li>A copy of your <strong>DD214</strong> (for veterans)</li>
              <li>A recent <strong>tax return</strong></li>
              <li><strong>Proof of SNAP benefits</strong> approval</li>
              <li>
                A <strong>referral letter</strong> from a licensed mental-health provider explaining the need
              </li>
            </ul>
            <p className="text-sm text-[color:rgba(51,65,85,0.8)]">
              Funding is limited; free services are offered case-by-case based on need and available resources.
            </p>

            <div className="mt-6 text-center">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--teal-700)] hover:bg-[var(--teal-600)] text-white font-semibold px-6 py-3 shadow-md"
              >
                Check Availability
              </Link>
            </div>

            <div className="mt-4 text-center text-[var(--ink-700)]">
              If you do not qualify for our nonprofit program, schedule through our partner:{" "}
              <a
                href="https://www.eliteorthobodywork.com"
                className="text-[var(--teal-700)] underline hover:text-[var(--teal-600)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.eliteorthobodywork.com
              </a>
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  );
};

export default Eligibility;
