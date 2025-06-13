// top imports
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home2() {
  const [phone, setPhone] = useState("");
  const [showVenueMenu, setShowVenueMenu] = useState(false);
  const [showVendorMenu, setShowVendorMenu] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState({
    lat: null,
    lon: null,
    error: null,
  });

  const sendLead = async () => {
    try {
      const res = await axios.post(
        "https://api.infinityeventz.in/api/lead/save",
        {
          phone,
        }
      );
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

      <header className="bg-white px-16 py-3 shadow">
        <div className="flex items-center justify-between gap-10">
          <div className="flex items-center gap-10">
            <div className="bg-pink-200 rounded-full px-2 text-xs py-4">
              LOGO
            </div>
            <ul className="flex items-center justify-center gap-5">
              {/* <li>Home</li> */}
              <Link to="/" className="hover:text-themeRed">
                Home
              </Link>
              <li
                className="group flex items-center gap-2 cursor-pointer"
                onMouseOver={() => setShowVenueMenu(true)}
                onMouseLeave={() => setShowVenueMenu(false)}
              >
                {/* <span className="group-hover:text-themeRed">Venues</span> */}
                <Link to="/venues" className="group-hover:text-themeRed">
                  Venues
                </Link>
                <IoIosArrowDown className="group-hover:text-themeRed" />
              </li>
              {showVenueMenu && (
                <div
                  className="fixed left-[220px] top-[45px] h-[300px] text-sm flex flex-col flex-wrap gap-y-2 gap-x-5 z-50 bg-white px-10 py-10"
                  onMouseOver={() => setShowVenueMenu(true)}
                  onMouseLeave={() => setShowVenueMenu(false)}
                >
                  <div className="w-[276px]">
                    <p className="bg-[#C008080D] p-2 flex justify-between items-center">
                      <span>Venues By Type</span> <FiMinus />
                    </p>
                    <p className="p-2 pb-0">Farmhouses</p>
                    <p className="p-2 pb-0">Resorts</p>
                    <p className="p-2 pb-0">Banquet Halls</p>
                    <p className="p-2 pb-0">Hotels</p>
                    <p className="p-2 pb-0">Open Lawns</p>
                    <p className="p-2 pb-0">Conference Halls</p>
                  </div>

                  <div className="w-[276px]">
                    <p className="bg-[#C008080D] p-2 flex justify-between items-center">
                      <span>City</span> <FiMinus />
                    </p>
                    <p className="p-2 pb-0">Delhi</p>
                    <p className="p-2 pb-0">Goa</p>
                    <p className="p-2 pb-0">Jaipur</p>
                    <p className="p-2 pb-0">Neemrama</p>
                  </div>
                </div>
              )}
              {/* <li>Vendors</li> */}
              <li
                className="group flex items-center gap-2 cursor-pointer"
                onMouseOver={() => setShowVendorMenu(true)}
                onMouseLeave={() => setShowVendorMenu(false)}
              >
                <span className="group-hover:text-themeRed">Vendors</span>
                <IoIosArrowDown className="group-hover:text-themeRed" />
              </li>
              {showVendorMenu && (
                <div
                  className="fixed left-[300px] top-[45px] h-[540px] text-sm flex flex-col flex-wrap gap-y-2 gap-x-5 z-50 bg-white px-10 py-10"
                  onMouseOver={() => setShowVendorMenu(true)}
                  onMouseLeave={() => setShowVendorMenu(false)}
                >
                  <div className="w-[276px]">
                    <p className="bg-[#C008080D] p-2 flex justify-between items-center">
                      <span>Makeup</span> <FiMinus />
                    </p>
                    <p className="p-2 pb-0">Bridal Makeup</p>
                    <p className="p-2 pb-0">Family Makeup</p>
                  </div>

                  <div className="w-[276px]">
                    <p className="bg-[#C008080D] p-2 flex justify-between items-center">
                      <span>Singers/BandDj/VDJ</span> <FiMinus />
                    </p>
                    <p className="p-2 pb-0">Punjabi</p>
                    <p className="p-2 pb-0">Russians Bands</p>
                    <p className="p-2 pb-0">Bollywood sufi</p>
                    <p className="p-2 pb-0">Religious</p>
                  </div>

                  <div className="w-[276px]">
                    <p className="bg-[#C008080D] p-2 flex justify-between items-center">
                      <span>Bartenders</span> <FiMinus />
                    </p>
                    <p className="p-2 pb-0">Indian Non Asian Male</p>
                    <p className="p-2 pb-0">Indian Non Asian Female</p>
                  </div>

                  <div className="w-[276px]">
                    <p className="bg-[#C008080D] p-2 flex justify-between items-center">
                      <span>Card Printing/Invitations</span> <FiMinus />
                    </p>
                    <p className="p-2 pb-0">E-Invite</p>
                    <p className="p-2 pb-0">Normal Invite</p>
                  </div>

                  <div className="w-[276px]">
                    <p className="bg-[#C008080D] p-2 flex justify-between items-center">
                      <span>Decorators</span> <FiMinus />
                    </p>
                    <p className="p-2 pb-0">Wedding Planners</p>
                    <p className="p-2 pb-0">Corporate Event Themes</p>
                    <p className="p-2 pb-0">Stage Setup</p>
                    <p className="p-2 pb-0">Birthday Party Decor</p>
                  </div>

                  <div className="w-[276px]">
                    <p className="bg-[#C008080D] p-2 flex justify-between items-center">
                      <span>Music & Dance</span> <FiMinus />
                    </p>
                    <p className="p-2 pb-0">Djs</p>
                    <p className="p-2 pb-0">Wedding Entertainment</p>
                    <p className="p-2 pb-0">Sangeet Choreographer</p>
                  </div>
                </div>
              )}
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
    </>
  );
}
