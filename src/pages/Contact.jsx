import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import { Link } from "react-router-dom";
import HeroContact from "./components/HeroContact";


const Contact = () => {

    return (

        <>
        <Navbar/>
        <HeroContact/>
        <section class=" max-w-2xl bg-[#8ED4CC] text-black mt-12 py-12 px-6 mx-4 sm:mx-auto md:px-24 rounded-lg shadow-md shadow-gray-500 mb-16 text-left hover:shadow-lg transition">
                <h2 class="text-3xl font-bold mb-6 text-center underline">To qualify for free services, clients must submit one of the following:</h2>
                
                <ul class="list-disc list-inside mb-4">
                    <li>A copy of your <strong>DD214</strong> (for veterans)</li>
                    <li>A recent <strong>tax return</strong></li>
                    <li><strong>Proof of SNAP benefits</strong> approval</li>
                    <li>A <strong>referral letter</strong> from a licensed mental health provider explaining the need</li>
                </ul>

                <p class="mb-4">
                    If you do not qualify for our nonprofit program, you can still schedule an appointment through our for-profit partner site:
                    <a href="https://www.eliteorthobodywork.com" class="text-blue-700 underline hover:text-blue-900" target="_blank" rel="noopener noreferrer">
                    www.eliteorthobodywork.com
                    </a>
                </p>

                <p><em>Note: Funding is limited and free services are offered on a case-by-case basis depending on need and available resources.</em></p>
                {/* <div className="text-center mt-6 bg-white max-w-xs mx-auto px-6 py-3 rounded shadow-md shadow-gray-500 hover:shadow-lg transition">
                    <Link to="/contact" className="text-blue-600 text-lg font-semibold">
                        Check Availability
                    </Link>
                </div> */}

            </section>
            <ContactForm/>
            <div className="mt-12">
                <Footer/>
            </div>
        </>
    )
}

export default Contact;