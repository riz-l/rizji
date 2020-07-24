// Import: Dependencies
import React from "react";

// Import: Styling
import "./CustomButton.styles.scss";

// Import: Styled-Components
import { CustomButtonContainer } from "./CustomButton.styles";

// UI: CustomButton
function CustomButton({ children, ...props }) {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}

// Export: CustomButton
export default CustomButton;
