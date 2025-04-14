"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { FaPlay } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "/construction.jpeg",
    title: "CONSTRUCTION",
    description: "Unparalleled Vision, Day or Night",
  },
  {
    id: 2,
    image: "/food.jpeg",
    title: "FOOD INDUSTRY",
    description: "Enhanced Imaging with High Precision",
  },
  {
    id: 3,
    image: "/textile.webp",
    title: "TEXTILE INDUSTRY",
    description: "Cutting-edge Technology for Professionals",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000); // Auto-slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          ></motion.div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">{slides[currentSlide].title}</h1>
        <p className="text-lg md:text-xl mt-4">{slides[currentSlide].description}</p>
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-6 py-3 text-lg bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
          >
            <FaPlay />
            Watch Video
          </button>
          <button className="px-6 py-3 text-lg border-2 border-white text-white font-semibold rounded-full shadow-md hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
      >
        ❯
      </button>

      {/* Video Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <Dialog.Panel className="relative w-full max-w-3xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-lg"
            >
              ✕
            </button>
            <iframe
              className="w-full h-72 md:h-96"
              src="https://youtu.be/mQnWCmVErnw?si=hEZfuDEaSOdkMN1Y"
              title="Product Video"
              allowFullScreen
            ></iframe>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
