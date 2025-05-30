import React, { useState, useEffect } from "react";
import EmptyCupMobile from "./components/EmptyCupMobile";
import { Route, Routes } from "react-router-dom";
import { ShortlistedItems } from "./components/ShortlistedItems";
import axios from "axios";
import { AppProvider } from "./contexts/AppContext";

function App() {
  const [navTabs, setNavTabs] = useState([]);
  const [activeTab, setActiveTab] = useState("contacts");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNavTabs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/navTabs");
        setNavTabs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching navTabs:", error);
      }
    };

    fetchNavTabs();
  }, []);

  if (loading) {
    return <div>Loading navTabs...</div>;
  }

  return (
    <AppProvider>
    <Routes>
      <Route path="/" element={<EmptyCupMobile navTabs={navTabs} activeTab={activeTab} setActiveTab={setActiveTab} />} />
      <Route path="/shortlisted" element={<ShortlistedItems navTabs={navTabs} activeTab={activeTab} setActiveTab={setActiveTab} />} />
    </Routes>
    </AppProvider>
  );
}

export default App;
