import React from "react";
import { FaEye, FaEdit } from "react-icons/fa";
import SideBar from "../../Components/SideBar";
import TopBar from "../../Components/TopBar";
import { Link } from "react-router-dom";

const ViewKarigar = () => {
  const salesHistory = [
    {
      saleInvoice: "SL0215",
      date: "2025/05/15",
      odInvoice: "OD2153",
      customer: "Ram Bahadur Khatri",
      contact: "+977 9854563251",
      amount: "Rs 2501453.00",
      status: "Completed",
    },
    {
      saleInvoice: "SL0215",
      date: "2025/05/15",
      odInvoice: "OD2153",
      customer: "Ram Bahadur Khatri",
      contact: "+977 9854563251",
      amount: "Rs 2501453.00",
      status: "Pending",
    },
  ];

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <TopBar />
        <main className="p-8 bg-gray-100 min-h-screen flex flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Profile Panel */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
              <h2 className="text-2xl font-bold mb-4 text-green-700">
                Sham Bahadur Sastri
              </h2>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>Code:</strong> SA548</p>
                <p><strong>Contact:</strong> +977 9854568521</p>
                <p><strong>Email Address:</strong> shyam@gmail.com</p>
                <p><strong>Designation:</strong> Sales Representative</p>
                <p><strong>Address:</strong> Kathmandu Nepal</p>
                <p><strong>Status:</strong> <span className="text-green-600">Active</span></p>
                <p><strong>Removed:</strong> FALSE</p>
                <p><strong>Date of Birth:</strong> 22nd September 1992</p>
                <p><strong>Gender:</strong> Male</p>
                <p><strong>Created By:</strong> Admin Name</p>
                <p><strong>Created Date:</strong> 3rd July 2025</p>
                <p><strong>Modified By:</strong> Username</p>
                <p><strong>Last Modified Date:</strong> 5th September 2025</p>
              </div>
              <Link to="/add-sales-representative">
              <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg text-lg ">
                Edit
              </button>
              </Link> 
              <Link to="/karigar-ac-settlement">
              <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg text-lg ">
                A/C Settlement
              </button>
              </Link> 
            </div>

            {/* Right Sales History Panel */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full">
              {/* Filters */}
              <div className="flex flex-wrap gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Invoice"
                  className="border p-2 rounded w-40"
                />
                <input
                  type="date"
                  className="border p-2 rounded w-40"
                />
                <button className="bg-green-600 text-white px-5 py-2 rounded">
                  Filter
                </button>
                <button className="bg-gray-200 text-black px-5 py-2 rounded">
                  Reset
                </button>
              </div>

              {/* Sales History Table */}
              <h2 className="text-lg font-semibold mb-4">Sales History</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="border-b">
                    <tr className="text-left text-gray-600">
                      <th className="py-2 px-4 font-semibold">Sale Invoice</th>
                      <th className="py-2 px-4 font-semibold">Date</th>
                      <th className="py-2 px-4 font-semibold">OD Invoice</th>
                      <th className="py-2 px-4 font-semibold">Customer</th>
                      <th className="py-2 px-4 font-semibold">Contact</th>
                      <th className="py-2 px-4 font-semibold">Amount</th>
                      <th className="py-2 px-4 font-semibold">Status</th>
                      <th className="py-2 px-4 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesHistory.map((sale, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-2 px-4">{sale.saleInvoice}</td>
                        <td className="py-2 px-4">{sale.date}</td>
                        <td className="py-2 px-4">{sale.odInvoice}</td>
                        <td className="py-2 px-4">{sale.customer}</td>
                        <td className="py-2 px-4">{sale.contact}</td>
                        <td className="py-2 px-4">{sale.amount}</td>
                        <td className="py-2 px-4">
                          {sale.status === "Completed" ? (
                            <span className="text-green-500 font-semibold">
                              {sale.status}
                            </span>
                          ) : (
                            <span className="text-orange-500 font-semibold">
                              {sale.status}
                            </span>
                          )}
                        </td>
                   
                        <td className="py-2 px-4 flex gap-2">
                          <FaEye className="text-gray-600 hover:text-black cursor-pointer" />
                          {sale.status === "Pending" && (
                            
                            <FaEdit className="text-gray-600 hover:text-black cursor-pointer" />
                  
                          )}

                        </td>
                       
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination - Just static */}
        
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewKarigar;
