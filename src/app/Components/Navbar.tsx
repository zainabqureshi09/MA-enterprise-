"use client";

import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Merienda } from "next/font/google";

const merienda = Merienda({ subsets: ["latin"], weight: "700" });

const navLinks = [
  {
    label: "Industries",
    subLinks: [
      { label: "Agriculture", href: "/industries/agriculture" },
      { label: "Public Safety", href: "/industries/public-safety" },
      { label: "Energy", href: "/industries/energy" },
    ],
  },
  {
    label: "Products",
    subLinks: [
      { label: "Mavic Series", href: "/products/mavic" },
      { label: "Matrice Series", href: "/products/matrice" },
      { label: "Zenmuse Cameras", href: "/products/zenmuse" },
    ],
  },
  { label: "Insights", href: "/insights" },
  { label: "Events", href: "/events" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Data Security", href: "/data-security" },
  { label: "Support", href: "/support" },
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900">
        <Image src="/logo.png" 
        alt=""
        className="pe-1"
        width={60}
        height={60} 
        quality={100}
        />
        </Link>
        <span className={`text-2xl font-bold text-black ${merienda.className}`}>ENTERPRISE</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((navItem, index) =>
            navItem.subLinks ? (
              <Dropdown key={index} label={navItem.label} links={navItem.subLinks} />
            ) : (
              <Link key={index} href={navItem.href!} className="text-gray-700 hover:text-gray-900">
                {navItem.label}
              </Link>
            )
          )}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link href="/contact" className="border px-4 py-2 rounded-md hover:bg-gray-100">
            Contact Us
          </Link>
          <Link href="/store" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Store
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Dropdown({ label, links }: { label: string; links: { label: string; href: string }[] }) {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
        <span>{label}</span>
        <ChevronDownIcon className="w-4 h-4" />
      </Menu.Button>

      <Transition
        as={motion.div}
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
          {links.map((link, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <Link
                  href={link.href}
                  className={`block px-4 py-2 text-sm ${
                    active ? "bg-gray-100" : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
