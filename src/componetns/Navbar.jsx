import React, { useState } from "react";
import image from "../assets/image.png";
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
      <nav className="flex justify-around items-center mb-20 py-6">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-20 w-20" src={image} alt="logo"></img>
        </div>

        <div className="hidden sm:block justify-center items-center text-lg mr-2">
          <div className="flex gap-4">
            <a className="cursor-pointer" href="#Home" alt="">
              Home
            </a>
            <a className="cursor-pointer" href="#Technologies" alt="">
              Technologies
            </a>
            <a className="cursor-pointer" href="#Education" alt="">
              Education
            </a>
            <a className="cursor-pointer" href="#Projects" alt="">
              Projects
            </a>
            <a className="cursor-pointer" href="#Contacts" alt="">
              Contact
            </a>
          </div>
        </div>

        <div className="hidden sm:block relative w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>

        <div className="hidden sm:flex justify-center m-8 items-center gap-2 text-2xl">
          <a href="https://github.com/ashuthikole2004">
            <IoLogoGithub className="h-9 w-10" />
          </a>
          <a href="https://www.linkedin.com/in/ashwini-thikole-27a50b291">
            <IoLogoLinkedin className="h-9 w-10" />
          </a>
          <a href="https://www.instagram.com/__ashu_2004__/">
            <FaSquareInstagram className="h-9 w-10" />
          </a>
        </div>

        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="sm:hidden bg-gray-500 px-7 py-2 mb-10 rounded-3xl border-2 bg-opacity-0">
          <div className="flex flex-col space-y-4">
            <a href="#Home">Home</a>
            <a href="#Technologies">Technologies</a>
            <a href="#Education">Education</a>
            <a href="#Projects">Projects</a>
            <a href="#Contacts">Contact</a>

            <div className="flex justify-center gap-4 mt-4 text-2xl">
              <a href="https://github.com/ashuthikole2004">
                <IoLogoGithub className="h-9 w-10" />
              </a>
              <a href="https://www.linkedin.com/in/ashwini-thikole-27a50b291">
                <IoLogoLinkedin className="h-9 w-10" />
              </a>
              <a href="https://www.instagram.com/__ashu_2004__/">
                <FaSquareInstagram className="h-9 w-10" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
