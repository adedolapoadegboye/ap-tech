import React from "react";
import { MdCancel } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Menu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`overlay-menu fixed inset-0 bg-gray-900 bg-opacity-90 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <button className="text-white pb-6" onClick={onClose}>
          <MdCancel size={50} />
        </button>
        {/* Add menu items or links here */}
        <div className="navbar flex flex-col gap-8 text-2xl font-bold text-white">
          <NavLink
            to="/"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "green" : "white",
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
                color: isActive ? "green" : "white",
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
                color: isActive ? "green" : "white",
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
                color: isActive ? "green" : "white",
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
                color: isActive ? "green" : "white",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Airpods
          </NavLink>{" "}
          <NavLink
            to="/ipad"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "green" : "white",
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
              color: isActive ? "green" : "white",
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
                color: isActive ? "green" : "white",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            About Us
          </NavLink>{" "}
        </div>
      </div>
    </div>
  );
};

export default Menu;
