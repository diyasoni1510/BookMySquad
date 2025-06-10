import React from "react";
import { FaHeart, FaGift, FaSave } from "react-icons/fa";
import { FaApple, FaAndroid } from "react-icons/fa6";

const DownloadAppSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#3d0c0c] to-black rounded-xl py-12 px-6 md:px-20 text-white flex flex-col md:flex-row justify-between items-center gap-10">
      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Download The BookMySquad Mobile App Today!
        </h2>

        <div className="flex gap-6 text-sm md:text-base text-red-300 mb-6">
          <div className="flex items-center gap-1">
            <FaHeart className="text-red-400" /> Shortlist Vendors
          </div>
          <div className="flex items-center gap-1">
            <FaSave className="text-red-400" /> Save Wedding Ideas
          </div>
          <div className="flex items-center gap-1">
            <FaGift className="text-red-400" /> Get Free Wedding Checklist
          </div>
        </div>

        <p className="mb-4 text-gray-200">
          You will receive an SMS with a link to download the app
        </p>

        <div className="flex gap-2 items-center mb-4">
          <span className="text-lg">91+</span>
          <input
            type="text"
            placeholder="Enter phone number"
            className="bg-white text-black px-4 py-2 rounded-md outline-none w-full max-w-sm"
          />
        </div>

        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-full transition duration-300">
          DOWNLOAD THE APP
        </button>

        <div className="flex gap-4 mt-4 text-2xl">
          <FaApple />
          <FaAndroid />
        </div>
      </div>

      {/* Right Phone Image */}
      <div className="flex-1 flex justify-center">
        <div className="bg-white rounded-[2rem] p-4 w-[180px] h-[360px] flex items-center justify-center shadow-xl">
          <img
            src="/logo512.png" // Replace with actual app logo or phone mockup
            alt="BookMySquad App"
            className="h-20"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
