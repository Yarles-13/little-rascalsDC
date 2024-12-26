"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import HomeBanner from "./HomeBanner"

interface NavigationLinks {
  href: string;
  label: string;
}

const navLinks: NavigationLinks[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/schedule", label: "Schedule Visit" },
  { href: "/contact", label: "Contact Us" },
  { href: "/gallery", label: "Gallery" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-[#83A730] p-5 sm:flex sm:justify-between sm:align-center lg:flex lg:justify-center">
      {/* Show Banner only on mobile */}
      <div className="md:hidden block">
        <HomeBanner />
      </div>

      <div className="flex justify-center">
        <nav className="hidden md:flex space-x-8 p-2 bg-[#4A6119] rounded-full">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <span className="text-white text-l font-semibold cursor-pointer rounded-full flex items-center hover:bg-[#5C751F] px-3 py-2 transform transition-transform duration-300 ease-in-out hover:scale-105">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <button
          className="text-white text-2xl md:hidden fixed top-2 left-5 z-50 transition-all duration-300 ease-in-out"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#4A6119] flex flex-col justify-center items-center z-40 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navLinks.map((link, index) => (
          <div key={index} className="text-center py-4">
            <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
              <span className="text-2xl font-semibold text-white hover:text-[#FFD700] transition-all duration-300 ease-in-out hover:scale-105">
                {link.label}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
