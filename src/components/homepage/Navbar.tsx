"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For dropdown

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-none">
          <img src="./mm.png" className="w-28 md:w-32 h-auto" alt="Logo" />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded border border-gray-300 hover:bg-gray-100"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:w-auto md:flex md:items-center md:gap-x-8 absolute md:relative top-16 md:top-0 left-0 bg-white md:bg-transparent shadow-md md:shadow-none lg:mt-0 mt-12 `}
        >
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 py-4 md:py-0">
            <li>
              <a href="contact-us" className="text-black hover:underline">
                Contact
              </a>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="text-black hover:underline flex items-center"
              >
                Services
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-8 left-0 bg-white shadow-md border rounded w-48">
                  <li>
                    <a
                      href="/marketing"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/branding"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Business Branding
                    </a>
                  </li>
                  <li>
                    <a
                      href="/website-design-and-it-services"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      IT Services
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="about-us" className="text-black hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/careers" className="text-black hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:underline">
                Blog <sup>Soon</sup>
              </a>
            </li>
          </ul>

          {/* Get In Touch */}
          <div className="mt-4 md:mt-0">
            <button
              type="button"
              className="py-2 px-4 text-sm font-medium rounded bg-orange-400 text-black hover:bg-orange-500 transition w-full md:w-auto"
            >
              <a href="/contact-us">Get In Touch</a>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
