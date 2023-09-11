import React from "react";
import { Icon } from "@iconify/react";
import { NavLink, Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <div className="bg-[#0C4E67] h-full col-span-2">
          <div className="my-10">
            <Link to="/" className="">
              <p className="logoFont text-[#03384D] text-center text-5xl font-bold">
                <span className="text-[#3B95B0] logoFont">Urban</span>Utopia
              </p>
            </Link>
          </div>
          <ul className="nabLinkStyle">
            <li className=" mb-8 text-white">
              <NavLink
                className="flex gap-2 p-4 text-xl font-semibold items-center"
                to="/dashboard"
              >
                <Icon icon="material-symbols:dashboard" /> <span className=" hidden md:inline-block">Dashboard</span>
              </NavLink>
            </li>
            <li className=" mt-2 text-white mb-8 ">
              <NavLink
                className="flex gap-2 p-4 text-xl font-semibold items-center"
                to="/dashboard/orders"
              >
                <Icon icon="iconoir:cart" />
              <span>  Orders</span>
              </NavLink>
            </li>
            <li className=" mt-2 text-white mb-8 ">
              <NavLink
                className="flex gap-2 p-4 text-xl font-semibold items-center"
                to="/dashboard/products"
              >
                <Icon icon="streamline:shopping-bag-hand-bag-1-shopping-bag-purse-goods-item-products" />
               <span> Products</span>
              </NavLink>
            </li>
            <li className=" mt-2 text-white mb-8">
              <NavLink
                className="flex gap-2 p-4 text-xl font-semibold items-center"
                to="/dashboard/addproducts"
              >
                <Icon icon="streamline:shopping-bag-hand-bag-2-shopping-bag-purse-goods-item-products" />{" "}
               <span> Add Products</span>
              </NavLink>
            </li>
            <li className="  mt-2 text-white mb-8">
              <NavLink
                className="flex gap-2 text-xl p-4 font-semibold items-center"
                to="/dashboard/delivery"
              >
                <Icon icon="iconoir:delivery-truck" />
              <span>  Delivery & Return</span>
              </NavLink>
            </li>
            <li className=" mt-2 text-white mb-8">
              <NavLink
                className="flex gap-2 p-4 text-xl font-semibold items-center"
                to="/dashboard/contact"
              >
                <Icon icon="ri:contacts-fill" /> <span> Contact Details</span>
              </NavLink>
            </li>
            <li className=" mt-2 text-white mb-8">
              <NavLink
                className="flex gap-2 p-4 text-xl font-semibold items-center"
                to="/dashboard/faq"
              >
                <Icon icon="bi:chat-right-dots-fill" /> <span>FAQ</span>
              </NavLink>
            </li>
            <li className=" mt-2 text-white mb-8">
              <button className="flex hover:text-[#3997B1] transition-all delay-100 ease-in-out p-4 gap-2 text-xl font-semibold items-center">
                <Icon icon="mi:log-in"/> <span>Log Out</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="col-span-8">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
