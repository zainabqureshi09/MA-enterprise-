"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "DJI Matrice 350 RTK",
    image: "/matrice-350.jpg",
    description: "Advanced industrial drone for aerial operations.",
  },
  {
    name: "DJI Mavic 3 Enterprise",
    image: "/mavic-3.jpg",
    description: "Compact and powerful drone for enterprise use.",
  },
  {
    name: "DJI Zenmuse H20T",
    image: "/zenmuse-h20t.jpg",
    description: "Multi-sensor camera for precise aerial imaging.",
  },
];

export default function Products() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Products</h2>
        <p className="mt-4 text-gray-600">Discover cutting-edge drone technology</p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 shadow-md rounded-lg"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
