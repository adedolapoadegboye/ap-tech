import React from "react";
import buy from "../images/buy.jpg";
import sell from "../images/sell2.jpg";
import swap from "../images/swap.jpg";

const ApTechEssentials = () => {
  return (
    <div className="text-left">
      <h1 className="font-black text-2xl lg:text-6xl text-center pb-[calc(4vh)]">
        {" "}
        Think Tech. Think AP.{" "}
      </h1>
      <div className="flex flex-col w-full h-fit gap-6 px-2">
        <div className="flex flex-col lg:flex-row w-full h-full gap-2">
          <div className="flex flex-col w-1/2 h-100 justify-center gap-2 items-center px-2 font-semibold bg-gray-900 text-white rounded-2xl">
            <h1 className="text-3xl essentials-body">iSell</h1>
            <h2 className="text-2xl font-normal essentials text-justify px-10">
              Welcome to AP-Tech, your premier destination for cutting-edge
              smartphones that seamlessly blend innovation and style, offering a
              curated selection of top-tier devices to elevate your
              communication and connectivity experience <br></br>
              <br></br>Come explore our wide varieties of new and used phones.
            </h2>
          </div>
          <div className="w-1/2">
            <img src={sell} alt="we sell gadgets" className="rounded-2xl" />
          </div>
        </div>
        <div className="flex flex-row w-full h-full gap-2">
          <div className="w-1/2">
            <img src={buy} alt="we buy gadgets" className="rounded-2xl" />
          </div>
          <div className="flex flex-col w-1/2 h-100 justify-center gap-2 items-center navbar px-2 font-semibold bg-gray-900 text-white rounded-2xl">
            <h1 className="text-3xl essentials-body">iBuy</h1>
            <h2 className="text-2xl font-normal essentials text-justify px-10">
              {" "}
              At AP-Tech, we make upgrading your smartphone effortless and
              rewarding, offering a hassle-free phone-buying experience with a
              diverse range of quality devices, ensuring you stay connected in
              style and with the latest technology at your fingertips
              <br></br>
              <br></br>
              Did we mention that you get a free pouch for every phone you buy
              from us?
            </h2>
          </div>
        </div>
        <div className="flex flex-row w-full h-full gap-2">
          <div className="flex flex-col w-1/2 h-100 justify-center items-center navbar px-2 gap-2 font-semibold bg-gray-900 text-white rounded-2xl">
            <h1 className="text-3xl essentials-body">iSwap</h1>
            <h2 className="text-2xl font-normal essentials text-justify px-10">
              {" "}
              Unlock a world of possibilities with AP-Tech's phone-swapping
              service, where seamless exchanges meet convenience, enabling you
              to effortlessly upgrade to the latest devices while promoting
              sustainability in the ever-evolving tech landscape
              <br></br>
              <br></br>
              We'll move your data from your old phone to your new phone
              after the phone swap, free of charge.
            </h2>
          </div>
          <div className="w-1/2">
            <img src={swap} alt="we swap gadgets" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApTechEssentials;
