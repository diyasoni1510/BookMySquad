import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home2 from "./Pages/Home2";
import AdminDashboard from "./admin/AdminDashboard";

// export const apiUrl = "https://api.infinityeventz.in";
export const apiUrl = "http://localhost:5000";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
