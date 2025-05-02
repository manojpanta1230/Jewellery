// KarigarAccountDetail.jsx
import React, { useState } from 'react';
import SideBar from '../Components/SideBar';
import TopBar from '../Components/TopBar';
import KarigarPaymentModal from './KarigarPaymentMethod';
import { Link } from 'react-router-dom';
const KarigarAccountDetail = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f1effc]">
      <SideBar />
      <div className="flex-1">
        <TopBar />

        <div className="max-w-6xl mx-auto mt-6 p-6 bg-white shadow-md rounded text-sm">
          <h2 className="text-xl font-semibold mb-4">Karigar Account Detail</h2>

          <div className="grid grid-cols-3 gap-4 border border-gray-300 p-4 rounded-md mb-4">
            <div>
              <p><strong>Date:</strong> 2025/05/15</p>
              <p><strong>Sales Agent:</strong> Hari Sari Kali</p>
            </div>
            <div>
              <p><strong>PD Invoice:</strong> PD 254</p>
              <p><strong>Amount:</strong> Rs. 20,00,000.00</p>
            </div>
            <div>
              <p><strong>Karigar:</strong> <span className="text-green-600 font-medium">Mahendra Kailali</span></p>
              <p><strong>OD Invoice:</strong> OD 254</p>
              <p><strong>Status:</strong> <span className="text-green-600 font-medium">Completed</span></p>
            </div>
          </div>

          <h3 className="text-sm font-bold text-green-700 px-4 py-2 rounded-t">Production Delivered</h3>
          <table className="w-full table-auto border border-t-0 border-gray-300 text-left mb-6">
            <thead className="bg-gray-100">
              <tr>
                {["S.No.", "Date", "Category", "Particular", "QTY", "Unit", "Carat", "Weight", "Wastage", "Wages"].map((head, i) => (
                  <th key={i} className="px-3 py-2 border">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["1.", "2025/03/02", "GOLD", "Band Rin Cut design Mens", "1", "Pcs", "24 CT", "52.25 gm", "5.5 gm", "Rs. 500000.00"],
                ["2.", "2025/03/07", "SILVER", "Jhumka", "1", "Pcs", "24 CT", "52.25 gm", "5.2 gm", "Rs. 500000.00"]
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-3 py-2 border">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="text-sm font-semibold text-green-800  px-4 py-2 rounded-t">Payment Records</h3>
          <table className="w-full table-auto border border-t-0 border-gray-300 text-left mb-6">
            <thead className="bg-gray-100">
              <tr>
                {["Date", "Heading", "Wastage", "Due Wastage", "Wages", "Due Wages"].map((head, i) => (
                  <th key={i} className="px-3 py-2 border">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["2025/05/15", "GOLD", "5.250 gm", "2.222 gm", "0", "0"],
                ["2025/05/15", "SILVER", "22.256 gm", "11.256 gm", "Rs. 50,000.00", "Rs. 50,025.00"],
                ["2025/05/15", "Cash", "0", "0", "Rs. 50,000.00", "Rs. 5,025.00"]
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-3 py-2 border">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex flex-col items-center mt-6">
          
            <button
              onClick={() => setShowModal(true)}
              className="bg-green-700 text-white font-semibold px-6 py-2 rounded hover:bg-green-800 transition"
            >
              Make Settlement
            </button>
         
            <p className="text-xs text-red-500 mt-1">
              **Activate Only If last Remaining Has value in it**
            </p>
            <Link to="/karigar-ac-settlement">
            <button className="bg-[#eeeafe] text-black font-medium px-6 py-2 mt-3 rounded shadow hover:bg-[#dcd6fc] transition">
              BACK
            </button>
            </Link>
          </div>
        </div>
      </div>

      <KarigarPaymentModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default KarigarAccountDetail;