// Import: Dependencies
import React from "react";

// Import: Styling
import "./FormInput.styles.scss";

// UI: FormInput
function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="FormInput__group">
      <input className="FormInput" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } FormInput__label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

// Export: FormInput
export default FormInput;
