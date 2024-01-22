import React, { useEffect, useState } from "react";
import mac from "../images/products/mac/mac.jpeg";
import BounceLoader from "react-spinners/ClipLoader";

const ProductPageMacPro = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { all, smallScreen, bigScreen, M1, M2, intel } = props;
  console.log(all, smallScreen, bigScreen, M1, M2, intel);
  const [api, setApi] = useState("all");

  useEffect(() => {
    // Set the API based on the props
    if (all) {
      setApi("all");
    } else if (smallScreen) {
      setApi("13");
    } else if (bigScreen) {
      setApi("15");
    } else if (M1) {
      setApi("m1");
    } else if (M2) {
      setApi("m2");
    } else if (intel) {
      setApi("intel");
    }
  }, [all, smallScreen, bigScreen, M1, M2, intel]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiLink = `http://localhost:4000/mac/air/${api}`;
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
            <img src={mac} alt={item["name"]} className="rounded-2xl" />
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
                  CPU: {item.CPU}
                </h3>
                <h3 className="flex justify-left text-left py-2 text-xs md:text-sm lg:text-md font-light">
                  GPU: {item.GPU}
                </h3>
                <h3 className="flex justify-left text-left py-2 text-xs md:text-sm lg:text-md font-light">
                  SSD: {item.SSD}
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

export default ProductPageMacPro;
