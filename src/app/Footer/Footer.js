import React from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/enroll", label: "Enroll" },
  { href: "/contact", label: "Contact Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
];

const Footer = () => {
  return (
    <footer className= " bg-gray-800 w-full text-white py-6 pl-4  ">

      <div className="container mx-auto px-4 ">

        <div className="flex justify-center sm:flex justify-between">

          <div className="mb-6 md:mb-0">
          
            <p>Little Rascals Daycare</p>
            <p>5240 W. 31st Street</p>
            <p>Cicero, Illinois</p>
            <p className="mt-2">
              <span className="font-bold">Phone:</span> (708) 652-6907
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold md:hidden lg:hidden ">Quick Links</h2>
            <ul className="sm:flex gap-4 md:hidden lg:hidden">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:underline transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
