import React from "react";
import { useState } from "react";
import HeaderAnnouncement from "../Components/Header-Announcement";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProductPageMacPro from "../Components/ProductPageMacPro";
import ProductPageMacAir from "../Components/ProductPageMacAir";
// import ContactForm from "../Components/Form";
// import Contact from "../Components/Contact";
import ProductHeroMac from "../Components/Product-hero-mac";
import MacProFilter from "../Subcomponents/MacProFilter";
import MacAirFilter from "../Subcomponents/MacAirFilter";

const Mac = () => {
  const [allPro, setAllPro] = useState(false)
  const [smallScreenPro, setSmallScreenPro] = useState(false)
  const [bigScreenPro, setBigScreenPro] = useState(false)
  const [M3, setM3] = useState(false)
  const [M3Pro, setM3Pro] = useState(false)
  const [M3Max, setM3Max] = useState(false)

  const [allAir, setAllAir] = useState(false)
  const [smallScreenAir, setSmallScreenAir] = useState(false)
  const [bigScreenAir, setBigScreenAir] = useState(false)
  const [M1, setM1] = useState(false)
  const [M2, setM2] = useState(false)
  const [intel, setIntel] = useState(false)
  return (
    <div className="bg-neutral-200 relative flex flex-col gap-0">
      <div className="sticky top-0 left-0 right-0 flex flex-col z-20 pb-[calc(0vh)] lg:pb-0">
        <div className="w-screen h-fit text-white bg-black flex justify-center font-bold text-center">
          {" "}
          <HeaderAnnouncement />
        </div>
        <div className="w-screen h-fit text-black bg-white font-bold text-center">
          <Navbar />
        </div>
      </div>
      <div className="static z-0 bg-gray-900 hidden lg:flex">
        <ProductHeroMac />
      </div>
      <div className="static z-0 px-[calc(5vw)] flex flex-col gap-10 py-[calc(5vh)]">
        <h2 className="navbar text-extrabold text-2xl md:text-4xl lg:text-6xl tracking-tighter flex justify-center items-center h-full w-full text-gray-900">
          {" "}
          Choose your new MacBook Pro{" "}
        </h2>
        <MacProFilter setAll={setAllPro} setSmallScreen={setSmallScreenPro} setBigScreen={setBigScreenPro} setM3={setM3} setM3Pro={setM3Pro} setM3Max={setM3Max}/>
        <ProductPageMacPro all={allPro} smallScreen={smallScreenPro} bigScreen={bigScreenPro} M3={M3} M3Pro={M3Pro} M3Max={M3Max} />
      </div>
      <div className="static z-0 px-[calc(5vw)] flex flex-col gap-10 py-[calc(5vh)]">
        <h2 className="navbar text-extrabold text-2xl md:text-4xl lg:text-6xl tracking-tighter flex justify-center items-center h-full w-full text-gray-900">
          {" "}
          Choose your new Macbook Air{" "}
        </h2>
        <MacAirFilter setAll={setAllAir} setSmallScreen={setSmallScreenAir} setBigScreen={setBigScreenAir} setM1={setM1} setM2={setM2} setIntel={setIntel}/>
        <ProductPageMacAir all={allAir} smallScreen={smallScreenAir} bigScreen={bigScreenAir} M1={M1} M2={M2} intel={intel} />
      </div>
      {/* <div className="px-[calc(5vw)] flex justify-center pb-[calc(6vh)]">
        <div className="static z-0 px-2 h-full w-full md:w-1/2 rounded-2xl">
          <Contact />
        </div>
        <div className="static z-0 px-2 hidden">
          <ContactForm />
        </div>
      </div> */}
      <div className="static z-0 pt-[calc(vh)] px-2 bg-gray-900">
        <Footer />
      </div>
    </div>
  );
};

export default Mac;
