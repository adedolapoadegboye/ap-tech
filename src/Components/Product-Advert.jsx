import React from "react";
import flash1 from "../images/flashsale1.jpg";
import flash2 from "../images/flashsale2-1.jpg";
import flash3 from "../images/flashsale3.jpg";
import flash4 from "../images/flashsale4.jpg";
import flash5 from "../images/flashsale5.jpg";
import flash6 from "../images/flashsale6.jpg";

const flashSale1 = () => {
  return (
    <div className="flex flex-col gap-2 border-2 py-3 lg:py-6 px-3 lg:px-6 bg-white rounded-2xl">
      <img src={flash1} alt="Flash sale of iphone" className="rounded-2xl" />
      <a
        href="https://web.whatsapp.com/send/?phone=2348134864048&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="navbar font-bold text-lg lg:text-xl">
          Used iWatch Series 8
        </h2>
      </a>

      <h3>45 MM || GPS Only || GPS and LTE || Free Charger</h3>
      <h3>
        <span>&#8358;</span>275,000
      </h3>
    </div>
  );
};
const flashSale2 = () => {
  return (
    <div className="flex flex-col gap-2 border-2 py-3 lg:py-6 px-3 lg:px-6 bg-white rounded-2xl">
      <img src={flash2} alt="Flash sale of iphone" className="rounded-2xl" />
      <a
        href="https://web.whatsapp.com/send/?phone=2348134864048&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="navbar font-bold text-lg lg:text-xl">Used iPhone 12</h2>
      </a>

      <h3>64 Gig || Fully Unlocked || Free Pouch || Free Charger</h3>
      <h3>
        <span>&#8358;</span>265,000
      </h3>
    </div>
  );
};
const flashSale3 = () => {
  return (
    <div className="flex flex-col gap-2 border-2 py-3 lg:py-6 px-3 lg:px-6 bg-white rounded-2xl">
      <img src={flash3} alt="Flash sale of iphone" className="rounded-2xl" />
      <a
        href="https://web.whatsapp.com/send/?phone=2348134864048&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="navbar font-bold text-lg lg:text-xl">New JBL FLIP4</h2>
      </a>

      <h3>New || Portable Speaker || Bluetooth &trade;</h3>
      <h3>
        <span>&#8358;</span>45,000
      </h3>
    </div>
  );
};

const flashSale4 = () => {
  return (
    <div className="flex flex-col gap-2 border-2 py-3 lg:py-6 px-3 lg:px-6 bg-white rounded-2xl">
      <img src={flash4} alt="Oraimo Power Bank" className="rounded-2xl" />
      <a
        href="https://web.whatsapp.com/send/?phone=2348134864048&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="navbar font-bold text-lg lg:text-xl">
          New Oraimo Power Bank
        </h2>
      </a>

      <h3>New || 20,000 mAh</h3>
      <h3>
        <span>&#8358;</span>11,500
      </h3>
    </div>
  );
};

const flashSale5 = () => {
  return (
    <div className="flex flex-col gap-2 border-2 py-3 lg:py-6 px-3 lg:px-6 bg-white rounded-2xl">
      <img src={flash5} alt="Earpod Max" className="rounded-2xl" />
      <a
        href="https://web.whatsapp.com/send/?phone=2348134864048&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="navbar font-bold text-lg lg:text-xl">New Earpod Max</h2>
      </a>

      <h3>New || Portable Speaker || Bluetooth &trade;</h3>
      <h3>
        <span>&#8358;</span>500,000
      </h3>
    </div>
  );
};

const flashSale6 = () => {
  return (
    <div className="flex flex-col gap-2 border-2 py-3 lg:py-6 px-3 lg:px-6 bg-white rounded-2xl">
      <img src={flash6} alt="Flash sale of iphone" className="rounded-2xl" />
      <a
        href="https://web.whatsapp.com/send/?phone=2348134864048&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="navbar font-bold text-lg lg:text-xl">
          Original Apple Charger
        </h2>
      </a>
      <h3>New || Type C </h3>
      <h3>
        <span>&#8358;</span>9,000
      </h3>
    </div>
  );
};

const ProductAdvert = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h1 className="font-black text-2xl lg:text-4xl w-full justify-center text-center flash-sale-animation">
          Holiday Flash Sales!!!
        </h1>
        <div className="grid grid-rows-3 grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 gap-3 px-2">
          <div>{flashSale1()}</div>
          <div>{flashSale2()}</div>
          <div>{flashSale3()}</div>
        </div>
        <div className="grid grid-rows-3 grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 gap-3 px-2">
          <div>{flashSale4()}</div>
          <div>{flashSale5()}</div>
          <div>{flashSale6()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdvert;
