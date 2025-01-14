"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Parents" },
  { href: "/contact", label: "Visit" },
  { href: "/enroll", label: "Application" },
];

const parentSubLinks = [
  { href: "/parents/what-to-bring", label: "What to Bring" },
  { href: "/parents/meals", label: "Meals/Nutrition" },
  { href: "/parents/our-staff", label: "Our Staff" },
  { href: "/parents/daily-schedule", label: "Daily Schedule" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="bg-[#735BDF] shadow-lg w-full top-0 z-50 py-3 lg:py-4">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <div className="cursor-pointer flex flex-col items-center">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="object-contain"
              />
              {/* Title visible only on large screens */}
              <h1 className="hidden md:flex text-gray-200 font-bold text-center text-2xl">
                <strong>Little Rascals <br /> Daycare</strong>
              </h1>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <div key={index} className="relative">
              {link.label === "Parents" ? (
                <>
                  <button
                    onClick={toggleDropdown}
                    className="text-xl lg:text-2xl font-bold text-gray-200 hover:text-[#49b9f5] transition-all duration-300 hover:scale-105"
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
                  {/* these are the rest of the links */}
                  <span className="text-xl lg:text-2xl font-bold text-gray-200 hover:text-[#49b9f5] transition-all duration-300 hover:scale-105">
                    {link.label}
                  </span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-4xl md:hidden text-black"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#735BDF] flex flex-col justify-center items-center z-40">
          {navLinks.map((link, index) => (
            <div key={index} className="py-6">
              {link.label === "Parents" ? (
                <>
                  <button
                    onClick={toggleDropdown}
                    className="text-3xl font-bold text-white hover:text-[#FFD700] transition-all duration-300"
                  >
                    {link.label}
                  </button>
                  {isDropdownOpen && (
                    <div className="mt-4 bg-white rounded-lg shadow-xl w-72">
                      {parentSubLinks.map((sublink, subIndex) => (
                        <Link
                          key={subIndex}
                          href={sublink.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsDropdownOpen(false);
                          }}
                        >
                          <div className="px-6 py-4 text-lg text-black hover:bg-gray-200 cursor-pointer">
                            {sublink.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-3xl font-bold text-white hover:text-[#FFD700] transition-all duration-300">
                    {link.label}
                  </span>
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
