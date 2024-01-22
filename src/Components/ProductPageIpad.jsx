import React, { useEffect, useState } from "react";
import BounceLoader from "react-spinners/ClipLoader";
import appleipadpro2022 from "../images/products/ipad/apple-ipad-pro-2022.jpeg";
import appleipadpro112022 from "../images/products/ipad/apple-ipad-pro-11-2022.jpeg";
import appleipad102022 from "../images/products/ipad/apple-ipad-10-2022.jpeg";
import appleipadair2022 from "../images/products/ipad/apple-ipad-air-2022.jpeg";
import appleipadmini2021 from "../images/products/ipad/apple-ipad-mini-2021.jpeg";
import appleipad102021 from "../images/products/ipad/apple-ipad-10-2021.jpeg";
import appleipadpro1292021 from "../images/products/ipad/apple-ipad-pro-129-2021.jpeg";
import appleipadpro112021 from "../images/products/ipad/apple-ipad-pro-11-2021.jpeg";
import appleipadair2020 from "../images/products/ipad/apple-ipad-air-2022.jpeg";
import appleipadpro122020 from "../images/products/ipad/apple-ipad-pro-12-2020.jpeg";
import appleipadpro112020 from "../images/products/ipad/apple-ipad-pro-11-2020.jpeg";
import appleipadair32019 from "../images/products/ipad/apple-ipad-air3-2019.jpeg";
import appleipadmini2019 from "../images/products/ipad/apple-ipad-air3-2019.jpeg";

const images = [
  appleipadpro2022,
  appleipadpro112022,
  appleipad102022,
  appleipadair2022,
  appleipadmini2021,
  appleipad102021,
  appleipadpro1292021,
  appleipadpro112021,
  appleipadair2020,
  appleipadpro122020,
  appleipadpro112020,
  appleipadair32019,
  appleipadmini2019,
];

const ProductPageIpad = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {
    all,
    pro,
    air,
    normal,
    mini,
    twentyTwo,
    twentyOne,
    twenty,
    nineteen,
  } = props;
  console.log(
    all,
    pro,
    air,
    normal,
    mini,
    twentyTwo,
    twentyOne,
    twenty,
    nineteen
  );
  const [api, setApi] = useState("all");

  useEffect(() => {
    // Set the API based on the props
    if (all) {
      setApi("all");
    } else if (pro) {
      setApi("pro");
    } else if (air) {
      setApi("air");
    } else if (normal) {
      setApi("normal");
    } else if (mini) {
      setApi("mini");
    } else if (twentyTwo) {
      setApi("2022");
    } else if (twenty) {
      setApi("2020");
    } else if (twentyOne) {
      setApi("2021");
    } else if (nineteen) {
      setApi("2019");
    }
  }, [all, pro, air, normal, mini, twentyTwo, twentyOne, twenty, nineteen]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiLink = `http://localhost:4000/ipad/${api}`;
        console.log(apiLink);
        // Make a fetch API call
        const responseData = await fetch(apiLink);
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
  }, [api]);

  if (loading) {
    console.log("Loading");
    return (
      <div>
        <BounceLoader color="green" />
      </div>
    );
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
              <div className="flex flex-col">
                <h3 className="flex justify-left text-left py-2 text-xs md:text-sm lg:text-md font-light">
                  Processor: {item.processor}
                </h3>
                <h3 className="flex justify-left text-left py-2 text-xs md:text-sm lg:text-md font-light">
                  Year: {item.year}
                </h3>
                <h3 className="flex justify-left text-left py-2 text-xs md:text-sm lg:text-md font-light">
                  Type: {item.type}
                </h3>
                <h3 className="flex justify-left text-left py-2 text-xs md:text-sm lg:text-md font-light">
                  Screen width: {item.screen} inches
                </h3>
              </div>
              <h3 className="flex justify-left text-xs md:text-sm lg:text-md font-light pt-2">
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

export default ProductPageIpad;
