import Navbar from "./components/Navbar";
import Sponsor from "./components/Sponsor";
import DonateComingSoon from "./components/DonateWork";
import Footer from "./components/Footer";
import HeroDonate from "./components/HeroDonate";
import DonationOptions from "./components/DonateOptions";


const Donate = () => {

    return (
        <>
        <Navbar/>
        <HeroDonate/>
            <Sponsor/>
            <DonationOptions/>

        <Footer/>
            
        
        </>
    )
}

export default Donate;