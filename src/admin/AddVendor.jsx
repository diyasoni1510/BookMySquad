import { useEffect, useState } from "react";
import axios from "axios";

const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/dpa029sf1/image/upload";
const UPLOAD_PRESET = "vendor_preset"; // Unsigned preset

const AddVendor = () => {
  const [formData, setFormData] = useState({
    name: "",
    ownerName: "",
    email: "",
    phone: "",
    password: "",
    city: "",
    pricingStart: "",
    pricingEnd: "",
    about: "",
    gallery: [],
  });

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const [services, setServices] = useState([]);
  const [subServices, setSubServices] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [selectedSubService, setSelectedSubService] = useState("");

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

  useEffect(() => {
    const getSubServices = async () => {
      try {
        const res = await axios.get(
          `https://api.infinityeventz.in/api/sub-service?service=${selectedService}`
        );
        setSubServices(res.data.subService);
      } catch (err) {
        console.error("Failed to fetch subservices", err);
      }
    };

    if (selectedService) getSubServices();
  }, [selectedService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGalleryUpload = async (e) => {
    const files = e.target.files;
    const uploadedUrls = [];

    setUploading(true);
    setMessage("Uploading images...");

    try {
      for (let file of files) {
        const data = new FormData();
        data.append("file", file);
        data.append("folder", "gallery/vendors");
        data.append("upload_preset", UPLOAD_PRESET);

        const res = await axios.post(CLOUDINARY_UPLOAD_URL, data);
        uploadedUrls.push(res.data.secure_url);
      }

      setFormData((prev) => ({
        ...prev,
        gallery: [...prev.gallery, ...uploadedUrls],
      }));

      setMessage("✅ Images uploaded successfully");
    } catch (err) {
      console.error("Image upload error", err);
      setMessage("❌ Failed to upload images");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const payload = {
        ...formData,
        category: selectedSubService,
      };

      const res = await axios.post(
        "https://api.infinityeventz.in/api/vendor/register",
        payload
      );

      setMessage("✅ Vendor added successfully!");
      setFormData({
        name: "",
        ownerName: "",
        email: "",
        phone: "",
        password: "",
        city: "",
        pricingStart: "",
        pricingEnd: "",
        about: "",
        gallery: [],
      });
      setSelectedService("");
      setSelectedSubService("");
    } catch (err) {
      const errorMsg = err?.response?.data?.message || "Something went wrong";
      setMessage("❌ " + errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Vendor</h2>
      {message && (
        <p className="mb-4 text-sm font-medium text-blue-600">{message}</p>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          name="name"
          placeholder="Business Name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          name="ownerName"
          placeholder="Owner Name"
          value={formData.ownerName}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />

        {/* Service and SubService Dropdowns */}
        <div className="flex gap-4">
          <select
            className="w-1/2 p-2 border rounded"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Service
            </option>
            {services?.map((service) => (
              <option value={service._id} key={service._id}>
                {service.name}
              </option>
            ))}
          </select>

          <select
            className="w-1/2 p-2 border rounded"
            value={selectedSubService}
            onChange={(e) => setSelectedSubService(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Sub-Service
            </option>
            {subServices?.map((sub) => (
              <option value={sub._id} key={sub._id}>
                {sub.name}
              </option>
            ))}
          </select>
        </div>

        <input
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />

        <div className="flex gap-4">
          <input
            name="pricingStart"
            type="number"
            placeholder="Pricing Start ₹"
            value={formData.pricingStart}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded"
            required
          />
          <input
            name="pricingEnd"
            type="number"
            placeholder="Pricing End ₹"
            value={formData.pricingEnd}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded"
            required
          />
        </div>

        <textarea
          name="about"
          placeholder="About Vendor"
          value={formData.about}
          onChange={handleChange}
          rows={4}
          className="p-2 border rounded"
        ></textarea>

        {/* Gallery Upload */}
        <div>
          <label className="block mb-1 font-medium">
            Upload Gallery Images
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleGalleryUpload}
            className="block"
          />
        </div>

        {/* Preview Uploaded Images */}
        {formData.gallery.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mt-2">
            {formData.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="Gallery"
                className="h-20 w-40 object-cover rounded-lg"
              />
            ))}
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          disabled={loading || uploading}
        >
          {loading ? "Adding Vendor..." : "Add Vendor"}
        </button>
      </form>
    </div>
  );
};

export default AddVendor;
