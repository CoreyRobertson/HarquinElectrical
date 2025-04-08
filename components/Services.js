const services = [
    {
        number: "01",
        title: "24/7 Emergency Services",
        description:
            "We provide fast and reliable emergency electrical services anytime, anywhere in Melbourne.",
        link: "#",
    },
    {
        number: "02",
        title: "General Electrical Work",
        description:
            "From power installations to complete rewiring, our licensed electricians ensure safe and efficient solutions.",
        link: "#",
    },
    {
        number: "03",
        title: "Lighting & Smart Solutions",
        description:
            "Upgrade your space with modern lighting, smart home integrations, and energy-efficient solutions.",
        link: "#",
    },
    {
        number: "04",
        title: "Commercial Electrical Solutions",
        description:
            "Powering businesses with advanced electrical solutions, ensuring compliance, safety, and efficiency.",
        link: "#",
    },
];

const Services = () => {
    return (
        <section id="services" className="w-full py-16 bg-[var(--color-white)] text-[var(--color-black)] font-sans">
            <div className="w-full xl:w-[70vw] mx-auto px-6 sm:px-12">

                {/* Services List */}
                <div className="flex flex-col gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="border-b border-[var(--color-grey)] pb-6 last:border-none">
                            <div className="grid grid-cols-[auto_1fr] md:grid-cols-[80px_1fr] gap-6 items-start">

                                {/* Number */}
                                <span className="text-2xl font-bold text-[var(--color-yellow)] font-mono">
                                    {service.number}.
                                </span>

                                {/* Title + Description */}
                                <div className="flex flex-col">
                                    <h3 className="text-xl sm:text-2xl font-semibold font-sans">
                                        {service.title}
                                    </h3>
                                    <p className="mt-2 text-[var(--color-dark)] leading-relaxed font-sans">
                                        {service.description}
                                    </p>
                                    <a
                                        href={service.link}
                                        className="mt-3 text-[var(--color-grey)] font-semibold tracking-wide hover:text-[var(--color-yellow)] duration-200 font-mono"
                                    >
                                        LEARN MORE &rsaquo;
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
