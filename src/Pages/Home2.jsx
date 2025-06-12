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
import Header from "../components/Header";

const bgImages = [bgImage6, bgImage1, bgImage2, bgImage3, bgImage4, bgImage5];

export default function Home2() {
  const [services, setServices] = useState([]);

  // Reference to the services container for scrolling
  const servicesRef = useRef(null);

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

  return (
    <>
      <Header />
      {/* Services slider */}
      <section className="min-h-72">
        <div className="p-16  mx-auto">
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

      <section className="p-16  mx-auto">
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

      <section className="p-16  mx-auto">
        <div className="flex gap-4 items-center">
          <h3 className="mb-4">Popular Search</h3>
          <SideArrow />
        </div>
        <div className="grid grid-cols-4 gap-5 mt-5">
          <div className="col-span-1 relative h-fit">
            <img
              src={popularSearch1}
              alt=""
              className="rounded-lg h-64 object-cover w-full"
            />
            <h5 className="mt-3 absolute w-full bottom-0 backdrop-blur-lg bg-white/20 text-white p-2">
              Photographer
            </h5>
          </div>
          <div className="col-span-1 relative h-fit">
            <img
              src={popularSearch2}
              alt=""
              className="rounded-lg h-64 object-cover w-full"
            />
            <h5 className="mt-3 absolute w-full bottom-0 backdrop-blur-lg bg-white/20 text-white p-2">
              Invitations Card
            </h5>
          </div>
          <div className="col-span-1 relative h-fit">
            <img
              src={popularSearch3}
              alt=""
              className="rounded-lg h-64 object-cover w-full"
            />
            <h5 className="mt-3 absolute w-full bottom-0 backdrop-blur-lg bg-white/20 text-white p-2">
              Catering Service
            </h5>
          </div>
          <div className="col-span-1 relative h-fit">
            <img
              src={popularSearch4}
              alt=""
              className="rounded-lg h-64 object-cover w-full"
            />
            <h5 className="mt-3 absolute w-full bottom-0 backdrop-blur-lg bg-white/20 text-white p-2">
              Decorators
            </h5>
          </div>
        </div>
      </section>

      <section className="p-16  mx-auto">
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

      <section className="p-16  mx-auto">
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
      <DownloadAppSection />
      <Footer />
    </>
  );
}
