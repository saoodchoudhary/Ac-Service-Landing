"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaEnvelope, FaTimes } from 'react-icons/fa';

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-center space-y-4">
      {/* WhatsApp, Email, Call Options */}
      {isOpen && (
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col space-y-4"
          >
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/+919372385325?text=Hello, I need assistance with AC services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
            >
              <FaWhatsapp size={24} />
            </a>

            {/* Email Button */}
            <a
              href="mailto:mumbaiservice455@gmail.com?subject=AC Service Inquiry&body=Hello, I need assistance with AC services."
              className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
            >
              <FaEnvelope size={24} />
            </a>

            {/* Call Button */}
            <a
              href="tel:+919372385325"
              className="bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600"
            >
              <FaPhone size={24} />
            </a>
          </motion.div>
        </div>
      )}

      {/* Main Call Button (Toggles Menu) */}
      <button
        onClick={toggleMenu}
        className={`bg-blue-600 text-white p-5 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none transition-transform transform ${isOpen ? 'rotate-45' : ''}`}
      >
        {isOpen ? <FaTimes size={24} /> : <FaPhone size={24} />}
      </button>
    </div>
  );
}
