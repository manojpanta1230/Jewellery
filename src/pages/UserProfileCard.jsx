import React from 'react';
import SideBar from '../Components/SideBar';
import TopBar from '../Components/TopBar';
import { FiEdit, FiUser } from 'react-icons/fi';

const UserProfile = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <TopBar />
        <main className="bg-gray-100 min-h-screen p-8 font-sans">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-xl text-gray-600">Hello There,</h2>
            <h1 className="text-4xl font-bold font-serif text-gray-800">
              Fairy Craft <span className="text-purple-700">Jewellery</span>
            </h1>
            <p className="text-lg mt-1 text-gray-600">Glad you are on the Team.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Left Profile Card */}
            <div className="bg-purple-100 rounded-xl shadow-md p-6 text-center">
              <h2 className="text-2xl font-semibold text-purple-900 mb-1">Ella Jones</h2>
              <p className="text-purple-700 font-semibold mb-4">Admin</p>
              <img
                className="w-28 h-28 mx-auto rounded-md object-cover mb-4"
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Ella Jones"
              />
              <p className="font-medium text-gray-800">Ella Ore Jones</p>
              <p className="text-sm text-gray-700 mt-1">+977 9854658562</p>
              <p className="text-sm text-gray-700">+977 9845485456</p>
              <p className="text-sm text-blue-600 mt-1">Ella@gmail.com</p>
              <p className="text-sm mt-2">
                Status: <span className="text-green-600 font-semibold">Active</span>
              </p>
              <p className="text-sm mt-1">Join Date: 3rd Jan 2020</p>
            </div>

            {/* Right Detail Panel */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="flex items-center text-xl font-bold text-gray-800 gap-2">
                  <FiUser className="text-gray-600" /> About Me
                </h3>
                <a href="#" className="text-sm text-blue-600 hover:underline">Update Password</a>
              </div>
              <div className="text-sm text-gray-700 space-y-3">
                <p><strong>Username:</strong> Ella Ore Jones</p>
                <p><strong>Full Name:</strong> Ella Ore Jones</p>
                <p><strong>Contact:</strong> +977 9854658565, +977 9856584565</p>
                <p><strong>Email:</strong> Ellaorejones@gmail.com</p>
                <p><strong>Role:</strong> Admin</p>
                <p><strong>Address:</strong> 465 Eastern Road, Kathmandu Nepal</p>
                <p><strong>Gender:</strong> Female</p>
                <p><strong>Date of Birth:</strong> 2nd Jan 1995</p>
                <p><strong>Join Date:</strong> 3rd Jan 2020</p>
                <p><strong>Status:</strong> <span className="text-green-600 font-semibold">Active</span></p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserProfile;
