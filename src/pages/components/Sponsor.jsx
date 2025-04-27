import { Link } from "react-router-dom";

const Sponsor = () => {

    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-black bg-white p-8 md:p-16 rounded-xl shadow-lg shadow-gray-500">
                {/* <h1 className="text-5xl md:text-6xl">Sponsor a Veteran</h1>
                <h2 className="text-2xl md:text-3xl">with trauma focused healing</h2> */}
                <div className="flex justify-center">
                    <img src="/img/sponsor-vet.png"  />
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
                <Link onClick={() => window.scrollTo(0, 0)} id='learn-btn' className='px-12 py-4 rounded-lg shadow-sm shadow-gray-500 hover:shadow-md hover:shadow-gray-500' to='/donate'>Sponsor a Veteran Today</Link>
            </div>
        </section>

    )
}

export default Sponsor;