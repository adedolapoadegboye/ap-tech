import React from "react";
import { useState } from "react";
import HeaderAnnouncement from "../Components/Header-Announcement";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProductHeroWatch from "../Components/Product-hero-watch";
import UsedProductPageIwatch from "../Components/UsedProductPageIwatch";
import ContactForm from "../Components/Form";
import Contact from "../Components/Contact";
import ProductPageIwatch from "../Components/ProductPageIwatch";
import IWatchFilter from "../Subcomponents/IWatchFilter";

const Watch = () => {
  const [all, setAll] = useState(false);
  const [series9, setSeries9] = useState(false);
  const [series8, setSeries8] = useState(false);
  const [series7, setSeries7] = useState(false);
  const [series6, setSeries6] = useState(false);
  const [series5, setSeries5] = useState(false);
  const [series4, setSeries4] = useState(false);
  const [series3, setSeries3] = useState(false);
  const [se, setSE] = useState(false);
  const [ultra, setUltra] = useState(false);
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
          <h2 className="navbar text-extrabold text-2xl md:text-4xl lg:text-6xl tracking-tighter flex justify-center items-center h-full w-full text-gray-900">
            {" "}
            Browse Our {viewer} iWatches{" "}
          </h2>
          <IWatchFilter
            setAll={setAll}
            setSeries9={setSeries9}
            setSeries8={setSeries8}
            setSeries7={setSeries7}
            setSeries6={setSeries6}
            setSeries5={setSeries5}
            setSeries4={setSeries4}
            setSeries3={setSeries3}
            setSE={setSE}
            setUltra={setUltra}
          />
          <ProductPageIwatch
            all={all}
            series9={series9}
            series8={series8}
            series7={series7}
            series6={series6}
            series5={series5}
            series4={series4}
            series3={series3}
            se={se}
            ultra={ultra}
          />
        </div>
      );
    } else if(viewer === "UK Used"){
      return (
        <div className="static z-0 px-[calc(5vw)] flex flex-col gap-10 py-[calc(5vh)]">
          <h2 className="navbar text-extrabold text-2xl md:text-4xl lg:text-6xl tracking-tighter flex justify-center items-center h-full w-full text-gray-900">
            {" "}
            Browse Our {viewer} iWatches{" "}
          </h2>
          <IWatchFilter
            setAll={setAll}
            setSeries9={setSeries9}
            setSeries8={setSeries8}
            setSeries7={setSeries7}
            setSeries6={setSeries6}
            setSeries5={setSeries5}
            setSeries4={setSeries4}
            setSeries3={setSeries3}
            setSE={setSE}
            setUltra={setUltra}
          />
          <UsedProductPageIwatch
            viewer={viewer}
            all={all}
            series9={series9}
            series8={series8}
            series7={series7}
            series6={series6}
            series5={series5}
            series4={series4}
            series3={series3}
            se={se}
            ultra={ultra}
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
        <ProductHeroWatch />
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
      <div className="px-[calc(5vw)] flex justify-center pb-[calc(6vh)]">
        <div className="static z-0 px-2 h-full w-full md:w-1/2 rounded-2xl">
          <Contact />
        </div>
        <div className="static z-0 px-2 hidden">
          <ContactForm />
        </div>
      </div>
      <div className="static z-0 pt-[calc(vh)] px-2 bg-gray-900">
        <Footer />
      </div>
    </div>
  );
};

export default Watch;
