export default function Testimonials() {
    return (
      <section className="p-4 sm:p-8 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <img src="/images/profile.jpg" alt="Client Testimonial" className="w-20 h-20 rounded-full mx-auto mb-4" />
            <p>&quot;AC Services fixed my air conditioner in no time. Excellent service and very professional!&quot;</p>
            <h3 className="font-bold mt-4">Shivam Yadav</h3>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <img src="/images/profile.jpg" alt="Client Testimonial" className="w-20 h-20 rounded-full mx-auto mb-4" />
            <p>&quot;Highly recommend them for their reliability and expertise. My AC runs better than ever.&quot;</p>
            <h3 className="font-bold mt-4">Abdul Samad</h3>
          </div>
        </div>
      </section>
    );
  }
  