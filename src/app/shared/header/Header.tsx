// 'use client';

// import React, { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import Link from "next/link";
// import Image from "next/image";

// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "Parents" },
//   { href: "/contact", label: "Visit" },
//   { href: "/enroll", label: "Application" },
// ];

// const parentSubLinks = [
//   { href: "/parents/what-to-bring", label: "What to Bring" },
//   { href: "/parents/meals", label: "Meals/Nutrition" },
//   { href: "/parents/our-staff", label: "Our Staff" },
//   { href: "/parents/daily-schedule", label: "Daily Schedule" },
// ];

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//   return (
//     <header className="bg-black shadow-lg w-full top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center p-4 lg:p-6">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-4">
//           <Link href="/">
//             <div className="cursor-pointer flex flex-col items-center  ">
//               <Image
//                 src="/assets/logo.png"
//                 alt="Logo"
//                 width={150}
//                 height={150}
//               />
//               <h1 className="sm:hidden md:flex lg:flex text-white font-bold text-center text-3xl">
//                 Little Rascals <br /> Daycare
//               </h1>
//             </div>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-12 relative">
//           {navLinks.map((link, index) => (
//             <div key={index} className="relative">
//               {link.label === "Parents" ? (
//                 <>
//                   <button
//                     onClick={toggleDropdown}
//                     className="text-4xl font-bold text-white hover:text-[#FFD700] transition duration-300"
//                     style={{ fontFamily: "Poppins, sans-serif" }}
//                   >
//                     {link.label}
//                   </button>
//                   {isDropdownOpen && (
//                     <div className="absolute top-full left-0 bg-white rounded-lg shadow-xl mt-2 w-64 z-50">
//                       {parentSubLinks.map((sublink, subIndex) => (
//                         <Link key={subIndex} href={sublink.href}>
//                           <div
//                             className="px-6 py-4 hover:bg-gray-100 text-4xl cursor-pointer"
//                             style={{ fontFamily: "Poppins, sans-serif" }}
//                           >
//                             {sublink.label}
//                           </div>
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <Link href={link.href}>
//                   <span
//                     className="text-4xl font-bold text-white hover:text-[#FFD700] transition duration-300"
//                     style={{ fontFamily: "Poppins, sans-serif" }}
//                   >
//                     {link.label}
//                   </span>
//                 </Link>
//               )}
//             </div>
//           ))}
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="text-6xl text-white md:hidden"
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
//           <div key={index} className="py-8">
//             <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
//               <span
//                 className="text-6xl font-bold text-white hover:text-[#FFD700] transition-all duration-300"
//                 style={{ fontFamily: "Poppins, sans-serif" }}
//               >
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

  const handleNavigateToWhatToBring = () => {
    router.push("/parents/what-to-bring");
    setIsMenuOpen(false); // Close the menu after navigation
  };

  return (
    <header className="bg-black shadow-lg w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4 lg:p-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div className="cursor-pointer flex flex-col items-center">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={150}
                height={150}
              />
              <h1 className="hidden md:flex text-white font-bold text-center text-3xl">
                Little Rascals <br /> Daycare
              </h1>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12">
          {navLinks.map((link, index) => (
            <div key={index} className="relative">
              {link.label === "Parents" ? (
                <>
                  <button
                    onClick={toggleDropdown}
                    className="text-4xl font-bold text-white hover:text-[#FFD700] transition duration-300"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {link.label}
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 bg-white rounded-lg shadow-xl mt-2 w-64 z-50">
                      {parentSubLinks.map((sublink, subIndex) => (
                        <Link key={subIndex} href={sublink.href}>
                          <div
                            className="px-6 py-4 hover:bg-gray-100 text-xl cursor-pointer"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            {sublink.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={link.href}>
                  <span
                    className="text-4xl font-bold text-white hover:text-[#FFD700] transition duration-300"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {link.label}
                  </span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-6xl text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#4A6119] flex flex-col justify-center items-center z-40">
          {navLinks.map((link, index) => (
            <div key={index} className="py-8">
              {link.label === "Parents" ? (
                <>
                  <button
                    onClick={toggleDropdown}
                    className="text-5xl font-bold text-white hover:text-[#FFD700] transition-all duration-300"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {link.label}
                  </button>
                  {isDropdownOpen && (
                    <div className="mt-6 bg-white rounded-lg shadow-xl w-72">
                      {parentSubLinks.map((sublink, subIndex) => (
                        <Link
                          key={subIndex}
                          href={sublink.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsDropdownOpen(false);
                          }}
                        >
                          <div
                            className="px-6 py-4 text-2xl text-black hover:bg-gray-200 cursor-pointer"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
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
                  <span
                    className="text-6xl font-bold text-white hover:text-[#FFD700] transition-all duration-300"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
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
