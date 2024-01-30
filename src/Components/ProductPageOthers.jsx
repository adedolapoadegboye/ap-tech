import React, { useEffect, useState } from "react";
import BounceLoader from "react-spinners/ClipLoader";

const ProductPageOthers = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { all, starlinks, pencils, chargers, cases, bands, speakers } = props;
  console.log(all, starlinks, pencils, chargers, cases, bands, speakers);
  const [api, setApi] = useState("all");

  useEffect(() => {
    // Set the API based on the props
    if (all) {
      setApi("all");
    } else if (starlinks) {
      setApi("starlinks");
    } else if (pencils) {
      setApi("pencils");
    } else if (chargers) {
      setApi("chargers");
    } else if (cases) {
      setApi("cases");
    } else if (bands) {
      setApi("bands");
    } else if (speakers) {
      setApi("speakers");
    }
  }, [all, starlinks, pencils, chargers, cases, bands, speakers]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiLink = `http://35.160.225.128:4000/others/${api}`;
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
            className="flex flex-col justify-center gap-4 lg:gap-8 border-2 py-3 lg:py-6 px-3 lg:px-6 bg-gray-900 text-white rounded-2xl"
          >
            <img
              src={item.image}
              alt={item["name"]}
              className="rounded-2xl"
            />
            <a
              href="https://wa.me/2348134864048"
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="navbar font-bold text-md lg:text-lg">
                {item["name"]}
              </h2>

              <h3 className="text-xs md:text-sm lg:text-md font-normal pt-2">
                <span>&#8358;</span>
                {item["lowprice"]} - <>&nbsp;</><span>&#8358;</span>
                {item["highprice"]}
              </h3>
            </a>
          </div>
        ))}
      </div>
    );
  }
};

export default ProductPageOthers;
