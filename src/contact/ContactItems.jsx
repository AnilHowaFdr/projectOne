import React, { useState } from "react";
import InputBox from "./InputBox";
import button1 from ".././assets/button1.png";
import button3 from ".././assets/button3.png";

const ContactItems = () => {
  return (
    <div className="">
      <div className="px-2 dark:text-white  py-3">
        <h2 className="px-2 text-3xl text-black dark:text-white tracking-wide lg:text-4xl uppercase">
          Contact Us
        </h2>
      </div>
      <div className=" shadow-md p-8 dark:text-black">
        <div className="px-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          <InputBox title="Your name" placeholder="Abc" />
          <InputBox
            title="Email address"
            placeholder="Abc@def.com"
            type="email"
          />
          <InputBox title="Address" placeholder="Where are you from?" />
          <InputBox title="Message" placeholder="Hi! i’d like to ask about" />

          <button className="py-3 flex gap-3 items-center px-7 rounded-lg font-brand font-semibold cursor-pointer shadow-lg text-base uppercase w-fit dark:bg-gray-900">
            <img
              src={button1}
              alt="Light mode"
              className="block w-10 dark:hidden"
            />
            <img
              src={button3}
              alt="Dark mode"
              className="hidden w-10 dark:block"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactItems;
