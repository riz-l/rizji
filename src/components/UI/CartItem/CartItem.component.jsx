// Import: Dependencies
import React from "react";

// Import: Styling
import "./CartItem.styles.scss";

// UI: CartItem
function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <div className="CartItem">
      <img src={imageUrl} alt="Item" />
      <div className="CartItem__item-details">
        <span className="CartItem__name">{name}</span>
        <span className="CartItem__price">
          {quantity} x £{price}
        </span>
      </div>
    </div>
  );
}

// Export: CartItem
export default CartItem;
