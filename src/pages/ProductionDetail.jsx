// ProductionDetail.jsx
import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";
import { FaToggleOn } from "react-icons/fa";
const ProductionDetail = () => {
  const [showAdditionalMetal, setShowAdditionalMetal] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f1effc] relative overflow-hidden">
      <SideBar />
      <div className="flex-1">
        <TopBar />
        <main className="p-6 max-w-6xl mx-auto relative">
          <h2 className="text-sm font-semibold mb-4 uppercase text-gray-800">Production Details</h2>

          <div className="bg-white shadow rounded p-6 text-sm relative overflow-hidden">
            <h3 className="text-lg font-semibold mb-4">Production Detailed</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p><strong>Date:</strong> 2025/05/15</p>
                <p><strong>Status:</strong> <span className="text-orange-600 font-medium">Processing</span></p>
              </div>
              <div>
                <p><strong>Invoice:</strong> PD 254</p>
                <p><strong>OD Invoice:</strong> OD 254</p>
              </div>
              <div>
                <p><strong>Karigar:</strong> Ram </p>
              </div>
              <div>
                <p><strong>Sales Agent:</strong> Hari Sari Kali</p>
              </div>
            </div>

            {/* Order Table */}
            <table className="w-full text-left border-t border-b mb-6">
              <thead>
                <tr>
                  {["S.No.", "Category", "Particular", "Quantity", "Unit", "Carat", "Status"].map((head, i) => (
                    <th key={i} className="py-2 px-2 font-semibold">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-2 px-2">1.</td>
                  <td className="py-2 px-2">GOLD</td>
                  <td className="py-2 px-2">Band Rin Cut design Mens</td>
                  <td className="py-2 px-2">1</td>
                  <td className="py-2 px-2">Pcs</td>
                  <td className="py-2 px-2">24 CT</td>
                  <td className="py-2 px-2">
                    <span className="inline-block w-6 h-4 rounded-full text-2xl"><FaToggleOn/></span>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 px-2">2.</td>
                  <td className="py-2 px-2">SILVER</td>
                  <td className="py-2 px-2">Jhumka</td>
                  <td className="py-2 px-2">1</td>
                  <td className="py-2 px-2">Pcs</td>
                  <td className="py-2 px-2">24 CT</td>
                  <td className="py-2 px-2">
                  <span className="inline-block w-6 h-4 rounded-full text-2xl text-red-500"><FaToggleOn/></span>   </td>
                </tr>
              </tbody>
            </table>

            {/* Metal Alteration */}
            <h4 className="text-green-700 font-semibold mb-2">Metal Alteration(Given)</h4>
            <table className="w-full text-left border-t border-b mb-6">
              <thead>
                <tr>
                  {["S.No.", "Date", "Heading", "Category", "Given Weight", "Carat"].map((head, i) => (
                    <th key={i} className="py-2 px-2 font-semibold">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-2 px-2">1.</td>
                  <td className="py-2 px-2">2025/03/05</td>
                  <td className="py-2 px-2">Initiated</td>
                  <td className="py-2 px-2">GOLD</td>
                  <td className="py-2 px-2">52.25 gram</td>
                  <td className="py-2 px-2">24 CT</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 px-2">2.</td>
                  <td className="py-2 px-2">2025/03/09</td>
                  <td className="py-2 px-2">Return</td>
                  <td className="py-2 px-2">GOLD</td>
                  <td className="py-2 px-2">2.25 gram</td>
                  <td className="py-2 px-2">24 CT</td>
                </tr>
              </tbody>
            </table>

            {/* Production Delivered */}
            <h4 className="text-green-700 font-semibold mb-2">Production Delivered</h4>
            <table className="w-full text-left border-t border-b mb-6">
              <thead>
                <tr>
                  {["S.No.", "Category", "Particular", "Qty", "Unit", "Carat", "Date", "Weight", "Wastage", "Wages"].map((head, i) => (
                    <th key={i} className="py-2 px-2 font-semibold">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-2 px-2">2.</td>
                  <td className="py-2 px-2">SILVER</td>
                  <td className="py-2 px-2">Jhumka</td>
                  <td className="py-2 px-2">1</td>
                  <td className="py-2 px-2">Pair</td>
                  <td className="py-2 px-2">24 k</td>
                  <td className="py-2 px-2">2025/05/26</td>
                  <td className="py-2 px-2">15.25 gm</td>
                  <td className="py-2 px-2">2.35 gm</td>
                  <td className="py-2 px-2">Rs. 8000.00</td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-between items-center">
              <button className="bg-[#eeeafe] text-black font-medium px-6 py-2 rounded shadow hover:bg-[#dcd6fc]">
                BACK
              </button>
              <button
                onClick={() => setShowAdditionalMetal(true)}
                className="bg-green-700 text-white font-semibold px-6 py-2 rounded hover:bg-green-800 transition"
              >
                Additional Metal
              </button>
            </div>

            {/* Slide-in Form From Right */}
            <div
              className={`absolute top-110 right-0 w-[360px] bg-white border rounded-md shadow-md p-4 transition-transform duration-300 ease-in-out z-20 ${
                showAdditionalMetal ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <h3 className="text-md font-semibold mb-4 border-b pb-2">
                Additional Metal to Karigar <span className="float-right font-normal">Ram Bahadur Pandey</span>
              </h3>
              <div className="grid grid-cols-4 gap-2 text-sm items-end mb-4">
                <div className="col-span-2">
                  <input type="date" className="w-full bg-[#eeeafe] px-2 py-1 rounded" />
                </div>
                <div className="col-span-2">
                  <select className="w-full bg-[#eeeafe] px-2 py-1 rounded">
                    <option>Category</option>
                    <option>GOLD</option>
                    <option>SILVER</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <input type="text" className="w-full bg-[#eeeafe] px-2 py-1 rounded" placeholder="Weight" />
                </div>
                <div className="col-span-2">
                  <select className="w-full bg-[#eeeafe] px-2 py-1 rounded">
                    <option>CT</option>
                    <option>24 CT</option>
                    <option>22 CT</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="bg-green-700 text-white font-semibold px-4 py-2 rounded hover:bg-green-800">
                  Save Changes
                </button>
                <button
                  onClick={() => setShowAdditionalMetal(false)}
                  className="bg-[#eeeafe] text-black px-4 py-2 rounded shadow hover:bg-[#dcd6fc]"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductionDetail;