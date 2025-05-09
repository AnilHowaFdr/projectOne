import React from "react";
import { TeamData } from "../..";
import ServiceItems from "./ServiceItems";

const ServiceBanner = () => {
  return (
    <div className="py-36">
      <h2 className="text-3xl font-semibold tracking-widest pb-3 border-b-4 w-fit">
        Team Members
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {TeamData.map((item, id) => (
          <ServiceItems key={id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ServiceBanner;
