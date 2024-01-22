import React, { useEffect, useState } from "react";
import BounceLoader from "react-spinners/ClipLoader";
import airpodg2 from "../images/products/airpod/airpodg2.jpeg";
import airpodg3 from "../images/products/airpod/airpodg3.jpeg";
import airpodprog2 from "../images/products/airpod/airpodprog2.jpeg";
import airpodmax from "../images/products/airpod/airpodmax.jpeg";

const ProductPageAirpod = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let images = [airpodg2, airpodg3, airpodg3, airpodprog2, airpodmax];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a fetch API call
        const responseData = await fetch("http://localhost:4000/airpod");
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
    return <div><BounceLoader color="green" /></div>;
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
            <img src={images[index]} alt={item["name"]} className="rounded-2xl" />
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
                  Battery life: {item.battery}
                </h3>
                <h3 className="flex justify-left text-left py-2 text-xs md:text-sm lg:text-md font-light">
                  Battery Life with Case: {item.batterywithcase}
                </h3>
                <h3 className="flex justify-left text-left py-2 text-xs md:text-sm lg:text-md font-light">
                  Case: {item.case}
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

export default ProductPageAirpod;
