import React from "react";
import { ProductsData } from "../..";
import ProductItems from "./ProductItems";

const Products = () => {
  return (
    <div className="pt-32 pb-20">
      <h2 className="text-3xl font-semibold tracking-widest pb-3 border-b-4 w-fit">
        Products
      </h2>
      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {ProductsData.map((item, id) => (
          <ProductItems key={id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
