import React from 'react'
import { FiEye, FiEdit } from 'react-icons/fi'
const ProductionTable = () => {
  return (
    
        <div className="bg-white p-4 rounded shadow mt-6">
          <h2 className="text-lg font-semibold mb-4">All Production List</h2>
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Invoice</th>
                <th className="p-2">Date</th>
                <th className="p-2">Karigar</th>
                <th className="p-2">Sales Rep</th>
                <th className="p-2">OD Bill No.</th>
                <th className="p-2">Given Weight</th>
                <th className="p-2">Status</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">EJ123</td>
                <td className="p-2">2018/01/02</td>
                <td className="p-2">RamBabuSharma</td>
                <td className="p-2">KrishnaKumari</td>
                <td className="p-2">OD254</td>
                <td className="p-2">10.24Gm</td>
                <td className="p-2 text-yellow-600">Pending</td>
                <td className="p-2">Rs. 51000</td>
                <td className="p-2 flex gap-2">
                  <FiEye className="cursor-pointer" />
                  <FiEdit className="cursor-pointer" />
                </td>
              </tr>
              <tr>
                <td className="p-2">EJ123</td>
                <td className="p-2">2018/01/02</td>
                <td className="p-2">RamBabuSharma</td>
                <td className="p-2">KrishnaKumari</td>
                <td className="p-2">OD254</td>
                <td className="p-2">10.24Gm</td>
                <td className="p-2 text-green-600">Delivered</td>
                <td className="p-2">Rs. 51000</td>
                <td className="p-2 flex gap-2">
                  <FiEye className="cursor-pointer" />
                  <FiEdit className="cursor-pointer" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  )
}

export default ProductionTable

  