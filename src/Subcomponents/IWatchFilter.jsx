import React from "react";

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

  const handleAllFilter = () => {
    setAll(true)
    setSeries9(false)
    setSeries8(false)
    setSeries7(false)
    setSeries6(false)
    setSeries5(false)
    setSeries4(false)
    setSeries3(false)
    setSE(false)
    setUltra(false)
  };

  const handle9Filter = () => {
    setAll(false)
    setSeries9(true)
    setSeries8(false)
    setSeries7(false)
    setSeries6(false)
    setSeries5(false)
    setSeries4(false)
    setSeries3(false)
    setSE(false)
    setUltra(false)
  };

  const handle8Filter = () => {
    setAll(false)
    setSeries9(false)
    setSeries8(true)
    setSeries7(false)
    setSeries6(false)
    setSeries5(false)
    setSeries4(false)
    setSeries3(false)
    setSE(false)
    setUltra(false)
  };

  const handle7Filter = () => {
    setAll(false)
    setSeries9(false)
    setSeries8(false)
    setSeries7(true)
    setSeries6(false)
    setSeries5(false)
    setSeries4(false)
    setSeries3(false)
    setSE(false)
    setUltra(false)
  };

  const handle6Filter = () => {
    setAll(false)
    setSeries9(false)
    setSeries8(false)
    setSeries7(false)
    setSeries6(true)
    setSeries5(false)
    setSeries4(false)
    setSeries3(false)
    setSE(false)
    setUltra(false)
  };

  const handle5Filter = () => {
    setAll(false)
    setSeries9(false)
    setSeries8(false)
    setSeries7(false)
    setSeries6(false)
    setSeries5(true)
    setSeries4(false)
    setSeries3(false)
    setSE(false)
    setUltra(false)
  };

  const handle4Filter = () => {
    setAll(false)
    setSeries9(false)
    setSeries8(false)
    setSeries7(false)
    setSeries6(false)
    setSeries5(false)
    setSeries4(true)
    setSeries3(false)
    setSE(false)
    setUltra(false)
  };

  const handle3Filter = () => {
    setAll(false)
    setSeries9(false)
    setSeries8(false)
    setSeries7(false)
    setSeries6(false)
    setSeries5(false)
    setSeries4(false)
    setSeries3(true)
    setSE(false)
    setUltra(false)
  };

  const handleSEFilter = () => {
    setAll(false)
    setSeries9(false)
    setSeries8(false)
    setSeries7(false)
    setSeries6(false)
    setSeries5(false)
    setSeries4(false)
    setSeries3(false)
    setSE(true)
    setUltra(false)
  };

  const handleUltraFilter = () => {
    setAll(false)
    setSeries9(false)
    setSeries8(false)
    setSeries7(false)
    setSeries6(false)
    setSeries5(false)
    setSeries4(false)
    setSeries3(false)
    setSE(false)
    setUltra(true)
  };


  return (
    <div className="grid grid-cols-4 lg:flex lg:justify-center gap-4 lg:gap-8">
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handleAllFilter}
      >
        All
      </button>
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handle9Filter}
      >
        Series 9
      </button>
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handle8Filter}
      >
        Series 8
      </button>
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handle7Filter}
      >
        Series 7
      </button>

      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handle6Filter}
      >
        Series 6
      </button>
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handle5Filter}
      >
        Series 5
      </button>
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handle4Filter}
      >
        Series 4
      </button>
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handle3Filter}
      >
        Series 3
      </button>
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handleSEFilter}
      >
        SE
      </button>
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handleUltraFilter}
      >
        Ultra
      </button>
    </div>
  );
};

export default IWatchFilter;
