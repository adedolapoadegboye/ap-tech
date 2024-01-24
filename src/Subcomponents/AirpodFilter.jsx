import React from "react";

const AirpodFilter = (props) => {
  const {
    setAll,
    setGen2,
    setGen3,
    setProGen3,
    setMax,
  } = props;

  const handleAllFilter = () => {
    setAll(true);
    setGen2(false);
    setGen3(false);
    setProGen3(false);
    setMax(false);
  };

  const handleGen2Filter = () => {
    setAll(false);
    setGen2(true);
    setGen3(false);
    setProGen3(false);
    setMax(false);
  };

  const handleGen3Filter = () => {
    setAll(false);
    setGen2(false);
    setGen3(true);
    setProGen3(false);
    setMax(false);
  };

  const handleProGen3Filter = () => {
    setAll(false);
    setGen2(false);
    setGen3(false);
    setProGen3(true);
    setMax(false);
  };

  const handleMaxFilter = () => {
    setAll(false);
    setGen2(false);
    setGen3(false);
    setProGen3(false);
    setMax(true);
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
        onClick={handleGen2Filter}
      >
        Gen 2
      </button>
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handleGen3Filter}
      >
        Gen 3
      </button>
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handleProGen3Filter}
      >
        Pro Gen 3
      </button>

      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handleMaxFilter}
      >
        Max
      </button>
    </div>
  );
};

export default AirpodFilter;
