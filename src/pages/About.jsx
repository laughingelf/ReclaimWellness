import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import HeroAbout from "./components/HeroAbout";


const About = () => {

    return (

        <>
        <Navbar/>
            
        <section class="max-w-6xl mx-auto px-6 py-0 space-y-12">
            
            <HeroAbout/>
            {/* <!-- Profile 1 --> */}
            <div class="flex flex-col md:flex-row items-center gap-8">
            <picture>
                <source srcSet="/img/nina.webp" type="image/webp" />
                <source srcSet="/img/nina.png" type="image/jpeg" />
                <img class="w-55 h-55 md:w-70 md:h-70 object-cover rounded-full shadow-xl shadow-gray-500"
                src="/img/nina.png" alt="Owner of nonprofit massage therapy organization smiling warmly, promoting healing and trauma-informed care" />
            </picture> 
                <div class="text-black max-w-xl">
                <h3 class="text-2xl font-semibold mb-2">Nina Roloff</h3>
                <p>
                Former Navy Sailor, developed a passion for using massage as a tool for helping people recover 
                from  physical and mental traumas because I used it for my own healing. My passions lead me to 
                studying how to become a meditation/breathwork coach, somatic experiencing, trauma-informed massage/yoga, 
                somatic movement massage, massage for anxiety and depression, and massage for PTSD. I am always excited 
                to help my clients through their healing journey with touch therapy. 
                </p>
                    <div className="mt-6">
                        <Link onClick={() => window.scrollTo(0, 0)} className="py-3 px-8 rounded-lg shadow-md shadow-gray-500 hover:shadow-lg" id="learn-btn" to='/contact'>Check Availability</Link>
                    </div>
                </div>
            </div>

            {/* <!-- Profile 2 --> */}
            <div class="flex flex-col md:flex-row-reverse items-center gap-8">
            <picture>
                <source srcSet="/img/jay.webp" type="image/webp" />
                <source srcSet="/img/jay.jpg" type="image/jpeg" />
                <img class="w-55 h-55 md:w-70 md:h-70 object-cover rounded-full shadow-xl shadow-gray-500" src="/img/jay.jpg" 
                alt="Massage therapist at nonprofit clinic providing trauma-informed care with compassion and professionalism" />
            </picture> 
                <div class="text-black max-w-xl">
                <h3 class="text-2xl font-semibold mb-2">Jay Almazan</h3>
                <p>
                A former Army Airborne Soldier turned dedicated massage therapist, I discovered the power of therapeutic 
                touch through my own journey of pain management. Combining a strong background in service with a passion 
                for helping others, I bring skilled hands, compassionate care, and a holistic approach to each session. 
                My goal is to help people find relief, comfort, and a renewed sense of well-being.
                </p>
                    <div className="mt-6">
                        <Link onClick={() => window.scrollTo(0, 0)} className="py-3 px-8 rounded-lg shadow-md shadow-gray-500 hover:shadow-lg" id="learn-btn" to='/contact'>Check Availability</Link>
                    </div>
                </div>
            </div>

            {/* <!-- Profile 3 --> */}
            <div class="flex flex-col md:flex-row items-center gap-8">
            <picture>
                <source srcSet="/img/felicia.webp" type="image/webp" />
                <source srcSet="/img/felicia.jpg" type="image/jpeg" />
                <img class="w-55 h-55 md:w-70 md:h-70 object-cover rounded-full shadow-xl shadow-gray-500" src="/img/felicia.jpg" 
                alt="Massage therapist at nonprofit clinic providing trauma-informed care with compassion and professionalism" />
            </picture> 
                <div class="text-black max-w-xl">
                <h3 class="text-2xl font-semibold mb-2">Felicia Harvey</h3>
                <p>
                Felicia is an Air Force veteran who has spent years dedicating her studies to help people feel better mentally and 
                physically with gentle orthopedics and trauma-informed massage. She has mastered the art of helping her client’s seep 
                into a relaxed state using slow gentle massage. She has a warm and welcoming energy that can make anyone feel safe
                 and comfortable. 
                </p>
                    <div className="mt-6">
                        <Link onClick={() => window.scrollTo(0, 0)} className="py-3 px-8 rounded-lg shadow-md shadow-gray-500 hover:shadow-lg" id="learn-btn" to='/contact'>Check Availability</Link>
                    </div>
                </div>
            </div>

            {/* <!-- Profile 4 --> */}
            <div class="flex flex-col md:flex-row-reverse items-center gap-8 mb-24">
            <picture>
                <source srcSet="/img/more.webp" type="image/webp" />
                <source srcSet="/img/more.png" type="image/jpeg" />
                <img class="w-55 h-55 md:w-70 md:h-70 object-cover rounded-full shadow-xl shadow-gray-500" src="/img/more.png" 
                alt="Massage therapist performing relaxing back massage on client in a calming spa setting" />
            </picture> 
                <div class="text-black max-w-xl">
                <h3 class="text-2xl font-semibold mb-2">More to come...</h3>
                <p>Looking for my dream team!</p>
                <p>
                I am looking for like-minded massage therapists, yoga instructors, somatic healers, therapists or 
                anything in the trauma focused field. You may choose to only accept clients paying (x amount from the 
                income-based pricing list). You may choose to donate one or more free massage(s) a month
                If you are interested in donating a portion of your schedule to trauma work please contact Nina. 
                This is a 501c3 organization and any donated service is tax-deductible.
                </p>
                <div className="mt-6">
                    <Link onClick={() => window.scrollTo(0, 0)} className="py-3 px-8 rounded-lg shadow-md shadow-gray-500 hover:shadow-lg" id="learn-btn" to='/contact'>Contact Us</Link>
                </div>
                </div>
            </div>

            
        </section>

        
        <Footer/>
        </>
    )
}

export default About;