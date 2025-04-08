

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import OurTeam from "@/components/OurTeam";
import ImageCarousel from "@/components/ImageCarousel";
import ContactForm from "@/components/CTA";
import AboutUs from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <OurTeam />
      <ImageCarousel />
      <ContactForm />
      <Footer />
    </div>
  );
}
