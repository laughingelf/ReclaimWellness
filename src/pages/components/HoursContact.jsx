// components/HoursAndContact.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Phone, Mail } from "lucide-react";
import { fadeUp } from "./animations";

const HoursAndContact = () => {
  const smsUrl = `sms:+18178793087?&body=${encodeURIComponent(
    "Hi Reclaim Wellness — I’d like to ask about scheduling."
  )}`;

  return (
    <section id="open-hours" className="px-4 pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-8">
        {/* Hours */}
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--line-200)] shadow-lg p-8"
        >
          <div className="flex items-center gap-2 text-[var(--teal-700)] text-xs font-semibold tracking-widest uppercase">
            <Clock className="w-4 h-4" /> Open Hours
          </div>
          <ul className="mt-4 space-y-2 text-[var(--ink-700)]">
            <li><strong>Mon–Fri:</strong> 10am – 7pm</li>
            <li><strong>Sat:</strong> 10am – 5pm</li>
            <li><strong>Sun:</strong> <span className="underline font-semibold">Closed</span></li>
          </ul>
        </motion.article>

        {/* Illustration */}
        <picture className="justify-self-center">
          <source srcSet="/img/book-img.webp" type="image/webp" />
          <source srcSet="/img/book-img.svg" type="image/svg+xml" />
          <img src="/img/book-img.svg" className="w-64 md:w-80 h-auto" alt="Booking illustration" loading="lazy" />
        </picture>

        {/* Contact CTA */}
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--line-200)] shadow-lg p-8 overflow-hidden"
        >
          <h3 className="text-2xl font-bold text-[var(--ink-900)]">Contact Us to Schedule</h3>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--teal-700)] hover:bg-[var(--teal-600)] text-white font-semibold px-6 py-3 shadow-md"
            >
              Request Appointment
            </Link>
            <a
              href="tel:+18178793087"
              className="inline-flex items-center justify-center rounded-full bg-[var(--surface)] text-[var(--teal-700)]
                         border-2 border-[var(--teal-700)] hover:bg-[var(--teal-700)] hover:text-white font-semibold px-6 py-3 shadow-sm transition"
            >
              <Phone className="w-5 h-5 mr-2" /> Call
            </a>
            <a
              href={smsUrl}
              className="inline-flex items-center justify-center rounded-full bg-[var(--surface)] text-[var(--teal-700)]
                         border-2 border-[var(--teal-700)] hover:bg-[var(--teal-700)] hover:text-white font-semibold px-6 py-3 shadow-sm transition"
            >
              Text
            </a>
          </div>
          <div className="mt-3 text-[var(--ink-700)] text-sm flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>Prefer email? Use the contact form and we’ll reply within 1–2 business days.</span>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default HoursAndContact;
