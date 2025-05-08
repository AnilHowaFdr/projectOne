import React from "react";
import { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
const Darkmode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className="relative text-secondary">
      <MdSunny
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`absolute right-0 z-10 text-2xl cursor-pointer transition-all duration-300 ${
          theme === "dark" && "opacity-0"
        }`}
      />
      <IoMoonOutline
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`text-2xl cursor-pointer transition-all duration-300 ${
          theme === "light" && "opacity-0"
        }`}
      />
    </div>
  );
};

export default Darkmode;
