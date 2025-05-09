import React from "react";
import ServiceBanner from "./ServiceBanner";

const ServiceComponent = () => {
  return (
    <section className="dark:bg-gray-950 dark:text-white text-2xl">
      <div className="container mx-auto px-4">
        <ServiceBanner />
      </div>
    </section>
  );
};

export default ServiceComponent;
