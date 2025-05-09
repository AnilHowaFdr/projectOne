import React from "react";

const Banner = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center lg:flex-row gap-16 lg:gap-10">
      <div>
        <h3 className="font-medium text-2xl">Smart Products</h3>
        <h1 className="pt-7 pb-12 text-6xl font-semibold tracking-wider">
          Winter Offer 2025 Collection
        </h1>
        <button className="border text-lg font-medium uppercase py-4 px-9">
          Shop Now
        </button>
      </div>
      <div>
        <img src="/banner1.png" alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
