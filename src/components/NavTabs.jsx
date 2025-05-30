import React from "react";
import {
  HiMenu,
  HiPhotograph,
  HiLocationMarker,
  HiClipboardList,
  HiSortAscending,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const icons = {
  contacts: HiMenu,
  gallery: HiPhotograph,
  map: HiLocationMarker,
  shortlisted: HiClipboardList,
  sort: HiSortAscending,
};

const NavTabs = ({ navTabs, activeTab, setActiveTab }) => {
  // Split tabs: left (first 3) and right (remaining)
  const leftTabs = navTabs.slice(0, 3);
  const rightTabs = navTabs.slice(3);

  return (
    <div className="flex justify-between bg-white border-b overflow-hidden">
      {/* Left Tabs */}
      <div className="flex">
        {leftTabs.map((tab) => {
          const Icon = icons[tab.id];
          const isActive = activeTab === tab.id;
          return (
            <div
              key={tab.id}
              className={`text-center py-3 px-4 cursor-pointer ${
                isActive ? "text-[#E0A64E]" : "text-[#3A312E]"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Link to={`/${tab.id}`} className="flex flex-col items-center">
                {Icon && <Icon className="text-lg" />}
                <div className="text-xs">{tab.label}</div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Right Tabs */}
      <div className="flex">
        {rightTabs.map((tab) => {
          const Icon = icons[tab.id];
          const isActive = activeTab === tab.id;
          return (
            <div
              key={tab.id}
              className={`text-center py-3 px-4 cursor-pointer ${
                isActive ? "text-[#E0A64E]" : "text-[#3A312E]"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Link to={`/${tab.id}`} className="flex flex-col items-center">
                {Icon && <Icon className="text-lg" />}
                <div className="text-xs">{tab.label}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavTabs;
