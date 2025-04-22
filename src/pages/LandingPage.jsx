import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import {Link} from 'react-router-dom'

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
                    <img 
                        src="/img/head-massage.jpg" 
                        alt="Therapeutic Head Massage"
                        className="w-full h-auto rounded-lg shadow-lg shadow-gray-600"
                    />
                    </div>
                </div>
            </section>
            <section className="my-16 px-4 text-black">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="relative overflow-hidden flex flex-col justify-between items-center bg-gray-500 rounded-xl shadow-md shadow-gray-500 p-6 text-center hover:shadow-lg transition min-h-[300px]">
                          {/* Top-left decorative image */}
                        <img
                            src="/img/top-flower.svg"
                            alt=""
                            aria-hidden="true"
                            className="absolute top-0 left-0 w-75 h-75 -translate-x-8 -translate-y-4 z-0"
                        />

                        {/* Bottom-right decorative image */}
                        <img
                            src="/img/btm-flower.svg"
                            alt=""
                            aria-hidden="true"
                            className="absolute bottom-0 right-0 w-75 h-75 z-0"
                        />
                        <div id="card-main-txt" className="relative z-10 flex-1 flex items-center justify-center text-center">
                            <h3 className="text-5xl font-bold">Trauma-Informed Massage</h3>
                        </div>
                        <Link
                        id='learn-btn' 
                        to="/services" 
                        className="z-10 mt-auto w-full py-4 px-4 rounded-lg shadow-md shadow-gray-500 hover:shadow-lg transition"
                        >
                        Learn More
                        </Link>
                    </div>

                    {/* Card 2 */}
                    <div className="relative overflow-hidden flex flex-col justify-between items-center bg-gray-500 rounded-xl shadow-md shadow-gray-500 p-6 text-center hover:shadow-lg transition min-h-[300px]">
                          {/* Top-left decorative image */}
                        <img
                            src="/img/top-flower.svg"
                            alt=""
                            aria-hidden="true"
                            className="absolute top-0 left-0 w-75 h-75 -translate-x-8 -translate-y-4 z-0"
                        />

                        {/* Bottom-right decorative image */}
                        <img
                            src="/img/btm-flower.svg"
                            alt=""
                            aria-hidden="true"
                            className="absolute bottom-0 right-0 w-75 h-75 z-0"
                        />
                        <div id="card-main-txt" className="relative z-10 flex-1 flex items-center justify-center text-center">
                            <h3 className="text-5xl font-bold">Somatic Movement Massage</h3>
                        </div>
                        <Link
                        id='learn-btn' 
                        to="/services" 
                        className="z-10 mt-auto w-full py-4 px-4 rounded-lg shadow-md shadow-gray-500 hover:shadow-lg transition"
                        >
                        Learn More
                        </Link>
                    </div>

                    {/* Card 3 */}
                    <div className="relative overflow-hidden flex flex-col justify-between items-center bg-gray-500 rounded-xl shadow-md shadow-gray-500 p-6 text-center hover:shadow-lg transition min-h-[300px]">
                          {/* Top-left decorative image */}
                        <img
                            src="/img/top-flower.svg"
                            alt=""
                            aria-hidden="true"
                            className="absolute top-0 left-0 w-75 h-75 -translate-x-8 -translate-y-4 z-0"
                        />

                        {/* Bottom-right decorative image */}
                        <img
                            src="/img/btm-flower.svg"
                            alt=""
                            aria-hidden="true"
                            className="absolute bottom-0 right-0 w-75 h-75 z-0"
                        />
                        <div id="card-main-txt" className="relative z-10 flex-1 flex items-center justify-center text-center">
                            <h3 className="text-5xl font-bold">Deep Relaxation Massage</h3>
                        </div>
                        <Link
                        id='learn-btn' 
                        to="/services" 
                        className="z-10 mt-auto w-full py-4 px-4 rounded-lg shadow-md shadow-gray-500 hover:shadow-lg transition"
                        >
                        Learn More
                        </Link>
                    </div>
                </div>
            </section>
            <section id="open-hours" className="flex flex-row justify-center items-center mb-12">
                <div id="open-time" className="px-8 text-black">
                    <h3 className="text-3xl mb-4 underline">Open Hours:</h3>
                    <p className="text-left text-sm">Feeling exhausted or overwhelmed after a long day? Reclaim Wellness offers appointment-only, 
                        trauma-informed care and therapeutic services designed to help you restore balance, reduce 
                        stress, and promote overall well-being.
                    </p>
                    <ul className="list-disc pl-5 text-base text-left mt-4">
                        <li><strong>Mon–Fri:</strong> 10am – 7pm</li>
                        <li><strong>Sat:</strong> 10am – 5pm</li>
                        <li><strong>Sun:</strong> <span className="underline font-semibold">Closed</span></li>
                    </ul>

                </div>
                <img id="booking-img" src="/img/book-img.png" className="shadow-lg shadow-gray-500 rounded-sm" />
                <div className="relative">
                    <div id="contact-massage" className="bg-gray-500 py-20 px-12 shadow-lg shadow-gray-600 rounded-sm -translate-x-16 relative z-10">
                        <h3 className="text-4xl w-72 mb-8">Contact Us to Schedule and Appointment</h3>
                        <Link to='/contact' id='learn-btn' className='px-12 py-2 relative z-10'>Contact Us</Link>

                        <img 
                            src="/img/btm-flower.svg" 
                            alt="" 
                            className="absolute bottom-0 right-0 w-75 h-75 object-contain z-0 pointer-events-none"
                        />
                    </div>
                </div>
            </section>


        
        </>
    )
}

export default LandingPage;