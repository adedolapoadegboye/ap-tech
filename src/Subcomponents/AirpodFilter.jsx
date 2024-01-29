import React, { useState } from "react";

const AirpodFilter = (props) => {
  const {
    setAll,
    setGen2,
    setGen3,
    setProGen3,
    setMax,
  } = props;

  const [activeButton, setActiveButton] = useState("All");

  const handleFilter = (filterFunction, buttonName) => {
    // Set all buttons to false
    setAll(false);
    setGen2(false);
    setGen3(false);
    setProGen3(false);
    setMax(false);

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
          activeButton === "Gen 2" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setGen2, "Gen 2")}
      >
        Gen 2
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "Pro Gen 3" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setProGen3, "Pro Gen 3")}
      >
        Pro Gen 2
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "Max" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setMax, "Max")}
      >
        Max
      </button>
      {/* Repeat the pattern for other buttons */}
      {/* ... */}
    </div>
  );
};

export default AirpodFilter;
