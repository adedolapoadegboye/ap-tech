import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import review1 from "../images/review1.mp4";
import review2 from "../images/review2.mp4";
import review3 from "../images/review3.mp4";

const Reviews = () => {
  const videoDB = {
    1: review1,
    2: review2,
    3: review3,
  };

  const [dumbRender, setDumbRender] = useState(false);
  let nextVideo = useRef(1);
  let display;

  //   console.log(videoDB[nextVideo.current]);
  const handleNextClick = () => {
    if (nextVideo.current >= Object.keys(videoDB).length) {
      nextVideo.current = 1;
      console.log(nextVideo.current);
      display = videoPlayer();
      setDumbRender(!dumbRender);
    } else {
      nextVideo.current += 1;
      console.log(nextVideo.current);
      display = videoPlayer();
      setDumbRender(!dumbRender);
    }
  };

  const handleLastClick = () => {
    if (nextVideo.current === 0) {
      nextVideo.current = 3;
      console.log(nextVideo.current);
      display = videoPlayer();
      setDumbRender(!dumbRender);
    } else {
      nextVideo.current -= 1;
      console.log(nextVideo.current);
      display = videoPlayer();
      setDumbRender(!dumbRender);
    }
  };

  const videoPlayer = () => {
    console.log(nextVideo.current);
    console.log(videoDB[nextVideo.current]);
    return (
      <div className="w-full h-full py-2 rounded-2xl">
        <video
          autoPlay
          loop
          muted
          className="w-full h-[400px] lg:h-[500px] rounded-2xl hidden lg:flex"
          src={videoDB[nextVideo.current]}
        >
          <source src={videoDB[nextVideo.current]} type="video/mp4" />
        </video>{" "}
      </div>
    );
  };

  display = videoPlayer();

  return (
    <div>
      <div className="flex flex-row w-full justify-center h-full items-center gap-14 lg:px-10">
        <div>
          <button
            onClick={handleLastClick}
            className="px-3 py-3 lg:px-6 lg:py-6 hover:scale-125 bg-white rounded-full lg:hover:bg-green-400"
          >
            {" "}
            <FaArrowLeft size={35} />
          </button>
        </div>
        <div id="videoPlayer">{display}</div>
        <div>
          <button
            onClick={handleNextClick}
            className="px-3 py-3 lg:px-6 lg:py-6 hover:scale-125 bg-white lg:hover:bg-green-400 rounded-full"
          >
            {" "}
            <FaArrowRight size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
