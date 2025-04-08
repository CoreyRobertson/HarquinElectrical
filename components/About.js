"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section id="about" className="w-full py-16 bg-#FFFFFF text-[var(--color-black)] font-sans relative">
            <div className="w-full xl:w-[70vw] mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Side - Text Content */}
                <div className="relative" ref={ref}>
                    <h2 className="text-3xl sm:text-5xl font-thin relative inline-block">
                        Trusted Electrical Solutions around Melbourne.
                        <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: inView ? "80px" : 0 }}
                            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                            className="block h-1 bg-[var(--color-yellow)] mt-2"
                        />
                    </h2>
                    <p className="mt-4 text-[var(--color-dark)] leading-relaxed font-sans">
                        Harquin Electrical is Melbourne’s premier electrician service, offering expert solutions for
                        residential and commercial properties. With a commitment to quality, safety, and efficiency, we
                        provide 24/7 emergency support, general electrical work, lighting installations, and advanced
                        commercial solutions. Whether you're upgrading your home or powering your business, our
                        licensed professionals deliver top-tier service every time.
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="relative flex justify-center">
                    <Image
                        src="/images/ManLight.png" // Replace with an actual high-quality image
                        width={500}
                        height={500}
                        alt="Electrician at Work"
                        className="rounded-lg shadow-lg object-cover w-full"
                    />
                </div>

            </div>
        </section>
    );
};

export default AboutUs;
