"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isDark, setIsDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const whiteSection = document.querySelector("#about");
            if (!whiteSection) return;
            const rect = whiteSection.getBoundingClientRect();
            setIsDark(rect.top <= 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Navbar */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 border-b border-white/20 backdrop-blur-lg transition-colors duration-300 font-sans ${isDark
                    ? "text-[var(--color-black)] border-black/20"
                    : "text-[var(--color-white)]"
                    }`}
            >
                <div className="w-full xl:w-[70vw] mx-auto flex items-center justify-between px-6 sm:px-12 py-3">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src={isDark ? "/images/HARQUINDARK.png" : "/images/HARQUIN-1.png"}
                            width={140}
                            height={50}
                            alt="Harquin Logo"
                            className="cursor-pointer transition-all duration-300"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex gap-6 text-lg font-light">
                        {["Services", "About Us", "Contact"].map((item, index) => (
                            <li key={index}>
                                <a
                                    href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                                    className={`transition ${isDark
                                        ? "hover:text-[var(--color-dark)]"
                                        : "hover:text-[var(--color-yellow)]"
                                        } text-[var(--color-grey)]`}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="md:hidden text-2xl"
                    >
                        <FiMenu className={isDark ? "text-[var(--color-black)]" : ""} />
                    </button>
                </div>
            </nav>

            {/* Mobile Full Screen Menu */}
            <div
                className={`fixed top-0 right-0 w-full h-full z-[999] bg-[var(--color-black)] text-[var(--color-white)] transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
                    {/* Logo inside overlay */}
                    <Image
                        src="/images/HARQUIN-1.png"
                        width={140}
                        height={50}
                        alt="Harquin Logo"
                    />


                    {/* Close Icon */}
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="text-3xl text-[var(--color-yellow)]"
                    >
                        <FiX />
                    </button>
                </div>

                {/* Menu Links */}
                <div className="flex flex-col items-start px-6 py-10 space-y-8 text-2xl font-light">
                    {["Services", "About Us", "Contact"].map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                            className="hover:text-[var(--color-yellow)] transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
