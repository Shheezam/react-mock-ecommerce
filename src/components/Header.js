import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import {  BsCartFill, BsHouse, BsShop, } from "react-icons/bs";


const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-gray-600 py-2 shadow-md" : "bg-gray-600 py-6"
      } fixed w-full z-10 lg:px-8 transition-all`}
    >
     
      <div className="container mx-auto flex items-center justify-between h-full">
         {/* Home */}
        <Link to={"/"}>
          <div className="w-[40px] text-white">
          <BsHouse size={30 } color="white"/> Home
          </div>
        </Link>

          {/* Home */}
          <Link to={"/product"}>
          <div className="w-[40px] text-white">
          <BsShop size={30 }color="white"/> Shop
          </div>
        </Link>


        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsCartFill className="text-4xl" color="white" /> 
          <div className="bg-red-500 absolute -right-2 -top-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
