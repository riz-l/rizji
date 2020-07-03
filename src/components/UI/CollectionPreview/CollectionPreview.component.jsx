// Import: Dependencies
import React from "react";

// Import: Styling
import "./CollectionPreview.styles.scss";

// Import: Components
import CollectionItem from "../CollectionItem/CollectionItem.component";

// UI: CollectionPreview
function CollectionPreview({ title, items }) {
  return (
    <div className="CollectionPreview">
      <h1 className="CollectionPreview__title">{title.toUpperCase()}</h1>
      <div className="CollectionPreview__preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
}

// Export: CollectionPreview
export default CollectionPreview;
