import { useState } from "react";
import TabContent from "./TabContent";
import "./Index.css";
import { TabsData } from "./data";

function Tabs() {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || TabsData[0].id
  );

  return (
  
    <div className="tabs-container">
      <div className="tabs">
        {TabsData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              localStorage.setItem("activeTab", tab.id);
            }}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Find the active tab and display the corresponding component*/}
      {TabsData
        .filter((tab) => tab.id === activeTab)
        .map((tab) => (
          <TabContent
            key={tab.id}
            image={tab.image}
            alt={tab.alt}
            description={tab.description}
          />
        ))}
    </div>
    
  );
}

export default Tabs;