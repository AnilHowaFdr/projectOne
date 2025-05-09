import React from "react";
import AboutBanner from "./AboutBanner";

const AboutComponent = () => {
  return (
    <section className="dark:bg-gray-950 dark:text-white text-2xl ">
      <div className="container mx-auto px-4 h-[700px] ">
        <AboutBanner />
      </div>
    </section>
  );
};

export default AboutComponent;
