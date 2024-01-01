import React from "react";
import {
  FaStore,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaSnapchat,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="navbar flex flex-col h-full w-full justify-center items-center py-12">
      <div className="font-normal text-md flex flex-col w-full h-full gap-6">
        <div>
          <h1 className="text-2xl lg:text-4xl text-center">
            {" "}
            We don't just sell gadgets, we sell Happiness!
          </h1>
          {/* <h2 className="text-center text-xl lg:text-2xl">
            {" "}
            Get in touch with us today{" "}
          </h2> */}
        </div>
        <div className="flex w-full h-full gap-6">
          <FaStore size={40} />
          <span>
            E32, Oke Family Shopping Complex, Opposite Niger junction, Emir's
            road, Ilorin, Kwara State, Nigeria.
          </span>{" "}
        </div>
        <div className="flex w-full h-full gap-6">
          <FaInstagram size={30} />
          <a
            href="https://www.instagram.com/ap__tech/"
            target="_blank"
            rel="noreferrer"
          >
            <span>@ap__tech</span>{" "}
          </a>
        </div>
        <div className="flex w-full h-full gap-6">
          <FaWhatsapp size={30} />
          <a
            href="https://web.whatsapp.com/send/?phone=2348134864048&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <span>wa.me/2348134864048</span>{" "}
          </a>
        </div>
        <div className="flex w-full h-full gap-6">
          <FaTwitter size={30} />
          <a
            href="https://twitter.com/ap__tech/"
            target="_blank"
            rel="noreferrer"
          >
            <span>@ap__tech</span>{" "}
          </a>
        </div>
        <div className="flex w-full h-full gap-6">
          <FaSnapchat size={30} />
          <a
            href="https://www.snapchat.com/add/apalando_raman/"
            target="_blank"
            rel="noreferrer"
          >
            <span>@apalando_raman</span>{" "}
          </a>
        </div>
        <div className="flex w-full h-full gap-6">
          <FaTiktok size={30} />
          <a
            href="https://www.tiktok.com/@ap_tech"
            target="_blank"
            rel="noreferrer"
          >
            <span>@ap_tech</span>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
