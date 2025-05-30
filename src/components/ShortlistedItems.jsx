import React from 'react'
import NavTabs from './NavTabs'
import { Header } from './Header'
import { useAppContext } from '../contexts/AppContext';
import DesignerCard from "./Card";
import { Footer } from './Footer';

export const ShortlistedItems = ({ navTabs, activeTab, setActiveTab }) => {
    const { bookmarkedItems } = useAppContext(); 
  
    return (
      <div className="font-sans text-gray-800 max-w-[360px] mx-auto min-h-screen">
        <Header />
        <NavTabs navTabs={navTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
  
        <div className="p-4">
          {bookmarkedItems.map((designer, index) => (
            <DesignerCard key={designer.id} designer={designer} index={index} />
          ))}
        </div>

        <Footer/>
      </div>
    );
};
