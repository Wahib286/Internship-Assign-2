import React, { useState, useEffect } from "react";
import NavTabs from "./NavTabs";
import DesignerCard from "./Card";
import { Header } from "./Header";

import axios from "axios";
import { Footer } from "./Footer";

const EmptyCupMobile = ({ navTabs, activeTab, setActiveTab }) => {
  const [designers, setDesigners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDesigners = async () => {
      try {
        const designersResponse = await axios.get(
          "http://localhost:5000/api/designers"
        );
        setDesigners(designersResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching designers:", error);
      }
    };

    fetchDesigners();
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
      <Header />
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

      <Footer/>
      
    </div>
  );
};

export default EmptyCupMobile;
