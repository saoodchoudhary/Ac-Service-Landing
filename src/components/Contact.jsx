import Link from "next/link";

export default function Contact() {
    return (
      <section className="bg-gray-900 text-white p-4 py-8 sm:p-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg mb-6">Need assistance with your AC? Get in touch with us now!</p>
        <div className="flex justify-center items-center">
          <img src="/images/ac-with-three-min.jpg" alt="Contact Us" className="w-full h-96 object-cover rounded-lg" />
        </div>
        <div className="mt-8">
        <Link href="tel:+919372385325"  className="bg-red-600 px-8 py-4 rounded-full text-white hover:bg-red-700">Call Us: +919372385325</Link>
        </div>
      </section>
    );
  }
  