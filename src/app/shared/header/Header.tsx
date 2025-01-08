

'use client';

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from 'next/image';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Parents" },
  { href: "/contact", label: "Schedule Visit" },
  { href: "/enroll", label: "Childcare Application" }
];

const parentSubLinks = [
  { href: "/parents/what-to-bring", label: "What to Bring" },
  { href: "/parents/meals", label: "Meals/Nutrition" },
  { href: "/parents/our-staff", label: "Our Staff" },
  { href: "/parents/daily-schedule", label: "Daily Schedule" }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="bg-[#3D1C56] shadow-lg  w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4 lg:p-6">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div className="cursor-pointer flex flex-col items-center">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={100}
                height={100}
              />
              <h1 className="text-white text-2xl font-extrabold tracking-wide">
                Little Rascals Daycare
              </h1>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12 relative">
          {navLinks.map((link, index) => (
            <div key={index} className="relative">
              {link.label === "Parents" ? (
                <>
                  <button
                    onClick={toggleDropdown}
                    className="text-xl font-medium text-white hover:text-[#FFD700] transition-transform duration-300 hover:scale-105"
                  >
                    {link.label}
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 bg-white rounded-lg shadow-xl mt-2 w-64 z-50">
                      {parentSubLinks.map((sublink, subIndex) => (
                        <Link key={subIndex} href={sublink.href}>
                          <div className="px-6 py-4 hover:bg-gray-100 text-lg cursor-pointer">
                            {sublink.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={link.href}>
                  <span className="text-3xl font-medium text-white hover:text-[#FFD700] transition-transform duration-300 hover:scale-105 cursor-pointer">
                    {link.label}
                  </span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-4xl text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed inset-0 bg-[#4A6119] flex flex-col justify-center items-center z-40 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navLinks.map((link, index) => (
          <div key={index} className="py-8">
            <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
              <span className="text-4xl font-semibold text-white hover:text-[#FFD700] transition-all duration-300 hover:scale-110">
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
