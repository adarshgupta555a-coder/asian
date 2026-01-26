import React, { useState } from 'react';
import "../css/Checkout.css"
import CheckoutContent from '../Components/Checkout/CheckoutContent';

const Checkout = () => {
  const [step, setStep] = useState(2);
  

  const OnhandleStep = () =>{
    setStep(prev => ++prev)
  }
  
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
            {step >= 3?<div className="step-circle completed">✓</div>:<div className="step-circle active">2</div>}      
      <span className="step-label">Checkout</span>
    </div>
    <div className="step-line" />
    <div className="progress-step">
      {step === 3?<div className="step-circle active">3</div>:step>3?<div className="step-circle completed">✓</div>:<div className="step-circle">3</div>}
      {/* <div className="step-circle">3</div> */}
      <span className="step-label">Payment</span>
    </div>
    <div className="step-line" />
    <div className="progress-step">
{step === 4?<div className="step-circle active">4</div>:<div className="step-circle ">4</div>}      
<span className="step-label">Complete</span>
    </div>
  </div>
  <div className="checkout-content">
    <CheckoutContent OnhandleStep={OnhandleStep} step={step}/>
  </div>
</div>

  )
}

export default Checkout
