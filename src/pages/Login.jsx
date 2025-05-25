import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="../Images/Office.PNG"
            alt="Office"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          {/* Logo + Heading */}
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Link to="/"><img src="../Images/Logo.PNG" alt="Logo" className="w-12 h-12" /></Link>
            <h2 className="text-2xl font-semibold text-gray-800">LOGIN</h2>
          </div>

          {/* Login Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email / Username</label>
              <input
                type="text"
                placeholder="email / username"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="***************"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
            >
              Login
            </button>
          </form>

          {/* Google Login */}
          <button className="w-full mt-4 flex items-center justify-center border border-gray-300 bg-gray-100 py-2 rounded-md text-sm font-medium hover:bg-gray-200">
            <FcGoogle className="mr-2 text-xl" />
            Login With Google
          </button>

          {/* Links */}
          <div className="text-sm text-center mt-6 space-y-2">
            <a href="#" className="text-green-700 hover:underline block">Forgot your Password</a>
            <a href="#" className="text-green-700 hover:underline block">Create New Account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
