// Import: Dependencies
import React from "react";

// Import: Styling
import "./MenuItem.styles.scss";

// UI: MenuItem
function MenuItem({ title, imageUrl, size, key }) {
  return (
    <div key={key} className={`${size} MenuItem`}>
      <div
        className="MenuItem__background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="MenuItem__content">
        <h1 className="MenuItem__title">{title.toUpperCase()}</h1>
        <span className="MenuItem__subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

// Export: MenuItem
export default MenuItem;
