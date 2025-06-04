"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-6 sm:px-12 text-[var(--color-white)] font-sans overflow-hidden"
        >
            {/* Desktop Background Image */}
            <div className="absolute inset-0 z-0 hidden sm:block">
                <Image
                    src="/images/HeroDesktop.png"
                    alt="Hero Background Desktop"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Mobile Background Image */}
            <div className="absolute inset-0 z-0 sm:hidden">
                <Image
                    src="/images/HeroMobile.png"
                    alt="Hero Background Mobile"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl text-left">
                <h1 className="text-4xl sm:text-6xl font-light leading-tight text-[var(--color-white)] tracking-tight">
                    Powering Your Home & Business.
                </h1>
                <p className="mt-4 text-lg sm:text-xl font-light tracking-wide text-[var(--color-grey)]">
                    Reliable & efficient electrical solutions tailored to your needs.
                </p>

                {/* Call to Action Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <a
                        href="#services"
                        className="w-[75%] sm:w-fit px-6 py-3 text-sm sm:text-base font-medium bg-[var(--color-yellow)] text-[var(--color-black)] rounded-lg shadow-md transition hover:bg-[var(--color-dark)] hover:text-[var(--color-white)] text-center"
                    >
                        Our Services
                    </a>
                    <a
                        href="#contact"
                        className="w-[75%] sm:w-fit px-6 py-3 text-sm sm:text-base font-medium border border-[var(--color-yellow)] text-[var(--color-yellow)] rounded-lg transition hover:bg-[var(--color-yellow)] hover:text-[var(--color-black)] text-center"
                    >
                        Get a Quote
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
