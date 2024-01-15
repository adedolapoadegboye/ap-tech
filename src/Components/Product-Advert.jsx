import React, { useEffect, useState } from "react";

const ProductAdvert = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let image = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a fetch API call
        const responseData = await fetch(
          "http://localhost:4000/flashsales/data"
        );
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

  if (data) {
    data.map((data) => image.push(data["image"]));
  }

  if (!loading) {
    console.log(data);
    console.log(image);
    return (
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-end gap-8 border-2 py-3 lg:py-6 px-3 lg:px-6 bg-gray-900 text-white rounded-2xl"
          >
            <a
              href="https://web.whatsapp.com/send/?phone=2348134864048&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={item.image}
                alt={item["name"]}
                className="rounded-2xl"
              />
              <h2 className="navbar font-bold text-lg lg:text-xl">
                {item["name"]}
              </h2>
              <h3 className="flex justify-center">{item["extra"].map((extra,key) => <div key={key} className="px-2 py-2">{extra}</div>)}</h3>
              <h3>
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

export default ProductAdvert;
