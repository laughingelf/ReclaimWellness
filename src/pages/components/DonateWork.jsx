import { Link } from "react-router-dom";


const DonateComingSoon = () => {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen  px-6 py-12 text-center">
        <div className="max-w-xl bg-[#8ED4CC] shadow-md shadow-gray-500 hover:shadow-lg transition rounded-lg p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 mt-16">Our Donation Page is Coming Soon!</h1>
          <p className="text-lg text-gray-600 mb-4">
            We’re currently finalizing the list of services that your generous donations will help support.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your patience — please check back with us soon!
          </p>
          <p className="text-md italic text-gray-500 mb-16">
            Your support makes a difference in the lives of those who need it most.
          </p>
          <div className="bg-white text-black py-2 mx-auto w-44 rounded-lg shadow-md shadow-gray-500 hover:shadow-lg transition">
            <Link onClick={() => window.scrollTo(0, 0)} to='/contact'>Contact Us</Link>
          </div>
        </div>
      </section>
    );
  };
  
  export default DonateComingSoon;
  