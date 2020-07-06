// Import: Dependencies
import React from "react";

// Import: Styling
import "./SignInSignUpPage.styles.scss";

// Import: Components
import SignIn from "../../UI/SignIn/SignIn.component";
import SignUp from "../../UI/SignUp/SignUp.component";

// Page: SignInSignUpPage
function SignInSignUpPage() {
  return (
    <div className="SignInSignUpPage">
      <SignIn />
      <SignUp />
    </div>
  );
}

// Export: SignInSignUpPage
export default SignInSignUpPage;
