import React from 'react';
const StatCard = ({ icon, label, value }) => (
    <div className="bg-teal-600 text-white rounded-lg p-4 flex items-center gap-4 shadow w-">
      <div className="text-2xl">{icon}</div>
      <div>
        <div className="text-sm">{label}</div>
        <div className="text-xl font-bold">{value}</div>
      </div>
    </div>
  );
  export default StatCard;