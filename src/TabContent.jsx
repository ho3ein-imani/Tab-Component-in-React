import React from "react";

function TabContent({ image, alt, description }) {
  return (
    <div className="tab-content show">
      <div className="box-img">
        <img src={image} alt={alt} />
      </div>
      <div className="box-content">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TabContent;