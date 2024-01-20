import React, { useEffect, useState } from "react";
import iphone15promax from "../images/products/iphones/iphone15ProMax.jpeg";
import iphone15pro from "../images/products/iphones/iphone15Pro.jpeg";
import iphone15plus from "../images/products/iphones/iphone15plus.jpeg";
import iphone15 from "../images/products/iphones/iphone15.jpeg";
import iphone14promax from "../images/products/iphones/iphone14ProMax.jpeg";
import iphone14pro from "../images/products/iphones/iphone14Pro.jpeg";
import iphone14plus from "../images/products/iphones/iphone14plus.jpeg";
import iphone14 from "../images/products/iphones/iphone14.jpeg";
import iphoneSEG3 from "../images/products/iphones/iphoneSE(Gen3).jpeg";
import iphone13promax from "../images/products/iphones/iphone13ProMax.jpeg";
import iphone13pro from "../images/products/iphones/iphone13Pro.jpeg";
import iphone13 from "../images/products/iphones/iphone13.jpeg";
import iphone13mini from "../images/products/iphones/iphone13mini.jpeg";
import iphone12promax from "../images/products/iphones/iphone12ProMax.jpeg";
import iphone12pro from "../images/products/iphones/iphone12Pro.jpeg";
import iphone12 from "../images/products/iphones/iphone12.jpeg";
import iphone12mini from "../images/products/iphones/iphone12mini.jpeg";
import iphoneSEG2 from "../images/products/iphones/iphoneSE(Gen2).jpeg";
import iphone11promax from "../images/products/iphones/iphone11ProMax.jpeg";
import iphone11pro from "../images/products/iphones/iphone11Pro.jpeg";
import iphone11 from "../images/products/iphones/iphone11.jpeg";
import iphone11mini from "../images/products/iphones/iphone11mini.jpeg";
import iphoneXS from "../images/products/iphones/iphoneXS.jpeg";
import iphoneXSMax from "../images/products/iphones/iphoneXSMax.jpeg";
import iphoneXR from "../images/products/iphones/iphoneXR.jpeg";



const ProductPageIphone = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let images = [
    iphone15promax,
    iphone15pro,
    iphone15,
    iphone15plus,
    iphone14promax,
    iphone14pro,
    iphone14,
    iphone14plus,
    iphoneSEG3,
    iphone13promax,
    iphone13pro,
    iphone13,
    iphone13mini,
    iphone12promax,
    iphone12pro,
    iphone12,
    iphone12mini,
    iphoneSEG2,
    iphone11promax,
    iphone11pro,
    iphone11,
    iphone11mini,
    iphoneXS,
    iphoneXSMax,
    iphoneXR
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a fetch API call
        const responseData = await fetch("http://localhost:4000/iphone/data");
        const data = await responseData.json();
        console.log(data);
        // Update state with the fetched data
        setData(data);
      } catch (error) {
        // Handle errors
        setError(error);
      } finally {
        // Set loading to false once data is fetched or an error occurs
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    console.log("Loading");
  }

  if (error) {
    console.log("Error");
    return error;
  }

  if (!loading) {
    console.log(data);
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-start gap-4 lg:gap-8 border-2 py-3 lg:py-6 px-3 lg:px-6 bg-gray-900 text-white rounded-2xl"
          >
            <img
              src={images[index]}
              alt={item["name"]}
              className="rounded-2xl"
            />
            <a
              href="https://wa.me/2348134864048"
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="navbar flex justify-left text-left font-bold text-md lg:text-lg">
                {item["name"]}
              </h2>
              <h3 className="flex justify-left text-left py-2 text-xs md:text-sm lg:text-md font-light">
                {item.size}
              </h3>
              <h3 className="flex justify-left text-xs md:text-sm lg:text-md font-light">
                <span>&#8358;</span>
                {item["price"]}
              </h3>
            </a>
          </div>
        ))}
      </div>
    );
  }
};

export default ProductPageIphone;
