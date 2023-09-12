import React from "react";
import OrderTable from "./Table/OrderTable";


const Orders = () => {
  return (
    <div className="w-11/12 mx-auto">
      <p className="text-2xl font-black my-6">Orders</p>
      <div className="grid  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
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
      <div className=' mt-8 md:grid-cols-2 grid-cols-1 '>
      <OrderTable></OrderTable>
      </div>
    </div>
  );
};

export default Orders;
