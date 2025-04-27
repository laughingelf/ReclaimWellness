import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="bg-white text-black py-8 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Navigation Links */}
                <div>
                <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                    <li><Link onClick={() => window.scrollTo(0, 0)} to='/home' className="hover:underline">Home</Link></li>
                    <li><Link onClick={() => window.scrollTo(0, 0)} to="/about" className="hover:underline">Staff</Link></li>
                    <li><Link onClick={() => window.scrollTo(0, 0)} to="/services" className="hover:underline">Services</Link></li>
                    <li><Link onClick={() => window.scrollTo(0, 0)} to="/donate" className="hover:underline">Donate</Link></li>
                    <li><Link onClick={() => window.scrollTo(0, 0)} to="/contact" className="hover:underline">Contact</Link></li>
                </ul>
                </div>

                {/* Google Maps Placeholder */}
                <div>
                <h4 className="text-xl font-semibold mb-4">Visit Us</h4>
                <div className="w-full h-48 rounded overflow-hidden shadow-md">
                    <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13400.034130064249!2d-97.53798189623413!3d32.8979426658137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864de23555ac3585%3A0xcf6220bb648f0acd!2s328%20W%20Main%20St%2C%20Azle%2C%20TX%2076020!5e0!3m2!1sen!2sus!4v1745515975215!5m2!1sen!2sus" // replace with your embed link
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                </div>

                {/* Email Signup Form */}
                <div>
                <h4 className="text-xl font-semibold mb-4">Join Our Email List</h4>
                <p className="text-sm mb-4">Stay up to date with our latest news and events.</p>
                <form className="flex flex-col sm:flex-row gap-2">
                    <input
                    type="email"
                    placeholder="Your email"
                    className="bg-gray-300 px-4 py-2 rounded-md text-black flex-1"
                    required
                    />
                    <button
                    type="submit"
                    id="learn-btn"
                    className="px-4 rounded-lg shadow-sm shadow-gray-500 hover:shadow-md"
                    >
                    Subscribe
                    </button>
                </form>
                </div>

            </div>
        </footer>

    )
}

export default Footer;