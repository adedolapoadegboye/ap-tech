import React from "react";
import iXR from "../images/XR.jpg";
import i11 from "../images/11.jpg";
import i12 from "../images/12.jpg";
import i13 from "../images/13.jpg";
import i14 from "../images/14.jpg";
import i15 from "../images/15.jpg";

const iPhoneData = [
  {
    name: "iPhone XR",
    img: iXR,
    price: "300,000",
  },
  {
    name: "iPhone 11",
    img: i11,
    price: "300,000",
  },
  {
    name: "iPhone 12",
    img: i12,
    price: "300,000",
  },
  {
    name: "iPhone 13",
    img: i13,
    price: "300,000",
  },
  {
    name: "iPhone 14",
    img: i14,
    price: "300,000",
  },

  {
    name: "iPhone 15",
    img: i15,
    price: "300,000",
  },
];


const UsedProductPageIphone = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
      {iPhoneData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-end gap-2 border-2 py-3 lg:py-6 px-3 lg:px-6 bg-gray-900 text-white rounded-2xl"
        >
          <a
            href="https://web.whatsapp.com/send/?phone=2348134864048&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <img src={item["img"]} alt={item["name"]} className="rounded-2xl" />

            <h2 className="navbar font-bold text-lg lg:text-xl">
              {item["name"]}
            </h2>

            <h3>
              <span>&#8358;</span>
              {item["price"]}
            </h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default UsedProductPageIphone;
