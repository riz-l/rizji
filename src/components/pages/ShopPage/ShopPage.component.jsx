// Import: Dependencies
import React, { Component } from "react";

// Import: Styling
import "./ShopPage.styles.scss";

// Import: Data
import SHOP_DATA from "./shopData";

// Import: Components
import CollectionPreview from "../../UI/CollectionPreview/CollectionPreview.component";

// Page: ShopPage
class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="ShopPage">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

// Export: ShopPage
export default ShopPage;
