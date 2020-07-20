// Import: Dependencies
import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../../redux/cart/cart.selectors";

// Import: Styling
import "./CartDropdown.styles.scss";

// Import: Components
import CustomButton from "../CustomButton/CustomButton.component";
import CartItem from "../CartItem/CartItem.component";

// UI: CartDropdown
function CartDropdown({ cartItems }) {
  return (
    <div className="CartDropdown">
      <div className="CartDropdown__cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

// Export: CartDropdown
export default connect(mapStateToProps)(CartDropdown);
