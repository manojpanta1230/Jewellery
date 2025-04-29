import React, { useState } from "react";
import SideBar from "../../Components/SideBar";
import TopBar from "../../Components/TopBar";
import { Link } from "react-router-dom";
const AddNewKarigar = () => {
  const [formData, setFormData] = useState({
    code: "",
    fullName: "",
    email: "",
    contact: "",
    designation: "",
    dob: "",
    gender: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Here you can POST data to your backend
    alert("Sales Representative Added Successfully!");
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <TopBar />
        <main className="p-8 bg-gray-100 min-h-screen">
          <h1 className="text-xl font-bold mb-6">SALES REPRESENTATIVE</h1>

          <div className="bg-white rounded shadow p-6">
            <h2 className="text-lg font-semibold mb-4 border-b pb-2">
              Add New Karigar
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Code */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Code</label>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  placeholder="Code"
                  className="border rounded p-2 bg-gray-100"
                  required
                />
              </div>

              {/* Full Name */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Karigar Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="border rounded p-2 bg-gray-100"
                  required
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="border rounded p-2 bg-gray-100"
                />
              </div>

              {/* Contact */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Contact"
                  className="border rounded p-2 bg-gray-100"
                  required
                />
              </div>

       

              {/* Date of Birth */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="border rounded p-2 bg-gray-100"
                  required
                />
              </div>

              {/* Gender */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border rounded p-2 bg-gray-100"
                  required
                >
                  <option value="">Choose Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Address */}
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="border rounded p-2 bg-gray-100"
                  required
                />
              </div>
            </form>

            <div className="mt-6">
                <Link to="/sales-representative">
              <button
                type="submit"
              
                className="bg-green-600 text-white px-8 py-2 rounded hover:bg-green-700"
              >
                Save
              </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddNewKarigar;
