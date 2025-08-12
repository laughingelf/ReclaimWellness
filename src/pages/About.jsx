import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CommonHero from "./components/HeroCommon";
import TeamPage from "./components/TeamPage";

const Card = ({ children }) => (
  <article className="relative rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--line-200)] shadow-lg overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[var(--teal-50)] via-[var(--surface)] to-[var(--surface)]" />
    <div className="relative p-6 md:p-8">{children}</div>
  </article>
);

const Avatar = ({ src, alt }) => (
  <picture>
    <source srcSet={src.replace(/\.(png|jpg|jpeg)$/, ".webp")} type="image/webp" />
    <img
      className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-lg ring-2 ring-[var(--line-200)]"
      src={src}
      alt={alt}
      loading="lazy"
    />
  </picture>
);

const About = () => {
  return (
    <>
      <Navbar />

        <CommonHero
        title="Meet Our Team"
        image='/img/rws-hero2.webp'
        height="short"
        ctas={{
            primary: { label: "Contact Us", to: "/contact" },
            secondary: { label: "Donate", to: "/donate" },
            tertiary: { label: "Meet the Team ↓", onClickId: "team" },
        }}
        />
        <TeamPage />

      <Footer />
    </>
  );
};

export default About;
