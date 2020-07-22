// Import: Dependencies
import React from "react";
import { Route } from "react-router-dom";

// Import: Styling
import "./ShopPage.styles.scss";

// Import: Components
import CollectionsOverview from "../../UI/CollectionsOverview/CollectionsOverview.component";
import CollectionPage from "../CollectionPage/CollectionPage.component";

// Page: ShopPage
function ShopPage({ match }) {
  return (
    <div className="ShopPage">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

// Export: ShopPage
export default ShopPage;
