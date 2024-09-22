"use client"
import { FaTools, FaFan, FaThermometerHalf } from 'react-icons/fa';

export default function Services() {
  return (
    <section className="p-4  py-8 sm:p-8 bg-gray-100 text-center">
      
      <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <img src="/images/ac-main-min.jpg" alt="AC Maintenance" className="w-full h-[200px] sm:h-56 object-cover mb-4 rounded-lg" />
          <FaTools className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-2xl font-bold mb-2">AC Maintenance</h3>
          <p>Ensure your AC runs efficiently with regular maintenance services.</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <img src="/images/ventilation-service-min.jpg" alt="Ventilation Services" className="w-full h-[200px] sm:h-56 object-cover mb-4 rounded-lg" />
          <FaFan className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-2xl font-bold mb-2">Ventilation Services</h3>
          <p>Top-notch ventilation system installation for homes and businesses.</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <img src="/images/ac-with-three-min.jpg" alt="Heating Systems" className="w-full h-[200px] sm:h-56 object-cover mb-4 rounded-lg" />
          <FaThermometerHalf className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-2xl font-bold mb-2">Heating Systems</h3>
          <p>Stay warm with our heating system repair and installation services.</p>
        </div>
      </div>
      </div>
    </section>
  );
}
