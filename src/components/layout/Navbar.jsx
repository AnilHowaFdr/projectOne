import React, { useState } from "react";
import { Link } from "react-router-dom";
import Darkmode from "../home/Darkmode";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-amber-100 py-5 dark:bg-gray-950">
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between text-blue-500  ">
          <div className="text-2xl font-bold">Flower</div>
          <ul className="md:flex items-center gap-4 text-lg font-medium hidden">
            <li className="hover:border-b-2 border-b-white">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:border-b-2 border-b-white">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:border-b-2 border-b-white">
              <Link to="/service">Service</Link>
            </li>
            <li className="hover:border-b-2 border-b-white">
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Darkmode />
            </li>
          </ul>
          <div className="flex gap-3 md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary hover:text-fifth focus:outline-hidden"
            >
              {showMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <div className="block dark:bg-white text-secondary dark:rounded-xl">
              <Darkmode />
            </div>
          </div>
        </div>
        {showMenu && (
          <div className="block md:hidden text-blue-500">
            <ul className="px-2 pt-2 pb-3 space-y-2 sm:px-3 flex flex-col justify-center items-center bg-third">
              <li>
                <Link
                  onClick={toggleMenu}
                  to="/"
                  className="block px-3 py-2 duration-300 text-lg font-bold cursor-pointer hover:border-b-white  hover:border-b-4 "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleMenu}
                  to="/about"
                  className="block px-3 py-2 duration-300 text-lg font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleMenu}
                  to="/service"
                  className="block px-3 py-2 duration-300 text-lg font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
                >
                  Service
                </Link>
              </li>

              <li>
                <Link
                  onClick={toggleMenu}
                  to="/contact"
                  className="block duration-300 text-lg font-bold px-2 cursor-pointer hover:border-b-white md:hover:border-b-primary hover:border-b-4 md:hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
