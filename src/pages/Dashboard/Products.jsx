import React from "react";
import ProductTable from "./Table/ProductTable";



const Products = () => {
  return (
    <div className="w-11/12 mx-auto">
      <p className="text-2xl font-black my-6">Products</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gr gap-10">
        <div className="border text-center border-green-500 rounded-lg w-full py-10">
          <p>Total Sales</p>
          <p className="text-4xl mt-3 font-semibold">৳ 75.9k</p>
        </div>
        <div className="border text-center border-green-500 rounded-lg w-full py-10">
          <p>Last Month Sales</p>
          <p className="text-4xl mt-3 font-semibold">৳ 75.9k</p>
        </div>
        <div className="border text-center border-green-500 rounded-lg w-full py-10">
          <p>Last Week Sales</p>
          <p className="text-4xl mt-3 font-semibold">৳ 75.9k</p>
        </div>
        <div className="border text-center border-green-500 rounded-lg w-full py-10">
          <p>Recent Sales</p>
          <p className="text-4xl mt-3 font-semibold">৳ 75.9k</p>
        </div>
      </div>
     <div className="mt-8 md:grid-cols-2 grid-cols-1">
     <ProductTable></ProductTable>
     </div>
    </div>
  );
};

export default Products;
