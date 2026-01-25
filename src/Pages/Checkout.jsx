import React from 'react';
import "../css/Checkout.css"
import CheckoutContent from '../Components/Checkout/CheckoutContent';

const Checkout = () => {
  return (
   <div className="checkout-container">
  <div className="checkout-header">
    <h1>Checkout</h1>
    <p>Complete your purchase</p>
  </div>
  <div className="progress-bar-checkout">
    <div className="progress-step">
      <div className="step-circle completed">✓</div>
      <span className="step-label">Cart</span>
    </div>
    <div className="step-line" />
    <div className="progress-step">
      <div className="step-circle active">2</div>
      <span className="step-label">Checkout</span>
    </div>
    <div className="step-line" />
    <div className="progress-step">
      <div className="step-circle">3</div>
      <span className="step-label">Payment</span>
    </div>
    <div className="step-line" />
    <div className="progress-step">
      <div className="step-circle">4</div>
      <span className="step-label">Complete</span>
    </div>
  </div>
  <div className="checkout-content">
    <CheckoutContent/>
  </div>
</div>

  )
}

export default Checkout
