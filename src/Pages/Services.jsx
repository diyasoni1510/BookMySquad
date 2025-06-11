import Header from "../components/Header";

const Services = () => {
  const { vendorType } = useParams(); // caterer / photographer / venue
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const res = await axios.get(`/api/vendors?type=${vendorType}`);
        setVendors(res.data);
      } catch (err) {
        console.error("Error fetching vendors:", err);
      }
    };

    fetchVendors();
  }, [vendorType]);
  return (
    <>
      <Header />
    </>
  );
};

export default Services;
