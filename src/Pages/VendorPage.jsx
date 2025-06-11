import Header from "../components/Header";
import hyaat1 from "../images/hyatt1.jpg";
import hyaat2 from "../images/hyatt2.jpg";
import hyaat3 from "../images/hyatt3.jpg";
import hyaat4 from "../images/hyatt4.jpg";
import { FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiMail, FiPhone, FiCalendar } from "react-icons/fi";
import { useState } from "react";

const VendorPage = () => {
  const [notify, setNotify] = useState(true);

  return (
    <>
      <Header />
      <section className="p-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-y-7 gap-x-3">
              <div className="col-span-3 relative">
                <img
                  src={hyaat1}
                  alt=""
                  className="rounded object-cover max-h-[350px] w-full"
                />
                <div className="absolute w-full left-0 backdrop-blur bottom-0 flex justify-between items-center p-2 bg-">
                  <h5 className="text-white font-semibold">Hyatt Regency</h5>
                  <h5 className="bg-white rounded-3xl px-5 py-1 flex gap-2">
                    <FaStar color="#259D00" />
                    <span>4.1 (120 /reviews)</span>
                  </h5>
                </div>
              </div>
              <div className="col-span-1 ">
                <img
                  src={hyaat2}
                  alt=""
                  className="aspect-square rounded object-cover max-h-[350px]"
                />
              </div>
              <div className="col-span-1">
                <img
                  src={hyaat3}
                  alt=""
                  className="aspect-square rounded object-cover max-h-[350px]"
                />
              </div>
              <div className="col-span-1">
                <img
                  src={hyaat4}
                  alt=""
                  className="aspect-square rounded object-cover max-h-[350px]"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-3">
            <h4>Hyatt Regency</h4>
            <div className="flex gap-2">
              <div className="flex items-center gap-1">
                <FaStar color="#259D00" />
                <FaStar color="#259D00" />
                <FaStar color="#259D00" />
                <FaStar color="#259D00" />
              </div>
              <div>( 120 Reviews )</div>
            </div>
            <div className="flex gap-2 items-center">
              <IoLocationOutline />
              <span>South Delhi</span>
            </div>
            <div>
              <p>
                Hyatt Regency offers a luxurious stay experience with elegant
                rooms, world-class amenities, and warm hospitality — perfect for
                business travelers and leisure seekers alike.
              </p>
            </div>
            {/* <div className="border p-8"></div> */}
            <div className="w-full max-w-md border rounded-md p-6 shadow-sm">
              {/* Top Tabs */}
              <div className="flex border-b">
                <button className="flex-1 text-sm font-medium text-red-600 border-b-2 border-red-600 py-2 flex items-center justify-center gap-2">
                  <FiMail size={16} /> Send Message
                </button>
                <button className="flex-1 text-sm text-gray-500 py-2 flex items-center justify-center gap-2">
                  <FiPhone size={16} /> View Contact
                </button>
              </div>

              {/* Header */}
              <h2 className="text-lg font-semibold mt-4 mb-2">
                Hi, Hyatt Regency
              </h2>

              {/* Form */}
              <form className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-1/2 border-b outline-none text-sm py-1"
                  />
                  <input
                    type="tel"
                    placeholder="+91"
                    className="w-1/2 border-b outline-none text-sm py-1"
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Email ID"
                    className="w-1/2 border-b outline-none text-sm py-1"
                  />
                  <div className="relative w-1/2">
                    <input
                      type="date"
                      className="w-full border-b outline-none text-sm py-1 pr-6"
                    />
                    <FiCalendar
                      className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400"
                      size={16}
                    />
                  </div>
                </div>
                <textarea
                  rows="2"
                  placeholder="Details about your function"
                  className="w-full border-b outline-none text-sm py-1 resize-none"
                />

                {/* Whatsapp Toggle */}
                <div className="flex items-center justify-between mt-2">
                  <label className="text-sm">Notify me on Whatsapp</label>
                  <button
                    type="button"
                    onClick={() => setNotify(!notify)}
                    className={`w-10 h-5 rounded-full relative transition-colors ${
                      notify ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                        notify ? "translate-x-5" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-red-600 text-white py-2 text-sm font-medium rounded mt-4"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorPage;
