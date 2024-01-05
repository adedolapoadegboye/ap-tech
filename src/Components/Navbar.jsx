import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import Menu from "../Subcomponents/Menu";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex justify-between px-[calc(5vw)] py-[calc(2vh)] border-b-2 border-black">
      <div className="flex ap-tech text-xl md:text-3xl lg:text-4xl text-slate-900">
        <h1>AP Tech</h1>
      </div>
      <div className="navbar hidden lg:flex lg:gap-x-6 pt-2 font-bold">
        <NavLink
          to="/"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "green" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Home
        </NavLink>{" "}
        <NavLink
          to="/iphone"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "green" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          iPhones
        </NavLink>{" "}
        <NavLink
          to="/iwatch"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "green" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          iWatch
        </NavLink>{" "}
        <NavLink
          to="/mac"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "green" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Mac
        </NavLink>{" "}
        <NavLink
          to="/earpod"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "green" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Earpods
        </NavLink>{" "}
        <NavLink
          to="/accessory"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "green" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Accessories
        </NavLink>{" "}
        <NavLink
          to="/others"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "green" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Others
        </NavLink>{" "}
        <NavLink
          to="/about"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "green" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          About
        </NavLink>{" "}
      </div>
      <div className="flex gap-x-4 relative z-0">
        <button className="hidden lg:block hover:scale-100 hover:cursor-pointer">
          <IoIosNotifications color="black" size={20} />
        </button>
        <button
          className="
            hover:scale-150 hover:cursor-pointer hidden lg:block"
        >
          <CiSearch color="black" size={20} />
        </button>
        <button className="hover:scale-150 hover:cursor-pointer hidden lg:block">
          <FiShoppingCart color="black" size={20} />
        </button>
        <button
          className="hover:scale-150 hover:cursor-pointer lg:hidden"
          onClick={handleMenuToggle}
        >
          <FiMenu color="black" size={20} />
        </button>
        <Menu isOpen={isMenuOpen} onClose={handleMenuToggle} />
      </div>
    </div>
  );
};

export default Navbar;
