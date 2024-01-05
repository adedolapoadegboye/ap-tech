import React from "react";
import CEO from "../images/CEO.jpg";

const FromTheCEO = () => {
  return (
    <div className="flex flex-col lg:flex-row font-normal gap-6">
      <div className="w-full flex flex-col text-left gap-4">
        <h1 className="essentials text-lg md:text-2xl lg:text-4xl text-left w-full font-semibold">
          About Us...
        </h1>
        <h1 className="essentials text-sm md:text-lg lg:text-xl w-full text-justify">
          In the ever-evolving landscape of technology, AP Tech has not only
          remained a witness but a driving force, sculpting a rich history that
          mirrors the rapid advancements in the gadget industry. Journey with us
          as we traverse through the pages of AP Tech's history, a saga of
          innovation, resilience, and a relentless pursuit of excellence.
          <br></br>
          <br></br>
          Founded in 2019, AP Tech embarked on a mission to redefine the way
          we interact with technology. From the outset, our commitment to
          innovation set us apart. Our visionaries envisioned a future where
          cutting-edge gadgets seamlessly integrate into our lives, enhancing
          connectivity, efficiency, and, most importantly, the overall human
          experience.
          <br></br>
          <br></br>
          AP Tech's impact extends far beyond geographical borders. Our gadgets
          have found homes in the hands of users around the globe, fostering
          connections, bridging cultures, and creating a global community of
          tech enthusiasts. We take pride in being part of the digital
          transformation that unites people across continents.
          <br></br>
          <br></br>
          In conclusion, the history of AP Tech is a tapestry woven with threads
          of innovation, adaptability, and a customer-first ethos. As we
          celebrate our journey so far, we invite you to be part of the exciting
          chapters yet to be written. Join us as we continue to shape the future
          of gadgets and redefine the way we experience technology. The best is
          yet to come, and at AP Tech, the future is boundless.
        </h1>
      </div>
      <div>
        <img src={CEO} alt="CEO of AP-Tech" className="rounded-3xl" />
        <h2 className="essentials-body text-lg md:text-xl lg:text-2xl text-center">
          - Abdul-Rahman Apalando, CEO AP-Tech
        </h2>
      </div>
    </div>
  );
};

export default FromTheCEO;
