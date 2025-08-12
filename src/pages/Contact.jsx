import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import { Link } from "react-router-dom";
import CommonHero from "./components/HeroCommon";
import { ShieldCheck, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <CommonHero
        height="short"
        image="/img/rws-hero2.webp"   // <-- replace with your contact header image
        // focal="50% 40%"                          // optional: tweak crop focus
        title="Contact Reclaim Wellness"
        subtitle="We’ll respond within 1–2 business days"
        chips={["Trauma-Informed • Appointment Only"]}
        ctas={{
            // primary:  { label: "Request Appointment", onClickId: "contact-form" },
            // secondary:{ label: "View Hours",          onClickId: "open-hours"    },
            tertiary: { label: "Eligibility Details ↓", onClickId: "eligibility" }
        }}
        />


      {/* Eligibility / Info */}
      <section className="px-6 mt-12 mb-16">
        <div className="max-w-2xl mx-auto relative rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--line-200)] shadow-lg overflow-hidden">
          {/* gentle brand wash */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--teal-50)] via-[var(--surface)] to-[var(--surface)]" />
          <div className="relative p-6 md:p-8 text-left text-[var(--ink-900)]">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[var(--teal-700)] text-xs font-semibold tracking-widest uppercase">
              <ShieldCheck className="w-4 h-4" /> Eligibility
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 text-center md:text-left">
              To qualify for free services, submit at least one:
            </h2>

            <ul className="mt-4 list-disc list-inside space-y-1 text-[var(--ink-700)]">
              <li>
                A copy of your <strong>DD214</strong> (for veterans)
              </li>
              <li>
                A recent <strong>tax return</strong>
              </li>
              <li>
                <strong>Proof of SNAP benefits</strong> approval
              </li>
              <li>
                A <strong>referral letter</strong> from a licensed mental health provider explaining the need
              </li>
            </ul>

            <p className="mt-4 text-[var(--ink-700)]">
              If you do not qualify for our nonprofit program, you can still schedule an appointment through our for-profit
              partner site:{" "}
              <a
                href="https://www.eliteorthobodywork.com"
                className="inline-flex items-center gap-1 text-[var(--teal-700)] underline hover:text-[var(--teal-600)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.eliteorthobodywork.com <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </p>

            <p className="mt-2 text-sm italic text-[color:rgba(51,65,85,0.85)]">
              Note: Funding is limited and free services are offered on a case-by-case basis depending on need and available
              resources.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
