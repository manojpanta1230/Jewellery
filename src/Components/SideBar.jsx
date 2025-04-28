import React from 'react'
import { MdDashboard, MdPeople, MdOutlineEngineering, MdCategory } from "react-icons/md";
import { FaBoxes } from "react-icons/fa";
import { Link } from 'react-router-dom';
const SideBar = () => {
  return (
    <aside className="w-60 min-h-screen bg-white border-r p-4">
    <div className="text-2xl font-bold text-center mb-6">LOGO HERE</div>
    <nav className="space-y-4 text-lg">
      <Link to="/" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
        <MdDashboard /> Dashboard
      </Link>
      <Link to="/sales-representative" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
        <MdPeople /> Sales Rep
      </Link>
      <Link to="/karigar" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
        <MdOutlineEngineering /> Karigar
      </Link>
      <Link to="/raw-metal" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
        <MdCategory /> Raw Metal
      </Link>
      <Link to="/production" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
        <FaBoxes /> Production
      </Link>
    </nav>
  </aside>
  )
}

export default SideBar;

  