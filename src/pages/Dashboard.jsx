import React from "react";
import { FaBoxes, FaChartBar, FaClock, FaTruck } from "react-icons/fa";

import StatCard from "../Components/StatCard";
import SideBar from "../Components/sideBar";
import ProductionTable from "../Components/productionTable";
import TopBar from "../Components/TopBar";
const Dashboard = () => {
  return (
    <div className="flex">
    <SideBar />
    <div className="flex-1">
      <TopBar />
      <main className="p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">DASHBOARD OVERVIEW</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard icon={<FaClock />} label="Today's Record" value={251} />
          <StatCard icon={<FaChartBar />} label="Total Production" value={251} />
          <StatCard icon={<FaBoxes />} label="Pending Production" value={251} />
          <StatCard icon={<FaTruck />} label="Delivered Production" value={251} />
        </div>
        <ProductionTable />
      </main>
    </div>
  </div>
  );
};

export default Dashboard;
