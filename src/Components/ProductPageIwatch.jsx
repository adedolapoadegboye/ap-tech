import React, { useEffect, useState } from "react";
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

const ProductPageIwatch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    series3al
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a fetch API call
        const responseData = await fetch("http://localhost:4000/iwatch/data");
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

export default ProductPageIwatch;
