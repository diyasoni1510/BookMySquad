// BannerSection.jsx
import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function BannerSection({ banners }) {
  const [currentBg, setCurrentBg] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (banners.length === 0) return;
    const interval = setInterval(() => {
      setFadingOut(true);
      setTimeout(() => {
        setCurrentBg((prev) => (prev + 1) % banners.length);
        setFadingOut(false);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners]);

  const nextSlide = () => {
    setFadingOut(true);
    setTimeout(() => {
      setCurrentBg((prev) => (prev + 1) % banners.length);
      setFadingOut(false);
    }, 300);
  };

  const prevSlide = () => {
    setFadingOut(true);
    setTimeout(() => {
      setCurrentBg((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
      setFadingOut(false);
    }, 300);
  };

  const currentBanner = banners[currentBg];

  if (!currentBanner) return null;

  return (
    <section
      className="relative h-[270px] bg-cover bg-no-repeat bg-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${currentBanner.image})`,
      }}
    >
      {/* Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200"
        onClick={prevSlide}
      >
        <RiArrowLeftSLine className="text-themeRed" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200"
        onClick={nextSlide}
      >
        <RiArrowRightSLine className="text-themeRed" />
      </button>

      {/* Hero Text */}
      {/* <div
        className={`absolute bottom-5 bg-themeRed bg-opacity-75 flex flex-col items-center justify-center text-center px-10 py-3 rounded-full w-4/5 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ease-in-out ${
          fadingOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <h1 className="text-[35px] md:text-[45px] font-bold mb-4 text-white dance">
          {currentBanner.title || "Find Your Perfect Squad"}
        </h1>
        <p className="mb-6 text-xl text-white">
          {currentBanner.desc ||
            "Discover venues, vendors & ideas to create your dream celebration effortlessly."}
        </p>

        <div className="flex flex-wrap justify-center rounded-br-full rounded-bl-full px-10 overflow-hidden border gap-[1px] bg-white">
          {["SELECT STATE", "CITY", "SELECT VENUES"].map((label, idx) => (
            <div key={idx} className="relative inline-block">
              <select className="appearance-none w-full px-4 text-black text-sm border-r border-themeRed py-3 pr-10 font-semibold focus-visible:outline-none">
                <option>{label}</option>
                <option>Rajasthan</option>
                <option>Punjab</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <IoIosArrowDown color="black" />
              </div>
            </div>
          ))}
          <input
            type="tel"
            name="phone"
            placeholder="MOBILE NUMBER*"
            className="placeholder:text-black text-sm border-r border-themeRed py-3 px-4 focus-visible:outline-none placeholder:font-semibold font-semibold"
          />
          <div className="bg-white flex justify-center items-center px-4">
            <button className="bg-themeRed px-10 py-1 uppercase rounded-full text-white">
              Search
            </button>
          </div>
        </div>
      </div> */}
      <div className="absolute bottom-5 bg-themeRed bg-opacity-75 flex flex-col items-center justify-center text-center px-10 py-3 rounded-full w-4/5 left-1/2 transform -translate-x-1/2">
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            fadingOut ? "opacity-20" : "opacity-100"
          }`}
        >
          <h1 className="text-[35px] md:text-[45px] font-bold mb-4 text-white dance">
            {currentBanner.title || "Find Your Perfect Squad"}
          </h1>
          <p className="mb-6 text-xl text-white">
            {currentBanner.desc ||
              "Discover venues, vendors & ideas to create your dream celebration effortlessly."}
          </p>
        </div>

        {/* Form stays always visible */}
        <div className="flex flex-wrap justify-center rounded-br-full rounded-bl-full px-10 overflow-hidden border gap-[1px] bg-white mt-2">
          {["SELECT STATE", "CITY", "SELECT VENUES"].map((label, idx) => (
            <div key={idx} className="relative inline-block">
              <select className="appearance-none w-full px-4 text-black text-sm border-r border-themeRed py-3 pr-10 font-semibold focus-visible:outline-none">
                <option>{label}</option>
                <option>Rajasthan</option>
                <option>Punjab</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <IoIosArrowDown color="black" />
              </div>
            </div>
          ))}
          <input
            type="tel"
            name="phone"
            placeholder="MOBILE NUMBER*"
            className="placeholder:text-black text-sm border-r border-themeRed py-3 px-4 focus-visible:outline-none placeholder:font-semibold font-semibold"
          />
          <div className="bg-white flex justify-center items-center px-4">
            <button className="bg-themeRed px-10 py-1 uppercase rounded-full text-white">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
