// Import: Dependencies
import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

// Import: Styling
import "./CartIcon.styles.scss";

// Import: Components
import { ReactComponent as ShoppingIcon } from "../../../assets/images/shopping-bag.svg";

// UI: CartIcon
function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <div className="CartIcon" onClick={toggleCartHidden}>
      <ShoppingIcon className="CartIcon__shopping-icon" />
      <span className="CartIcon__item-count">{itemCount}</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

// Export: CartIcon
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
