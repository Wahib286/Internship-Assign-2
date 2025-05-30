import React from "react";
import { useState } from "react";
import {
  HiArrowRight,
  HiEye,
  HiBookmark,
  HiExclamation,
  HiEyeOff,
  HiOutlineBookmark,
} from "react-icons/hi";
import Stars from "../Elements/Stars";

const DesignerCard = ({ designer, index }) => {
  const colors = ["bg-[#FFFFFF]", "bg-[#FFFCF2]"];
  const [isHidden, setIsHidden] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleAction = (action) => {
    console.log(`${action} clicked for designer ${designer.id}`);
  };

  return (
    <div className={`flex flex-row  h-[284px] shadow-sm  p-5 ${colors[designer.id % 2]}`}>
      {/*Box1 */}
      <div className="w-[80%] flex flex-col pr-4">
        <div className="mb-3">
          <div className="text-[18px] font-bold text-black mb-2">
            {designer.name}
          </div>
          <Stars rating={designer.rating} />
        </div>

        <div className="text-[10px] text-black mb-4 leading-relaxed">
          {designer.description}
        </div>

        <div className="flex gap-8 mb-5">
          <div className="text-center">
            <div className="font-bold text-[24px] text-black">
              {designer.projects}
              <div className="text-[10px] text-gray-500 font-medium">Projects</div>
            </div>
          </div>
          <div className="text-center">
            <div className="font-bold text-[24px] text-black">
              {designer.years}
            
            <div className="text-[10px] text-gray-500 font-medium">Years</div>
            </div>
          </div>
          <div className="text-center">
            <div className="font-bold text-[24px] text-black">
              {designer.price}
            
            <div className="text-[10px] text-gray-500 font-medium">Price</div>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          {designer.phones.map((phone, i) => (
            <div key={i} className="text-[16px] text-black font-medium">
              {phone}
            </div>
          ))}
        </div>
      </div>

      {/*Box2 */}
      <div className="relative w-[20%] flex flex-col items-center space-y-4 py-2">
        {/* left border */}
        <div className="absolute left-0 top-4 bottom-4 w-px bg-[#e5e5e5da]"></div>

        <button
          className="flex flex-col items-center text-[#8D4337]  hover:text-orange-600 transition-colors"
          onClick={() => handleAction("Details")}>
          <HiArrowRight className="text-lg mb-1" />
          <span className="text-[7px] font-medium">Details</span>
        </button>

        <button
          onClick={() => {
            setIsHidden(!isHidden);
            handleAction("Hide");
          }}
          className={`w-10 h-10 rounded-full flex flex-col items-center justify-center transition-all duration-200 ${
            isHidden
              ? "text-[#8D4337]  hover:text-orange-600"
              : "text-[#8D4337]  hover:text-orange-600"
          }`}>
          {isHidden ? (
            <HiEyeOff className="text-lg" />
          ) : (
            <HiEye className="text-lg" />
          )}
          <span className="text-[7px] text-[#8D4337] mt-1">
            {isHidden ? "Show" : "Hide"}
          </span>
        </button>

        <button
          onClick={() => {
            setIsBookmarked(!isBookmarked);
            handleAction("Bookmark");
          }}
          className={`w-10 h-10 rounded-full flex flex-col items-center justify-center transition-all duration-200 ${
            isBookmarked
              ? "text-[#8D4337]  hover:text-orange-600"
              : "text-[#8D4337]  hover:text-orange-600"
          }`}>
          {isBookmarked ? (
            <HiBookmark className="text-lg" />
          ) : (
            <HiOutlineBookmark className="text-xlg" />
          )}
          <span className="text-[7px] text-[#8D4337] mt-1">
            {isBookmarked ? "Shortlist" : "Shortlisted"}
          </span>
        </button>

        <button
          onClick={() => handleAction("Report")}
          className="w-10 h-10 rounded-full flex flex-col items-center justify-center text-[#8D4337] transition-all  hover:text-orange-600 duration-200">
          <HiExclamation className="text-lg" />
          <span className="text-[7px] text-[#8D4337] mt-1">Report</span>
        </button>
      </div>
    </div>
  );
};

export default DesignerCard;
