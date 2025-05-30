import React, { useState, useEffect } from "react";
import { HiDotsVertical } from "react-icons/hi";
import NavTabs from "./NavTabs";
import DesignerCard from "./Card";
import Logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import axios from "axios"; 

const EmptyCupMobile = () => {
  const [activeTab, setActiveTab] = useState("contacts");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navTabs, setNavTabs] = useState([]); 
  const [designers, setDesigners] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const navTabsResponse = await axios.get(
          "http://localhost:5000/api/navTabs"
        );
        const designersResponse = await axios.get(
          "http://localhost:5000/api/designers"
        );
        setNavTabs(navTabsResponse.data);
        setDesigners(designersResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-800 max-w-[360px] mx-auto min-h-screen">
      <header className="relative flex items-center justify-between p-4 bg-white border-b">
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

      <NavTabs
        navTabs={navTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div>
        {designers.map((designer) => (
          <DesignerCard key={designer.id} designer={designer} />
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t p-4 text-center text-sm text-gray-500 font-sans">
        &copy; {new Date().getFullYear()} EmptyCup. All rights reserved.
        <div className="mt-2">
          <Link to="/privacy" className="hover:underline mr-4">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default EmptyCupMobile;
