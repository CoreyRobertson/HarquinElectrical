

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import OurTeam from "@/components/OurTeam";
import ImageCarousel from "@/components/ImageCarousel";
import ContactForm from "@/components/CTA";
import AboutUs from "@/components/About";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <OurTeam />
      <ImageCarousel />
      <ContactForm />
    </div>
  );
}
