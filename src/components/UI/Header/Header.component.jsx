// Import: Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Import: Styling
import "./Header.styles.scss";

// Import: Assets
import { ReactComponent as Logo } from "../../../assets/images/crown.svg";

// Import: Firebase Authentication
import { auth } from "../../../firebase/firebase.utils";

// UI: Header
function Header({ currentUser }) {
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}

// Export: Header
export default Header;
