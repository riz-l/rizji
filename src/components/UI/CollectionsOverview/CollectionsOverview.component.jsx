// Import: Dependencies
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Import: Styling
import "./CollectionsOverview.styles.scss";

// Import: Components
import CollectionPreview from "../CollectionPreview/CollectionPreview.component";

// Import: Selectors
import { selectCollectionsForPreview } from "../../../redux/shop/shop.selectors";

// UI: CollectionsOverview
function CollectionsOverview({ collections }) {
  return (
    <div className="CollectionsOverview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

// Export: CollectionsOverview
export default connect(mapStateToProps)(CollectionsOverview);
