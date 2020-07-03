// Import: Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Import: Styling
import "./Header.styles.scss";

// Import: Assets
import { ReactComponent as Logo } from "../../../assets/images/crown.svg";

// UI: Header
function Header() {
  return (
    <div className="Header">
      <Link className="Header__logo-container" to="/">
        <Logo className="Header__logo" />
      </Link>
      <div className="Header__options">
        <Link className="Header__option" to="/shop">
          SHOP
        </Link>
        <Link className="Header__option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
}

// Export: Header
export default Header;
