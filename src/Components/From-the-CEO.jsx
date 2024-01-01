import React from "react";
import CEO from "../images/CEO.jpg";

const FromTheCEO = () => {
  return (
    <div className="flex flex-col lg:flex-row px-2">
      <div className="w-full flex flex-col text-left gap-5 justify-center items-center">
        <h1 className="essentials-body text-lg md:text-2xl lg:text-4xl text-left w-full">
          About Us...
        </h1>
        <h1 className="essentials-body text-lg md:text-2xl lg:text-4xl w-full">
          "At AP-Tech, our goal is to fuel connectivity and be a catalyst for
          creativity as we strive to be the integrator for a tech-inspired
          revolution, one gadget at a time."
        </h1>
      </div>
      <div>
        <img src={CEO} alt="CEO of AP-Tech" />
        <h2 className="essentials-body text-lg md:text-xl lg:text-2xl text-center">
          - Abdul-Rahman Apalando, CEO AP-Tech
        </h2>
      </div>
    </div>
  );
};

export default FromTheCEO;
