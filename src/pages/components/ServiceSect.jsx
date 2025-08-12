import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleDropdown = (index) => setOpenIndex(openIndex === index ? null : index);

  // tweak this to make the decorative flowers stronger/lighter
  const decorOpacity = 0.28;
  // tweak this to make the gradient wash lighter/stronger
  const washOpacity = 0.12;

  const services = [
    {
      title: "Trauma-Informed Massage",
      description:
        "This massage involves communication to keep you in a relaxed state without triggering intense emotions. Your therapist may use gentle massage, rocking, guided breathwork/meditation, body scanning, fascia release, and cold/hot therapy. The session is fully customizable with therapist recommendations.",
    },
    {
      title: "Somatic Movement Massage",
      description:
        "A unique session where the client may remain fully clothed. We use somatic modalities: conscious breathwork, grounding, and jostling to release tension. No pressure is required—great for arthritis, fibromyalgia, MS, or general tenderness.",
    },
    {
      title: "Deep Relaxation Massage",
      description:
        "Designed to ease stress and offer a true reset. Your therapist may include gentle massage, rocking, guided breath/meditation, scalp work, reflexology, and temperature therapy. The session is tailored to your needs.",
    },
  ];

  return (
    <section className="my-16 px-4 text-[var(--ink-900)]">
      <div className="max-w-2xl mx-auto space-y-6">
        {services.map((service, index) => {
          const isOpen = openIndex === index;
          const triggerId = `svc-trigger-${index}`;
          const panelId = `svc-panel-${index}`;

          return (
            <div key={service.title}>
              {/* TILE (keeps original gray bg + flowers) */}
              <article className="relative overflow-hidden rounded-2xl bg-gray-500 shadow-md shadow-gray-500">
                {/* very subtle gradient wash over the gray */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white pointer-events-none"
                  style={{ opacity: washOpacity, zIndex: 0 }}
                />

                {/* decorative flowers (original assets, nicer sizes) */}
                <img
                  src="/img/top-flower.svg"
                  alt=""
                  aria-hidden="true"
                  className="absolute -top-6 -left-6 w-40 h-40 pointer-events-none"
                  style={{ opacity: decorOpacity, zIndex: 1 }}
                />
                <img
                  src="/img/btm-flower.svg"
                  alt=""
                  aria-hidden="true"
                  className="absolute -bottom-6 -right-6 w-44 h-44 pointer-events-none"
                  style={{ opacity: decorOpacity, zIndex: 1 }}
                />

                {/* CONTENT */}
                <div className="relative z-10 p-6 md:p-7 flex flex-col items-center text-center">
                  <h3 id="card-main-txt" className="text-4xl md:text-5xl font-bold mb-4">
                    {service.title}
                  </h3>

                  <button
                    id={triggerId} 
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    onClick={() => toggleDropdown(index)}
                    // uses your #learn-btn styling for brand consistency
                    className="w-full max-w-sm rounded-lg py-3 px-4 shadow-md hover:shadow-lg transition"
                    id="learn-btn"
                  >
                    <span className="inline-flex items-center justify-center gap-2 font-semibold">
                      {isOpen ? "Close" : "Learn More"}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </div>
              </article>

              {/* DROPDOWN (below tile) */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="mx-1 mt-2 rounded-2xl bg-white/95 ring-1 ring-[var(--line-200)] shadow-md px-5 py-4 text-[var(--ink-700)]">
                      <p className="text-base leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
