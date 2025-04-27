import { Link } from "react-router-dom"

const HeroService = () => {

    return (
        <section className="relative w-full h-[25vh] md:h-[30vh] shadow-lg shadow-gray-500">
            <img 
                src="/img/rws-hero2.png"
                className="w-full h-full object-cover"
                alt="Hero"
            />

            {/* <img 
            src="/img/vet-owned.webp" 
            alt="Veteran Owned Logo"
            className="absolute top-4 right-4 w-32 h-32 md:w-48 md:h-48 z-10"
            /> */}

              {/* Centered Text Overlay */}
            <div className="bg-black/40 absolute inset-0 flex flex-col items-center justify-center text-white-900 text-center px-4">
                <h1 style={{fontFamily: 'Gwendolyn, cursive'}}
                className='text-6xl md:text-8xl text-shadow-lg/50'
                >Our Services</h1>
            </div>
        </section>

    )
}

export default HeroService;