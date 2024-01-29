import React, { useState } from "react";

const MacAirFilter = (props) => {
  const { setAll, setSmallScreen, setBigScreen, setM1, setM2, setIntel } = props;

  const [activeButton, setActiveButton] = useState("All");

  const handleFilter = (filterFunction, buttonName) => {
    // Set all buttons to false
    setAll(false);
    setSmallScreen(false);
    setBigScreen(false);
    setM1(false);
    setM2(false);
    setIntel(false);

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
          activeButton === "13\"" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setSmallScreen, "13\"")}
      >
        13"
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "15\"" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setBigScreen, "15\"")}
      >
        15"
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "M1" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setM1, "M1")}
      >
        M1
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "M2" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setM2, "M2")}
      >
        M2
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "Intel" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setIntel, "Intel")}
      >
        Intel
      </button>
    </div>
  );
};

export default MacAirFilter;
