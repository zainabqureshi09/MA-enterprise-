"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { FaPlay } from "react-icons/fa";

const caseStudies = [
  {
    id: 1,
    title: "Smart Construction Monitoring",
    description: "How drones revolutionized real-time construction site monitoring.",
    thumbnail: "/construction-thumbnail.jpg",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    id: 2,
    title: "Precision Agriculture Insights",
    description: "Optimizing crop yields with AI-driven drone technology.",
    thumbnail: "/agriculture-thumbnail.jpg",
    videoId: "tgbNymZ7vqY",
  },
  {
    id: 3,
    title: "Infrastructure Inspection at Scale",
    description: "How AI-powered aerial inspections are transforming infrastructure projects.",
    thumbnail: "/infrastructure-thumbnail.jpg",
    videoId: "3JZ_D3ELwOQ",
  },
  {
    id: 4,
    title: "Disaster Response & Public Safety",
    description: "Enhancing emergency response with drone-assisted situational awareness.",
    thumbnail: "/safety-thumbnail.jpg",
    videoId: "L_jWHffIx5E",
  },
];

export default function CaseStudiesPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-[50vh] flex items-center justify-center text-white bg-black text-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/textile.webp')" }}
        ></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-bold">Case Study</h1>
          <p className="mt-4 text-lg">See how our technology is driving real-world impact across industries.</p>
        </div>
      </motion.div>

      {/* Video Grid Section */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="relative group overflow-hidden bg-white shadow-lg rounded-lg cursor-pointer"
              onClick={() => setSelectedVideo(study.videoId)}
            >
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-10 transition duration-500"></div>
              <img src={study.thumbnail} alt={study.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h2 className="text-xl font-bold text-white group-hover:text-black transition">{study.title}</h2>
                <p className="mt-2 text-white group-hover:text-black transition">{study.description}</p>
              </div>
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="bg-white p-4 rounded-full shadow-lg">
                  <FaPlay className="text-black text-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onClose={() => setSelectedVideo(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <Dialog.Panel className="relative w-full max-w-3xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-lg"
            >
              ✕
            </button>
            {selectedVideo && (
              <iframe
                className="w-full h-72 md:h-96"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Case Study Video"
                allowFullScreen
              ></iframe>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
