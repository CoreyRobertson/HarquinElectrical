"use client";

import { useState } from "react";
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

    return (
        <section id="carousel" className="w-screen overflow-hidden relative">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={10} // Adjust spacing for better layout
                slidesPerView={1.5} // Default: Show a little of the next image
                breakpoints={{
                    480: { slidesPerView: 2, spaceBetween: 15 }, // Mobile: Show 2 images
                    768: { slidesPerView: 2.5, spaceBetween: 20 }, // Tablets: Show 2.5 images
                    1024: { slidesPerView: 3, spaceBetween: 25 }, // Desktop: Show 3 images
                }}
                loop={true}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                speed={700}
                className="w-full"
                style={{ width: "100vw", overflow: "hidden" }} // Ensure no overflow
                onSwiper={(swiper) => {
                    if (!swiper) return; // Prevent undefined error
                    swiper.el.addEventListener("mouseenter", () => swiper.autoplay.stop());
                    swiper.el.addEventListener("mouseleave", () => swiper.autoplay.start());
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
                                className={`transition-all duration-300 ${hoveredIndex === index ? "grayscale-0" : "grayscale"}`}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default ImageCarousel;
