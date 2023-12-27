import React from "react";
import hero from "../images/hero.jpg";
import hero2 from "../images/hero-2.jpg";
import hero3 from "../images/hero-3.jpg";

const Hero = () => {
  return (
    <div>
      <div className="relative top-10 lg:top-20">
        <div className="w-screen h-screen absolute z-0">
          <img src={hero} alt="iPhone 15 in a black background" />
        </div>
        <div className="navbar text-xl lg:text-3xl font-bold text-white absolute top-20 left-0 z-10 px-[calc(5vw)] py-[calc(2vh)]">
          <h2 className="pb-4 lg:pb-10 pe-4">Experience the power of the future with the new iPhone 15</h2>
          <button className="py-2 px-2 border-2 rounded-full hover:bg-white hover:text-black text-lg lg:text-2xl">Place your Order</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
