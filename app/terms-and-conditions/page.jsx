// pages/terms-and-conditions.js or /app/terms-and-conditions/page.jsx
import React from "react";

const TermsAndConditions = () => {
    return (
        <section className="min-h-screen px-6 sm:px-12 py-20 bg-[var(--color-white)] text-[var(--color-black)] font-sans">
            <div className="max-w-4xl mx-auto text-[16px] leading-relaxed text-[var(--color-black)] space-y-6">
                <h1 className="text-4xl sm:text-5xl font-light text-[var(--color-black)] mb-6">Terms & Conditions</h1>
                <p className="text-sm text-[var(--color-grey)]">Last updated: May 6, 2025</p>

                <p className="text-sm">These Terms and Conditions apply to the use of the Harquin Electrical website and any services provided by us. By accessing or using our services, you agree to be bound by these terms. If you do not agree with them, you must not use our services.</p>

                <h2 className="text-2xl font-medium text-[var(--color-black)] mt-6">1. Services Provided</h2>
                <p className="text-sm">Harquin Electrical provides residential and commercial electrical services throughout Victoria, Australia. All services are subject to availability and may be changed or withdrawn at any time without notice.</p>

                <h2 className="text-2xl font-medium text-[var(--color-black)] mt-6">2. Booking and Quotes</h2>
                <p className="text-sm">Bookings can be made online, via phone or email. All quotes provided are estimates based on the information given and are subject to change after a site inspection or upon further information. We reserve the right to revise or withdraw a quote before accepting a booking.</p>

                <h2 className="text-2xl font-medium text-[var(--color-black)] mt-6">3. Cancellations</h2>
                <p className="text-sm">You may cancel or reschedule an appointment by contacting us at least 24 hours in advance. Cancellations with less than 24 hours' notice may incur a call-out fee at our discretion.</p>

                <h2 className="text-2xl font-medium text-[var(--color-black)] mt-6">4. Payment</h2>
                <p className="text-sm">Payment is due upon completion of the service unless otherwise agreed in writing. We accept bank transfers, card payments, and other methods by agreement. Invoices unpaid after 7 days may incur interest or recovery fees.</p>

                <h2 className="text-2xl font-medium text-[var(--color-black)] mt-6">5. Warranty & Australian Consumer Law</h2>
                <p className="text-sm">Our work is covered by a workmanship guarantee as required under Australian Consumer Law (ACL). You are entitled to a replacement or refund for a major failure and to compensation for any other reasonably foreseeable loss or damage. You are also entitled to have services remedied if they are not provided with due care and skill.</p>

                <h2 className="text-2xl font-medium text-[var(--color-black)] mt-6">6. Limitation of Liability</h2>
                <p className="text-sm">To the extent permitted by law, Harquin Electrical is not liable for any indirect, incidental or consequential loss or damage arising out of the use of our services or website. This includes, but is not limited to, loss of profits, data, or business opportunities.</p>

                <h2 className="text-2xl font-medium text-[var(--color-black)] mt-6">7. Intellectual Property</h2>
                <p className="text-sm">All content on this website, including logos, images, and designs, is owned or licensed by Harquin Electrical. You may not reproduce, copy or use it without prior written consent.</p>

                <h2 className="text-2xl font-medium text-[var(--color-black)] mt-6">8. External Links</h2>
                <p className="text-sm">Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or privacy practices of any external sites.</p>

                <h2 className="text-2xl font-medium text-[var(--color-black)] mt-6">9. Privacy</h2>
                <p className="text-sm">Your use of our services is also governed by our Privacy Policy, which outlines how we collect, store, and use your personal information in accordance with the Privacy Act 1988 (Cth).</p>

                <h2 className="text-2xl font-medium text-[var(--color-black)] mt-6">10. Changes to These Terms</h2>
                <p className="text-sm">We reserve the right to modify these terms at any time. Updates will be posted on our website and apply from the date of publication.</p>

                <h2 className="text-2xl font-medium text-[var(--color-black)] mt-6">11. Contact Us</h2>
                <p className="text-sm">If you have any questions about these Terms and Conditions, please contact us:</p>
                <ul className="list-none space-y-2">
                    <li className="text-sm"><strong>Email:</strong> harquinelectrical@gmail.com</li>
                    <li className="text-sm"><strong>Phone:</strong> 0458 003 175</li>
                    <li className="text-sm"><strong>Mail:</strong> 16 Sierra Blvd, Cranbourne North VIC 3977</li>
                </ul>
            </div>
        </section>
    );
};

export default TermsAndConditions;
