import React from "react";
import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.jpg";
import product3 from "../../assets/product3.jpg";
import product4 from "../../assets/product4.jpg";
const Footer = () => {
  return (
    <section className="text-blue dark:bg-gray-950 dark:text-white py-10 border-t">
      <div className="container mx-auto px-4 font-semibold flex items-center justify-between">
        <div>Footer</div>
        <ul className="flex flex-col gap-3 text-xl font-medium uppercase">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
        <ul className="grid grid-cols-2 gap-2">
          <li className="w-[150px] bg-amber-100 p-2">
            <img src={product1} alt="" />
          </li>
          <li className="w-[150px] bg-amber-100 p-2">
            <img src={product2} alt="" />
          </li>
          <li className="w-[150px] bg-amber-100 p-2">
            <img src={product3} alt="" />
          </li>
          <li className="w-[150px] bg-amber-100 p-2">
            <img src={product4} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
