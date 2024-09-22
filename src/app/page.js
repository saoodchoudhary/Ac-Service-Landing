import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Service";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <Navbar />
      <Banner />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingActions/>
    </>
  );
}
