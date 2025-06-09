import { useState } from "react";
import AddVendor from "./AddVendor";
import ViewVendor from "./ViewVendor";

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("add-vendor");

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

        <nav className="space-y-4">
          <button
            onClick={() => setActivePage("add-vendor")}
            className={`w-full text-left px-4 py-2 rounded-lg ${
              activePage === "add-vendor"
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            Add Vendor
          </button>
          <button
            onClick={() => setActivePage("view-vendors")}
            className={`w-full text-left px-4 py-2 rounded-lg ${
              activePage === "view-vendors"
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            View Vendors
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white p-4 shadow flex justify-end items-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Admin Profile
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          {activePage === "add-vendor" && <AddVendor />}
          {activePage === "view-vendors" && <ViewVendor />}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
