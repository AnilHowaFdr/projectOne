import React from "react";

const ServiceItems = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <img src={data.img} alt="" />
      </div>
      <div className="pt-10">
        <h3 className="font-bold py-5 text-center">{data.name}</h3>
        <h4 className="text-center">{data.work}</h4>
      </div>
    </div>
  );
};

export default ServiceItems;
