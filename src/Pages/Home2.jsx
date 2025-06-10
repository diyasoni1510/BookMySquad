import React, { useState, useEffect, useRef } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import popularVenue1 from "../images/popularVenue1.png";
import popularVenue2 from "../images/popularVenue2.png";
import popularVenue3 from "../images/popularVenue3.png";
import popularVenue4 from "../images/popularVenue4.png";
import popularSearch1 from "../images/PopularSearch1.png";
import popularSearch2 from "../images/PopularSearch2.png";
import popularSearch3 from "../images/PopularSearch3.png";
import popularSearch4 from "../images/PopularSearch4.png";
import exclusiveService1 from "../images/exclusiveService1.png";
import exclusiveService2 from "../images/exclusiveService2.png";
import exclusiveService3 from "../images/exclusiveService3.png";
import exclusiveService4 from "../images/exclusiveService4.png";
import featureVendor1 from "../images/featureVendor1.png";
import featureVendor2 from "../images/featureVendor2.png";
import featureVendor3 from "../images/featureVendor3.png";
import featureVendor4 from "../images/featureVendor4.png";
import SideArrow from "../components/SideArrow";
import Footer from "../components/Footer";
import bgImage6 from "../images/bgImage6.jpg";
import bgImage1 from "../images/bgImage1.jpg";
import bgImage2 from "../images/bgImage2.png";
import bgImage3 from "../images/bgImage3.png";
import bgImage4 from "../images/bgImage4.png";
import bgImage5 from "../images/bgImage5.png";
import DownloadAppSection from "../components/DownloadApp";

const bgImages = [bgImage6, bgImage1, bgImage2, bgImage3, bgImage4, bgImage5];

