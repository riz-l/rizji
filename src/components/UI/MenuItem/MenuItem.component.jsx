// Import: Dependencies
import React from "react";
import { withRouter } from "react-router-dom";

// Import: Styling
import "./MenuItem.styles.scss";

// UI: MenuItem
function MenuItem({ title, imageUrl, size, history, linkUrl, match, key }) {
  return (
    <div
      key={key}
      className={`${size} MenuItem`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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
export default withRouter(MenuItem);
