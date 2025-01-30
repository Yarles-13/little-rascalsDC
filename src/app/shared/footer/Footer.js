import React from "react";


const navLinks = [
  { href: "/", label: "Home" },
  { href: "/enroll", label: "Enroll" },
  { href: "/contact", label: "Visit" },
  { href: "/parents/daily-schedule", label: "Daycare Schedule" },
  { href: "/parents/meals", label: "Meals" },
  { href: "/parents/what-to-bring", label: "What to bring" },
  
];

const Footer = () => {
  return (
    <footer className="bg-[#735BDF] text-gray-200 py-20" >
      <div className="container mx-auto px-6 lg:px-16">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start gap-12">
          
          {/* Contact Info */}
          <div className="text-center lg:text-left lg:w-1/3">
            <h2 className="text-3xl font-bold mb-4">Little Rascals Daycare</h2>
            <p className="text-2xl">5240 W. 31st Street</p>
            <p className="text-2xl">Cicero, Illinois</p>
            <p className="mt-2 text-2xl">
              <span className="font-bold text-xl">Phone:</span> (708) 652-6907
            </p>
          
          </div>

          {/* Quick Links (as Chips) */}
          <div className="text-center lg:w-1/3">
            <h2 className="text-3xl text-center lg:pr-20 font-bold mb-6 ">Quick Links</h2>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-[#B3A3D8] text-white text-2xl px-4 py-2 rounded-full shadow-md hover:bg-[#DFBE31] hover:text-white transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Operating Hours */}
          <div className="text-center lg:text-left lg:w-1/3">
            <h2 className="text-3xl font-bold mb-4">Operating Hours</h2>
            <p className="text-2xl">Monday - Friday: 6:30 AM - 4:30 PM</p>
            <p className="text-2xl">Saturday - Sunday: Closed</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-white/20 pt-6 flex flex-col items-center lg:flex-row lg:justify-between gap-4">
          {/* Social Media Links */}
     

          {/* Copyright */}
          <p className="text-l text-white/80 text-center lg:text-right">
            © {new Date().getFullYear()} Little Rascals Daycare. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;