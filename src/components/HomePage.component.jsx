// Import: Dependencies
import React from "react";

// Import: Styling
import "./HomePage.styles.scss";

// Organism: HomePage
function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePage__directory-menu">
        <div className="HomePage__menu-item">
          <div className="HomePage__content">
            <h1 className="HomePage__title">HATS</h1>
            <span className="HomePage__subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="HomePage__menu-item">
          <div className="HomePage__content">
            <h1 className="HomePage__title">JACKETS</h1>
            <span className="HomePage__subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="HomePage__menu-item">
          <div className="HomePage__content">
            <h1 className="HomePage__title">SNEAKERS</h1>
            <span className="HomePage__subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="HomePage__menu-item">
          <div className="HomePage__content">
            <h1 className="HomePage__title">WOMENS</h1>
            <span className="HomePage__subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="HomePage__menu-item">
          <div className="HomePage__content">
            <h1 className="HomePage__title">MENS</h1>
            <span className="HomePage__subtitle">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export: HomePage
export default HomePage;
