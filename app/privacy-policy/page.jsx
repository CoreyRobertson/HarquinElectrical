// pages/privacy-policy.js or /app/privacy-policy/page.jsx (depending on router)
import React from "react";

const PrivacyPolicy = () => {
    return (
        <section className="min-h-screen px-6 sm:px-12 py-20 bg-[var(--color-white)] text-[var(--color-black)] font-sans">
            <div className="max-w-4xl mx-auto text-[16px] leading-relaxed text-[var(--color-black)] space-y-6">
                <h1 className="text-4xl sm:text-5xl font-light text-[var(--color-black)] mb-6">Privacy Policy</h1>
                <p className='text-sm text-[var(--color-grey)]'>Last updated: May 6, 2025</p>

                <p className='text-sm'>Harquin Electrical is committed to protecting your privacy and complying with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). This Privacy Policy explains how we collect, use, disclose, and manage your personal information.</p>

                <h2 className="text-2xl font-medium text-[var(--color-black)] mt-6">1. What personal information we collect</h2>
                <p className='text-sm'>We may collect the following types of personal information:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li className='text-sm'>Name</li>
                    <li className='text-sm'>Email address</li>
                    <li className='text-sm'>Phone number</li>
                    <li className='text-sm'>Any other information you provide via our contact form or other means</li>
                </ul>

                <h2 className="text-2xl font-medium text-[var(--color-black)] mt-6">2. How we collect personal information</h2>
                <p className='text-sm'>We collect personal information when you:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li className='text-sm'>Fill out our contact or quote request forms</li>
                    <li className='text-sm'>Contact us directly via phone, email, or social media</li>
                </ul>

                <h2 className="text-2xl font-medium text-[var(--color-black)] mt-6">3. Why we collect personal information</h2>
                <p className='text-sm'>We collect personal information to:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li className='text-sm'>Provide you with our electrical services</li>
                    <li className='text-sm'>Respond to your enquiries and requests</li>
                    <li className='text-sm'>Send quotes, invoices, or relevant communications</li>
                    <li className='text-sm'>Improve our website and service offerings</li>
                </ul>

                <h2 className="text-2xl font-medium text-[var(--color-black)] mt-6">4. Disclosure of personal information</h2>
                <p className='text-sm'>We will not sell or rent your personal information. We may disclose your information to third parties where required by law, or to trusted service providers who assist in operating our business (e.g., email services or website providers), under confidentiality agreements.</p>

                <h2 className="text-2xl font-medium text-[var(--color-black)] mt-6">5. Security</h2>
                <p className='text-sm'>We take reasonable steps to protect your personal information from misuse, loss, unauthorised access, or disclosure. However, we cannot guarantee the security of information transmitted over the internet.</p>

                <h2 className="text-2xl font-medium text-[var(--color-black)] mt-6">6. Access and correction</h2>
                <p className='text-sm'>You may request access to the personal information we hold about you, or ask us to correct it if inaccurate. To do so, please contact us using the details below.</p>

                <h2 className="text-2xl font-medium text-[var(--color-black)] mt-6">7. Cookies & analytics</h2>
                <p className='text-sm'>Our website may use cookies and analytics tools to enhance user experience. These tools do not typically identify individual users but help us understand general website traffic and usage trends.</p>

                <h2 className="text-2xl font-medium text-[var(--color-black)] mt-6">8. Changes to this Privacy Policy</h2>
                <p className='text-sm'>We may update this Privacy Policy from time to time. The updated version will be available on our website, with the "Last Updated" date shown at the top.</p>

                <h2 className="text-2xl font-medium text-[var(--color-black)] mt-6">9. Contact us</h2>
                <p className='text-sm'>If you have any questions about this policy or how we handle your personal information, please contact us:</p>
                <ul className="list-none space-y-2">
                    <li className='text-sm'><strong>Email:</strong> harquinelectrical@gmail.com</li>
                    <li className='text-sm'><strong>Phone:</strong> 0458 003 175</li>
                    <li className='text-sm'><strong>Mail:</strong> 16 Sierra Blvd, Cranbourne North VIC 3977</li>
                </ul>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
