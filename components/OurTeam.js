"use client";

import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const OurTeam = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [hovered, setHovered] = useState(false); // Track hover state

  return (
    <section id="team" className="w-full py-16 bg-[var(--color-white)] text-[var(--color-black)] font-sans">
      <div className="w-full xl:w-[70vw] mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Team Introduction */}
        <div ref={ref}>
          <h2 className="text-3xl sm:text-5xl font-thin mt-2 tracking-wide relative inline-block">
            Experienced & Fully Licensed.
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: inView ? "80px" : 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="block h-1 bg-[var(--color-yellow)] mt-2"
            />
          </h2>
          <p className="mt-4 text-[var(--color-dark)] leading-relaxed font-sans">
            Harquin Electrical is owned and operated by <strong>Michael Blades</strong>, a highly skilled electrician
            with over 7 years of experience in residential and commercial electrical work. Committed
            to quality, safety, and customer satisfaction.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex gap-4">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 px-5 py-3 border-[0.5px] border-[var(--color-black)] rounded-lg font-mono text-[var(--color-black)] hover:bg-[var(--color-yellow)] hover:border-[var(--color-yellow)] transition"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <FiPhone />
              Call Now
            </a>
          </div>
        </div>

        {/* Right Side - Owner Image */}
        <div className="relative">
          <Image
            src={hovered ? "/images/muppet.png" : "/images/owner.jpg"}
            width={500}
            height={500}
            alt="Business Owner"
            className="rounded-lg shadow-lg object-cover w-full transition-all duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default OurTeam;
