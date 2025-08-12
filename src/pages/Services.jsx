import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServiceSect";
import { Link } from "react-router-dom";
import CommonHero from "./components/HeroCommon";

const Services = () => {
  return (
    <>
      <Navbar />
      <CommonHero
        height="short"
        image="/img/rws-hero2.webp"
        // focal="50% 30%"
        title="Our Services"
        ctas={{
            primary: { label: "Book an Appointment", to: "/contact" },
            secondary: { label: "Donate", to: "/donate#donate-options" },
            tertiary: { label: "View All Services ↓", onClickId: "services-list" },
        }}
        />


      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image + CTA */}
          <div className="w-full md:w-1/2">
            <picture>
              <source srcSet="/img/massage-ther.webp" type="image/webp" />
              <source srcSet="/img/massage-ther.jpg" type="image/jpeg" />
              <img
                className="rounded-2xl shadow-lg ring-1 ring-[var(--line-200)]"
                src="/img/massage-ther.jpg"
                alt="Massage therapy benefits for trauma survivors, including stress relief, mood improvement, and emotional awareness, shown with calming pastel illustrations."
                loading="eager"
                fetchPriority="high"
              />
            </picture>

            <div className="mt-8">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--teal-700)] hover:bg-[var(--teal-600)]
                           text-white text-xl font-semibold px-8 py-3 shadow-md transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services List Card */}
          <div className="w-full md:w-1/2">
            <article className="relative rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--line-200)] shadow-lg overflow-hidden">
              {/* gentle brand wash */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--teal-50)] via-[var(--surface)] to-[var(--surface)]" />
              <div className="relative p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[var(--ink-900)] mb-4">Our Services</h2>
                <div className="text-[var(--ink-700)]">
                  <ServicesSection />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
