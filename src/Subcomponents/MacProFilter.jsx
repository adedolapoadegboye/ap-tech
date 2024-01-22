import React from "react";

const MacProFilter = (props) => {
    // const [all, setAll] = useState(true)
    // const [smallScreen, setSmallScreen] = useState(false)
    // const [bigScreen, setBigScreen] = useState(false)
    // const [M3, setM3] = useState(false)
    // const [M3Pro, setM3Pro] = useState(false)
    // const [M3Max, setM3Max] = useState(false)

    const {setAll, setSmallScreen, setBigScreen, setM3, setM3Pro, setM3Max} = props

    const handleAllFilter = () => {
        setAll(true)
        setSmallScreen(false)
        setBigScreen(false)
        setM3(false)
        setM3Pro(false)
        setM3Max(false)
    }

    const handleSmallScreenFilter = () => {
        setAll(false)
        setSmallScreen(true)
        setBigScreen(false)
        setM3(false)
        setM3Pro(false)
        setM3Max(false)
    }

    const handleBigScreenFilter = () => {
        setAll(false)
        setSmallScreen(false)
        setBigScreen(true)
        setM3(false)
        setM3Pro(false)
        setM3Max(false)
    }

    const handleM3Filter = () => {
        setAll(false)
        setSmallScreen(false)
        setBigScreen(false)
        setM3(true)
        setM3Pro(false)
        setM3Max(false)
    }

    const handleM3ProFilter = () => {
        setAll(false)
        setSmallScreen(false)
        setBigScreen(false)
        setM3(false)
        setM3Pro(true)
        setM3Max(false)
    }

    const handleM3MaxFilter = () => {
        setAll(false)
        setSmallScreen(false)
        setBigScreen(false)
        setM3(false)
        setM3Pro(false)
        setM3Max(true)
    }

  return (
    <div className="flex justify-center gap-6 lg:gap-8">
        <button className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500" onClick={handleAllFilter}>All</button>
        <button className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500" onClick={handleSmallScreenFilter}>14"</button>
        <button className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500" onClick={handleBigScreenFilter}>16"</button>
        <button className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500" onClick={handleM3Filter}>M3</button>
        <button className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500" onClick={handleM3ProFilter}>M3 Pro</button>
        <button className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500" onClick={handleM3MaxFilter}>M3 Max</button>
    </div>
  );
};

export default MacProFilter;
