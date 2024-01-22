import React, { useState } from "react";

const announcements = {
  0: "Lowest Prices. Highest Quality.",
  1: "We ship to anywhere in the world!",
//   2: "Free shipping to anywhere in Nigeria for orders over #500,000!",
};

const HeaderAnnouncement = () => {
  // State change every 5s to show next announcement
  const [announcementDisplay, setAnnouncementDisplay] = useState(false);
  // Random number generator to randomly show the next announcement
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  // Dynamically count the keys in the announcement database
  var count = Object.keys(announcements).length;

  const announcementChange = () => {
    let announcementToDisplay = announcements[getRandomInt(count)]
    // console.log(announcementToDisplay)
    return announcementToDisplay
  }

  setTimeout(() => {
    announcementChange()
    setAnnouncementDisplay(!announcementDisplay)
  }, 5000);


  return <div className="bg-black text-white">{announcementChange()}</div>;
};

export default HeaderAnnouncement;
