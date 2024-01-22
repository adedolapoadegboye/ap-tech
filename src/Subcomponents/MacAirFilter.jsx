import React from "react";

const MacProFilter = (props) => {
    // const [all, setAll] = useState(true)
    // const [smallScreen, setSmallScreen] = useState(false)
    // const [bigScreen, setBigScreen] = useState(false)
    // const [M1, setM1] = useState(false)
    // const [M2, setM2] = useState(false)
    // const [Intel, setIntel] = useState(false)

    const {setAll, setSmallScreen, setBigScreen, setM1, setM2, setIntel} = props

    const handleAllFilter = () => {
        setAll(true)
        setSmallScreen(false)
        setBigScreen(false)
        setM1(false)
        setM2(false)
        setIntel(false)
    }

    const handleSmallScreenFilter = () => {
        setAll(false)
        setSmallScreen(true)
        setBigScreen(false)
        setM1(false)
        setM2(false)
        setIntel(false)
    }

    const handleBigScreenFilter = () => {
        setAll(false)
        setSmallScreen(false)
        setBigScreen(true)
        setM1(false)
        setM2(false)
        setIntel(false)
    }

    const handleM1Filter = () => {
        setAll(false)
        setSmallScreen(false)
        setBigScreen(false)
        setM1(true)
        setM2(false)
        setIntel(false)
    }

    const handleM2Filter = () => {
        setAll(false)
        setSmallScreen(false)
        setBigScreen(false)
        setM1(false)
        setM2(true)
        setIntel(false)
    }

    const handleIntelFilter = () => {
        setAll(false)
        setSmallScreen(false)
        setBigScreen(false)
        setM1(false)
        setM2(false)
        setIntel(true)
    }

  return (
    <div className="flex justify-center gap-6 lg:gap-8">
        <button className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500" onClick={handleAllFilter}>All</button>
        <button className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500" onClick={handleSmallScreenFilter}>13"</button>
        <button className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500" onClick={handleBigScreenFilter}>15"</button>
        <button className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500" onClick={handleM1Filter}>M1</button>
        <button className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500" onClick={handleM2Filter}>M2</button>
        <button className="border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500" onClick={handleIntelFilter}>Intel</button>
    </div>
  );
};

export default MacProFilter;
