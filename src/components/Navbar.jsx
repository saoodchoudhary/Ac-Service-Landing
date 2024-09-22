import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#04081b] to-black text-white">
      <div className="container mx-auto flex justify-center sm:justify-between items-center py-4 px-4">
        {/* Logo or Brand Name */}
        <div className="text-2xl text-center font-bold">Mumbai Service</div>
        
        {/* Contact Information */}
        <div className="hidden sm:flex space-x-6">
          {/* Phone Number - Opens Dialer on Mobile */}
          <Link href="tel:+919372385325" className="flex items-center space-x-2 hover:text-gray-300 transition duration-300">
            <FaPhone /> <span>+91 9372385325</span>
          </Link>
          
          {/* Email Address - Opens Email Client */}
          <Link href="mailto:mumbaiservice455@gmail.com" className="flex items-center space-x-2 hover:text-gray-300 transition duration-300">
            <FaEnvelope /> <span>mumbaiservice455@gmail.com</span>
          </Link>

          {/* Optional Location */}
          {/* <div className="flex items-center space-x-2">
            <FaMapMarkerAlt /> <span>Los Angeles, USA</span>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
