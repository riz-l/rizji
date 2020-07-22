// Import: Dependencies
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../../redux/directory/directory.selectors";

// Import: Styling
import "./Directory.styles.scss";

// Import: Components
import MenuItem from "../MenuItem/MenuItem.component";

// UI: Directory
function Directory({ sections }) {
  return (
    <div className="Directory">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

// Export: Directory
export default connect(mapStateToProps)(Directory);
