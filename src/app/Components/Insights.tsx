"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const insights = [
  {
    title: "How Drones are Revolutionizing Agriculture",
    date: "January 20, 2025",
    link: "/insights/agriculture",
  },
  {
    title: "Case Study: DJI FlyCart 30 in Logistics",
    date: "February 10, 2025",
    link: "/insights/logistics",
  },
  {
    title: "Future of AI-Powered Drones",
    date: "March 5, 2025",
    link: "/insights/ai-drones",
  },
];

export default function Insights() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Latest Insights</h2>
        <p className="mt-4 text-gray-600">Stay updated with the latest trends</p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-100 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold">{insight.title}</h3>
              <p className="text-gray-600 mt-2">{insight.date}</p>
              <Link href={insight.link} className="text-blue-600 mt-4 block">
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
