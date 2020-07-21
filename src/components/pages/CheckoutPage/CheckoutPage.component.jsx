// Import: Dependencies
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Import: Styling
import "./CheckoutPage.styles.scss";

// Import: Selectors
import {
  selectCartItems,
  selectCartTotal,
} from "../../../redux/cart/cart.selectors";

// Import: Components
import CheckoutItem from "../../UI/CheckoutItem/CheckoutItem.component";

// Page: CheckoutPage
function CheckoutPage({ cartItems, total }) {
  return (
    <div className="CheckoutPage">
      <div className="CheckoutPage__header">
        <div className="CheckoutPage__header-block">
          <span>Product</span>
        </div>
        <div className="CheckoutPage__header-block">
          <span>Description</span>
        </div>
        <div className="CheckoutPage__header-block">
          <span>Quantity</span>
        </div>
        <div className="CheckoutPage__header-block">
          <span>Price</span>
        </div>
        <div className="CheckoutPage__header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="CheckoutPage__total">
        <span>TOTAL: £{total}</span>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

// Export: CheckoutPage
export default connect(mapStateToProps)(CheckoutPage);
