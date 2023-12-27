import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="flex justify-between px-[calc(5vw)] py-[calc(2vh)]">
      <div className="flex ap-tech text-xl md:text-3xl lg:text-4xl">
        <h1>AP-Tech</h1>
      </div>
      <div className="navbar hidden lg:flex gap-x-10 font-bold">
        <button className="">iPhones</button>
        <button className="">Apple Watch</button>
        <button className="">Mac</button>
        <button className="">Earpods</button>
        <button className="">Other Accessories</button>
      </div>
      <div className="flex gap-x-4">
        <button className="hidden hover:scale-100 hover:cursor-pointer">
          <IoIosNotifications color="black" size={20} />
        </button>
        <button
          className="
            hover:scale-150 hover:cursor-pointer"
        >
          <CiSearch color="black" size={20} />
        </button>
        <button className="hover:scale-150 hover:cursor-pointer">
          <FiShoppingCart color="black" size={20} />
        </button>
        <button className="hover:scale-150 hover:cursor-pointer">
          <FiMenu color="black" size={20} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
