import React from "react";
import { MdCancel } from "react-icons/md";

const Menu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`overlay-menu fixed inset-0 bg-gray-900 bg-opacity-90 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <button className="text-white pb-6" onClick={onClose}>
          <MdCancel size={50}/>
        </button>
        {/* Add menu items or links here */}
        <div className="navbar flex flex-col gap-8 text-2xl font-bold text-white">
          <button className="">iPhones</button>
          <button className="">Apple Watch</button>
          <button className="">Mac</button>
          <button className="">Earpods</button>
          <button className="">Accessories</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
