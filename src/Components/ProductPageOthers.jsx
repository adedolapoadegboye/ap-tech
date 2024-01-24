import React, { useEffect, useState } from "react";
import starlink from "../images/products/others/starlink.jpeg";
import pencil from "../images/products/others/Apple Pencil.jpeg";
import iphone_charger from "../images/products/others/All iPhone Chargers.jpeg";
import iwatch_charger from "../images/products/others/All iWatch Chargers.jpeg";
import silicone_case from "../images/products/others/iPhone Silicone Case with MagSafe.png";
import clear_case from "../images/products/others/iPhone Clear Case with MagSafe.png";
import sport_band from "../images/products/others/iWatch Sport Bands.png";
import magnetic_band from "../images/products/others/iWatch Magnetic Bands.png";
import speaker from "../images/products/others/JBLFLIP6.webp";
import BounceLoader from "react-spinners/ClipLoader";

const images = [
  starlink,
  pencil,
  pencil,
  pencil,
  iphone_charger,
  iwatch_charger,
  silicone_case,
  clear_case,
  sport_band,
  magnetic_band,
  speaker,
];
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
        let apiLink = `http://localhost:4000/others/${api}`;
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
            className="flex flex-col justify-center gap-2 border-2 py-3 lg:py-6 px-2 lg:px-4 bg-gray-900 text-white rounded-2xl"
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
              <h2 className="navbar flex justify-center font-bold text-md lg:text-lg">
                {item["name"]}
              </h2>
              <div className="flex flex-col">
              </div>
              <h3 className="flex justify-center text-sm md:text-md lg:text-lg font-light pt-2">
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

export default ProductPageOthers;
