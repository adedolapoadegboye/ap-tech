import React, { useEffect, useState } from "react";


const ProductAdvert = () => {

  const [data, setData] = useState(null);
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a fetch API call
        const responseData = await fetch('http://localhost:4000/flashsales/data');
        const responseImage = await fetch('http://localhost:4000/flashsales/images');
        const data = await responseData.json();
        const img = await responseImage.json();
        console.log(data)
        console.log(img)
        // Update state with the fetched data
        setData(data);
        setImg(img.images);
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
    return error
  }

  if(!loading){
    console.log(img[0])
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        {data.data.map((item, index) => (
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
                src={img[index]}
                alt={item["name"]}
                className="rounded-2xl"
              />
              <h2 className="navbar font-bold text-lg lg:text-xl">
                {item["name"]}
              </h2>
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