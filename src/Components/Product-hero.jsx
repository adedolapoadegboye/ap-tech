import React from "react";
import iPhone from  "../images/iPhone Page.jpg"

const ProductHero = () => {
  return (
    <div className="">
      <div className="relative">
        <div className="w-screen static z-10">
          <div className="opacity-50 w-full">
            <img src={iPhone} alt="unboxed iPhone 15" className="w-full"/>
          </div>
        </div>
        <div className="navbar text-white text-justify absolute inset-0">
          <h2 className="text-extrabold text-2xl md:text-4xl lg:text-6xl tracking-tighter flex justify-center items-center h-full w-full text-neutral-50">
            iPhones
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
