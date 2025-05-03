import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import {Link} from 'react-router-dom'
import Sponsor from "./components/Sponsor";
import Footer from "./components/Footer";

const LandingPage = () => {

    return (
        <>
        <Navbar/>
        <Hero/>
            <section id="welcome" className="my-16">
                <div className="w-full md:max-w-3xl mx-auto px-4">
                    <h2 style={{fontFamily: "Love Light, cursive"}}
                    className='text-6xl mb-6'>Welcome To Your Healing Journey</h2>
                    <p>Reclaim Wellness is a compassionate non-profit organization dedicated to supporting 
                        individuals on their healing journey from physical or sexual trauma. We specialize in 
                        trauma-focused care and offer therapeutic services including deep relaxation massage 
                        designed to help manage anxiety, depression, and emotional stress. Our mission is to 
                        create a safe, nurturing space where recovery and wellness can truly begin.
                    </p>
                    <br/>
                    <p>EIN # 93-2642672</p>
                    <p>This is a 501c(3) company. All donations are tax-deductible.</p>
                    <div className="mt-8 flex flex-col gap-10">
                        <div className=" ">
                            <Link onClick={() => window.scrollTo(0, 0)} id='learn-btn' className='px-12 py-4 rounded-lg shadow-sm shadow-gray-500 hover:shadow-md hover:shadow-gray-500' to='/donate'>Sponsor a Veteran Today</Link>
                        </div>
                        <div>
                            <Link id='learn-btn' className='px-31 py-4 rounded-lg shadow-sm shadow-gray-500 hover:shadow-md hover:shadow-gray-500' to='/donate#donate-options'>Donate</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-black px-4 py-8 mx-4 bg-white rounded-lg shadow-lg shadow-black">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
                    {/* Text Content */}
                    <div>
                    <h3 className="text-2xl font-bold mb-4">About Reclaim Wellness</h3>
                    <p className="mb-4 text-left">
                        Reclaim Wellness is a non-profit organization committed to delivering trauma-informed care 
                        for individuals recovering from significant physical or emotional trauma. Our approach integrates 
                        traditional mental health therapy with holistic healing practices such as therapeutic massage, 
                        yoga, and meditation. Research and experience show that pairing talk therapy with body-centered 
                        modalities promotes deeper, long-lasting healing. Trauma is not only stored in the mind—it lives 
                        in the body—and our services are designed to support full-body recovery and emotional wellness.
                    </p>

                    <h3 className="text-2xl font-bold mb-4">Why Our Approach Works</h3>
                    <p className="mb-4 text-left">
                        Trauma survivors, particularly those who have experienced sexual or physical assault, often live 
                        with heightened cortisol levels and an overactive fight-or-flight response. Even a gentle touch or 
                        familiar trigger can keep them in a state of constant hypervigilance—an exhausting and harmful condition. 
                        At Reclaim Wellness, our trauma-informed massage therapy is designed to help calm the nervous system, 
                        encouraging the body to relax and reestablish a sense of safety.
                    </p>
                    <p className="mb-4 text-left">
                        By gently guiding clients away from fear-based responses, we help them reframe their relationship with 
                        touch—transforming it from a source of stress into one of healing. Trauma often leaves individuals feeling 
                        disconnected from themselves, their passions, and their relationships. Our mission is to help each client 
                        reclaim their strength, their peace, and their wellness.
                    </p>
                    <blockquote className="italic text-gray-700 mb-2">
                        “We have learned that trauma is not just an event that took place sometime in the past; it is also the imprint 
                        left by that experience on mind, brain, and body. This imprint has ongoing consequences for how the human 
                        organism manages to survive in the present...”
                    </blockquote>
                    <p className="text-sm text-gray-600">― Bessel A. van der Kolk, *The Body Keeps the Score*</p>
                    </div>

                    {/* Image */}
                    <div className="w-full">
                    <picture>
                        <source srcSet="/img/head-massage.webp" type="image/webp" />
                        <source srcSet="/img/head-massage.jpg" type="image/jpeg" />
                        <img src="/img/head-massage.jpg" 
                        alt="relaxing head massage"
                        className="w-[24rem] md:w-[32rem] h-auto rounded-lg shadow-lg shadow-gray-600" />
                    </picture> 
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Link onClick={() => window.scrollTo(0, 0)} id='learn-btn' className='w-full px-12 py-4 rounded-lg shadow-md shadow-gray-500 hover:shadow-lg' to='/contact'>Contact Us Today</Link>
                        <Link onClick={() => window.scrollTo(0, 0)} id='learn-btn' className='w-full px-12 py-4 rounded-lg shadow-md shadow-gray-500 hover:shadow-lg' to='/services'>Services</Link>
                    </div>
                </div>
            </section>
            <section class="bg-[#8ED4CC] text-black mt-12 py-12 px-6 mx-3  md:px-24 rounded-lg shadow-md shadow-gray-500 mb-16 text-left hover:shadow-lg transition">
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
                    <Link onClick={() => window.scrollTo(0, 0)} to="/contact" className="text-blue-600 text-lg font-semibold">
                        Check Availability
                    </Link>
                </div>

            </section>
            
            <section id="open-hours" className="flex flex-row justify-center items-center mb-12">
                <div id="open-time" className="px-8 text-black">
                    <h3 className="text-3xl mb-4 underline">Open Hours:</h3>
                    {/* <p className="text-left text-sm">Feeling exhausted or overwhelmed after a long day? Reclaim Wellness offers appointment-only, 
                        trauma-informed care and therapeutic services designed to help you restore balance, reduce 
                        stress, and promote overall well-being.
                    </p> */}
                    <ul className="list-disc pl-5 text-base text-left mt-4">
                        <li><strong>Mon–Fri:</strong> 10am – 7pm</li>
                        <li><strong>Sat:</strong> 10am – 5pm</li>
                        <li><strong>Sun:</strong> <span className="underline font-semibold">Closed</span></li>
                    </ul>

                </div>
                <picture>
                    <source srcSet="/img/book-img.webp" type="image/webp" />
                    <source srcSet="/img/book-img.svg" type="image/svg" />
                    <img src="/img/book-img.svg"
                    className="w-[24rem] md:w-[32rem] h-auto shadow-lg shadow-gray-500 rounded-sm" 
                    alt="relaxing back massage" />
                </picture> 
                <div className="relative">
                    <div id="contact-massage" className="bg-gray-500 py-20 px-12 shadow-lg shadow-gray-600 rounded-xl -translate-x-16 relative z-10">
                        <h3 className="text-4xl w-72 mb-8">Contact Us to Schedule an Appointment</h3>
                        <Link onClick={() => window.scrollTo(0, 0)} to='/contact' id='learn-btn' className='px-12 py-2 relative z-10 rounded-lg'>Contact Us</Link>

                        <img 
                            src="/img/btm-flower.svg" 
                            alt="" 
                            className="absolute bottom-0 right-0 w-75 h-75 object-contain z-0 pointer-events-none"
                        />
                    </div>
                </div>
            </section>
            {/* <Sponsor/> */}
            <Footer/>


        
        </>
    )
}

export default LandingPage;