import React from "react";
import ReactCountryFlag from "react-country-flag";
import iPhone from "../images/iPhone.jpg";
import iwatch from "../images/iwatch.jpg";
import iPad from "../images/iPad.jpg";
import mac from "../images/mac.jpg";
import earpods from "../images/earpods2.jpg";
import straps_cases from "../images/accessories.jpg";
import charger from "../images/charger.jpg";
// import others from "../images/others.jpg";
import others2 from "../images/others2.jpg";



const ProductCategory = () => {
  return (
    <div className="navbar">
        <div className="flex flex-col gap-y-4 text-center w-full h-fit">
          <h2 className="font-extrabold underline underline-offset-4">
            {" "}
            Proudly Nigerian <ReactCountryFlag countryCode="NG" />{" "}
          </h2>
          <h1 className="font-black text-2xl lg:text-6xl">
            {" "}
            Shop Our Top Collections{" "}
          </h1>
        </div>
        <div className="grid grid-rows-8 grid-cols-1 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 w-full px-2 text-center gap-8 pt-8">
          <div className="relative">
            <img src={iPhone} alt="iphone"  className="h-[300px] lg:h-[400px] rounded-xl static w-full"></img>
            <h3 className="w-full h-fit absolute inset-x-0 bottom-0 top-4 text-white font-extrabold text-3xl">iPhones</h3>
          </div>
          <div className="relative">
            <img src={iwatch} alt="iWatch"  className="h-[300px] lg:h-[400px] rounded-xl static w-full"></img>
            <h3 className="w-full h-full absolute inset-x-0 bottom-0 top-4 text-white font-extrabold text-3xl">iWatches</h3>
          </div>
          <div className="relative">
            <img src={mac} alt="Mac" className="h-[300px] lg:h-[400px] rounded-xl static w-full"></img>
            <h3 className="w-full h-full absolute inset-x-0 bottom-0 top-4 text-white font-extrabold text-3xl">MacBooks</h3>
          </div>
          <div className="relative">
            <img src={earpods} alt="Earpods" className="h-[300px] lg:h-[400px] w-full rounded-xl static"></img>
            <h3 className="w-full h-full absolute inset-x-0 bottom-0 top-4 text-white font-extrabold text-3xl">Earpods</h3>
          </div>
          <div className="relative">
            <img src={iPad} alt="iPads" className="h-[300px] lg:h-[400px] w-full rounded-xl static"></img>
            <h3 className="w-full h-full absolute inset-x-0 bottom-0 top-4 text-white font-extrabold text-3xl">iPads</h3>
          </div>
          <div className="relative">
            <img src={straps_cases} alt="Accessories" className="h-[300px] lg:h-[400px] w-full rounded-xl static"></img>
            <h3 className="w-full h-full absolute inset-x-0 bottom-0 top-4 text-white font-extrabold text-3xl">Accessories</h3>
          </div>
          <div className="relative">
            <img src={charger} alt="chargers" className="h-[300px] lg:h-[400px] w-full rounded-xl static"></img>
            <h3 className="w-full h-full absolute inset-x-0 bottom-0 top-4 text-white font-extrabold text-3xl">Chargers</h3>
          </div>
          <div className="relative">
            <img src={others2} alt="others" className="h-[300px] lg:h-[400px] w-full rounded-xl static"></img>
            <h3 className="w-full h-full absolute inset-x-0 bottom-0 top-4 text-white font-extrabold text-3xl">Others</h3>
          </div>
        </div>
    </div>
  );
};

export default ProductCategory;
