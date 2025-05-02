import React, { useState } from "react";
import SideBar from "../../Components/SideBar";
import TopBar from "../../Components/TopBar"; 
import { Link } from "react-router-dom";
import { FiEye, FiEdit,FiTrash} from 'react-icons/fi'

const salesRepresentatives = [
  {
    productionDate: "2025-05-01",
    PInvoice: "INV001",
    ProductionStatus: "Completed",
    SettlementStatus: "Settled",
  },
  {
    productionDate: "2025-05-02", 
    PInvoice: "INV002",
    ProductionStatus: "In Progress",
    SettlementStatus: "Pending",
  },
];

const AcSettlement = () => {



  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <TopBar />
        <main className="p-8 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-6">SALES REPRESENTATIVE LIST</h1>

  
          {/* Table */}
          <div className="bg-white rounded shadow p-6">
            <div className=" flex justify-between" >
            <h2 className="text-lg font-semibold mb-4 text-start">
              Karigar Account History/Settlement
            </h2>
            <h2 className="text-lg font-bold mb-4 flex text-end text-green-500">Mahendra Silwal</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="border-b">
                  <tr className="text-left">
                    <th className="py-2 px-4 font-semibold">Production Date</th>
                    <th className="py-2 px-4 font-semibold">Pinvoice</th>
                    <th className="py-2 px-4 font-semibold">Production Status</th>
                    <th className="py-2 px-4 font-semibold">Settlement Status </th>
                
                    <th className="py-2 px-4 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {salesRepresentatives.map((rep, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-2 px-4">{rep.productionDate}</td>
                      <td className="py-2 px-4">{rep.PInvoice}</td>
                      <td className="py-2 px-4">
                        <span
                          className={`font-semibold ${
                            rep.SettlementStatus === "Settled"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {rep.SettlementStatus}
                        </span>
                      </td>
                 
                      <td className="py-2 px-4">
                        <span
                          className={`font-semibold ${
                            rep.ProductionStatus === "Completed"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {rep.ProductionStatus}
                        </span>
                      </td>
                      <td className="py-2 px-4 flex gap-2">
                        <Link to="/karigaraccountdetail">
                        <button
                          title="View"
                        
                          className="text-gray-700 hover:text-black cursor-pointer"
                        >
                          <FiEye className="text-lg" />
                        </button>
                        </Link>
                        <Link to="/add-sales-representative">
                        <button title="Edit" className="text-blue-600 hover:text-blue-800 cursor-pointer"><FiEdit/></button></Link>
                        <button title="Delete" className="text-black   hover:text-red-800 cursor-pointer"><FiTrash/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Modal Popup */}
          {/* {openModal && selectedRep && (
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
          )} */}
        </main>
      </div>
    </div>
  );
};

export default AcSettlement;
