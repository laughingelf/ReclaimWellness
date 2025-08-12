import { Link } from "react-router-dom";

const Footer = ({ agencyUrl = "https://ghoststackdesigns.com" }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--surface)] text-[var(--ink-900)] pt-12 pb-8 px-6">
      {/* brand accent */}
      <div className="max-w-7xl mx-auto">
        <span className="block h-1.5 w-full rounded-t-2xl bg-gradient-to-r from-[var(--teal-700)] via-[var(--teal-soft)] to-[var(--teal-700)] mb-8" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Quick Links */}
        <div className="relative rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--line-200)] shadow-md p-6">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link onClick={() => window.scrollTo(0, 0)} to="/home" className="hover:underline">Home</Link></li>
            <li><Link onClick={() => window.scrollTo(0, 0)} to="/about" className="hover:underline">Staff</Link></li>
            <li><Link onClick={() => window.scrollTo(0, 0)} to="/services" className="hover:underline">Services</Link></li>
            <li><Link onClick={() => window.scrollTo(0, 0)} to="/donate" className="hover:underline">Donate</Link></li>
            <li><Link onClick={() => window.scrollTo(0, 0)} to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Map */}
        <div className="relative rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--line-200)] shadow-md p-6">
          <h4 className="text-xl font-semibold mb-4">Visit Us</h4>
          <div className="w-full h-48 rounded-xl overflow-hidden ring-1 ring-[var(--line-200)]">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13400.034130064249!2d-97.53798189623413!3d32.8979426658137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864de23555ac3585%3A0xcf6220bb648f0acd!2s328%20W%20Main%20St%2C%20Azle%2C%20TX%2076020!5e0!3m2!1sen!2sus!4v1745515975215!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="max-w-7xl mx-auto border-t border-[var(--line-200)] mt-8 pt-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3 text-[var(--ink-700)]">
        <div>© {year} Reclaim Wellness. All rights reserved.</div>
        <div className="text-[11px]">
          Site by{" "}
          <a
            href={agencyUrl}
            target="_blank"
            rel="noopener nofollow noreferrer"
            className="underline underline-offset-2 text-[var(--ink-700)] hover:text-[var(--teal-700)]"
            aria-label="GhostStack Designs website"
            title="GhostStack Designs"
          >
            GhostStack Designs
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
