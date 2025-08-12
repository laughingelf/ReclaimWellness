// components/AboutIntro.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "./animations";

const AboutIntro = () => {
  return (
    <section className="px-4 pb-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text card */}
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--line-200)] shadow-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[var(--teal-50)] via-[var(--surface)] to-[var(--surface)]" />
          <div className="relative p-8 md:p-10">
            <h3 className="text-2xl font-bold text-[var(--ink-900)]">About Reclaim Wellness</h3>
            <p className="mt-3 text-[var(--ink-700)] leading-relaxed">
              We deliver trauma-informed care for individuals healing from significant physical or emotional trauma. Our approach
              integrates traditional mental-health care with body-centered modalities—therapeutic massage, gentle movement, and
              breath—to support nervous-system regulation and whole-person recovery.
            </p>

            <h4 className="mt-6 text-xl font-semibold text-[var(--ink-900)]">Why This Works</h4>
            <p className="mt-2 text-[var(--ink-700)] leading-relaxed">
              Survivors often live with elevated cortisol and an overactive fight-or-flight response. Our sessions are designed to
              calm the nervous system and re-establish safety, helping clients reframe touch as a source of healing instead of stress.
            </p>

            <figure className="mt-4 border-l-4 border-[var(--teal-700)] pl-4">
              <blockquote className="italic text-[var(--ink-700)]">
                “Trauma is not just an event in the past; it’s the imprint on mind, brain, and body with ongoing consequences.”
              </blockquote>
              <figcaption className="text-sm text-[color:rgba(15,23,42,0.6)] mt-1">
                — Bessel A. van der Kolk, <em>The Body Keeps the Score</em>
              </figcaption>
            </figure>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--teal-700)] hover:bg-[var(--teal-600)] text-white font-semibold px-6 py-3 shadow-md"
              >
                Contact Us
              </Link>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/services"
                className="inline-flex items-center justify-center rounded-full bg-[var(--surface)] text-[var(--teal-700)] border-2 border-[var(--teal-700)] hover:bg-[var(--teal-700)] hover:text-white font-semibold px-6 py-3 shadow-sm transition"
              >
                Services
              </Link>
            </div>
          </div>
        </motion.article>

        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full flex justify-center"
        >
          <picture>
            <source srcSet="/img/head-massage.webp" type="image/webp" />
            <source srcSet="/img/head-massage.jpg" type="image/jpeg" />
            <img
              src="/img/head-massage.jpg"
              alt="Relaxing head massage in a safe, calming space"
              className="w-[22rem] md:w-[30rem] h-auto rounded-2xl shadow-lg ring-1 ring-[var(--line-200)]"
              loading="lazy"
            />
          </picture>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutIntro;
