import React from "react";
import aboutImg from "../../assets/aboutImg.jpg";
const AboutBanner = () => {
  return (
    <div className="py-20 flex items-center gap-10">
      <h2 className="w-1/2">
        Flowers can involve the cultivation of flowers as well as their
        arrange-ment, and to the business of selling them. Much of the raw
        material supplied for the floristry trade comes from the cut flowers
        industry FlowerS shops are the main flower-only outlets, but
        supermarkets, garden supply stores also sell flowers.
      </h2>
      <div className="w-1/2">
        <img src={aboutImg} alt="" />
      </div>
    </div>
  );
};

export default AboutBanner;
