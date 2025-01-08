import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Social media icons

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/enroll", label: "Enroll" },
  { href: "/contact", label: "Contact Us" },
  // { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  
];

const Footer = () => {
  return (
    <footer className="bg-[#3D1C56] text-white py-10">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start gap-12">
          
          {/* Contact Info */}
          <div className="text-center lg:text-left lg:w-1/3">
            <h2 className="text-lg font-bold mb-4">Little Rascals Daycare</h2>
            <p>5240 W. 31st Street</p>
            <p>Cicero, Illinois</p>
            <p className="mt-2">
              <span className="font-bold">Phone:</span> (708) 652-6907
            </p>
            <p className="mt-2">
              <span className="font-bold">Email:</span> info@littlerascalsdaycare.com
            </p>
          </div>

          {/* Quick Links (as Chips) */}
          <div className="text-center lg:w-1/3">
            <h2 className="text-lg font-bold mb-6">Quick Links</h2>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-[#fed8b9] text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-400 hover:text-white transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Operating Hours */}
          <div className="text-center lg:text-left lg:w-1/3">
            <h2 className="text-lg font-bold mb-4">Operating Hours</h2>
            <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-white/20 pt-6 flex flex-col items-center lg:flex-row lg:justify-between gap-4">
          {/* Social Media Links */}
     

          {/* Copyright */}
          <p className="text-sm text-white/80 text-center lg:text-right">
            © {new Date().getFullYear()} Little Rascals Daycare. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
