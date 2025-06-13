import  { useState } from "react";
import SideBar from "../../Components/SideBar";
import TopBar from "../../Components/TopBar";
import { FaPlus, FaMinus } from "react-icons/fa";

const NewProduction = () => {
  const [productRows, setProductRows] = useState([
    { metal: "", particular: "", quantity: 1, unit: "", carat: "" },
  ]);
  const [givenWeightRows, setGivenWeightRows] = useState([
    { metal: "", carat: "", givenWeight: "" },
  ]);

  const handleProductChange = (index, field, value) => {
    const newRows = [...productRows];
    newRows[index][field] = value;
    setProductRows(newRows);
  };

  const handleGivenWeightChange = (index, field, value) => {
    const newRows = [...givenWeightRows];
    newRows[index][field] = value;
    setGivenWeightRows(newRows);
  };

  const addProductRow = () => {
    setProductRows([...productRows, { metal: "", particular: "", quantity: 1, unit: "", carat: "" }]);
  };

  const removeProductRow = (index) => {
    const newRows = [...productRows];
    newRows.splice(index, 1);
    setProductRows(newRows);
  };

  const addWeightRow = () => {
    setGivenWeightRows([...givenWeightRows, { metal: "", carat: "", givenWeight: "" }]);
  };

  const removeWeightRow = (index) => {
    const newRows = [...givenWeightRows];
    newRows.splice(index, 1);
    setGivenWeightRows(newRows);
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <TopBar />
        <main className="p-8 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-6">New Production Begin</h1>

          {/* Top Inputs */}
          <div className="grid grid-cols-4 gap-4 bg-white p-4 rounded-lg mb-6 shadow">

            <input type="date" className=" p-2 rounded" placeholder="Choose Date" />
            <input type="text" className=" p-2 rounded" placeholder="Invoice" />
            <input type="text" className=" p-2 rounded" placeholder="Order No." />
            <select className=" p-2 rounded">
              <option>Choose Karigar</option>
              <option>Karigar 1</option>
              <option>Karigar 2</option>
            </select>
            <select className="border p-2 rounded col-span-2">
              <option>Choose Sales Representative</option>
              <option>Sales Rep 1</option>
              <option>Sales Rep 2</option>
            </select>
          </div>

          {/* Product Details */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            {productRows.map((row, index) => (
              <div key={index} className="grid grid-cols-6 gap-2 items-center mb-3">
                <select
                  value={row.metal}
                  onChange={(e) => handleProductChange(index, "metal", e.target.value)}
                  className="border p-2 rounded"
                >
                  <option>Select Metal</option>
                  <option>Gold</option>
                  <option>Silver</option>
                </select>
                <input
                  type="text"
                  value={row.particular}
                  onChange={(e) => handleProductChange(index, "particular", e.target.value)}
                  className="border p-2 rounded"
                  placeholder="Particular"
                />
                <input
                  type="number"
                  value={row.quantity}
                  onChange={(e) => handleProductChange(index, "quantity", e.target.value)}
                  className="border p-2 rounded"
                  placeholder="Quantity"
                />
                <select
                  value={row.unit}
                  onChange={(e) => handleProductChange(index, "unit", e.target.value)}
                  className="border p-2 rounded"
                >
                  <option>Select Unit</option>
                  <option>Pcs</option>
                  <option>Pair</option>
                </select>
                <select
                  value={row.carat}
                  onChange={(e) => handleProductChange(index, "carat", e.target.value)}
                  className="border p-2 rounded"
                >
                  <option>Select Carat</option>
                  <option>22 CT</option>
                  <option>24 CT</option>
                </select>
                <div className="flex gap-2">
                  <button onClick={addProductRow} className="bg-green-800 text-white p-2 rounded">
                    <FaPlus />
                  </button>
                  {productRows.length > 1 && (
                    <button onClick={() => removeProductRow(index)} className="bg-red-500 text-white p-2 rounded">
                      <FaMinus />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Given Weight Section */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            {givenWeightRows.map((row, index) => (
              <div key={index} className="grid grid-cols-5 gap-2 items-center mb-3">
                <select
                  value={row.metal}
                  onChange={(e) => handleGivenWeightChange(index, "metal", e.target.value)}
                  className="border p-2 rounded"
                >
                  <option>Select Metal</option>
                  <option>Gold</option>
                  <option>Silver</option>
                </select>
                <select
                  value={row.carat}
                  onChange={(e) => handleGivenWeightChange(index, "carat", e.target.value)}
                  className="border p-2 rounded"
                >
                  <option>Select Carat</option>
                  <option>22 CT</option>
                  <option>24 CT</option>
                </select>
                <input
                  type="text"
                  value={row.givenWeight}
                  onChange={(e) => handleGivenWeightChange(index, "givenWeight", e.target.value)}
                  className="border p-2 rounded"
                  placeholder="Given Weight"
                />
                <div className="flex gap-2">
                  <button onClick={addWeightRow} className="bg-green-800 text-white p-2 rounded">
                    <FaPlus />
                  </button>
                  {givenWeightRows.length > 1 && (
                    <button onClick={() => removeWeightRow(index)} className="bg-red-500 text-white p-2 rounded">
                      <FaMinus />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Payment Field */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <input
              type="text"
              className="border p-2 rounded w-full"
              placeholder="Payment for this production"
            />
            <p className="text-xs text-center text-gray-500 mt-2">
              *Only payable after production delivered
            </p>
          </div>

          {/* Save Changes */}
          <button className="bg-green-800 text-white w-full py-3 rounded-lg text-lg">
            Save Changes
          </button>
        </main>
      </div>
    </div>
  );
};

export default NewProduction;
