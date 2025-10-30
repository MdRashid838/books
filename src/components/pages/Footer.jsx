import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import img from "../../assets/app_android.svg";
import img1 from "../../assets/app-store.svg";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col justify-center lg:flex-row p-10 items-center bg-green-800">
        <p className="text-lg text-white px-5 font-semibold border-r border-dashed border-[#D7F7F0]">Free Delivery</p>
        <p className="text-lg text-white px-5 font-semibold border-r border-dashed border-[#D7F7F0]">
          Case on Delivery
        </p>
        <p className="text-lg text-white px-5 font-semibold border-r border-dashed border-[#D7F7F0]">
          Original Product
        </p>
        <p className="text-lg text-white px-5 font-semibold">
          Easy Replacement
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 px-28 py-10">
        <div className="w-[34%] flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-gray-800">Logo</h1>
          <div className="flex flex-col gap-4">
            <p className="text-[16px] text-gray-900">
              Ever wanted to buy a book but could not because it was too
              expensive? worry not! because Bookchor is here! Bookchor, these
              days in news,is being called as the Robinhood of the world of
              books.
            </p>
            <span className="flex flex-row gap-3">
              <a href="">
                <FaInstagram  className="text-3xl text-white rounded-md bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5]"/>
              </a>
              <a href="">
                <FaFacebook className="text-3xl text-blue-700" />
              </a>
              <a href="">
                <FaXTwitter className="text-3xl text-white p-1 rounded-md bg-black" />
              </a>
            </span>
          </div>
        </div>
        <div className="w-[22%] flex flex-col gap-2">
          <h1 className="text-lg text-gray-600 font-semibold">Our Link</h1>
          <div className="flex flex-col gap-2 text-[16px]">
            <Link>About</Link>
            <Link>Contact Us</Link>
            <Link>Blogs</Link>
            <Link>Books Wholesales</Link>
            <Link>Sell with Us</Link>
          </div>
        </div>
        <div className="w-[22%] flex flex-col gap-2">
          <h1 className="text-lg text-gray-600 font-semibold">Quick Link</h1>
          <div className="flex flex-col gap-2 text-[16px]">
            <Link>Track Order</Link>
            <Link>Career</Link>
            <Link>FAQs</Link>
            <Link>Privacy & Policy</Link>
            <Link>Term & Condition</Link>
          </div>
        </div>
        <div className="w-[22%] flex flex-col gap-2">
          <h1 className="text-lg text-gray-600 font-semibold">Support</h1>
          <div className="flex flex-col gap-2 text-[16px]">
            <p className="flex flex-row items-center gap-1">
              <MdOutlineCall />
              Call:<Link>5698930950</Link>
            </p>
            <p className="flex flex-row items-center gap-1">
              <FaWhatsapp />
              Watsapp Us:<Link>3456567675</Link>
            </p>
            <p className="flex flex-row items-center gap-1">
              <CiMail /> Email:<Link>md@gmail.com</Link>
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600">Download Mobile App</p>
              <span className="flex flex-row gap-2">
                <Link>
                  <img src={img} alt="" />
                </Link>
                <Link>
                  <img src={img1} alt="" />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
