import React from "react";

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

  const handleAllFilter = () => {
    setAll(true);
    setPro(false);
    setAir(false);
    setNormal(false);
    setMini(false);
    setTwentyTwo(false);
    setTwentyOne(false);
    setTwenty(false);
    setNineteen(false);
  };

  const handleProFilter = () => {
    setAll(false);
    setPro(true);
    setAir(false);
    setNormal(false);
    setMini(false);
    setTwentyTwo(false);
    setTwentyOne(false);
    setTwenty(false);
    setNineteen(false);
  };

  const handleAirFilter = () => {
    setAll(false);
    setPro(false);
    setAir(true);
    setNormal(false);
    setMini(false);
    setTwentyTwo(false);
    setTwentyOne(false);
    setTwenty(false);
    setNineteen(false);
  };

  const handleNormalFilter = () => {
    setAll(false);
    setPro(false);
    setAir(false);
    setNormal(true);
    setMini(false);
    setTwentyTwo(false);
    setTwentyOne(false);
    setTwenty(false);
    setNineteen(false);
  };

  const handleMiniFilter = () => {
    setAll(false);
    setPro(false);
    setAir(false);
    setNormal(false);
    setMini(true);
    setTwentyTwo(false);
    setTwentyOne(false);
    setTwenty(false);
    setNineteen(false);
  };

  const handleTwentyTwoFilter = () => {
    setAll(false);
    setPro(false);
    setAir(false);
    setNormal(false);
    setMini(false);
    setTwentyTwo(true);
    setTwentyOne(false);
    setTwenty(false);
    setNineteen(false);
  };

  const handleTwentyOneFilter = () => {
    setAll(false);
    setPro(false);
    setAir(false);
    setNormal(false);
    setMini(false);
    setTwentyTwo(false);
    setTwentyOne(true);
    setTwenty(false);
    setNineteen(false);
  };
  const handleTwentyFilter = () => {
    setAll(false);
    setPro(false);
    setAir(false);
    setNormal(false);
    setMini(false);
    setTwentyTwo(false);
    setTwentyOne(false);
    setTwenty(true);
    setNineteen(false);
  };
  const handleNineteenFilter = () => {
    setAll(false);
    setPro(false);
    setAir(false);
    setNormal(false);
    setMini(false);
    setTwentyTwo(false);
    setTwentyOne(false);
    setTwenty(false);
    setNineteen(true);
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
        onClick={handleProFilter}
      >
        iPad Pro
      </button>
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handleAirFilter}
      >
        iPad Air
      </button>
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handleNormalFilter}
      >
        iPad
      </button>

      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handleMiniFilter}
      >
        iPad Mini
      </button>
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handleTwentyTwoFilter}
      >
        2022
      </button>
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handleTwentyOneFilter}
      >
        2021
      </button>
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handleTwentyFilter}
      >
        2020
      </button>
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handleNineteenFilter}
      >
        2019
      </button>
    </div>
  );
};

export default IpadFilter;
