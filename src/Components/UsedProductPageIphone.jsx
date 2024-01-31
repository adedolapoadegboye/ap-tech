import React, { useEffect, useState } from "react";
import BounceLoader from "react-spinners/ClipLoader";


const UsedProductPageIphone = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {
    all,
    series15,
    series14,
    series13,
    series12,
    series11,
    seriesx,
    se,
  } = props;
  console.log(
    all,
    series15,
    series14,
    series13,
    series12,
    series11,
    seriesx,
    se,
  );
  const [api, setApi] = useState("all");

  useEffect(() => {
    // Set the API based on the props
    if (all) {
      setApi("all");
    } else if (series15) {
      setApi("15");
    } else if (series14) {
      setApi("14");
    } else if (series13) {
      setApi("13");
    } else if (series12) {
      setApi("12");
    } else if (series11) {
      setApi("11");
    } else if (seriesx) {
      setApi("X");
    }  else if (se) {
      setApi("SE");
    }
  }, [
    all,
    series15,
    series14,
    series13,
    series12,
    series11,
    seriesx,
    se,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiLink = `https://aptech-0e3dce2c8878.herokuapp.com/usediphone/${api}`;
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
              src={item.image}
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
                <h3 className="flex justify-left text-left py-2 text-xs md:text-sm lg:text-md font-normal">
                  Size: {item.size}
                </h3>
                {/* <h3 className="flex justify-left text-left py-2 text-xs md:text-sm lg:text-md font-light">
                  Battery life: {item.battery}
                </h3>
                <h3 className="flex justify-left text-left py-2 text-xs md:text-sm lg:text-md font-light">
                  Battery Life with Case: {item.batterywithcase}
                </h3>
                <h3 className="flex justify-left text-left py-2 text-xs md:text-sm lg:text-md font-light">
                  Case: {item.case}
                </h3> */}
              </div>
              <h3 className="flex justify-left text-xs md:text-sm lg:text-md font-normal pt-2">
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


export default UsedProductPageIphone;
