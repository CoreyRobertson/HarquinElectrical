import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="w-full bg-[var(--color-black)] text-[var(--color-white)] font-sans py-12">
            <div className="w-full xl:w-[70vw] mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo & Business Info */}
                <div className="flex flex-col items-start">
                    <Image
                        src="/images/HARQUIN-1.png"
                        width={160}
                        height={50}
                        alt="Harquin Electrical Logo"
                        className="mb-4"
                    />
                    <p className="text-[var(--color-grey)] text-sm leading-relaxed">
                        Reliable, professional, and available 24/7.
                        Harquin Electrical is committed to powering your home & business.
                        <br />
                        <b> ABN: 24 485 427 317 </b>
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col">
                    <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-[var(--color-grey)]">
                        {["Home", "Services", "About Us", "Contact"].map((item, index) => (
                            <li key={index}>
                                <Link href={`#${item.toLowerCase().replace(/\s/g, "")}`} className="hover:text-[var(--color-yellow)] transition">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* legal*/}
                <div className="flex flex-col">
                    <h4 className="text-lg font-semibold mb-3">Legal</h4>
                    <ul className="space-y-2 text-[var(--color-grey)]">

                        <li>
                            <Link href='/terms-and-conditions' className="hover:text-[var(--color-yellow)] transition">
                                Terms and Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href='/privacy-policy' className="hover:text-[var(--color-yellow)] transition">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info & Socials */}
                <div className="flex flex-col">
                    <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
                    <div className="space-y-2">
                        <p className="flex items-center gap-2 text-[var(--color-grey)]">
                            <FiPhone className="text-[var(--color-yellow)]" />
                            <a href="tel:+61458003175" className="hover:text-[var(--color-yellow)] transition">
                                0458 003 175
                            </a>
                        </p>
                        <p className="flex items-center gap-2 text-[var(--color-grey)]">
                            <FiMail className="text-[var(--color-yellow)]" />
                            <a href="mailto:harquinelectrical@gmail.com" className="hover:text-[var(--color-yellow)] transition">
                                harquinelectrical@gmail.com
                            </a>
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-4 mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-grey)] hover:text-[var(--color-yellow)] transition text-2xl">
                            <FiFacebook />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-grey)] hover:text-[var(--color-yellow)] transition text-2xl">
                            <FiInstagram />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Section */}
            <div className="mt-8 border-t border-[var(--color-grey)] text-center text-[var(--color-grey)] text-sm py-4">
                © {new Date().getFullYear()} Harquin Electrical. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
