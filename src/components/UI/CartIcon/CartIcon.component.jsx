// Import: Dependencies
import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../../redux/cart/cart.actions";

// Import: Styling
import "./CartIcon.styles.scss";

// Import: Components
import { ReactComponent as ShoppingIcon } from "../../../assets/images/shopping-bag.svg";

// UI: CartIcon
function CartIcon({ toggleCartHidden }) {
  return (
    <div className="CartIcon" onClick={toggleCartHidden}>
      <ShoppingIcon className="CartIcon__shopping-icon" />
      <span className="CartIcon__item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// Export: CartIcon
export default connect(null, mapDispatchToProps)(CartIcon);
