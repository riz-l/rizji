// Import: Dependencies
import React from "react";

// Import: Styling
import "./CheckoutItem.styles.scss";

// UI: CheckoutItem
function CheckoutItem({ cartItem: { name, imageUrl, price, quantity } }) {
  return (
    <div className="CheckoutItem">
      <div className="CheckoutItem__image-container">
        <img src={imageUrl} alt="Item" />
      </div>
      <span className="CheckoutItem__name">{name}</span>
      <span className="CheckoutItem__quantity">{quantity}</span>
      <span className="CheckoutItem__price">£{price}</span>
      <div className="CheckoutItem__remove-button">&#10005;</div>
    </div>
  );
}

// Export: CheckoutItem
export default CheckoutItem;
