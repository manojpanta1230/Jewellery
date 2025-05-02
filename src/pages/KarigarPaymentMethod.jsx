// KarigarPaymentModal.jsx
import React from 'react';

const KarigarPaymentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl">
        <div className="mb-4 border-b pb-2 flex justify-between text-sm font-medium">
          <span>Karigar Account Payment</span>
          <span>Karigar: <span className="text-green-600 font-semibold">Mahendra Kailali</span></span>
          <span>PD Invoice: <span className="text-gray-700">PD 254</span></span>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <label className="block mb-1">Choose Payment Mode</label>
            <select className="w-full border px-3 py-2 rounded">
              <option>Select Mode</option>
              <option>Cash</option>
              <option>Bank Transfer</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Date</label>
            <input type="date" className="w-full border px-3 py-2 rounded" defaultValue="2025-05-03" />
          </div>

          <div>
            <label className="block mb-1">Metal</label>
            <select className="w-full border px-3 py-2 rounded">
              <option>Select Mode</option>
              <option>GOLD</option>
              <option>SILVER</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Wages</label>
            <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Wages Payment" />
          </div>

          <div>
            <label className="block mb-1">Due Wages</label>
            <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Remaining Payment" />
          </div>
          <div>
            <label className="block mb-1">Wages</label>
            <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Wages Payment" />
          </div>

          <div>
            <label className="block mb-1">Due Wages</label>
            <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Remaining Payment" />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button onClick={onClose} className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">Save Changes</button>
          <button onClick={onClose} className="bg-[#eeeafe] text-black px-6 py-2 rounded hover:bg-[#dcd6fc]">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default KarigarPaymentModal;
