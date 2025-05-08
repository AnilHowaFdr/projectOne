import React from "react";
import { Link } from "react-router-dom";
import Darkmode from "../home/Darkmode";

const Navbar = () => {
  return (
    <div className="bg-amber-100 py-5 dark:bg-gray-950">
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between text-blue-500">
          <div className="text-2xl font-bold">Navbar</div>
          <ul className="flex items-center gap-4 text-lg font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Darkmode />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
