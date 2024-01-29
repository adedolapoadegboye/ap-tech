import React from "react";
import HeaderAnnouncement from "../Components/Header-Announcement";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProductHero from "../Components/Product-hero-others";
import ProductPageOthers from "../Components/ProductPageOthers";
// import UsedProductPageEarpod from "../Components/UsedProductPageEarpod";
// import ContactForm from "../Components/Form";
// import Contact from "../Components/Contact";
import { useState } from "react";
import OthersFilter from "../Subcomponents/OthersFilter";


const Others = () => {
  const [all, setAll] = useState(false)
  const [starlinks, setStarlinks] = useState(false)
  const [chargers, setChargers] = useState(false)
  const [cases, setCases] = useState(false)
  const [pencils, setPencils] = useState(false)
  const [bands, setBands] = useState(false)
  const [speakers, setSpeakers] = useState(false)


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
        <ProductHero />
      </div>
      <div className="static z-0 px-[calc(5vw)] flex flex-col gap-10 py-[calc(5vh)]">
        <h2 className="navbar text-extrabold text-2xl md:text-4xl lg:text-6xl tracking-tighter flex justify-center items-center h-full w-full text-gray-900">
          {" "}
          Shop Other Devices and Gadgets{" "}
        </h2>
        <OthersFilter setAll={setAll} setStarlinks={setStarlinks} setChargers={setChargers} setCases={setCases} setPencils={setPencils} setBands={setBands} setSpeakers={setSpeakers}/>
        <ProductPageOthers all={all} starlinks={starlinks} chargers={chargers} cases={cases} pencils={pencils} bands={bands} speakers={speakers}/>
      </div>
      {/* <div className="static z-0 pb-[calc(5vh)] px-[calc(5vw)]">
        <h2 className="navbar text-extrabold text-2xl md:text-4xl lg:text-6xl tracking-tighter flex justify-center items-center h-full w-full text-gray-900 py-[calc(5vh)]">
          {" "}
          Shop Our Used Earpods{" "}
        </h2>
        <UsedProductPageEarpod />
      </div> */}
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

export default Others;
