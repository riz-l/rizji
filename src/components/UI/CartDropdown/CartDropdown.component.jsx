// Import: Dependencies
import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../../redux/cart/cart.actions";

// Import: Styling
import "./CartDropdown.styles.scss";

// Import: Components
import CustomButton from "../CustomButton/CustomButton.component";
import CartItem from "../CartItem/CartItem.component";

// UI: CartDropdown
function CartDropdown({ cartItems, history, dispatch }) {
  return (
    <div className="CartDropdown">
      <div className="CartDropdown__cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="CartDropdown__empty-message">
            Your cart is empty
          </span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// Export: CartDropdown
export default withRouter(connect(mapStateToProps)(CartDropdown));
