// Import: Dependencies
import React from "react";

// Import: Styling
import "./CollectionItem.styles.scss";

// UI: CollectionItem
function CollectionItem({ id, name, price, imageUrl }) {
  return (
    <div className="CollectionItem">
      <div
        className="CollectionItem__image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="CollectionItem__footer">
        <span className="CollectionItem__name">{name}</span>
        <span className="CollectionItem__price">{price}</span>
      </div>
    </div>
  );
}

// Export: CollectionItem
export default CollectionItem;
