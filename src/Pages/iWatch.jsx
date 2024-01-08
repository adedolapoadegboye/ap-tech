import React from "react";
import HeaderAnnouncement from "../Components/Header-Announcement";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProductHeroWatch from "../Components/Product-hero-watch";
import UsedProductPageIphone from "../Components/UsedProductPageIphone";
import ContactForm from "../Components/Form";
import Contact from "../Components/Contact";
import ProductPageIwatch from "../Components/ProductPageIwatch";

const Watch = () => {
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
      <div className="static z-0 pb-[calc(vh)] px-[calc(5vw)]">
        <h2 className="navbar text-extrabold text-2xl md:text-4xl lg:text-6xl tracking-tighter flex justify-center items-center h-full w-full text-gray-900 py-[calc(5vh)]">
          {" "}
          Shop Our New iWatches{" "}
        </h2>
        <ProductPageIwatch />
      </div>
      <div className="static z-0 pb-[calc(5vh)] px-[calc(5vw)]">
        <h2 className="navbar text-extrabold text-2xl md:text-4xl lg:text-6xl tracking-tighter flex justify-center items-center h-full w-full text-gray-900 py-[calc(5vh)]">
          {" "}
          Shop Our Used iWatches{" "}
        </h2>
        <UsedProductPageIphone />
      </div>
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

export default Watch
