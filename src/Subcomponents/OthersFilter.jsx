import React, { useState } from "react";

const OthersFilter = (props) => {
  const {
    setAll,
    setStarlinks,
    setChargers,
    setCases,
    setPencils,
    setBands,
    setSpeakers,
  } = props;

  const [activeButton, setActiveButton] = useState("All");

  const handleFilter = (filterFunction, buttonName) => {
    // Set all buttons to false
    setAll(false);
    setStarlinks(false);
    setChargers(false);
    setCases(false);
    setPencils(false);
    setBands(false);
    setSpeakers(false);

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
          activeButton === "Starlink" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setStarlinks, "Starlink")}
      >
        Starlink
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "Chargers" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setChargers, "Chargers")}
      >
        Chargers
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "Cases" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setCases, "Cases")}
      >
        Cases
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "Apple Pencils" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setPencils, "Apple Pencils")}
      >
        Apple Pencils
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "Bands" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setBands, "Bands")}
      >
        Bands
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "Speakers" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setSpeakers, "Speakers")}
      >
        Speakers
      </button>
      {/* Repeat the pattern for other buttons */}
      {/* ... */}
    </div>
  );
};

export default OthersFilter;
