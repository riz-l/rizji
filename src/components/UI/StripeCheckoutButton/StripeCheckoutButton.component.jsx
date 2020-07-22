// Import: Dependencies
import React from "react";

// Import: StripeCheckout
import StripeCheckout from "react-stripe-checkout";

// Import: Styling
import "./StripeCheckoutButton.styles.scss";

// UI: StripeCheckoutButton
function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H7lnoJdxB10gLzGe9YJvMGaJiCkvpUmT2a16s0oAwzibbI02Y9VuQI8De3VG5Urj8pBpnKP1tbvMCZq5JuqT34z00RBGFA24w";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Sucessful!");
  };

  return (
    <StripeCheckout
      amount={priceForStripe}
      billingAddress
      currency="GBP"
      description={`Your total is £${price}`}
      image="https://svgshare.com/i/CUz.svg"
      label="Pay Now"
      panelLabel="Pay Now"
      name="Rizji"
      shippingAddress
      stripeKey={publishableKey}
      token={onToken}
    />
  );
}

// Export: StripeCheckoutButton
export default StripeCheckoutButton;
