"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

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
    <header className="bg-[#4B0082] p-4">
      {/* Desktop & Mobile Header */}
      <div className="flex justify-between md:justify-start items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assets/little-rascals-logo.jpg" // Path to your logo
            alt="Little Rascals Daycare Logo"
            width={150} // Adjust width
            height={150} // Adjust height
  
          />
    
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:ml-auto md:gap-6 p-2">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <span className="text-white text-lg font-semibold hover:underline transition duration-200 ease-in">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav
          className={`flex flex-col items-center gap-4 mt-4 text-white p-4 md:hidden
            transition-opacity duration-300 ease-in opacity-0 animate-fade-in`}
          onClick={() => setIsMenuOpen(false)}
        >
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <span
                className="text-xl font-semibold hover:underline transition duration-200 ease-in"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
