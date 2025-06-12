import { FaHeart } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { FaGift } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import logo from "../images/bookMySquad-logo.png";
const DownloadAppSection = () => {
  return (
    <section className="p-16  mx-auto relative">
      <div className="flex justify-center items-center h-[500px]">
        <div className="download-section-left w-1/2 h-full"></div>
        <div className="download-section-right w-1/2 h-full"></div>
      </div>
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 py-16 text-white">
        <h4>Download The BookMySquad Mobile App Today!</h4>
        <div className="flex gap-5 text-[#FE4A4A] items-center justify-center mt-5">
          <div className="flex gap-1 items-center">
            <FaHeart />
            <span>Shortlist Vendors</span>
          </div>
          <div className="flex gap-1 items-center">
            <HiLightBulb />
            <span>Save Wedding Ideas</span>
          </div>
          <div className="flex gap-1 items-center">
            <FaGift />
            <span>Get Free Wedding Checklist</span>
          </div>
        </div>
        <div className="mt-20 text-gray-800 text-center flex flex-col justify-center items-center">
          <p>You will receive an SMS with a link to download the app</p>
          <div className="w-fit border-b-2 border-white mt-5">
            <span>+91</span>
            <input type="text" className="w-42 bg-transparent" />
          </div>
          <button className="bg-[#C00808] px-10 py-2 text-white uppercase text-sm mt-10 rounded-full">
            Download the app
          </button>
          <div className="flex gap-2 justify-center items-center mt-10">
            <FaApple size={24} />
            <AiFillAndroid size={24} />
          </div>
        </div>
      </div>
      <div className="absolute right-44 top-44 w-36 h-80 bg-white flex justify-center items-center rounded-xl">
        <div className="bg-gray-700 w-5 h-5 absolute top-1 left-1/2 -translate-x-1/2 rounded-full"></div>
        <img src={logo} alt="" width={70} className="" />
      </div>
    </section>
  );
};

export default DownloadAppSection;
