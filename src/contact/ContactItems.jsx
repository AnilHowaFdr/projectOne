import React from "react";
import { FaPlay } from "react-icons/fa";
import InputBox from "./InputBox";

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
          <button className="py-3 flex gap-3 items-center px-7 bg-border hover:bg-red-500 hover:text-white rounded-lg font-brand font-semibold cursor-pointer shadow-md text-base uppercase w-fit text-black">
            <FaPlay />
            <span>Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactItems;
