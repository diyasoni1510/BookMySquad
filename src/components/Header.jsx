// import React, { useState, useEffect, useRef } from "react";
// import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
// import axios from "axios";
// import { FaLocationDot } from "react-icons/fa6";
// import { RxCross2 } from "react-icons/rx";
// import { IoIosArrowDown } from "react-icons/io";
// import bgImage6 from "../images/bgImage6.jpg";
// import bgImage1 from "../images/bgImage1.jpg";
// import bgImage2 from "../images/bgImage2.png";
// import bgImage3 from "../images/bgImage3.png";
// import bgImage4 from "../images/bgImage4.png";
// import bgImage5 from "../images/bgImage5.png";
// import { apiUrl } from "../App";

// const bgImages = [bgImage6, bgImage1, bgImage2, bgImage3, bgImage4, bgImage5];

// export default function Home2() {
//   const [currentBg, setCurrentBg] = useState(0);
//   const [banners, setBanners] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const getLocation = () => {
//     if (!navigator.geolocation) {
//       setLocation({ ...location, error: "Geolocation not supported" });
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const { latitude, longitude } = position.coords;
//         setLocation({
//           lat: latitude,
//           lon: longitude,
//           address: null,
//           error: null,
//         });

//         try {
//           const response = await fetch(
//             `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
//           );
//           const data = await response.json();
//           // setLocation((loc) => ({ ...loc, address: data.address }));
//           setLocation((loc) => ({
//             ...loc,
//             address: data.address,
//             town:
//               data.address.town ||
//               data.address.city ||
//               data.address.village ||
//               null,
//           }));
//         } catch (err) {
//           setLocation((loc) => ({ ...loc, error: "Failed to fetch address" }));
//         }
//       },
//       (error) => setLocation({ ...location, error: error.message })
//     );
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       setShowModal(true);
//     }, 4000);
//     getLocation();
//   }, []);

//   useEffect(() => {
//     const getBanners = async () => {
//       try {
//         const res = await axios.get(`${apiUrl}/api/banner`);
//         setBanners(res.data);
//       } catch (err) {
//         console.error("Failed to fetch services", err);
//       }
//     };
//     getBanners();
//   }, []);

