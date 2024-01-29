import React, { useState } from "react";

const IpadFilter = (props) => {
  const {
    setAll,
    setPro,
    setAir,
    setNormal,
    setMini,
    setTwentyTwo,
    setTwentyOne,
    setTwenty,
    setNineteen,
  } = props;

  const [activeButton, setActiveButton] = useState("All");

  const handleFilter = (filterFunction, buttonName) => {
    // Set all buttons to false
    setAll(false);
    setPro(false);
    setAir(false);
    setNormal(false);
    setMini(false);
    setTwentyTwo(false);
    setTwentyOne(false);
    setTwenty(false);
    setNineteen(false);

    // Call the corresponding filter function
    filterFunction(true);

    // Update the active button
    setActiveButton(buttonName);
  };

  return (
    <div className="grid grid-cols-4 lg:flex lg:justify-center gap-4 lg:gap-8">
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "All" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setAll, "All")}
      >
        All
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "iPad Pro" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setPro, "iPad Pro")}
      >
        iPad Pro
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "iPad Air" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setAir, "iPad Air")}
      >
        iPad Air
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "iPad" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setNormal, "iPad")}
      >
        iPad
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "iPad Mini" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setMini, "iPad Mini")}
      >
        iPad Mini
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "iPad 2022" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setTwentyTwo, "iPad 2022")}
      >
        iPad 2022
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "iPad 2021" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setTwentyOne, "iPad 2021")}
      >
        iPad 2021
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "iPad 2020" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setTwenty, "iPad 2020")}
      >
        iPad 2020
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "iPad 2019" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setNineteen, "iPad 2019")}
      >
        iPad 2019
      </button>
      {/* Repeat the pattern for other buttons */}
      {/* ... */}
    </div>
  );
};

export default IpadFilter;
