// Import: Dependencies
import React from "react";

// Import: Styling
import "./CartDropdown.styles.scss";

// Import: Components
import CustomButton from "../CustomButton/CustomButton.component";

// UI: CartDropdown
function CartDropdown() {
  return (
    <div className="CartDropdown">
      <div className="CartDropdown__cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

// Export: CartDropdown
export default CartDropdown;
