import React, { useEffect, useState } from "react";
import BounceLoader from "react-spinners/ClipLoader";
import ultra2 from "../images/products/iwatch/apple-watch-ultra2.jpeg";
import series9 from "../images/products/iwatch/apple-watch-series9.jpeg";
import series9al from "../images/products/iwatch/apple-watch-series9-aluminum.jpeg";
import ultra from "../images/products/iwatch/apple-watch-ultra.jpeg";
import series8 from "../images/products/iwatch/apple-watch-8.jpeg";
import series8al from "../images/products/iwatch/apple-watch-8-aluminum.jpeg";
import se2022 from "../images/products/iwatch/apple-watch-8se-2022.jpeg";
import series7 from "../images/products/iwatch/apple-watch-series-7.jpeg";
import series7al from "../images/products/iwatch/apple-watch-series-7-aluminum.jpeg";
import se2020 from "../images/products/iwatch/apple-watch-se.jpeg";
import series6 from "../images/products/iwatch/apple-watch-s6-steel.jpeg";
import series6al from "../images/products/iwatch/apple-watch-s6.jpeg";
import series5 from "../images/products/iwatch/apple-watch-5-ss.jpeg";
import series5al from "../images/products/iwatch/apple-watch-5-al.jpeg";
import series4 from "../images/products/iwatch/apple-watch-series-4-steel.jpeg";
import series4al from "../images/products/iwatch/apple-watch-series-4-aluminum.jpeg";
import series3 from "../images/products/iwatch/apple-watch-edition-series3.jpeg";
import series3al from "../images/products/iwatch/apple-watch-series3-al.jpeg";

let images = [
  ultra2,
  series9,
  series9al,
  ultra,
  series8,
  series8al,
  se2022,
  series7,
  series7al,
  se2020,
  series6,
  series6al,
  series5,
  series5al,
  series4,
  series4al,
  series3,
  series3al,
];

const UsedProductPageIwatch = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {
    all,
    series9,
    series8,
    series7,
    series6,
    series5,
    series4,
    series3,
    se,
    ultra,
    viewer,
  } = props;
  console.log(
    all,
    series9,
    series8,
    series7,
    series6,
    series5,
    series4,
    series3,
    se,
    ultra
  );
  const [api, setApi] = useState("all");

  useEffect(() => {
    // Set the API based on the props
    if (all) {
      setApi("all");
    } else if (series9) {
      setApi("9");
    } else if (series8) {
      setApi("8");
    } else if (series7) {
      setApi("7");
    } else if (series6) {
      setApi("6");
    } else if (series5) {
      setApi("5");
    } else if (series4) {
      setApi("4");
    } else if (series3) {
      setApi("3");
    } else if (se) {
      setApi("SE");
    } else if (ultra) {
      setApi("ultra");
    }
  }, [
    all,
    series9,
    series8,
    series7,
    series6,
    series5,
    series4,
    series3,
    se,
    ultra,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiLink = `http://localhost:4000/usediwatch/${api}`;
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
              {/* <div className="flex flex-col">
                <h3 className="flex justify-left text-left py-2 text-xs md:text-sm lg:text-md font-light">
                  Processor: {item.processor}
                </h3>
                <h3 className="flex justify-left text-left py-2 text-xs md:text-sm lg:text-md font-light">
                  Battery life: {item.battery}
                </h3>
                <h3 className="flex justify-left text-left py-2 text-xs md:text-sm lg:text-md font-light">
                  Battery Life with Case: {item.batterywithcase}
                </h3>
                <h3 className="flex justify-left text-left py-2 text-xs md:text-sm lg:text-md font-light">
                  Case: {item.case}
                </h3>
              </div> */}
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

export default UsedProductPageIwatch;
