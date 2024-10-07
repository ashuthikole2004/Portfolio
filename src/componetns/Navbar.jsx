import React, { useState } from "react";
import image from "../assets/image.png"; // Update with your logo path
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black shadow-md z-50 pl-32 pr-32">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <a href="#Home">
              <img className="h-12 w-12" src={image} alt="logo" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-4 text-white">
            <a className="hover:text-blue-400" href="#Home">
              Home
            </a>
            <a className="hover:text-blue-400" href="#Technologies">
              Technologies
            </a>
            <a className="hover:text-blue-400" href="#Projects">
              Projects
            </a>
            <a className="hover:text-blue-400" href="#Experience">
              Experience
            </a>
            <a className="hover:text-blue-400" href="#Education">
              Education
            </a>
            <a className="hover:text-blue-400" href="#Contacts">
              Contact
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="hidden sm:flex gap-2 text-white text-2xl">
            <a href="https://github.com/ashuthikole2004">
              <IoLogoGithub />
            </a>
            <a href="https://www.linkedin.com/in/ashwini-thikole-27a50b291">
              <IoLogoLinkedin />
            </a>
            <a href="https://www.instagram.com/__ashu_2004__/">
              <FaSquareInstagram />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-gray-900 bg-opacity-55 text-white p-5 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden z-40`}
      >
        <div className="flex justify-between mb-4">
          <span className="text-2xl font-bold">Menu</span>
          <button onClick={toggleMenu} className="text-white text-2xl">
            &times;
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <a
            onClick={toggleMenu}
            href="#Home"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Home
          </a>
          <a
            onClick={toggleMenu}
            href="#Technologies"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Technologies
          </a>
          <a
            onClick={toggleMenu}
            href="#Projects"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Projects
          </a>
          <a
            onClick={toggleMenu}
            href="#Experience"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Experience
          </a>
          <a
            onClick={toggleMenu}
            href="#Education"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Education
          </a>
          <a
            onClick={toggleMenu}
            href="#Contacts"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Contact
          </a>

          <div className="flex justify-center gap-4 mt-4 text-2xl">
            <a href="https://github.com/ashuthikole2004">
              <IoLogoGithub />
            </a>
            <a href="https://www.linkedin.com/in/ashwini-thikole-27a50b291">
              <IoLogoLinkedin />
            </a>
            <a href="https://www.instagram.com/__ashu_2004__/">
              <FaSquareInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
