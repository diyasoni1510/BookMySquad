import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import VendorCard from "../components/VendorCard";
import Loader from "../components/Loader";
import BannerSection from "../components/Banner";
import { apiUrl } from "../utils/api"; // or wherever your base URL is

const Services = () => {
  const [vendors, setVendors] = useState([]);
  const [banners, setBanners] = useState([]);
  const [loadingVendors, setLoadingVendors] = useState(true);
  const [loadingBanners, setLoadingBanners] = useState(true);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/vendor`);
        setVendors(res.data.vendors);
      } catch (err) {
        console.error("Error fetching vendors:", err);
      } finally {
        setLoadingVendors(false);
      }
    };

    const fetchBanners = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/banner`);
        setBanners(res.data);
      } catch (err) {
        console.error("Error fetching banners:", err);
      } finally {
        setLoadingBanners(false);
      }
    };

    fetchVendors();
    fetchBanners();
  }, []);

  const isLoading = loadingVendors || loadingBanners;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <BannerSection banners={banners} />
          <section className="p-16">
            <div className="grid grid-cols-4 gap-5">
              {vendors.map((vendor, index) => (
                <VendorCard
                  key={index}
                  image={vendor.gallery?.[0] || "fallback.jpg"}
                  rating="4.5"
                  name={vendor.name}
                  location={vendor.city}
                  veg="true"
                  plaleCost="2000"
                  boxCost="300-500"
                />
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Services;
