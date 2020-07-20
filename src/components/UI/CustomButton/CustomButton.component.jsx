// Import: Dependencies
import React from "react";

// Import: Styling
import "./CustomButton.styles.scss";

// UI: CustomButton
function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "GoogleSignIn" : ""
      } CustomButton`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

// Export: CustomButton
export default CustomButton;