//   // Background slider logic
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBg((prev) => (prev + 1) % bgImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () => {
//     setCurrentBg((prev) => (prev + 1) % bgImages.length);
//   };

//   const prevSlide = () => {
//     setCurrentBg((prev) => (prev === 0 ? bgImages.length - 1 : prev - 1));
//   };

//   const [location, setLocation] = useState({
//     lat: null,
//     lon: null,
//     error: null,
//   });

//   return (
//     <>
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           {/* Your modal content here */}
//           <div className="bg-white p-6 shadow-lg max-w-md w-full rounded-3xl">
//             {/* <img src= alt="" /> */}
//             <div
//               className="flex justify-end mb-5 cursor-pointer"
//               onClick={() => setShowModal(false)}
//             >
//               <RxCross2 />
//             </div>
//             <p className="text-center font-semibold">
//               Just Share your detail and our best support team reach out to you
//               instantly!
//             </p>
//             <div className="relative bg-gray-100 rounded-full p-3 border mt-10">
//               <div className="absolute -top-3 bg-white text-xs left-8 px-3">
//                 Mobile number
//               </div>
//               <div className="flex justify-between">
//                 <input
//                   type="tel"
//                   placeholder="+91....."
//                   className="bg-transparent focus-visible:outline-none"
//                 />
//                 <button className="bg-themeRed uppercase px-8 text-white font-semibold rounded-3xl text-sm py-2">
//                   Call now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <header className=" bg-white px-16 py-3">
//         <div className="flex items-center justify-between gap-10">
//           <div className="flex items-center gap-10">
//             <div className="bg-pink-200 rounded-full px-2 text-xs py-4">
//               LOGO
//             </div>
//             <div>
//               <ul className="flex items-center justify-center gap-5">
//                 <li>Home</li>
//                 <li className="font-semibold">Venues</li>
//                 <li>Vendors</li>
//               </ul>
//             </div>
//           </div>
//           <div className="flex justify-center items-center gap-4">
//             <div
//               className="border min-w-60 rounded-3xl px-5 flex py-2 gap-2 items-center cursor-pointer"
//               onClick={getLocation}
//             >
//               <FaLocationDot color="gray" />{" "}
//               <p>{location.town ? location.town : "Select Location"}</p>
//             </div>
//             <button className="bg-themeRed text-white px-5 py-2 uppercase rounded-full text-sm">
//               download the app
//             </button>
//           </div>
//         </div>
//         {/* <button className="bg-themeRed uppercase px-8 text-white font-semibold rounded-3xl text-sm">
//             Login
//           </button> */}
//       </header>

//       {/* Background slider */}
//       <section
//         className="relative h-[270px] bg-cover bg-no-repeat transition-all duration-1000 ease-in-out"
//         style={{
//           backgroundImage: `url(${bgImages[currentBg]})`,
//           backgroundPositionY: "-350px",
//         }}
//       >
//         <button
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
//           onClick={prevSlide}
//         >
//           <RiArrowLeftSLine className="text-themeRed" />
//         </button>

//         <button
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
//           onClick={nextSlide}
//         >
//           <RiArrowRightSLine className="text-themeRed" />
//         </button>

//         {/* Hero content */}
//         <div className="absolute bottom-5 bg-themeRed bg-opacity-75 flex flex-col items-center justify-center text-center px-10 py-3 rounded-full w-4/5 left-1/2 transform -translate-x-1/2">
//           <h1 className="text-[45px] font-bold mb-4 dance text-white">
//             Plan Your Wedding Easily
//           </h1>
//           <p className="mb-6 text-xl text-white">
//             Discover venues, vendors & ideas to create your dream celebration
//             effortlessly.
//           </p>
//           <div className="flex flex-wrap justify-center rounded-br-full rounded-bl-full px-10 overflow-hidden border gap-[1px] bg-white">
//             <div className="relative inline-block">
//               <select className="appearance-none w-full px-4 text-black text-sm border-r border-themeRed py-3 focus-visible:outline-none pr-10 font-semibold">
//                 <option>SELECT STATE</option>
//                 <option>Rajasthan</option>
//                 <option>Punjab</option>
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center -mt-0">
//                 <IoIosArrowDown color="black" />
//               </div>
//             </div>

//             {/* <select className="px-4 text-black text-sm border-r border-themeRed py-3 focus-visible:outline-none">
//               <option>SELECT CITY</option>
//               <option>Rajasthan</option>
//               <option>Punjab</option>
//             </select> */}
//             <div className="relative inline-block">
//               <select className="appearance-none w-full px-4 text-black text-sm border-r border-themeRed py-3 focus-visible:outline-none pr-10 font-semibold">
//                 <option>CITY</option>
//                 <option>Rajasthan</option>
//                 <option>Punjab</option>
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center -mt-0">
//                 <IoIosArrowDown color="black" />
//               </div>
//             </div>
//             <div className="relative inline-block">
//               <select className="appearance-none w-full px-4 text-black text-sm border-r border-themeRed py-3 focus-visible:outline-none pr-10 font-semibold">
//                 <option>SELECT VENUES</option>
//                 <option>Rajasthan</option>
//                 <option>Punjab</option>
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center -mt-0">
//                 <IoIosArrowDown color="black" />
//               </div>
//             </div>
//             <input
//               type="tel"
//               name="phone"
//               id="phone"
//               placeholder="MOBILE NUMBER*"
//               className="placeholder:text-black text-sm border-r border-themeRed py-3 px-4 focus-visible:outline-none placeholder:font-semibold font-semibold"
//             />
//             <div className="bg-white flex justify-center items-center px-4">
//               <button className="bg-themeRed px-10 py-1 uppercase rounded-full text-white">
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// top imports
import React, { useState, useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { apiUrl } from "../App";

export default function Home2() {
  const [banners, setBanners] = useState([]);
  const [currentBg, setCurrentBg] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phone, setPhone] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState({
    lat: null,
    lon: null,
    error: null,
  });

  const sendLead = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/lead/save", {
        phone,
      });
      setPhone("");
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Get user location
  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocation({ ...location, error: "Geolocation not supported" });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({
          lat: latitude,
          lon: longitude,
          address: null,
          error: null,
        });

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();
          setLocation((loc) => ({
            ...loc,
            address: data.address,
            town:
              data.address.town ||
              data.address.city ||
              data.address.village ||
              null,
          }));
        } catch {
          setLocation((loc) => ({ ...loc, error: "Failed to fetch address" }));
        }
      },
      (error) => setLocation({ ...location, error: error.message })
    );
  };

  // Fetch banners from API
  useEffect(() => {
    const getBanners = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/banner`);
        setBanners(res.data);
      } catch (err) {
        console.error("Failed to fetch banners", err);
      }
    };
    getBanners();
  }, []);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners]);

  useEffect(() => {
    setTimeout(() => setShowModal(true), 4000);
    getLocation();
  }, []);

  const nextSlide = () => setCurrentBg((prev) => (prev + 1) % banners.length);
  const prevSlide = () =>
    setCurrentBg((prev) => (prev === 0 ? banners.length - 1 : prev - 1));

  const currentBanner = banners[currentBg];

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 shadow-lg max-w-md w-full rounded-3xl">
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <button
                  className="bg-themeRed uppercase px-8 text-white font-semibold rounded-3xl text-sm py-2"
                  onClick={sendLead}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <header className="bg-white px-16 py-3">
        <div className="flex items-center justify-between gap-10">
          <div className="flex items-center gap-10">
            <div className="bg-pink-200 rounded-full px-2 text-xs py-4">
              LOGO
            </div>
            <ul className="flex items-center justify-center gap-5">
              <li>Home</li>
              <li className="font-semibold">Venues</li>
              <li>Vendors</li>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div
              className="border min-w-60 rounded-3xl px-5 flex py-2 gap-2 items-center cursor-pointer"
              onClick={getLocation}
            >
              <FaLocationDot color="gray" />
              <p>{location.town || "Select Location"}</p>
            </div>
            <button className="bg-themeRed text-white px-5 py-2 uppercase rounded-full text-sm">
              download the app
            </button>
          </div>
        </div>
      </header>

      {/* Slider Section */}
      {currentBanner && (
        <section
          className="relative h-[270px] bg-cover bg-no-repeat transition-all duration-1000 ease-in-out bg-center"
          style={{
            backgroundImage: `url(${currentBanner.image})`,
            // backgroundPositionY: "-350px",
          }}
        >
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

          {/* Hero text - Apply fade effect here */}
          <div
            className={`absolute bottom-5 bg-themeRed bg-opacity-75 flex flex-col items-center justify-center text-center px-10 py-3 rounded-full w-4/5 left-1/2 transform -translate-x-1/2
              transition-opacity duration-500 ease-in-out ${
                fadingOut ? "opacity-0" : "opacity-100"
              }`}
          >
            <h1 className="text-[35px] md:text-[45px] font-bold mb-4 text-white dance">
              {currentBanner.title || "Plan Your Wedding Easily"}
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
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center -mt-0">
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
      )}
    </>
  );
}
