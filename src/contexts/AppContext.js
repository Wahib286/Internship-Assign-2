import React, { createContext, useContext, useState } from 'react';

// Create the AppContext
const AppContext = createContext();

// Custom hook for accessing AppContext
export const useAppContext = () => useContext(AppContext);

// AppContext Provider
export const AppProvider = ({ children }) => {
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  const toggleBookmark = (item) => {
    setBookmarkedItems((prev) => {
      const isAlreadyBookmarked = prev.some((d) => d.id === item.id);
      if (isAlreadyBookmarked) {
        return prev.filter((d) => d.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  return (
    <AppContext.Provider value={{ bookmarkedItems, toggleBookmark }}>
      {children}
    </AppContext.Provider>
  );
};
