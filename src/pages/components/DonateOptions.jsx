

const DonationOptions = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-green-50 to-blue-100 rounded-xl shadow-lg my-16">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6 underline">Support Reclaim Wellness Trauma Care</h2>
      <p className="text-lg text-center text-gray-600 mb-8">
        Your generosity helps us continue offering wellness and healing programs for our community. Here are a few ways you can donate:
      </p>

      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-2xl font-medium text-gray-800 mb-4">Yoga Classes</h3>
        <p className="text-lg text-gray-700 mb-4">
          Join us every Sunday morning at 8:30 AM in Central Park for a rejuvenating yoga session. We kindly ask for a minimum donation of $10 per participant to help fund our wellness programs.
        </p>
        <a 
            href="https://www.zeffy.com/embed/donation-form/reclaim-wellness-donation?modal=true" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-1/2 inline-block text-center py-2 mt-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-400 transition duration-300"
            >
            Donate Today
        </a>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-2xl font-medium text-gray-800 mb-4">Mobile Paint Parties</h3>
        <p className="text-lg text-gray-700 mb-4">
          Host your own creative gathering with our Mobile Paint Parties! We bring all the supplies and guide you through a fun painting experience. Choose from:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li><strong>$35</strong> per participant for a regular painting class</li>
          <li><strong>$45</strong> per participant for a pre-sketched canvas (e.g., Paint Your Pet or Paint Your Partner parties)</li>
        </ul>
        <a 
            href="https://www.zeffy.com/embed/donation-form/reclaim-wellness-donation?modal=true" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-1/2 inline-block text-center py-2 mt-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-400 transition duration-300"
            >
            Donate Today
        </a>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-2xl font-medium text-gray-800 mb-4">Attend Our Events</h3>
        <p className="text-lg text-gray-700 mb-4">
          We frequently host auctions, art festivals, and vendor events to raise funds. Stay connected with us on our Facebook page to learn about upcoming events and opportunities to participate or donate:
        </p>
        <a 
          href="https://www.facebook.com/ReclaimWellnessTraumaCare/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-400 transition duration-300"
        >
          Follow Us on Facebook
        </a>
      </section>

      <footer className="text-center mt-8">
        <p className="text-lg text-gray-600">Thank you for your support! Every donation, big or small, helps us make a difference.</p>
      </footer>
    </div>
  );
};

export default DonationOptions;
