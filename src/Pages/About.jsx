import React from "react";
import HeaderAnnouncement from "../Components/Header-Announcement";
import Navbar from "../Components/Navbar";
import FromTheCEO from "../Components/From-the-CEO";
import Footer from "../Components/Footer";
// import ApTechEssentials from "../Components/Ap-Tech-Essentials";

const About = () => {
  return (
    <div className="bg-neutral-200 relative flex flex-col">
      <div className="sticky top-0 left-0 right-0 flex flex-col z-20 pb-[calc(3vh)] lg:pb-[calc(6vh)]">
        <div className="w-screen h-fit text-white bg-black flex justify-center font-bold text-center">
          {" "}
          <HeaderAnnouncement />
        </div>
        <div className="w-screen h-fit text-black bg-white font-bold text-center">
          <Navbar />
        </div>
      </div>
      <div className="static z-0 pb-[calc(6vh)] px-[calc(5vw)]">
        <FromTheCEO />
      </div>
      {/* <div className="static z-0 hidden lg:flex pb-[calc(6vh)] px-[calc(5vw)]">
        <ApTechEssentials />
      </div> */}
      <div className="static z-0 pb-[calc(0vh)] bg-gray-900">
        <Footer />
      </div>
    </div>
  );
};

export default About;
