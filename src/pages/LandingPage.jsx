import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero"; 
import WelcomeMission from "./components/WelcomeMission";
import AboutIntro from "./components/AboutIntro";
import Eligibility from "./components/Eligibility";
import HoursAndContact from "./components/HoursContact";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <WelcomeMission />
      <AboutIntro />
      <Eligibility />
      <HoursAndContact />

      <Footer />
    </>
  );
};

export default LandingPage;
