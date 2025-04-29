import React, { useState } from "react";
import SideBar from "../Components/sideBar";
import TopBar from "../Components/TopBar";
import { Link } from "react-router-dom";
import { FiEye, FiEdit,FiTrash} from 'react-icons/fi'
import Karigar from "./Karigar";

const productionDetails = [
  {
    PInvoice: "SR021",
    Date: "2025-07-03",
    Karigar :"Manoj Thakjuri",
    salesRepresentatives: "Susmita Sahi Thakjuri",
    ODBillNo: "123456",
    Weight: "10g",
    Amount: "TBD",
    Status: "Pending",
    },
    {
        PInvoice: "SR021",
        Date: "2025-07-03",
        Karigar :"Manoj Thakjuri",
        salesRepresentatives: "Susmita Sahi Thakjuri",
        ODBillNo: "123456",
        Weight: "10g",
        Amount: "TBD",
        Status: "Delivered",
        },
       
  
]

const Production = () => {
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
        <main className="p-8 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-6">PRODUCTION LIST</h1>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-4 items-center mb-8 shadow-2xl bg-white p-4 rounded-2xl">
            <Link to="/new-production">
            <button className="bg-green-600 text-white px-5 py-2 rounded cursor-pointer">
            New Production
            </button>
            </Link>
      
            <input
              type="text"
              placeholder="Invoice"
              className="bg-gray-200 text-black px-5 py-2 rounded"
            />
            <input
              type="date"
              className="border p-2 rounded w-48"
            />
            <button className="bg-green-600 text-white px-5 py-2 rounded">
              Filter
            </button>
            <button className="bg-gray-200 text-black px-5 py-2 rounded">
              Reset
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded shadow p-6">
            <h2 className="text-lg font-semibold mb-4">
              All Production
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="border-b">
                  <tr className="text-left">
                    <th className="py-2 px-4 font-semibold">P Invoice </th>
                    <th className="py-2 px-4 font-semibold"> Date</th>
                    <th className="py-2 px-4 font-semibold">Karigar</th>
                    <th className="py-2 px-4 font-semibold">Sale Rep</th>
                    <th className="py-2 px-4 font-semibold">OD Bill No</th>
                    <th className="py-2 px-4 font-semibold">Weight</th>
                    <th className="py-2 px-4 font-semibold">Amount </th>
                    <th className="py-2 px-4 font-semibold">Status</th>
                    <th className="py-2 px-4 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {productionDetails.map((rep, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-2 px-4">{rep.PInvoice}</td>
                      <td className="py-2 px-4">{rep.Date}</td>
                      <td className="py-2 px-4">{rep.Karigar}</td>
                      <td className="py-2 px-4">{rep.salesRepresentatives}</td>
                      <td className="py-2 px-4">{rep.ODBillNo}</td>
                      <td className="py-2 px-4">{rep.Weight}</td>
                      <td className="py-2 px-4">{rep.Amount}</td>
                      <td className="py-2 px-4">
                        <span
                          className={`font-semibold ${
                            rep.Status === "Delivered"
                              ? "text-green-600"
                              : "text-black"
                          }`}
                        >
                          {rep.Status}
                        </span>
                      </td>
                      <td className="py-2 px-4 flex gap-2">
                        <button
                          title="View"
                          onClick={() => handleView(rep)}
                          className="text-gray-700 hover:text-black cursor-pointer"
                        >
                          <FiEye className="text-lg" />
                        </button>
                        <Link to="/add"></Link>
                        <button title="Edit" className="text-blue-600 hover:text-blue-800 cursor-pointer"><FiEdit/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Modal Popup */}
          {openModal && selectedRep && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-96 relative">
                <button
                  className="absolute top-2 right-2 text-gray-600"
                  onClick={handleClose}
                >
                  ✖️
                </button>
                <h2 className="text-xl font-semibold mb-4 text-green-700">
                  {selectedRep.fullName}
                </h2>
                <div className="space-y-2 text-sm">
                  <p><strong>Code:</strong> {selectedRep.code}</p>
                  <p><strong>Contact:</strong> {selectedRep.contact}</p>
                  <p><strong>Email Address:</strong> {selectedRep.email}</p>
                  <p><strong>Designation:</strong> {selectedRep.designation}</p>
                  <p><strong>Address:</strong> {selectedRep.address}</p>
                  <p><strong>Status:</strong> <span className={selectedRep.status === "Active" ? "text-green-600" : "text-red-600"}>{selectedRep.status}</span></p>
                  <p><strong>Removed:</strong> {selectedRep.removed}</p>
                  <p><strong>Date of Birth:</strong> {selectedRep.dob}</p>
                  <p><strong>Gender:</strong> {selectedRep.gender}</p>
                  <p><strong>Created By:</strong> {selectedRep.createdBy}</p>
                  <p><strong>Created Date:</strong> {selectedRep.createdDate}</p>
                  <p><strong>Modified By:</strong> {selectedRep.modifiedBy}</p>
                  <p><strong>Last Modified Date:</strong> {selectedRep.lastModifiedDate}</p>
                </div>
                <Link to="/add-sales-representative">
                <button
                  className="bg-green-600 text-white w-full py-2 mt-6 rounded cursor-pointer"
                  
                >
                 Edit
                  
                </button>
                </Link>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Production;
