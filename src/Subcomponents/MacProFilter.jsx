import React, { useState } from "react";

const MacProFilter = (props) => {
  const { setAll, setSmallScreen, setBigScreen, setM3, setM3Pro, setM3Max } = props;

  const [activeButton, setActiveButton] = useState("All");

  const handleFilter = (filterFunction, buttonName) => {
    // Set all buttons to false
    setAll(false);
    setSmallScreen(false);
    setBigScreen(false);
    setM3(false);
    setM3Pro(false);
    setM3Max(false);

    // Call the corresponding filter function
    filterFunction(true);

    // Update the active button
    setActiveButton(buttonName);
  };

  return (
    <div className="flex justify-center gap-6 lg:gap-8">
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
          activeButton === "14\"" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setSmallScreen, "14\"")}
      >
        14"
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "16\"" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setBigScreen, "16\"")}
      >
        16"
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "M3" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setM3, "M3")}
      >
        M3
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "M3 Pro" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setM3Pro, "M3 Pro")}
      >
        M3 Pro
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "M3 Max" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setM3Max, "M3 Max")}
      >
        M3 Max
      </button>
    </div>
  );
};

export default MacProFilter;
