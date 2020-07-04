// Import: Dependencies
import React from "react";

// Import: Styling
import "./CustomButton.styles.scss";

// UI: CustomButton
function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
  return (
    <button
      className={`${isGoogleSignIn ? "GoogleSignIn" : ""} CustomButton`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

// Export: CustomButton
export default CustomButton;
