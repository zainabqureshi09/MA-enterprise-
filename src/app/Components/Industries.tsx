"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const industries = [
  {
    id: 1,
    title: "Construction",
    description: "Revolutionizing the construction industry with cutting-edge technology.",
    image: "/construction.jpeg",
    link: "/industries/construction",
  },
  {
    id: 2,
    title: "Agriculture",
    description: "Enhancing productivity with precision agriculture solutions.",
    image: "/agriculture.jpeg",
    link: "/industries/agriculture",
  },
  {
    id: 3,
    title: "Public Safety",
    description: "Providing aerial intelligence for emergency response and public safety.",
    image: "/safety.jpeg",
    link: "/industries/public-safety",
  },
  {
    id: 4,
    title: "Energy",
    description: "Improving efficiency in the energy sector with advanced inspection tools.",
    image: "/energy.jpeg",
    link: "/industries/energy",
  },
  {
    id: 5,
    title: "Infrastructure",
    description: "Enhancing infrastructure monitoring with real-time data analysis.",
    image: "/infrastructure.jpeg",
    link: "/industries/infrastructure",
  },
  {
    id: 6,
    title: "Media & Entertainment",
    description: "Empowering creators with high-quality aerial cinematography tools.",
    image: "/media.jpeg",
    link: "/industries/media",
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] flex items-center justify-center text-black text-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/industries-hero.jpeg')" }}
        ></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-bold">Industries We Serve</h1>
          <p className="mt-4 text-lg">Discover how our technology is transforming various industries worldwide.</p>
        </div>
      </motion.div>

      {/* Industries Grid */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="relative group overflow-hidden bg-white shadow-lg rounded-lg cursor-pointer"
            >
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-10 transition duration-500"></div>
              <img src={industry.image} alt={industry.title} className="w-full h-60 object-cover" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h2 className="text-2xl font-bold text-white group-hover:text-black transition">{industry.title}</h2>
                <p className="mt-2 text-white group-hover:text-black transition">{industry.description}</p>
                <Link href={industry.link}>
                  <span className="mt-3 inline-block text-sm font-semibold bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-300 transition">
                    Learn More →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
