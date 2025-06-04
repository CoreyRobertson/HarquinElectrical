

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

// To do: 
// Google Business Profile
// // Service Pages
// SEO optimization
// Favicon
// Add real photos
// Proof read and amend content in about section
// Back end build for form->email - need access to Mick's account, could be done last thing


