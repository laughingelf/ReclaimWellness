import { Link } from "react-router-dom"

const Hero = () => {

    return (
        <section className="relative w-full h-[75vh] shadow-lg shadow-gray-500">
            <picture>
                <source srcSet="/img/rws-hero2.webp" type="image/webp" />
                <source srcSet="/img/rws-hero2.png" type="image/jpeg" />
                <img className="w-full h-full object-cover" 
                src="/img/rws-hero2.png" 
                alt="Ocean sunset with close-up of wet stones on the shore and delicate floral line art overlay, nature and wellness theme"
                loading="eager"
                fetchPriority="high" />
            </picture>                

            <img 
            src="/img/vet-owned.webp" 
            alt="Veteran Owned Logo"
            className="absolute top-4 right-4 w-32 h-auto md:w-48 md:h-auto z-10"
            />

              {/* Centered Text Overlay */}
            <div className="bg-black/40 absolute inset-0 flex flex-col items-center justify-center text-white-900 text-center px-4">
                <h1 style={{fontFamily: "Love Light, cursive"}} className="text-7xl md:text-9xl text-shadow-lg/50 font-bold mb-2">Reclaim Wellness</h1>
                <h2 className="text-3xl md:text-2xl font-medium mb-16">Trauma Focused Care</h2>
                <Link onClick={() => window.scrollTo(0, 0)} id='learn-btn' className='text-black px-12 py-4 rounded-lg hover:shadow-md hover:shadow-white' to='/contact'>Book an Appointment</Link>
            </div>
        </section>

    )
}

export default Hero;