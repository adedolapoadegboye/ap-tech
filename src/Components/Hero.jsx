import React from "react";
// import hero from "../images/hero.jpg";
// import hero2 from "../images/hero-2.jpg";
// import hero3 from "../images/hero-3.jpg";
// import hero_video from "../images/hero-video.mp4";
import hero_image from "../images/Home Page 3.jpg"

const Hero = () => {
  return (
    <div className="relative border-black">
      <div className="w-screen h-fit static z-10">
        <div className="opacity-100">
          {/* <video autoPlay loop muted>
            <source src={hero_video} type="video/mp4" />
          </video>{" "} */}
          <img src={hero_image} alt="iPhone 15"></img>
        </div>
      </div>
      <div className="navbar text-neutral-900 text-left absolute top-[calc(4vh)] left-0 z-10 px-[calc(5vw)] py-[calc(2vh)] lg:py-[calc(5vh)] w-1/2 h-full">
        <h2 className="pb-4 text-extrabold lg:pb-12 pe-4 text-lg lg:text-6xl tracking-tighter">
          Harness the power of the future with the Apple Ecosystem
        </h2>
        <h2 className="pb-4 text-extrabold lg:pb-12 pe-4 text-lg lg:text-6xl tracking-tight">
          How may we serve you today?
        </h2>
        <button className="py-2 px-2 border-2 border-black rounded-xl text-white bg-black text-lg lg:text-2xl subpixel-antialiased">
          <a
            href="https://wa.me/2348134864048"
            target="_blank"
            rel="noreferrer"
          >
            Place your Order
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
