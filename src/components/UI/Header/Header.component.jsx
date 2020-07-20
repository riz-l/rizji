// Import: Dependencies
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../../redux/user/user.selectors";

// Import: Styling
import "./Header.styles.scss";

// Import: Assets
import { ReactComponent as Logo } from "../../../assets/images/crown.svg";

// Import: Firebase Authentication
import { auth } from "../../../firebase/firebase.utils";

// Import: Components
import CartIcon from "../CartIcon/CartIcon.component";
import CartDropdown from "../CartDropdown/CartDropdown.component";

// UI: Header
function Header({ currentUser, hidden }) {
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
          <div className="Header__option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="Header__option" to="/sign-in">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

// Map State to Props
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

// Export: Header
export default connect(mapStateToProps)(Header);
