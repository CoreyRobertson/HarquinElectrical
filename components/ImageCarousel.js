"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
    "/images/commercial.jpg",
    "/images/residential.jpg",
    "/images/commercial.jpg",
    "/images/residential.jpg",
];

const ImageCarousel = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperEl = swiperRef.current?.el;

        if (!swiperEl) return;

        const handleMouseEnter = () => {
            if (swiperRef.current?.autoplay?.stop) swiperRef.current.autoplay.stop();
        };

        const handleMouseLeave = () => {
            if (swiperRef.current?.autoplay?.start) swiperRef.current.autoplay.start();
        };

        swiperEl.addEventListener("mouseenter", handleMouseEnter);
        swiperEl.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            swiperEl.removeEventListener("mouseenter", handleMouseEnter);
            swiperEl.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <section id="carousel" className="w-screen overflow-hidden relative">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={1.5}
                breakpoints={{
                    480: { slidesPerView: 2, spaceBetween: 15 },
                    768: { slidesPerView: 2.5, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 25 },
                }}
                loop={true}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                speed={700}
                className="w-full"
                style={{ width: "100vw", overflow: "hidden" }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <div
                            className="relative w-full h-[40vh]"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className={`transition-all duration-300 ${hoveredIndex === index ? "grayscale-0" : "grayscale"
                                    }`}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default ImageCarousel;
