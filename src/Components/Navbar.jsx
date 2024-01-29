import {
  // IoIosNotifications,
  // IoLogoFacebook,
  IoLogoInstagram,
  IoLogoSnapchat,
} from "react-icons/io";
// import { CiSearch } from "react-icons/ci";
// import { FiShoppingCart } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import Menu from "../Subcomponents/Menu";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex justify-between px-[calc(5vw)] py-[calc(2vh)] border-b-2 border-black">
      <div className="flex ap-tech text-3xl md:text-4xl lg:text-5xl text-slate-900">
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
          iWatches
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
          MacBooks
        </NavLink>{" "}
        <NavLink
          to="/airpod"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "green" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Airpods
        </NavLink>{" "}
        <NavLink
          to="/iPad"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "green" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          iPads
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
        <button
          className="
            hover:scale-150 hover:cursor-pointer hidden lg:block"
        >
          <a
            href="https://wa.me/2348134864048"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:block hover:scale-100 hover:cursor-pointer"
          >
            <IoLogoWhatsapp color="black" size={20} />
          </a>
        </button>
        <button
          className="
            hover:scale-150 hover:cursor-pointer hidden lg:block"
        >
          <a
            href="https://www.instagram.com/ap__tech/"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:block hover:scale-100 hover:cursor-pointer"
          >
            <IoLogoInstagram color="black" size={20} />
          </a>
        </button>
        <button className="hover:scale-150 hover:cursor-pointer hidden lg:block">
          <a
            href="https://twitter.com/ap__tech/"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:block hover:scale-100 hover:cursor-pointer"
          >
            <BsTwitterX color="black" size={20} />
          </a>
        </button>
        <button className="hover:scale-150 hover:cursor-pointer hidden lg:block">
          <a
            href="https://www.snapchat.com/add/apalando_raman/"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:block hover:scale-100 hover:cursor-pointer"
          >
            <IoLogoSnapchat color="black" size={20} />
          </a>
        </button>
        <button className="hover:scale-150 hover:cursor-pointer hidden lg:block">
          <a
            href="https://www.tiktok.com/@ap_tech"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:block hover:scale-100 hover:cursor-pointer"
          >
            <FaTiktok color="black" size={20} />
          </a>
        </button>
        <button
          className="hover:scale-150 hover:cursor-pointer lg:hidden"
          onClick={handleMenuToggle}
        >
          <FiMenu color="black" size={20} />
        </button>
          <Menu isOpen={isMenuOpen} onClose={handleMenuToggle} />
      </div>
      {/* <div className="flex gap-x-4 relative z-0">
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
      </div> */}
    </div>
  );
};

export default Navbar;
