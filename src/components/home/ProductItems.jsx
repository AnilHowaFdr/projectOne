import React from "react";

const ProductItems = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <img src={data.img} alt="" />
      </div>
      <div>
        <h3>{data.title}</h3>
        <h2>{data.price}</h2>
      </div>
    </div>
  );
};

export default ProductItems;
