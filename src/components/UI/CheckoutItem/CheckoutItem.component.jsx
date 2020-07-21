// Import: Dependencies
import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../../redux/cart/cart.actions";

// Import: Styling
import "./CheckoutItem.styles.scss";

// UI: CheckoutItem
function CheckoutItem({ cartItem, clearItem, addItem, removeItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="CheckoutItem">
      <div className="CheckoutItem__image-container">
        <img src={imageUrl} alt="Item" />
      </div>
      <span className="CheckoutItem__name">{name}</span>
      <span className="CheckoutItem__quantity">
        <div
          className="CheckoutItem__quantity-arrow"
          onClick={() => removeItem(cartItem)}
        >
          &#10094;
        </div>
        <span className="CheckoutItem__quantity-value">{quantity}</span>
        <div
          className="CheckoutItem__quantity-arrow"
          onClick={() => addItem(cartItem)}
        >
          &#10095;
        </div>
      </span>
      <span className="CheckoutItem__price">£{price}</span>
      <div
        className="CheckoutItem__remove-button"
        onClick={() => clearItem(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

// Export: CheckoutItem
export default connect(null, mapDispatchToProps)(CheckoutItem);
