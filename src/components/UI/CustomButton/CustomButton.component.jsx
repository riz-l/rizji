// Import: Dependencies
import React from "react";

// Import: Styling
import "./CustomButton.styles.scss";

// UI: CustomButton
function CustomButton({ children, ...otherProps }) {
  return (
    <button className="CustomButton" {...otherProps}>
      {children}
    </button>
  );
}

// Export: CustomButton
export default CustomButton;
