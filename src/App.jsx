import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home2 from "./Pages/Home2";
import AdminDashboard from "./admin/AdminDashboard";
import Services from "./Pages/Services";
import VendorPage from "./Pages/VendorPage";
import Exclusive from "./Pages/Exclusive";

// export const apiUrl = "https://api.infinityeventz.in";
// // export const apiUrl = "http://localhost:5000";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* <Route path="/wedding-venues" element={<Services />} /> */}
          <Route path="/venues" element={<Services />} />
          <Route path="/vendor" element={<VendorPage />} />
          {/* <Route path="/exclusive" element={<Exclusive />} /> */}
          <Route path="/exclusive/:id" element={<Exclusive />} />
          <Route path="/:service/:type/:city" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
