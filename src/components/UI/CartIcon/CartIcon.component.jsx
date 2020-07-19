// Import: Dependencies
import React from "react";
import { ReactComponent as ShoppingIcon } from "../../../assets/images/shopping-bag.svg";

// Import: Styling
import "./CartIcon.styles.scss";

// UI: CartIcon
function CartIcon() {
  return (
    <div className="CartIcon">
      <ShoppingIcon className="CartIcon__shopping-icon" />
      <span className="CartIcon__item-count">0</span>
    </div>
  );
}

// Export: CartIcon
export default CartIcon;
