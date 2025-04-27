import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServiceSect";
import { Link } from "react-router-dom";
import HeroService from "./components/HeroService";


const Services = () => {

    return (

        <>
        <Navbar/>
        <HeroService/>
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
                        <Link onClick={() => window.scrollTo(0, 0)} style={{ backgroundColor: 'rgb(142, 212, 204)' }}
                        className='text-2xl py-3 px-8 rounded-lg shadow-md shadow-gray-500 hover:shadow-lg transition'
                         to='/contact' >Contact Us</Link>
                    </div>
                </div>

                {/* <!-- Services List --> */}
                <div class="w-full md:w-1/2 text-black bg-white p-6 rounded-lg shadow-md shadow-gray-500">
                {/* <h2 class="text-4xl font-bold mb-6">Our Services</h2> */}
                <ServicesSection/>
                </div>
            </div>
        </section>
        

        <Footer/>

        </>
    )
}

export default Services;