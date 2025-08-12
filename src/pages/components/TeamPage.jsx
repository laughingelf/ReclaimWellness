import { Link } from "react-router-dom";

const TeamPage = () => {
  const members = [
    {
      name: "Nina Roloff",
      photo: "/img/nina.png",
      alt:
        "Owner of nonprofit massage therapy organization smiling warmly, promoting healing and trauma-informed care",
      ctaLabel: "Check Availability",
      ctaTo: "/contact",
      bio: (
        <>
          Former Navy Sailor, developed a passion for using massage as a tool for helping
          people recover from physical and mental traumas because I used it for my own
          healing. My passions lead me to studying how to become a meditation/breathwork
          coach, somatic experiencing, trauma-informed massage/yoga, somatic movement
          massage, massage for anxiety and depression, and massage for PTSD. I am always
          excited to help my clients through their healing journey with touch therapy.
        </>
      ),
    },
    {
      name: "Jay Almazan",
      photo: "/img/jay.jpg",
      alt:
        "Massage therapist at nonprofit clinic providing trauma-informed care with compassion and professionalism",
      ctaLabel: "Check Availability",
      ctaTo: "/contact",
      bio: (
        <>
          A former Army Airborne Soldier turned dedicated massage therapist, I discovered
          the power of therapeutic touch through my own journey of pain management.
          Combining a strong background in service with a passion for helping others, I
          bring skilled hands, compassionate care, and a holistic approach to each
          session. My goal is to help people find relief, comfort, and a renewed sense of
          well-being.
        </>
      ),
    },
    {
      name: "Felicia Harvey",
      photo: "/img/felicia.jpg",
      alt:
        "Massage therapist at nonprofit clinic providing trauma-informed care with compassion and professionalism",
      ctaLabel: "Check Availability",
      ctaTo: "/contact",
      bio: (
        <>
          Felicia is an Air Force veteran who has spent years dedicating her studies to
          help people feel better mentally and physically with gentle orthopedics and
          trauma-informed massage. She has mastered the art of helping her clients seep
          into a relaxed state using slow gentle massage. She has a warm and welcoming
          energy that can make anyone feel safe and comfortable.
        </>
      ),
    },
    {
      name: "More to come...",
      photo: "/img/more.png",
      alt: "Massage therapist performing relaxing back massage on client in a calming spa setting",
      ctaLabel: "Contact Us",
      ctaTo: "/contact",
      bio: (
        <>
          <p>Looking for my dream team!</p>
          <p className="mt-2">
            I am looking for like-minded massage therapists, yoga instructors, somatic
            healers, therapists or anything in the trauma focused field. You may choose to
            only accept clients paying (x amount from the income-based pricing list). You
            may choose to donate one or more free massage(s) a month. If you are interested
            in donating a portion of your schedule to trauma work please contact Nina. This
            is a 501c3 organization and any donated service is tax-deductible.
          </p>
        </>
      ),
    },
  ];

  return (
    <>

      <section id="team" className="max-w-6xl mx-auto px-6 py-0 mt-6 space-y-12">
        {members.map((m, i) => (
          <article
            key={m.name}
            className="relative rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--line-200)] shadow-lg overflow-hidden"
          >
            {/* Soft gradient backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--teal-50)] via-[var(--surface)] to-[var(--surface)]" />
            <div className="relative p-6 md:p-8">
              <div
                className={`flex flex-col ${
                  i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-8`}
              >
                {/* Avatar */}
                <picture>
                  <source
                    srcSet={m.photo.replace(/\.(png|jpg|jpeg)$/i, ".webp")}
                    type="image/webp"
                  />
                  <img
                    className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-lg ring-2 ring-[var(--line-200)]"
                    src={m.photo}
                    alt={m.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>

                {/* Content */}
                <div className="text-[var(--ink-900)] max-w-xl">
                  <h3 className="text-2xl font-semibold mb-2">{m.name}</h3>
                  <div className="text-[var(--ink-700)] leading-relaxed">{m.bio}</div>

                  <div className="mt-6">
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      className="btn-primary"
                      to={m.ctaTo}
                    >
                      {m.ctaLabel}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

    </>
  );
};

export default TeamPage;
