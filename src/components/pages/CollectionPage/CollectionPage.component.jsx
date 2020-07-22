// Import: Dependencies
import React from "react";
import { connect } from "react-redux";

// Import: Selectors
import { selectCollection } from "../../../redux/shop/shop.selectors";

// Import: Styling
import "./CollectionPage.styles.scss";

// Import: Components
import CollectionItem from "../../UI/CollectionItem/CollectionItem.component";

// Page: CollectionPage
function CollectionPage({ collection }) {
  const { title, items } = collection;

  return (
    <div className="CollectionPage">
      <h2 className="CollectionPage__title">{title.toUpperCase()}</h2>
      <div className="CollectionPage__items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

// Export: CollectionPage
export default connect(mapStateToProps)(CollectionPage);
