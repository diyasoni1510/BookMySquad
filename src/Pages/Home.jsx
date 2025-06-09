import React, { useState, useEffect, useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import vendor1 from "../images/vendor.png";
import { FaMinus, FaPlus } from "react-icons/fa6";
import bgImage6 from "../images/bgImage6.jpg";
import bgImage1 from "../images/bgImage1.jpg";
import bgImage2 from "../images/bgImage2.png";
import bgImage3 from "../images/bgImage3.png";
import bgImage4 from "../images/bgImage4.png";
import bgImage5 from "../images/bgImage5.png";
const venues = [
  {
    id: 1,
    name: "UDAIPUR",
    price: "\u20b91,50,000",
    reviews: "140 reviews",
    image: "https://source.unsplash.com/600x400/?wedding,venue1",
  },
  {
    id: 2,
    name: "JAIPUR",
    price: "\u20b91,10,000",
    reviews: "120 reviews",
    image: "https://source.unsplash.com/600x400/?wedding,venue2",
  },
];

const bgImages = [bgImage6, bgImage1, bgImage2, bgImage3, bgImage4, bgImage5];

export default function WeddingPage() {
  const [currentBg, setCurrentBg] = useState(0);
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showVenueType, setShowVenueType] = useState(true);
  const [showDestination, setShowDestination] = useState(true);

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

  // Step 1: Take number input
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const sendOtp = async () => {
    await axios.post("/api/send-otp", { phone });
    setStep(2); // show OTP input
  };

  const verifyOtp = async () => {
    const res = await axios.post("/api/verify-otp", { phone, otp });
    if (res.data.success) {
      alert("Verified ✅");
    } else {
      alert("Invalid OTP ❌");
    }
  };

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

      <header className="shadow-lg bg-white px-16 py-3">
        <div className="flex items-center justify-center gap-10">
          <div className="bg-pink-200 rounded-full px-2 text-xs py-4">LOGO</div>
          <div>
            <ul className="flex items-center justify-center gap-5">
              <li>Home</li>
              <li className="font-semibold">Venues</li>
              <li>Vendors</li>
            </ul>
          </div>
          <div
            className="border min-w-60 rounded-3xl px-5 flex py-2 gap-2 items-center cursor-pointer"
            onClick={getLocation}
          >
            <FaLocationDot color="gray" />{" "}
            <p>{location.town ? location.town : "Select Location"}</p>
          </div>
        </div>
        {/* <button className="bg-themeRed uppercase px-8 text-white font-semibold rounded-3xl text-sm">
            Login
          </button> */}
      </header>

      {/* Background slider */}
      <section
        className="relative h-[400px] bg-cover bg-no-repeat transition-all duration-1000 ease-in-out"
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
        <div className="absolute bottom-5 bg-themeRed bg-opacity-75 flex flex-col items-center justify-center text-center px-10 pt-10 pb-5 rounded-full w-4/5 left-1/2 transform -translate-x-1/2">
          <h1 className="text-5xl font-bold mb-4 dance text-white">
            Plan Your Wedding Easily
          </h1>
          <p className="mb-6 text-lg max-w-2xl text-white">
            Discover venues, vendors & ideas to create your dream celebration
            effortlessly.
          </p>
          <div className="flex flex-wrap justify-center rounded-br-full rounded-bl-full px-10 overflow-hidden border gap-[1px] bg-white">
            <div className="relative inline-block">
              <select className="appearance-none w-full px-4 text-black text-sm border-r border-themeRed py-3 focus-visible:outline-none pr-10">
                <option>SELECT STATE</option>
                <option>Rajasthan</option>
                <option>Punjab</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                <svg
                  className="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <select className="px-4 text-black text-sm border-r border-themeRed py-3 focus-visible:outline-none">
              <option>SELECT CITY</option>
              <option>Rajasthan</option>
              <option>Punjab</option>
            </select>
            <select className="px-4 border-r border-themeRed py-3 text-black text-sm focus-visible:outline-none">
              <option>SELECT VENUES</option>
              <option>North</option>
              <option>South</option>
            </select>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="MOBILE NUMBER*"
              className="placeholder:text-black text-sm border-r border-themeRed py-3 px-4 focus-visible:outline-none"
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

      <section className="p-16 max-w-7xl flex gap-4 items-start">
        <aside className="w-64 bg-white shadow-md">
          <div className="venue-type">
            <div
              className="bg-gray-100 py-2 px-4 font-semibold flex justify-between items-center cursor-pointer"
              onClick={() => setShowVenueType(!showVenueType)}
            >
              <p>Venue Type</p>
              {showVenueType ? <FaMinus /> : <FaPlus />}
            </div>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                showVenueType ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              {[
                "Party Halls",
                "Banquet Halls",
                "Wedding Resorts",
                "Marriage Garden",
                "4 Star",
                "5 Star",
              ].map((label, i) => (
                <div className="flex items-center justify-between p-2" key={i}>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="appearance-none h-5 w-5 border border-gray-400 bg-gray-100 rounded-sm checked:bg-themeRed checked:border-themeRed focus:outline-none"
                    />
                    <p>{label}</p>
                  </div>
                  <div>(57)</div>
                </div>
              ))}
            </div>
          </div>

          <div className="destination mt-4">
            <div
              className="bg-gray-100 py-2 px-4 font-semibold flex justify-between items-center cursor-pointer"
              onClick={() => setShowDestination(!showDestination)}
            >
              <p>Destination</p>
              {showDestination ? <FaMinus /> : <FaPlus />}
            </div>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                showDestination ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              {[
                "Delhi",
                "East Delhi",
                "North Delhi",
                "Gurgaon",
                "Goa",
                "Pune",
              ].map((label, i) => (
                <div className="flex items-center justify-between p-2" key={i}>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="appearance-none h-5 w-5 border border-gray-400 bg-gray-100 rounded-sm checked:bg-themeRed checked:border-themeRed focus:outline-none"
                    />
                    <p>{label}</p>
                  </div>
                  <div>(57)</div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Dummy Grid */}
        <div className="grid grid-cols-4 gap-2 flex-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="col-span-1 border p-1 rounded">
              <img src={vendor1} alt="" className="w-80 h-70 object-cover" />
              <h5 className="uppercase mt-2">Hyatt regency</h5>
              <p className="text-gray-500">Veg</p>
              <p>
                <span className="font-semibold">1,500</span> per plate
              </p>
              <p className="text-gray-500">300-700 per box</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
