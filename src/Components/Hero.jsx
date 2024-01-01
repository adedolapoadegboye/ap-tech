import React from "react";
// import hero from "../images/hero.jpg";
// import hero2 from "../images/hero-2.jpg";
// import hero3 from "../images/hero-3.jpg";
import hero_video from "../images/hero-video.mp4";

const Hero = () => {
  return (
    <div className="relative">
      <div className="w-screen h-fit static z-10">
        <div className="opacity-80">
          <video autoPlay loop muted>
            <source src={hero_video} type="video/mp4" />
          </video>{" "}
        </div>
      </div>
      <div className="navbar text-neutral-50 text-justify absolute top-0 left-0 z-10 px-[calc(5vw)] py-[calc(2vh)] lg:py-[calc(5vh)] w-[calc(70vw)]">
        <h2 className="pb-4 text-extrabold lg:pb-10 pe-4 text-lg lg:text-6xl tracking-tighter">
          Experience the power of the future with the new iPhone 15
        </h2>
        <button className="py-2 px-2 border-2 rounded-xl hover:bg-white hover:text-black text-lg lg:text-2xl text-white subpixel-antialiased">
          <a
            href="https://web.whatsapp.com/send/?phone=2348134864048&text&type=phone_number&app_absent=0"
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
