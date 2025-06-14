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
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
const Exclusive = () => {
  const { id } = useParams();
  const [exclusive, setExclusive] = useState();
  const [loadingExclusive, setLoadingExclusive] = useState(true);
  useEffect(() => {
    const getExclusive = async () => {
      try {
        const res = await axios.get(
          `https://api.infinityeventz.in/api/exclusive/${id}`
        );
        setExclusive(res.data.exclusive);
        console.log(res.data.exclusive);
      } catch (err) {
        console.error("Failed to fetch services", err);
      } finally {
        setLoadingExclusive(false);
      }
    };

    getExclusive();
  }, []);

  return (
    <>
      {loadingExclusive ? (
        <Loader />
      ) : (
        <>
          <Header />
          <section
            className="h-[60vh] [background-size:65%_auto] bg-center relative"
            style={{ backgroundImage: `url(${exclusive?.bannerImage})` }}
          >
            <div className="absolute h-full backdrop-blur-md w-[250px] top-0 left-0"></div>
            <div className="absolute h-full backdrop-blur-md w-[250px] top-0 right-0"></div>
          </section>
          <section className="px-16 py-10 mx-auto ">
            <h2 className="text-center">{exclusive.title}</h2>
            <p className="text-xl text-center">{exclusive.text}</p>
            <div className="grid grid-cols-4 mt-16 gap-10">
              <div className="col-span-1">
                <p className="text-xl mb-3 font-semibold">What’s Included</p>
                <ul className="list-disc ps-5">
                  {exclusive?.whatsIncluded?.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1">
                <p className="text-xl mb-3 font-semibold">Why Choose Us</p>
                <ul className="list-disc ps-5">
                  {exclusive?.reasonToChoose?.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1">
                <p className="text-xl mb-3 font-semibold">Best for</p>
                <ul className="list-disc ps-5">
                  {exclusive?.packages?.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1">
                <p className="text-xl mb-3 font-semibold">Have Question?</p>
                <div className="flex gap-2 my-2 ps-12">
                  <IoLogoWhatsapp color="#60D669" />
                  <IoMdCall color="#60D669" />
                </div>
                <p>{exclusive?.whatsapp}</p>
                <p>Talk with us</p>
              </div>
            </div>
          </section>
          <section className="p-16">
            <div className="grid grid-cols-5 gap-5">
              {exclusive?.gallery?.map((image, index) => (
                <div className="col-span-1 aspect-square" key={index}>
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
          <DownloadAppSection />
          <Footer />
        </>
      )}
    </>
  );
};

export default Exclusive;
