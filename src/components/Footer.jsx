import React from 'react'
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="bg-white border-t p-4 text-center text-sm text-gray-500 font-sans">
        &copy; {new Date().getFullYear()} EmptyCup. All rights reserved.
        <div className="mt-2">
          <Link to="/privacy" className="hover:underline mr-4">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>
    </div>
  )
}
