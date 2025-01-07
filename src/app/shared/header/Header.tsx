// "use client";
// import React, { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import Link from "next/link";
// import HomeBanner from "./HomeBanner";
// import Image from 'next/image';

// interface NavigationLinks {
//   href: string;
//   label: string;
// }

// const navLinks: NavigationLinks[] = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "For Parents" },
//   // { href: "/programs", label: "Curriculum" },
//   { href: "/contact", label: "Contact Us" },
// ];

// const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <header className=" bg-gradient-to-br from-[#c8c4be] to-[#f4f0ea]  rounded-sm sm:flex sm:justify-between sm:align-center lg:flex lg:justify-center">
//       {/* Mobile Banner */}
//       <div className="md:hidden block">
//         <HomeBanner />
//       </div>

//       <div className="flex align-center">
//         {/* Logo (Mobile Only) */}
//         <div className="sm:hidden">
//           <Image 
//             src={'/assets/logo2.jpg'}
//             alt='Logo image'
//             width={100}
//             height={100}
//           />
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-0 bg-[#002868] rounded-sm overflow-hidden">
//           {navLinks.map((link, index) => (
//             <Link key={index} href={link.href}>
//               <span className={`text-white text-lg font-semibold cursor-pointer 
//               px-6 py-4 block  
//               transform transition-transform duration-300 ease-in-out 
//               hover:scale-105 
//               bg-[#D4761B] border-black`}>
//                 {link.label}
//               </span>
//             </Link>
//           ))}
//         </nav>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="text-white text-2xl md:hidden fixed top-2 left-5 z-50 transition-all duration-300 ease-in-out"
//           onClick={toggleMenu}
//           aria-label="Toggle Menu"
//         >
//           {isMenuOpen ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <div
//         className={`fixed inset-0 bg-[#4A6119] flex flex-col justify-center items-center z-40 transform transition-transform duration-500 ease-in-out ${
//           isMenuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {navLinks.map((link, index) => (
//           <div key={index} className="text-center py-4">
//             <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
//               <span className="text-2xl font-semibold text-white hover:text-[#FFD700] transition-all duration-300 ease-in-out hover:scale-105">
//                 {link.label}
//               </span>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </header>
//   );
// };

// export default Header;





'use client';

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from 'next/image';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "For Parents" },
  { href: "/contact", label: "Schedule Visit" },
  { href: "/enroll", label: "Childcare Application" }
];

const parentSubLinks = [
  { href: "/parents/what-to-bring", label: "What to Bring" },
  { href: "/parents/meals", label: "Meals/Nutrition" },
  { href: "/parents/our-staff", label: "Our Staff" },
  {href: "/parents/daily-schedule", label: "Daily Schedule"}
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4 lg:p-6">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div className="cursor-pointer flex items-center">
              <Image
                src="/assets/logo2.jpg"
                alt="Logo"
                width={160}
                height={160}
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12 relative">
          {navLinks.map((link, index) => (
            <div key={index} className="relative">
              {link.label === "For Parents" ? (
                <>
                  <button
                    onClick={toggleDropdown}
                    className="text-2xl font-semibold text-[#002868] hover:text-[#D4761B] transition-transform duration-300 hover:scale-110"
                  >
                    {link.label}
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 bg-white rounded-lg shadow-lg mt-2 w-60 z-50">
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
                  <span className="text-2xl font-semibold text-[#002868] hover:text-[#D4761B] transition-transform duration-300 hover:scale-110 cursor-pointer">
                    {link.label}
                  </span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-4xl text-[#002868] md:hidden"
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
