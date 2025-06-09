import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import appStore from "../images/appStore.png";
import GooglePlay from "../images/GooglePlay.png";

const Footer = () => {
  return (
    <>
      <section className="px-24 pt-20 pb-8 mx-auto bg-[#680000] text-white">
        <div className="flex">
          <div className="w-8 h-8 rounded-full bg-pink-100"></div>
          <div className="w-full text-center">
            <p className="text-2xl font-semibold">
              BookMySquad – Your Event, Fully Sorted
            </p>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-xl">BookMySquad</p>
          <p>
            Is your go-to event planning platform where you can discover
            top-rated venues and service vendors like caterers, photographers,
            decorators, and more — all in one place. Whether you're organizing a
            wedding, birthday, or corporate event, BookMySquad helps you find
            the right professionals with verified listings, prices, reviews, and
            contact options. From location to last light, we've got it
            covered.With handy filters, quick booking, and helpful guides, your
            event planning becomes effortless and stress-free.
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-xl my-6">Contact us for Best Deal</p>
            <div className="flex gap-5">
              <div className="border-r-2 pe-6 border-white ">
                <p className="font-semibold">For Vendors</p>
                <p>Vendors@bookmysquad.com</p>
                <p>012-45678934</p>
              </div>
              <div>
                <p className="font-semibold">For Users</p>
                <p>info@bookmysquad.com</p>
                <p>012-45678934</p>
              </div>
            </div>
          </div>
          <div className="flex gap-10">
            <div>
              <p className="text-xl font-semibold  my-6">Follow us on:</p>
              <div className="flex gap-2 items-center mb-2">
                <FaFacebookF />
                <span>Facebook</span>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <FaWhatsapp />
                <span>Whatsapp</span>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <FaInstagram />
                <span>Instagram</span>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <FaTwitter />
                <span>Twitter</span>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <FaYoutube />
                <span>Youtube</span>
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold my-6">Get The BookMySquad</p>
              <img src={appStore} alt="" className="w-44 object-contain" />
              <img
                src={GooglePlay}
                alt=""
                className="w-44 object-contain mt-2"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-xl font-semibold">Registered Address</p>
          <p className="mb-2 mt-4">GURGAON</p>
          <p>
            Unitech Cyber Park, <br /> Sector- 39, Gurgaon
            <br /> Haryana:-122003
          </p>
        </div>
        <div className="flex mt-5">
          <div className="flex-shrink-0">
            <p>Privacy & Policy</p>
          </div>
          <div className="w-full text-center">
            <p>2025 © All rights reserved by BookMySquad</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
