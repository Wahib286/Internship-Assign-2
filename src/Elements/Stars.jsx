import React from "react";
import { HiStar } from "react-icons/hi";

const Stars = ({ rating }) => {
  if (!rating) return null;

  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < full) {
      // Full star (black)
      stars.push(<HiStar key={i} className="text-black inline" />);
    } else if (i === full && half) {
      // Half star (black)
      stars.push(<HiStar key={i} className="text-black inline" />);
    } else {
      // Empty star (white)
      stars.push(<HiStar key={i} className="text-slate-300 inline" />);
    }
  }

  return <div className="flex gap-1">{stars}</div>;
};

export default Stars;
