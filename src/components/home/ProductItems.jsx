import React from "react";

const ProductItems = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <img src={data.img} alt="" />
      </div>
      <div className="pt-4">
        <h3 className="text-center">{data.title}</h3>
        <h2 className="text-center">{data.price}</h2>
      </div>
    </div>
  );
};

export default ProductItems;
