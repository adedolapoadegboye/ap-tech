import React, { useState } from "react";

const IWatchFilter = (props) => {
  const {
    setAll,
    setSeries9,
    setSeries8,
    setSeries7,
    setSeries6,
    setSeries5,
    setSeries4,
    setSeries3,
    setSE,
    setUltra,
  } = props;

  const [activeButton, setActiveButton] = useState("All");

  const handleFilter = (filterFunction, buttonName) => {
    // Set all buttons to false
    setAll(false)
    setSeries9(false)
    setSeries8(false)
    setSeries7(false)
    setSeries6(false)
    setSeries5(false)
    setSeries4(false)
    setSeries3(false)
    setSE(false)
    setUltra(false)

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
          activeButton === "Ultra Series" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setUltra, "Ultra Series")}
      >
        Ultra Series
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "Series 9" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setSeries9, "Series 9")}
      >
        Series 9
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "Series 8" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setSeries8, "Series 8")}
      >
        Series 8
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "Series 7" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setSeries7, "Series 7")}
      >
        Series 7
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "Series 6" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setSeries6, "Series 6")}
      >
        Series 6
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "Series 5" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setSeries5, "Series 5")}
      >
        Series 5
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "Series 4" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setSeries4, "Series 4")}
      >
        Series 4
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "Series 3" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setSeries3, "Series 3")}
      >
        Series 3
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "SE Series" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setSE, "SE Series")}
      >
        SE Series
      </button>
      {/* Repeat the pattern for other buttons */}
      {/* ... */}
    </div>
  );
};

export default IWatchFilter;


