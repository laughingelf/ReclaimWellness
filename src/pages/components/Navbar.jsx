import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-md">
      {/* Logo / Image */}
      {/* <div className="flex flex-row items-center"> */}
        <Link className='flex items-center' to='/home'>
          <img src='/img/nav-flower2.svg' className='w-10 h-10'/>
          <h3 className='text-2xl' style={{fontFamily: 'Gwendolyn, cursive', fontWeight: '700', color: 'black'}}>Reclaim Wellness</h3>
        </Link>
      {/* </div> */}

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 text-black font-semibold">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-black focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
  <div className="absolute top-16 right-6 bg-gray-100 text-black shadow-md rounded-lg flex flex-col items-start p-4 space-y-4 md:hidden z-50">
    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
    <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
  </div>
      )}
    </nav>
  );
}

export default Navbar;
