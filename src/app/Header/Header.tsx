"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

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
    <header className="bg-black text-white p-4">

      <div className="flex  justify-between md:justify-start">

        <div className="text-lg font-bold  p-2 ml-3">Little Rascals Daycare</div>


        <button
          className="text-white text-2xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>


        <nav className="hidden md:flex md:ml-auto md:gap-6 p-2">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} >
              <span className="hover:underline">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>


      {isMenuOpen && (
        <nav
          className="flex flex-col gap-4 mt-4  p-4 rounded-md md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <span
                className="hover:underline"
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
