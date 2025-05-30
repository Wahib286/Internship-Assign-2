import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import { HiDotsVertical } from "react-icons/hi";
import { useState } from 'react';

export const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div><header className="relative flex items-center justify-between p-4 bg-white border-b">
    <div className="flex items-center">
      <Link to="/">
        <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold">
          <img src={Logo} alt="Logo" />
        </div>
      </Link>
    </div>

    <Link to="/">
      <h1 className="absolute inset-0 flex justify-center items-center text-xl font-bold text-gray-500">
        EmptyCup
      </h1>
    </Link>

    {/* Dropdown */}
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="focus:outline-none">
        <HiDotsVertical className="text-xl text-gray-600" />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
          <ul className="py-1">
            <Link to="/option1">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Option 1
              </li>
            </Link>
            <Link to="/option2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Option 2
              </li>
            </Link>
            <Link to="/login">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  </header>
  </div>
  )
}
