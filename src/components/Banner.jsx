"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaEnvelope, FaTimes } from 'react-icons/fa';

const images = [
  '/images/banner-ac-min.jpg',
  '/images/ac-with-three-min.jpg',
  '/images/ac-main-min.jpg'
];

export default function Banner() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isCardVisible, setIsCardVisible] = useState(false);

  // Auto-slide effect for the banner images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Toggle contact card visibility
  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <div>
      <div className="relative h-screen max-h-[300px] sm:max-h-[600px] overflow-hidden text-white">
        <AnimatePresence>
          {images.map((image, index) => (
            index === currentImage && (
              <motion.div
                key={index}
                className="absolute inset-0 h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 1 }}
              />
            )
          ))}
        </AnimatePresence>

        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center px-4">
          <motion.h1
            className="text-2xl sm:text-4xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Keep Your Home Cool with Expert AC Services
          </motion.h1>
          <motion.p
            className="text-md sm:text-lg md:text-xl mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Get the best AC maintenance, repair, and installation services at your doorstep.
          </motion.p>
          <motion.button
            onClick={toggleCard}
            className="bg-red-600 px-6 sm:px-8 py-2 sm:py-4 rounded-full text-white hover:bg-red-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Contact Us
          </motion.button>
        </div>
      </div>

      {/* Background overlay when card is visible */}
      {isCardVisible && <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>}

      {/* Contact Card */}
      <AnimatePresence>
        {isCardVisible && (
          <motion.div
            className="fixed top-1/2 left-0 right-0 mx-auto bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[400px] text-black z-50"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -100 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
          >
            {/* Close Button */}
            <button onClick={toggleCard} className="absolute top-2 right-2 text-gray-700 hover:text-gray-900">
              <FaTimes size={24} />
            </button>

            <h2 className="text-lg font-bold mb-4">Get in Touch</h2>
            <div className="flex flex-col space-y-4">
              <a
                href="https://wa.me/+919372385325?text=Hi, I need assistance with AC services!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-600 hover:text-green-700"
              >
                <FaWhatsapp size={24} /> <span>WhatsApp</span>
              </a>
              <a
                href="mailto:mumbaiservice455@gmail.com?subject=Service Inquiry&body=Hi, I would like to know more about your services."
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
              >
                <FaEnvelope size={24} /> <span>Email</span>
              </a>
              <a
                href="tel:+919372385325"
                className="flex items-center space-x-2 text-red-600 hover:text-red-700"
              >
                <FaPhone size={24} /> <span>Call</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
