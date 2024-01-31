import React from "react";
import { Link } from "react-router-dom";
import {
  FaStore,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaSnapchat,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbExternalLink } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="grid lg:grid-cols-4 lg:grid-rows-1 text-gray-400 text-left gap-4 lg:gap-10 py-8 px-4">
      <div className="border-b-2 pb-4 lg:px-4 lg:border-b-0 lg:border-e-2 border-gray-700">
        <h1 className="nav text-sm text-gray-400">ABOUT US</h1>
        <br></br>
        <h2 className="nav text-xs text-gray-400 text-justify font-normal">
          At AP tech, our mission is to redefine the tech shopping experience by
          providing a curated selection of high-quality gadgets, devices, and
          accessories that seamlessly integrate into the fast-paced lifestyle of
          our customers.
        </h2>
        <br></br>
        <Link className="nav text-xs text-green-300 text-justify" to="/about">
            Read more ...
        </Link>
      </div>
      <div className="border-b-2 pb-4 lg:border-b-0 lg:border-e-2 border-gray-700 text-gray-400">
        <h1 className="nav text-sm text-gray-400">SOCIAL LINKS</h1>
        <br></br>
        <div className="flex gap-10 justify-start items-center">
          <FaInstagram size={15} />
          <a
            href="https://www.instagram.com/ap__tech/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-sm font-normal">@ap__tech</span>{" "}
          </a>
        </div>
        <div className="flex gap-10 justify-start items-center">
          <FaWhatsapp size={15} />
          <a
            href="https://wa.me/2348134864048"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-sm font-normal text-gray-400">wa.me/2348134864048</span>{" "}
          </a>
        </div>
        <div className="flex gap-10 justify-start items-center">
          <FaTwitter size={15} />
          <a
            href="https://twitter.com/ap__tech/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-sm font-normal text-gray-400">@ap__tech</span>{" "}
          </a>
        </div>
        <div className="flex gap-10 justify-start items-center">
          <FaSnapchat size={15} />
          <a
            href="https://www.snapchat.com/add/apalando_raman/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-sm text-gray-400 font-normal">
              @apalando_raman
            </span>{" "}
          </a>
        </div>
        <div className="flex gap-10 justify-start items-center">
          <FaTiktok size={15} />
          <a
            href="https://www.tiktok.com/@ap_tech"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-sm font-normal text-gray-400">@ap_tech</span>{" "}
          </a>
        </div>
        <div className="flex gap-10 justify-start items-center">
          <MdEmail size={15} />
          <a
            href="https://www.tiktok.com/@ap_tech"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-sm font-normal text-gray-400">admin@aptechstore.com</span>{" "}
          </a>
        </div>
      </div>
      <div className="border-b-2 pb-4 lg:px-4 lg:border-b-0 lg:border-e-2 border-gray-700 text-gray-400">
        <h1 className="nav text-sm text-gray-400">QUICK LINKS</h1>
        <br></br>
        <ul>
          <li>
            <Link to="/iphone" className="font-normal text-sm text-gray-400">
              - iPhones
            </Link>
          </li>
          <li>
            <Link to="/iwatch" className="font-normal text-sm text-gray-400">
              - iWatches
            </Link>
          </li>
          <li>
            <Link to="/mac" className="font-normal text-sm text-gray-400">
              - MacBooks
            </Link>
          </li>
          <li>
            <Link to="/airpod" className="font-normal text-sm text-gray-400">
              - Airpods
            </Link>
          </li>
          <li>
            <Link to="/ipad" className="font-normal text-sm text-gray-400">
              - iPads
            </Link>
          </li>
          <li>
            <Link to="/others" className="font-normal text-gray-400 text-sm">
              - Others
            </Link>
          </li>
        </ul>
      </div>
      <div className="border-b-2 pb-4 lg:px-4 lg:border-b-0 border-gray-700 text-gray-400">
        <h1 className="nav text-sm text-gray-400 flex gap-4 justify-start items-center">
          <FaStore size={15} />
          STORE ADDRESS
        </h1>
        <br></br>
        <h2 className="text-sm font-normal">
          Shop E32, Oke Family Shopping Complex, Opposite Niger junction, Emir's
          road, Ilorin, Kwara State, Nigeria.
        </h2>
        <br></br>
        <a
          href="https://maps.app.goo.gl/zVU3SZ1ND5GVUwMUA"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="flex justify-left gap-1 items-center font-normal text-sm nav text-gray-400 hover:text-green-500">
            Google map <TbExternalLink size={15} />
          </h3>
        </a>
      </div>
    </div>
  );
};

export default Footer;
