"use client";

import { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" }); // Reset form after submission
    };

    return (
        <section id="contact" className="w-full py-16 bg-[var(--color-black)] text-[var(--color-white)] font-sans">
            <div className="w-full xl:w-[70vw] mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Side - Call to Action */}
                <div ref={ref}>
                    <h2 className="text-3xl sm:text-5xl font-thin tracking-wide relative inline-block">
                        Reach Out.
                        <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: inView ? "80px" : 0 }}
                            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                            className="block h-1 bg-[var(--color-yellow)] mt-2"
                        />
                    </h2>
                    <p className="mt-4 text-[var(--color-grey)] leading-relaxed font-sans">
                        Need expert electrical solutions? Whether it's an emergency or a scheduled service, we’ve got you covered.
                        Contact us today for a <strong>free consultation</strong>.
                    </p>

                    {/* Call Now Button */}
                    <div className="mt-6 flex gap-4">
                        <a
                            href="tel:+1234567890"
                            className="flex items-center gap-2 px-5 py-3 border border-[var(--color-yellow)] text-[var(--color-yellow)] rounded-lg font-mono hover:bg-[var(--color-yellow)] hover:text-[var(--color-black)] transition"
                        >
                            <FiPhone />
                            Call Now
                        </a>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="bg-[var(--color-white)] text-[var(--color-black)] p-6 sm:p-8 rounded-lg shadow-lg">
                    {submitted ? (
                        <p className="text-xl font-thin text-center text-[var(--color-dark)]">
                            ✅ Thank you! We will get back to you soon.
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-[var(--color-grey)] rounded-lg bg-[var(--color-white)] text-[var(--color-black)] focus:border-[var(--color-yellow)] outline-none"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-[var(--color-grey)] rounded-lg bg-[var(--color-white)] text-[var(--color-black)] focus:border-[var(--color-yellow)] outline-none"
                            />
                            <textarea
                                name="message"
                                placeholder="How can we help?"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-[var(--color-grey)] rounded-lg bg-[var(--color-white)] text-[var(--color-black)] focus:border-[var(--color-yellow)] outline-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 text-lg font-semibold bg-[var(--color-yellow)] text-[var(--color-black)] rounded-lg shadow-md transition hover:bg-[var(--color-dark)] hover:text-[var(--color-white)] font-mono"
                            >
                                Request a Quote
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
