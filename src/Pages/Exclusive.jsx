import DownloadAppSection from "../components/DownloadApp";
import Header from "../components/Header";
import exclusiveBg1 from "../images/exclusiveBg1.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import exclusive11 from "../images/exclusive-1-1.png";
import exclusive12 from "../images/exclusive-1-2.png";
import exclusive13 from "../images/exclusive-1-3.png";
import exclusive14 from "../images/exclusive-1-4.png";
import exclusive15 from "../images/exclusive-1-5.png";
import exclusive16 from "../images/exclusive-1-6.png";
import exclusive17 from "../images/exclusive-1-7.png";
import exclusive18 from "../images/exclusive-1-8.png";
import exclusive19 from "../images/exclusive-1-9.png";
import exclusive110 from "../images/exclusive-1-10.png";
import Footer from "../components/Footer";
const Exclusive = () => {
  return (
    <>
      <Header />
      <section
        className="h-[60vh] [background-size:65%_auto] bg-center relative"
        style={{ backgroundImage: `url(${exclusiveBg1})` }}
      >
        <div className="absolute h-full backdrop-blur-md w-[250px] top-0 left-0"></div>
        <div className="absolute h-full backdrop-blur-md w-[250px] top-0 right-0"></div>
      </section>
      <section className="px-16 py-10 mx-auto ">
        <h2 className="text-center">
          Bridal Glow Services for Brides & Family
        </h2>
        <p className="text-xl text-center">
          Look radiant on your big day with expert in-home bridal beauty
          services.
        </p>
        <div className="grid grid-cols-4 mt-16 gap-10">
          <div className="col-span-1">
            <p className="text-xl font-semibold">What’s Included</p>
            <ul className="list-disc ps-5">
              <li>Professional bridal makeup (HD / Airbrush options)</li>
              <li>Hairstyling & draping</li>
              <li>Skincare prep sessions (1-2 days prior)</li>
              <li>Makeup trials (on request)</li>
              <li>Groom & family grooming (optional add-on)</li>
            </ul>
          </div>
          <div className="col-span-1">
            <p className="text-xl font-semibold">Why Choose Us</p>
            <ul className="list-disc ps-5">
              <li>Certified bridal artists with 5+ years of experience</li>
              <li>Travel-to-home service (saves time & stress)</li>
              <li>Use of premium brands (MAC, Huda, Bobbi Brown)</li>
            </ul>
          </div>
          <div className="col-span-1">
            <p className="text-xl font-semibold">Packages</p>
            <ul className="list-disc ps-5">
              <li>Basic Glow Package – For pre-events</li>
              <li>Classic Bridal Look – For main wedding day</li>
              <li>Full Wedding Combo – All events + trial</li>
            </ul>
          </div>
          <div className="col-span-1">
            <p className="text-xl font-semibold">Have Question?</p>
            <div className="flex gap-2 my-2 ps-12">
              <IoLogoWhatsapp color="#60D669" />
              <IoMdCall color="#60D669" />
            </div>
            <p>+918879768910</p>
            <p>Talk with us</p>
          </div>
        </div>
      </section>
      <section className="p-16">
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-1 aspect-square">
            <img
              src={exclusive11}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 aspect-square">
            <img
              src={exclusive12}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 aspect-square">
            <img
              src={exclusive13}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 aspect-square">
            <img
              src={exclusive14}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 aspect-square">
            <img
              src={exclusive15}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 aspect-square">
            <img
              src={exclusive16}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 aspect-square">
            <img
              src={exclusive17}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 aspect-square">
            <img
              src={exclusive18}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 aspect-square">
            <img
              src={exclusive19}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 aspect-square">
            <img
              src={exclusive110}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <DownloadAppSection />
      <Footer />
    </>
  );
};

export default Exclusive;
