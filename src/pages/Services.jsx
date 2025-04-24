import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";


const Services = () => {

    return (

        <>
        <Navbar/>
        <section class="max-w-7xl mx-auto px-6 py-16">
            <div class="flex flex-col md:flex-row items-center gap-12">
                
                {/* <!-- Image --> */}
                <div class="w-full md:w-1/2">
                    <img
                        src="/img/massage-ther.jpg"
                        alt="Massage Therapy Services"
                        class="rounded-lg shadow-lg object-cover w-full h-auto"
                    />
                    <div className="mt-8">
                        <Link style={{ backgroundColor: 'rgb(142, 212, 204)' }}
                        className='text-2xl py-3 px-8 rounded-lg shadow-md shadow-gray-500 hover:shadow-lg transition'
                         to='/contact' >Contact Us</Link>
                    </div>
                </div>

                {/* <!-- Services List --> */}
                <div class="w-full md:w-1/2 text-black bg-white p-6 rounded-lg shadow-md shadow-gray-500">
                <h2 class="text-4xl font-bold mb-6">Our Services</h2>
                <ul class="space-y-4 text-lg">
                    <li>
                        <h3 className="underline">Things to know before your appointment:</h3>
                        <p className="text-sm text-left">-Please arrive 15 minutes early for your first session for a thorough consultation.</p>
                        <p className="text-sm text-left">-Please provide your email and fill out the intake form sent to you before your appointment.</p>
                        <p className="text-sm text-left">-I encourage all clients receiving massage for mental health to be actively in therapy and continue 
                            taking your prescribed medication. I also offer the option to communicate how your session went with your therapist.</p>
                        <p className="text-sm text-left">-Minors under 18 years old must have a parent or guardian present and sign a consent form as well 
                            as remaining in the treatment room throughout the service.</p>
                    </li>
                    <li>
                        <h3 className="underline">Trauma-Informed Massage:</h3>
                        <p className="text-sm text-left">By requesting a trauma-informed massage you are letting us 
                        know that there are touch related triggers present that you need us to be aware of. We will 
                        go through these triggers and be sure to avoid any areas that raise your anxiety. If you need 
                        to start these appointments by only receiving an hour long foot massage we can make that happen. 
                        Our job is not to practice exposure therapy but instead allow your body to fully relax being 
                        massaged and feeling safe. This massage is customizable with everything offered in the deep 
                        relaxation massage or paired with somatic movement.</p>
                    </li>
                    <li>
                        <h3 className="underline">Somatic Movement Massage:</h3>
                        <p className="text-sm text-left">This is a great choice for clients who have high anxiety and 
                        struggle to sit still. Also a great choice for clients who are uncomfortable being undressed 
                        during a massage. Somatic Movement Massage is a massage completely made up of gentle rocking. 
                        The type of rocking practiced by the massage therapists includes reiki training and has a specific 
                        movement that replicates the movement a fetus experiences in the womb. The muscle memory of your 
                        body associates this feeling with peace and safety. This form of massage also relaxes the clients 
                        muscles leaving them feeling like jello without having to push or dig into the muscles. Somatic 
                        Movement can be paired with the other two services or the full hour can be spent doing somatic</p>
                    </li>
                    <li>
                        <h3 className="underline">Deep Relaxation Massage:</h3>
                        <p className="text-sm text-left">We offer all forms of relaxation in a massage. With hot stones,  aromatherapy, scalp massage, 
                        reflexology, and our magic hands, you’re going to feel fully refreshed by the end of the hour. 
                        For clients who have trouble easing into the massage we can start with guided meditation, guided 
                        breathwork, or body scanning during their scalp or foot massage.</p>
                    </li>
                </ul>
                </div>
            </div>
        </section>
        <section class="bg-[#8ED4CC] text-black py-12 px-6 mx-3  md:px-24 rounded-lg shadow-md shadow-gray-500 mb-16 text-left hover:shadow-lg transition">
            <h2 class="text-3xl font-bold mb-6 text-center underline">Affordable Healing Services for Veterans & Low-Income Clients</h2>
            
            <p class="mb-4">
                At <strong>Reclaim Wellness</strong>, we’re committed to making trauma-informed massage therapy accessible to those who need it most. Our services are provided at no cost to qualifying individuals, including <strong>veterans</strong> and those experiencing <strong>financial hardship</strong>.
            </p>

            <p class="mb-4">
                To qualify for free services, clients must submit one of the following:
            </p>

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
            <div className="text-center mt-6 bg-white max-w-xs mx-auto px-6 py-3 rounded shadow-md shadow-gray-500 hover:shadow-lg transition">
                <Link to="/contact" className="text-blue-600 text-lg font-semibold">
                    Check Availability
                </Link>
            </div>

            </section>

        <Footer/>

        </>
    )
}

export default Services;