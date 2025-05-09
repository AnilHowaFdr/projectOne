import React from "react";
import Banner from "./Banner";
import Products from "./Products";

const HomeComponent = () => {
  return (
    <section className="  dark:bg-gray-950 dark:text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <Banner />
        <Products />
      </div>
    </section>
  );
};

export default HomeComponent;
