import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";
import { FaPlus, FaMinus } from "react-icons/fa";

const PurchaseRawMetal = () => {
  const [metalRows, setMetalRows] = useState([
    { metal: "", carat: "", weight: "", rate: "", amount: "", remark: "" },
  ]);

  const [showVendorForm, setShowVendorForm] = useState(false); // << Added for Vendor Panel

  const handleAddRow = () => {
    setMetalRows([
      ...metalRows,
      { metal: "", carat: "", weight: "", rate: "", amount: "", remark: "" },
    ]);
  };

  const handleRemoveRow = (index) => {
    const newRows = [...metalRows];
    newRows.splice(index, 1);
    setMetalRows(newRows);
  };

  const handleInputChange = (index, field, value) => {
    const newRows = [...metalRows];
    newRows[index][field] = value;

    // Automatically calculate amount (weight × rate)
    if (field === "weight" || field === "rate") {
      const weight = parseFloat(newRows[index].weight) || 0;
      const rate = parseFloat(newRows[index].rate) || 0;
      newRows[index].amount = (weight * rate).toFixed(2);
    }

    setMetalRows(newRows);
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <TopBar />
        <main className="p-8 bg-gray-100 min-h-screen relative">
          <h1 className="text-2xl font-bold mb-6">Purchase Raw Metal Entry</h1>

          {/* Top Inputs */}
          <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded-lg mb-6 shadow">
            <input type="date" className="bg-gray-200 p-2 rounded" placeholder="Choose Date" />
            <input type="text" className="bg-gray-200 p-2 rounded" placeholder="Purchase Invoice" />
            <div className="flex gap-2">
              <input type="text" className="bg-gray-200 p-2 rounded w-full" placeholder="Choose Vendor" />
              <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                onClick={() => setShowVendorForm(true)}
              >
                New Vendor
              </button>
            </div>
          </div>

          {/* Metal Entry Rows */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            {metalRows.map((row, index) => (
              <div key={index} className="grid grid-cols-6 gap-2 items-center mb-3">
                <input
                  type="text"
                  value={row.metal}
                  onChange={(e) => handleInputChange(index, "metal", e.target.value)}
                  className="bg-gray-200 p-2 rounded"
                  placeholder="Choose Metal"
                />
                <input
                  type="text"
                  value={row.carat}
                  onChange={(e) => handleInputChange(index, "carat", e.target.value)}
                  className="bg-gray-200 p-2 rounded"
                  placeholder="CT"
                />
                <input
                  type="number"
                  value={row.weight}
                  onChange={(e) => handleInputChange(index, "weight", e.target.value)}
                  className="bg-gray-200 p-2 rounded"
                  placeholder="Weight"
                />
                <input
                  type="number"
                  value={row.rate}
                  onChange={(e) => handleInputChange(index, "rate", e.target.value)}
                  className=" bg-gray-200 p-2 rounded"
                  placeholder="Buying Rate"
                />
                <input
                  type="text"
                  value={row.amount}
                  readOnly
                  className=" p-2 rounded bg-gray-200"
                  placeholder="Total Cost Price"
                />
                <div className="flex gap-2">
                  <button onClick={handleAddRow} className="bg-green-500 text-white p-2 rounded">
                    <FaPlus />
                  </button>
                  {metalRows.length > 1 && (
                    <button onClick={() => handleRemoveRow(index)} className="bg-red-500 text-white p-2 rounded">
                      <FaMinus />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Charges and Remarks */}
          <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg shadow mb-6">
            <input type="text" className="p-2 rounded bg-gray-200" placeholder="Additional Charges" />
            <input type="text" className=" bg-gray-200 p-2 rounded " placeholder="Reason for Additional Charges" />
          </div>

          {/* Subtotal, Tax, Grand Total */}
          <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg shadow mb-6">
            <input type="text" className=" bg-gray-200 p-2 rounded" placeholder="Sub-Total" />
            <input type="text" className=" bg-gray-200 p-2 rounded" placeholder="Tax (if any)" />
            <input type="text" className="  bg-gray-200 p-2 rounded" placeholder="Grand Total" />
            <input type="text" className="  bg-gray-200 p-2 rounded" placeholder="Purchase Remark" />
          </div>

          {/* Save Button */}
          <button className="bg-green-600 text-white w-full py-3 rounded-lg text-lg">
            Save Changes
          </button>

          {/* --- Vendor Side Panel --- */}
          {showVendorForm && (
            <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg z-50 p-6 overflow-y-auto transition-transform duration-300">
              <button
                className="absolute top-2 right-4 text-black text-2xl"
                onClick={() => setShowVendorForm(false)}
              >
                ×
              </button>

              <h2 className="text-2xl font-bold mb-6">Add New Supplier</h2>

              <div className="space-y-4 ">
                <input type="file" className=" p-2 rounded w-full" placeholder="Image Upload" />
                <input type="text" className="bg-gray-200 p-2 rounded w-full" placeholder="Purchase Invoice" />
                <input type="text" className="bg-gray-200 p-2 rounded w-full" placeholder="Full Title" />
                <input type="email" className="bg-gray-200  p-2 rounded w-full" placeholder="Email Address" />
                <input type="text" className="bg-gray-200 p-2 rounded w-full" placeholder="Contact Number" />
                <input type="text" className="bg-gray-200 p-2 rounded w-full" placeholder="Address" />
                <input type="text" className="bg-gray-200 p-2 rounded w-full" placeholder="PAN/VAT No" />
                <input type="text" className="bg-gray-200 p-2 rounded w-full" placeholder="Staff Name" />
                <input type="email" className="bg-gray-200  p-2 rounded w-full" placeholder="Staff Email" />
                <input type="text" className="bg-gray-200 p-2 rounded w-full" placeholder="Contact Number" />
                <select className="bg-gray-200 p-2 rounded w-full">
                  <option>Designation</option>
                  <option>Manager</option>
                  <option>Sales Executive</option>
                </select>
                <select className="bg-gray-200   p-2 rounded w-full">
                  <option>Choose Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>

                <div className="flex gap-4 mt-6">
                  <button className="bg-green-600 text-white w-full py-2 rounded cursor-pointer">
                    Save Changes
                  </button>
                  <button
                    onClick={() => setShowVendorForm(false)}
                    className=" text-white w-full py-2 rounded bg-red-500 cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default PurchaseRawMetal;
