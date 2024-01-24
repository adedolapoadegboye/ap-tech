import React from "react";

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

  const handleAllFilter = () => {
    setAll(true);
    setStarlinks(false);
    setChargers(false);
    setCases(false);
    setPencils(false);
    setBands(false);
    setSpeakers(false);
  };

  const handleStarlinkFilter = () => {
    setAll(false);
    setStarlinks(true);
    setChargers(false);
    setCases(false);
    setPencils(false);
    setBands(false);
    setSpeakers(false);
  };

  const handleChargersFilter = () => {
    setAll(false);
    setStarlinks(false);
    setChargers(true);
    setCases(false);
    setPencils(false);
    setBands(false);
    setSpeakers(false);
  };

  const handleCasesFilter = () => {
    setAll(false);
    setStarlinks(false);
    setChargers(false);
    setCases(true);
    setPencils(false);
    setBands(false);
    setSpeakers(false);
  };

  const handlePencilsFilter = () => {
    setAll(false);
    setStarlinks(false);
    setChargers(false);
    setCases(false);
    setPencils(true);
    setBands(false);
    setSpeakers(false);

  };

  const handleBandsFilter = () => {
    setAll(false);
    setStarlinks(false);
    setChargers(false);
    setCases(false);
    setPencils(false);
    setBands(true);
    setSpeakers(false);
  };

  const handleSpeakerFilter = () => {
    setAll(false);
    setStarlinks(false);
    setChargers(false);
    setCases(false);
    setPencils(false);
    setBands(false);
    setSpeakers(true);
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
        onClick={handleStarlinkFilter}
      >
        Starlink
      </button>
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handleChargersFilter}
      >
        Chargers
      </button>
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handleCasesFilter}
      >
        Cases
      </button>

      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handlePencilsFilter}
      >
        Pencils
      </button>
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handleBandsFilter}
      >
        Bands
      </button>
      <button
        className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500"
        onClick={handleSpeakerFilter}
      >
        Speakers
      </button>
    </div>
  );
};

export default OthersFilter;
