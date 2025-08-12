import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const NavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `relative inline-flex items-center px-2 py-1 text-[var(--ink-900)]/90 hover:text-[var(--ink-900)] transition
       after:absolute after:inset-x-1 after:-bottom-1 after:h-0.5 after:rounded-full
       ${isActive ? "after:bg-[var(--teal-700)] text-[var(--ink-900)]" : "after:bg-transparent hover:after:bg-[var(--teal-700)]/70"}`
    }
  >
    {children}
  </NavLink>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--surface)]/85 backdrop-blur supports-[backdrop-filter]:bg-[var(--surface)]/70 ring-1 ring-[var(--line-200)] shadow-sm">
      <div className="max-w-7xl mx-auto h-16 px-4 md:px-6 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/home"
          onClick={() => window.scrollTo(0, 0)}
          className="flex items-center gap-2"
          aria-label="Reclaim Wellness Home"
        >
          <img
            src="/img/nav-flower2.svg"
            alt=""
            className="w-8 h-8"
            decoding="async"
            loading="eager"
          />
          <span
            className="text-2xl leading-none text-[var(--ink-900)]"
            style={{ fontFamily: "Gwendolyn, cursive", fontWeight: 700 }}
          >
            Reclaim Wellness
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavItem to="/"            >Home</NavItem>
          <NavItem to="/about"       >Staff</NavItem>
          <NavItem to="/services"    >Services</NavItem>
          <NavItem to="/contact"     >Contact</NavItem>

          {/* Primary CTA */}
          <NavLink
            to="/donate#donate-options"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center rounded-full bg-[var(--teal-700)] hover:bg-[var(--teal-600)]
                       text-white font-semibold px-4 py-2 shadow-sm transition"
          >
            Donate
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[var(--ink-900)]/90 hover:bg-[var(--surface)] ring-1 ring-transparent hover:ring-[var(--line-200)] transition"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {open ? (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile sheet */}
      {open && (
        <>
          {/* tap-to-close overlay */}
          <button
            aria-hidden
            className="fixed inset-0 z-40 md:hidden bg-black/20"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-menu"
            className="absolute z-50 md:hidden inset-x-3 top-16 rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--line-200)] shadow-lg p-4"
          >
            <div className="grid gap-2 text-base">
              <NavItem to="/"         onClick={() => setOpen(false)}>Home</NavItem>
              <NavItem to="/about"    onClick={() => setOpen(false)}>Staff</NavItem>
              <NavItem to="/services" onClick={() => setOpen(false)}>Services</NavItem>
              <NavItem to="/donate"   onClick={() => setOpen(false)}>Donate</NavItem>
              <NavItem to="/contact"  onClick={() => setOpen(false)}>Contact</NavItem>
            </div>

            <div className="mt-4 flex gap-2">
              <Link
                to="/donate#donate-options"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--teal-700)] hover:bg-[var(--teal-600)]
                           text-white font-semibold px-5 py-2.5 shadow-sm transition"
              >
                Donate
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-white text-[var(--teal-700)]
                           border-2 border-[var(--teal-700)] hover:bg-[var(--teal-700)] hover:text-white
                           font-semibold px-5 py-2.5 shadow-sm transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
