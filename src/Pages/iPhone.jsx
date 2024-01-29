import React from "react";
import { useState } from "react";
import HeaderAnnouncement from "../Components/Header-Announcement";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProductHero from "../Components/Product-hero";
import ProductPageIphone from "../Components/ProductPageIphone";
import UsedProductPageIphone from "../Components/UsedProductPageIphone";
// import ContactForm from "../Components/Form";
// import Contact from "../Components/Contact";
import IPhoneFilter from "../Subcomponents/IPhoneFilter";

const Phone = () => {
  const [all, setAll] = useState(false);
  const [series15, setSeries15] = useState(false);
  const [series14, setSeries14] = useState(false);
  const [series13, setSeries13] = useState(false);
  const [series12, setSeries12] = useState(false);
  const [series11, setSeries11] = useState(false);
  const [seriesx, setSeriesx] = useState(false);
  const [se, setSE] = useState(false);
  const [viewer, setViewer] = useState("New");

  const handleNewProducts = () => {
    setViewer("New");
  };

  const handleUsedProducts = () => {
    setViewer("UK Used");
  };



  const viewSelector = () => {
    if (viewer === "New") {
      return (
        <div className="static z-0 px-[calc(5vw)] flex flex-col gap-10 py-[calc(5vh)]">
          <h2 className="navbar text-extrabold text-2xl md:text-4xl lg:text-6xl tracking-tighter flex justify-center items-center h-full w-full text-gray-1500">
            {" "}
            Browse Our {viewer} iPhones{" "}
          </h2>
          <IPhoneFilter
            setAll={setAll}
            setSeries15={setSeries15}
            setSeries14={setSeries14}
            setSeries13={setSeries13}
            setSeries12={setSeries12}
            setSeries11={setSeries11}
            setSeriesx={setSeriesx}
            setSE={setSE}
            all={all}
            series15={series15}
            series14={series14}
            series13={series13}
            series12={series12}
            series11={series11}
            seriesx={seriesx}
            se={se}
          />
          <ProductPageIphone
            all={all}
            series15={series15}
            series14={series14}
            series13={series13}
            series12={series12}
            series11={series11}
            seriesx={seriesx}
            se={se}
          />
        </div>
      );
    } else if (viewer === "UK Used") {
      return (
        <div className="static z-0 px-[calc(5vw)] flex flex-col gap-10 py-[calc(5vh)]">
          <h2 className="navbar text-extrabold text-2xl md:text-4xl lg:text-6xl tracking-tighter flex justify-center items-center h-full w-full text-gray-1500">
            {" "}
            Browse Our {viewer} iPhones{" "}
          </h2>
          <IPhoneFilter
            setAll={setAll}
            setSeries15={setSeries15}
            setSeries14={setSeries14}
            setSeries13={setSeries13}
            setSeries12={setSeries12}
            setSeries11={setSeries11}
            setSeriesx={setSeriesx}
            setSE={setSE}
          />
          <UsedProductPageIphone
            viewer={viewer}
            all={all}
            series15={series15}
            series14={series14}
            series13={series13}
            series12={series12}
            series11={series11}
            seriesx={seriesx}
            se={se}
          />
        </div>
      );
    }
  };



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
      <div className="static z-0 justify-center flex flex-row gap-2 pt-[calc(5vh)]">
        <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          viewer === "New" && "bg-black text-green-500"
        }`}          onClick={handleNewProducts}
        >
          New
        </button>
        <button
        className={`border-2 border-black rounded-2xl px-2 py-2 hover:bg-black hover:scale-110 hover:text-green-500 ${
          viewer === "UK Used" && "bg-black text-green-500"
        }`}          onClick={handleUsedProducts}
        >
          UK Used
        </button>
      </div>
      <div>{viewSelector()}</div>
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

export default Phone;
