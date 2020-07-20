// Import: Dependencies
import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../../redux/cart/cart.actions";

// Import: Styling
import "./CollectionItem.styles.scss";

// Import: Components
import CustomButton from "../CustomButton/CustomButton.component";

// UI: CollectionItem
function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;
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
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

// Export: CollectionItem
export default connect(null, mapDispatchToProps)(CollectionItem);
