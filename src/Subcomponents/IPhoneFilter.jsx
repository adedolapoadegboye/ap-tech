import React, { useState } from "react";

const IPhoneFilter = (props) => {
  const {
    setAll,
    setSeries15,
    setSeries14,
    setSeries13,
    setSeries12,
    setSeries11,
    setSeriesx,
    setSE,
  } = props;

  const [activeButton, setActiveButton] = useState("All");

  const handleFilter = (filterFunction, buttonName) => {
    // Set all buttons to false
    setAll(false);
    setSeries15(false);
    setSeries14(false);
    setSeries13(false);
    setSeries12(false);
    setSeries11(false);
    setSeriesx(false);
    setSE(false);

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
          activeButton === "Series 15" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setSeries15, "Series 15")}
      >
        Series 15
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "Series 14" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setSeries14, "Series 14")}
      >
        Series 14
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "Series 13" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setSeries13, "Series 13")}
      >
        Series 13
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "Series 12" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setSeries12, "Series 12")}
      >
        Series 12
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "Series 11" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setSeries11, "Series 11")}
      >
        Series 11
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "X Series" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setSeriesx, "Series X")}
      >
        X Series
      </button>
      <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          activeButton === "SE Series" && "bg-black text-green-500"
        }`}
        onClick={() => handleFilter(setSE, "Series SE")}
      >
        SE Series
      </button>
      {/* Repeat the pattern for other buttons */}
      {/* ... */}
    </div>
  );
};

export default IPhoneFilter;

