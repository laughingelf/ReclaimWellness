import { useState } from "react";

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      title: "Trauma-Informed Massage",
      description:
        "This massage involves communication to keep you in a relaxed state without triggering intense emotions. Your massage therapist may use a combination of gentle massage, rocking, guided breathwork/meditation, body scanning, fascia release, and cold/hot therapy. The massage is completely customizable with the massage therapist's suggestions.",
    },
    {
      title: "Somatic Movement Massage",
      description:
        "This massage is unique because the client may remain fully clothed. The full session is based on somatic modalities beginning with conscious breathwork, a grounding exercise, and a jostling massage to release tense muscles. This massage requires no pressure to be applied making it a great choice for clients with arthritis, fibromyalgia, MS, or any kind of tenderness.",
    },
    {
      title: "Deep Relaxation Massage",
      description:
        "This massage is meant to ease stress and help you take a break from reality. Your massage therapist may use a combination of gentle massage, rocking, guided breathwork/meditation, scalp massage, reflexology and cold/hot therapy. The massage is completely customizable with the massage therapist's suggestions.",
    },
  ];

  return (
    <section className="my-16 px-4 text-black">
        <div className="max-w-md mx-auto flex flex-col gap-6">
          {services.map((service, index) => (
            <div key={index}>
              {/* Card */}
              <div
                className="relative overflow-hidden flex flex-col justify-between items-center bg-gray-500 rounded-xl shadow-md shadow-gray-500 p-6 text-center hover:shadow-lg transition"
              >
                {/* Decorative Images */}
                <img
                  src="/img/top-flower.svg"
                  alt=""
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-75 h-75 -translate-x-8 -translate-y-4 z-0"
                />
                <img
                  src="/img/btm-flower.svg"
                  alt=""
                  aria-hidden="true"
                  className="absolute bottom-0 right-0 w-75 h-75 z-0"
                />

                {/* Title */}
                <div className="relative mb-6 z-10 flex-1 flex items-center justify-center text-center">
                  <h3 id="card-main-txt" className="text-5xl font-bold">{service.title}</h3>
                </div>

                {/* Button */}
                <button
                  onClick={() => toggleDropdown(index)}
                  id='learn-btn'
                  className="z-10 mt-auto w-full py-4 px-4 rounded-lg shadow-md shadow-gray-500 hover:shadow-lg transition bg-white font-semibold"
                >
                  {openIndex === index ? "Close" : "Learn More"}
                </button>
              </div>

              {/* Dropdown shown BELOW the card */}
              {openIndex === index && (
                <div className="mt-2 px-4 py-4 bg-white bg-opacity-90 text-black rounded-lg shadow-md">
                  <p className="text-sm">{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

  );
};

export default ServicesSection;
