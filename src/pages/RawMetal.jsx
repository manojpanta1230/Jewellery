import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";
import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { GoUnverified } from "react-icons/go";

const metalRecords = [
  {
    date: "2023-10-01",
    Heading: "Purchase",
    InvoiceCode: "12345",
    Supplier: "ABC Suppliers",
    Metal: "Gold",
    Carat: "22K",
    Weight: "10g",
    Rate: "5000",
    Amount: "50000",
    Status: "paid",
  },
  {
    date: "2023-10-01",
    Heading: "Purchase",
    InvoiceCode: "12345",
    Supplier: "ABC Suppliers",
    Metal: "Gold",
    Carat: "22K",
    Weight: "10g",
    Rate: "5000",
    Amount: "50000",
    Status: "Paid",
  },
];
const metalValue = [
  {
    metal: "GOLD",
    carat: "22K",
    weight: "10g",
  },
  {
    metal: "SILVER",
    carat: "22K",
    weight: "10g",
  },
];

const RawMetal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRep, setSelectedRep] = useState(null);

  const handleView = (rep) => {
    setSelectedRep(rep);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedRep(null);
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <TopBar />
         <h1 className="text-2xl font-bold mb-6 mt-10 ml-10">RAW METAL RECORDS</h1>
        <main className="p-5 bg-gray-100 min-h-screen flex">
          <div className="bg-white min-h-screen w-1/4 shadow-orange-100 rounded-2xl  ">
            <h1 className="text-3xl font-bold mb-6 text-center text-black-700 p-3 border-b-1    ">
              Total Available Stock
            </h1>
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="py-2 px-4 font-semibold">Metal</th>
                  <th className="py-2 px-4 font-semibold">Carat </th>
                  <th className="py-2 px-4 font-semibold">Weight </th>
                </tr>
              </thead>
              <tbody>
                {metalValue.map((rep, index) => (
                  <tr key={index} className=" hover:bg-gray-50">
                    <td className="py-2 px-4">{rep.metal}</td>
                    <td className="py-2 px-4">{rep.carat}</td>
                    <td className="py-2 px-4">{rep.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table */}
          <div className=" flex min-h-full width-full  flex-col p-5">
            <div className="flex flex-wrap gap-4 items-center justify-around mb-8 shadow-2xl bg-white p-4 rounded-2xl">
              <Link to="/add-metal">
                <button className="bg-green-800 text-white px-5 py-2 rounded cursor-pointer">
                  Add Metal
                </button>
              </Link>
              <input
                type="text"
                placeholder="Invoice"
                className="bg-gray-200 text-black px-5 py-2 rounded"
              />
              <input type="date" className="border p-2 rounded w-48" />
              <button className="bg-green-800 text-white px-5 py-2 rounded">
                Filter
              </button>
              <button className="bg-gray-200 text-black px-5 py-2 rounded">
                Reset
              </button>
            </div>
            <div className="bg-white rounded shadow p-6">
              <h2 className="text-lg font-semibold mb-4">
                All Sales Representatives
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="border-b">
                    <tr className="text-left">
                      <th className="py-2 px-4 font-semibold">Date</th>
                      <th className="py-2 px-4 font-semibold">Heading</th>
                      <th className="py-2 px-4 font-semibold">Invoice Code</th>
                      <th className="py-2 px-4 font-semibold">Supplier</th>
                      <th className="py-2 px-4 font-semibold">Metal</th>
                      <th className="py-2 px-4 font-semibold">Carat</th>
                      <th className="py-2 px-4 font-semibold">Weight</th>
                      <th className="py-2 px-4 font-semibold">Rate</th>

                      {/* ✅ Update this column name */}
                      <th className="py-2 px-4 font-semibold">Amount</th>

                      <th className="py-2 px-4 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {metalRecords.map((rep, index) => (
                      <tr key={index} className="border-b-1  hover:bg-gray-50">
                        <td className="py-2 px-4">{rep.date}</td>
                        <td className="py-2 px-4">{rep.Heading}</td>
                        <td className="py-2 px-4">{rep.InvoiceCode}</td>
                        <td className="py-2 px-4">{rep.Supplier}</td>
                        <td className="py-2 px-4">{rep.Metal}</td>
                        <td className="py-2 px-4">{rep.Carat}</td>
                        <td className="py-2 px-4">{rep.Weight}</td>
                        <td className="py-2 px-4">{rep.Rate}</td>

                        {/* ✅ Amount + Verification icon in the same td */}
                        <td className="py-2 px-4 flex items-center gap-2">
                          <span>{rep.Amount}</span>
                          {rep.Status === "Paid" ? (
                            <MdVerified className="text-green-400 text-xl" />
                          ) : (
                            <GoUnverified className="text-red-500 text-xl" />
                          )}
                        </td>

                        {/* ✅ Action buttons in their own td */}
                        <td className="py-2 px-4  gap-2 text-2xl">
                          <button
                            title="View"
                            onClick={() => handleView(rep)}
                            className="text-gray-700 hover:text-black cursor-pointer"
                          >
                            <FaEye />
                          </button>
                          {/* You can also add Edit or Delete icons here if needed */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Modal Popup */}
          {/* Right Side Drawer Modal */}
          {openModal && selectedRep && (
            <div className="absolute top-20 right-10 z-50 w-[380px] bg-white shadow-lg border border-gray-300 p-6 rounded-lg max-h-[85vh] overflow-y-auto">
              <h2 className="text-lg font-semibold mb-4 border-b pb-2">
                Raw Metal Log Detail
              </h2>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Date:</strong> 2025/05/15
                </p>
                <p>
                  <strong>Heading:</strong> Purchase
                </p>
                <p>
                  <strong>Invoice Code:</strong> Pro/Karigar code
                </p>
                <p>
                  <strong>Supplier:</strong> Vendor/Karigar
                </p>
                <p>
                  <strong>Metal:</strong> GOLD
                </p>
                <p>
                  <strong>Carat:</strong> 24 ct
                </p>
                <p>
                  <strong>Weight:</strong> 5gm
                </p>
                <p>
                  <strong>Rate:</strong> Rs. 1,90,100.00
                </p>
                <p>
                  <strong>Amount:</strong> Rs. 95,050.00
                </p>
                <p>
                  <strong>Remark:</strong> Purchase
                </p>
              </div>
              <button
                onClick={handleClose}
                className="w-full mt-6 bg-[#eeeafe] text-black py-2 rounded shadow hover:bg-[#dcd6fc]"
              >
                OK
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default RawMetal;