export default function Home2() {
  const [currentBg, setCurrentBg] = useState(0);
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Reference to the services container for scrolling
  const servicesRef = useRef(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocation({ ...location, error: "Geolocation not supported" });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          lat: latitude,
          lon: longitude,
          address: null,
          error: null,
        });

        console.log(position);

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await response.json();
          console.log("data.display_name", data);
          // setLocation((loc) => ({ ...loc, address: data.address }));
          setLocation((loc) => ({
            ...loc,
            address: data.address,
            town:
              data.address.town ||
              data.address.city ||
              data.address.village ||
              null,
          }));
        } catch (err) {
          setLocation((loc) => ({ ...loc, error: "Failed to fetch address" }));
        }
      },
      (error) => setLocation({ ...location, error: error.message })
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 4000);
    getLocation();
  }, []);

  useEffect(() => {
    const getServices = async () => {
      try {
        const res = await axios.get(
          "https://api.infinityeventz.in/api/service"
        );
        setServices(res.data.service);
      } catch (err) {
        console.error("Failed to fetch services", err);
      }
    };
    getServices();
  }, []);

  // Background slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentBg((prev) => (prev + 1) % bgImages.length);
  };

  const prevSlide = () => {
    setCurrentBg((prev) => (prev === 0 ? bgImages.length - 1 : prev - 1));
  };

  // Scroll services container left or right by fixed width (e.g. 180px per item)
  const scrollServices = (direction) => {
    if (!servicesRef.current) return;
    const scrollAmount = 180; // Adjust depending on item width + margin
    if (direction === "left") {
      servicesRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      servicesRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const [location, setLocation] = useState({
    lat: null,
    lon: null,
    error: null,
  });

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          {/* Your modal content here */}
          <div className="bg-white p-6 shadow-lg max-w-md w-full rounded-3xl">
            {/* <img src= alt="" /> */}
            <div
              className="flex justify-end mb-5 cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <RxCross2 />
            </div>
            <p className="text-center font-semibold">
              Just Share your detail and our best support team reach out to you
              instantly!
            </p>
            <div className="relative bg-gray-100 rounded-full p-3 border mt-10">
              <div className="absolute -top-3 bg-white text-xs left-8 px-3">
                Mobile number
              </div>
              <div className="flex justify-between">
                <input
                  type="tel"
                  placeholder="+91....."
                  className="bg-transparent focus-visible:outline-none"
                />
                <button className="bg-themeRed uppercase px-8 text-white font-semibold rounded-3xl text-sm py-2">
                  Call now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <header className=" bg-white px-16 py-3">
        <div className="flex items-center justify-between gap-10">
          <div className="flex items-center gap-10">
            <div className="bg-pink-200 rounded-full px-2 text-xs py-4">
              LOGO
            </div>
            <div>
              <ul className="flex items-center justify-center gap-5">
                <li>Home</li>
                <li className="font-semibold">Venues</li>
                <li>Vendors</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div
              className="border min-w-60 rounded-3xl px-5 flex py-2 gap-2 items-center cursor-pointer"
              onClick={getLocation}
            >
              <FaLocationDot color="gray" />{" "}
              <p>{location.town ? location.town : "Select Location"}</p>
            </div>
            <button className="bg-themeRed text-white px-5 py-2 uppercase rounded-full text-sm">
              download the app
            </button>
          </div>
        </div>
        {/* <button className="bg-themeRed uppercase px-8 text-white font-semibold rounded-3xl text-sm">
            Login
          </button> */}
      </header>

      {/* Background slider */}
      <section
        className="relative h-[270px] bg-cover bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${bgImages[currentBg]})`,
          backgroundPositionY: "-350px",
        }}
      >
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
          onClick={prevSlide}
        >
          <RiArrowLeftSLine className="text-themeRed" />
        </button>

        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
          onClick={nextSlide}
        >
          <RiArrowRightSLine className="text-themeRed" />
        </button>

        {/* Hero content */}
        <div className="absolute bottom-5 bg-themeRed bg-opacity-75 flex flex-col items-center justify-center text-center px-10 py-3 rounded-full w-4/5 left-1/2 transform -translate-x-1/2">
          <h1 className="text-[45px] font-bold mb-4 dance text-white">
            Plan Your Wedding Easily
          </h1>
          <p className="mb-6 text-xl text-white">
            Discover venues, vendors & ideas to create your dream celebration
            effortlessly.
          </p>
          <div className="flex flex-wrap justify-center rounded-br-full rounded-bl-full px-10 overflow-hidden border gap-[1px] bg-white">
            <div className="relative inline-block">
              <select className="appearance-none w-full px-4 text-black text-sm border-r border-themeRed py-3 focus-visible:outline-none pr-10 font-semibold">
                <option>SELECT STATE</option>
                <option>Rajasthan</option>
                <option>Punjab</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center -mt-0">
                <IoIosArrowDown color="black" />
              </div>
            </div>

            {/* <select className="px-4 text-black text-sm border-r border-themeRed py-3 focus-visible:outline-none">
              <option>SELECT CITY</option>
              <option>Rajasthan</option>
              <option>Punjab</option>
            </select> */}
            <div className="relative inline-block">
              <select className="appearance-none w-full px-4 text-black text-sm border-r border-themeRed py-3 focus-visible:outline-none pr-10 font-semibold">
                <option>CITY</option>
                <option>Rajasthan</option>
                <option>Punjab</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center -mt-0">
                <IoIosArrowDown color="black" />
              </div>
            </div>
            <div className="relative inline-block">
              <select className="appearance-none w-full px-4 text-black text-sm border-r border-themeRed py-3 focus-visible:outline-none pr-10 font-semibold">
                <option>SELECT VENUES</option>
                <option>Rajasthan</option>
                <option>Punjab</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center -mt-0">
                <IoIosArrowDown color="black" />
              </div>
            </div>
            <input
              type="tel"
              name="phone"
              id="phone"
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

      {/* Services slider */}
      <section className="min-h-72">
        <div className="p-16 max-w-7xl mx-auto">
          <h3 className="mb-4">All Categories</h3>

          <div
            ref={servicesRef}
            className="flex gap-0 overflow-x-auto scrollbar-hide scroll-smooth relative"
          >
            {services?.map((cat, index) => (
              <div
                key={index}
                className="group text-sm flex flex-col justify-center items-center flex-shrink-0 cursor-pointer rounded-lg p-3 transition ms-10"
              >
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  className="w-28 h-28 object-cover rounded-tl-3xl rounded-br-3xl border-2 border-transparent group-hover:scale-105 transition"
                />
                <p className="mt-2 group-hover:font-semibold">{cat.name}</p>
              </div>
            ))}
          </div>
          <div className="w-full relative">
            <button
              onClick={() => scrollServices("left")}
              className="bg-[#FDF0F0] p-2 rounded-full shadow hover:bg-red-200 text-white absolute -top-[105px] left-0"
              aria-label="Scroll Left"
            >
              <RiArrowLeftSLine color="#C00808" />
            </button>
            <button
              onClick={() => scrollServices("right")}
              className="bg-[#FDF0F0] p-2 rounded-full shadow hover:bg-red-200 text-white absolute  -top-[105px] right-0"
              aria-label="Scroll Right"
            >
              <RiArrowRightSLine color="#C00808" />
            </button>
          </div>
        </div>
      </section>

      <section className="p-16 max-w-7xl mx-auto">
        <div className="flex gap-4 items-center">
          <h3 className="mb-4">Popular Venues Search</h3>
          <SideArrow />
        </div>
        <div className="grid grid-cols-4 gap-5 mt-5">
          <div className="col-span-1">
            <img
              src={popularVenue1}
              alt=""
              className="rounded-lg h-64 object-cover w-full"
            />
            <h5 className="mt-3">4 Star & Above wedd..</h5>
            <div className="flex gap-1">
              <p>Delhi</p>
              <p>|</p>
              <p>Pune</p>
              <p>|</p>
              <p>Jaipur</p>
              <p>|</p>
              <p className="ms-2 text-themeRed">More</p>
            </div>
          </div>
          <div className="col-span-1">
            <img
              src={popularVenue2}
              alt=""
              className="rounded-lg h-64 object-cover w-full"
            />
            <h5 className="mt-3">Banquet Halls</h5>
            <div className="flex gap-1">
              <p>Delhi</p>
              <p>|</p>
              <p>Pune</p>
              <p>|</p>
              <p>Jaipur</p>
              <p>|</p>
              <p className="ms-2 text-themeRed">More</p>
            </div>
          </div>
          <div className="col-span-1">
            <img
              src={popularVenue3}
              alt=""
              className="rounded-lg h-64 object-cover w-full"
            />
            <h5 className="mt-3">Marriage Garden/Lawns</h5>
            <div className="flex gap-1">
              <p>Delhi</p>
              <p>|</p>
              <p>Pune</p>
              <p>|</p>
              <p>Jaipur</p>
              <p>|</p>
              <p className="ms-2 text-themeRed">More</p>
            </div>
          </div>
          <div className="col-span-1">
            <img
              src={popularVenue4}
              alt=""
              className="rounded-lg h-64 object-cover w-full"
            />
            <h5 className="mt-3">Resorts</h5>
            <div className="flex gap-1">
              <p>Delhi</p>
              <p>|</p>
              <p>Pune</p>
              <p>|</p>
              <p>Jaipur</p>
              <p>|</p>
              <p className="ms-2 text-themeRed">More</p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-16 max-w-7xl mx-auto">
        <div className="flex gap-4 items-center">
          <h3 className="mb-4">Popular Search</h3>
          <SideArrow />
        </div>
        <div className="grid grid-cols-4 gap-5 mt-5">
          <div className="col-span-1">
            <img
              src={popularSearch1}
              alt=""
              className="rounded-lg h-64 object-cover w-full"
            />
            <h5 className="mt-3">Photographer</h5>
          </div>
          <div className="col-span-1">
            <img
              src={popularSearch2}
              alt=""
              className="rounded-lg h-64 object-cover w-full"
            />
            <h5 className="mt-3">Invitations Card</h5>
          </div>
          <div className="col-span-1">
            <img
              src={popularSearch3}
              alt=""
              className="rounded-lg h-64 object-cover w-full"
            />
            <h5 className="mt-3">Catering Service</h5>
          </div>
          <div className="col-span-1">
            <img
              src={popularSearch4}
              alt=""
              className="rounded-lg h-64 object-cover w-full"
            />
            <h5 className="mt-3">Decorators</h5>
          </div>
        </div>
      </section>

      <section className="p-16 max-w-7xl mx-auto">
        <div className="flex gap-4 items-center">
          <h3 className="mb-4">Exclusive Services by BookMy Squad</h3>
          <SideArrow />
        </div>
        <div className="grid grid-cols-2 mt-5 gap-5">
          <div className="col-span-1 flex max-h-52 items-center border rounded overflow-hidden">
            <div className="p-10 w-1/2">
              <h6 className="font-semibold">Bridal Glow Services</h6>
              <p className="mt-3">
                In-home makeup, hair, and skincare packages for brides & family.
              </p>
              <button className="rounded-full px-8 hover:bg-themeRed hover:text-white transform duration-200 border border-themeRed py-2 text-themeRed mt-4 uppercase text-sm">
                Explore looks
              </button>
            </div>
            <div className="h-full w-1/2">
              <img
                src={exclusiveService1}
                alt=""
                className="h-full object-cover w-full"
              />
            </div>
          </div>
          <div className="col-span-1 flex max-h-52 items-center border rounded overflow-hidden">
            <div className="p-10 w-1/2">
              <h6 className="font-semibold">Venue</h6>
              <p className="mt-3">
                Personalized assistance to find, compare & book your ideal
                venue.
              </p>
              <button className="rounded-full px-8 hover:bg-themeRed hover:text-white transform duration-200 border border-themeRed py-2 text-themeRed mt-4 uppercase text-sm">
                Find my venue
              </button>
            </div>
            <div className="h-full w-1/2">
              <img
                src={exclusiveService2}
                alt=""
                className="h-full object-cover w-full"
              />
            </div>
          </div>
          <div className="col-span-1 flex max-h-52 items-center border rounded overflow-hidden">
            <div className="p-10 w-1/2">
              <h6 className="font-semibold">Decor Styling Studio</h6>
              <p className="mt-3">
                From traditional to modern themes — decor setup tailored to your
                vision.
              </p>
              <button className="rounded-full px-8 hover:bg-themeRed hover:text-white transform duration-200 border border-themeRed py-2 text-themeRed mt-4 uppercase text-sm">
                view themes
              </button>
            </div>
            <div className="h-full w-1/2">
              <img
                src={exclusiveService3}
                alt=""
                className="h-full object-cover w-full"
              />
            </div>
          </div>
          <div className="col-span-1 flex max-h-52 items-center border rounded overflow-hidden">
            <div className="p-10 w-1/2">
              <h6 className="font-semibold">Photo & Reel Booths</h6>
              <p className="mt-3">
                Trending photo booths, selfie setups, & instant print stations.
              </p>
              <button className="rounded-full px-8 hover:bg-themeRed hover:text-white transform duration-200 border border-themeRed py-2 text-themeRed mt-4 uppercase text-sm">
                See booth ideas
              </button>
            </div>
            <div className="h-full w-1/2">
              <img
                src={exclusiveService4}
                alt=""
                className="h-full object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="p-16 max-w-7xl mx-auto">
        <div className="flex gap-4 items-center">
          <h3 className="mb-4">Featured Vendors</h3>
          <SideArrow />
        </div>
        <div className="grid grid-cols-4 gap-5 mt-5">
          <div className="col-span-1 ">
            <div className="bg-[#259D00] pt-1 relative">
              <img
                src={featureVendor1}
                alt=""
                className=" h-64 object-cover w-full rounded-tl-[100px]"
              />
              <div className="top-0 left-1 absolute text-white font-semibold">
                4.5 ★
              </div>
            </div>
            <h5 className="mt-3">4 Star & Above wedd..</h5>
            <div className="flex gap-1">
              <p>Delhi</p>
              <p>|</p>
              <p>Pune</p>
              <p>|</p>
              <p>Jaipur</p>
              <p>|</p>
              <p className="ms-2 text-themeRed">More</p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-[#DFB602] pt-1 relative">
              <img
                src={featureVendor2}
                alt=""
                className=" h-64 object-cover w-full rounded-tl-[100px]"
              />
              <div className="top-0 left-1 absolute text-white font-semibold">
                3.5 ★
              </div>
            </div>
            <h5 className="mt-3">Banquet Halls</h5>
            <div className="flex gap-1">
              <p>Delhi</p>
              <p>|</p>
              <p>Pune</p>
              <p>|</p>
              <p>Jaipur</p>
              <p>|</p>
              <p className="ms-2 text-themeRed">More</p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-[#259D00] pt-1 relative">
              <img
                src={featureVendor3}
                alt=""
                className=" h-64 object-cover w-full rounded-tl-[100px]"
              />
              <div className="top-0 left-1 absolute text-white font-semibold">
                4.5 ★
              </div>
            </div>
            <h5 className="mt-3">Marriage Garden/Lawns</h5>
            <div className="flex gap-1">
              <p>Delhi</p>
              <p>|</p>
              <p>Pune</p>
              <p>|</p>
              <p>Jaipur</p>
              <p>|</p>
              <p className="ms-2 text-themeRed">More</p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-[#259D00] pt-1 relative">
              <img
                src={featureVendor4}
                alt=""
                className=" h-64 object-cover w-full rounded-tl-[100px]"
              />
              <div className="top-0 left-1 absolute text-white font-semibold">
                4.5 ★
              </div>
            </div>
            <h5 className="mt-3">Resorts</h5>
            <div className="flex gap-1">
              <p>Delhi</p>
              <p>|</p>
              <p>Pune</p>
              <p>|</p>
              <p>Jaipur</p>
              <p>|</p>
              <p className="ms-2 text-themeRed">More</p>
            </div>
          </div>
        </div>
      </section>
      {/* <DownloadAppSection /> */}
      <Footer />
    </>
  );
}
