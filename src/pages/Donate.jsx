import Navbar from "./components/Navbar";
import DonateComingSoon from "./components/DonateWork";
import Footer from "./components/Footer";
import CommonHero from "./components/HeroCommon";
import SponsorAndDonations from "./components/Donations";


const Donate = () => {

    return (
        <>
        <Navbar/>
        <CommonHero
        height="short"
        image="/img/rws-hero2.webp"
        title="Donate or Sponsor a Veteran"
        chips={["EIN 93-2642672", "Donations are tax-deductible"]}
        ctas={{
            primary: { label: "Sponsor a Veteran", onClickId: "sponsor" },
            secondary: { label: "Make a Donation", onClickId: "donate-options" },
        }}
        />

       
        <SponsorAndDonations />

        <Footer/>
            
        
        </>
    )
}

export default Donate;