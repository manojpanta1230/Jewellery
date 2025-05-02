import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";
import { Link } from "react-router-dom";
import { FiEye, FiEdit,FiTrash} from 'react-icons/fi'

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
                        <Link to="/productiondetails">
                        <button
                          title="View"
                  
                          className="text-gray-700 hover:text-black cursor-pointer"
                        >
                          <FiEye className="text-lg" />
                        </button>
                        </Link>
                      
                        <button title="Edit" className="text-blue-600 hover:text-blue-800 cursor-pointer"><FiEdit/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Modal Popup */}
     
        </main>
      </div>
    </div>
  );
};

export default Production;
