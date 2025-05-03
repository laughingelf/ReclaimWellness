
const Sponsor = () => {

    return (
        <section id="sponsor-vet" className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12">
            {/* Text Content */}
            <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-green-50 to-blue-100 rounded-xl shadow-lg text-black">
                {/* <h1 className="text-5xl md:text-6xl">Sponsor a Veteran</h1>
                <h2 className="text-2xl md:text-3xl">with trauma focused healing</h2> */}
                <div className="flex justify-center">
                <picture>
                    <source 
                        srcSet="/img/sponsor-vet.webp" 
                    />
                    <img 
                        src="/img/sponsor-vet.png" 
                        alt="Sponsor Veterans Logo" 
                        loading="eager" 
                        fetchpriority="high"
                        width="100%" 
                    />
                    </picture>

                    {/* <img src="/img/sponsor-vet.png"  /> */}
                </div>
                <br/>
                <p className="mb-4 text-lg">
                <strong>Veterans near you need your help.</strong> Many Veterans leave the service with an unbearable
                amount of trauma. At Reclaim Wellness we help Veterans recover through somatic healing, 
                touch therapy, and connections to local programs.
                </p>
                <p className="mb-4 text-lg">
                When your business sponsors a Veteran, you’ll be featured on our website and at our next
                fundraising event. Monthly supporters also receive a special sticker to display your support.
                </p>
                <p className="mb-2 text-md font-semibold">💸 Donation: $60/month or $250 one-time</p>
                <p className="text-md font-semibold mb-4">✨ 100% of proceeds go directly to a Veteran’s healing services.</p>
                <br/>
                <a
                id="learn-btn"
                href="https://www.zeffy.com/embed/donation-form/reclaim-wellness-donation?modal=true" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='px-12 py-4 rounded-lg shadow-sm shadow-gray-500 hover:shadow-md hover:shadow-gray-500'>
                Sponsor a Veteran Today</a>
            </div>
        </section>

    )
}

export default Sponsor;