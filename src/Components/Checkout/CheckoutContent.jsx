import React, { useEffect, useState } from 'react'
import supabase from '../../Database/supabase';
import { useSelector } from 'react-redux';

const CheckoutContent = () => {
    const [cart, setCart] = useState(null);
    const userData = useSelector((state)=>state?.Auth?.value);

    useEffect(()=>{
        if (userData) {
            getCartData()
        }
    },[userData])


    const getCartData = async () => {
    let { data: cart, error } = await supabase
      .from('cart')
      .select(`
        user_id,
        product(
        id,
        name,
        image_url,
        price,
        category(
        name
        )
        ),
        quantity,
        price
        `)
      .eq('user_id', userData?.id)

    console.log(cart)
    if (!error) {
      setCart(cart)
    }
  }

   const totalData = cart?.reduce((acu, curr) => {
      return acu + curr.price * curr.quantity;
    }, 0)
  return (
   <>
       <div className="checkout-form">
      {/* Shipping Information */}
      <div className="form-section">
        <h2 className="section-title">Shipping Information</h2>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter first name"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter last name"
              required=""
            />
          </div>
          <div className="form-group full-width">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              required=""
            />
          </div>
          <div className="form-group full-width">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter phone number"
              required=""
            />
          </div>
          <div className="form-group full-width">
            <label htmlFor="address">Street Address *</label>
            <input
              type="text"
              id="address"
              placeholder="Enter street address"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City *</label>
            <input type="text" id="city" placeholder="Enter city" required="" />
          </div>
          <div className="form-group">
            <label htmlFor="state">State *</label>
            <input
              type="text"
              id="state"
              placeholder="Enter state"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Pincode *</label>
            <input
              type="text"
              id="pincode"
              placeholder="Enter pincode"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country *</label>
            <select id="country" required="">
              <option value="">Select country</option>
              <option value="IN">India</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
            </select>
          </div>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="saveAddress" />
          <label htmlFor="saveAddress">
            Save this address for future orders
          </label>
        </div>
      </div>
      {/* Delivery Options */}
      <div className="form-section">
        <h2 className="section-title">Delivery Options</h2>
        <div className="payment-methods">
          <input
            type="radio"
            name="delivery"
            id="standard"
            className="payment-option"
            defaultChecked=""
          />
          <label htmlFor="standard" className="payment-label">
            <div className="payment-icon">📦</div>
            <div className="payment-info">
              <h4>Standard Delivery (5-7 days)</h4>
              <p>Free shipping</p>
            </div>
            <strong>FREE</strong>
          </label>
          <input
            type="radio"
            name="delivery"
            id="express"
            className="payment-option"
          />
          <label htmlFor="express" className="payment-label">
            <div className="payment-icon">⚡</div>
            <div className="payment-info">
              <h4>Express Delivery (2-3 days)</h4>
              <p>Faster shipping</p>
            </div>
            <strong>₹99</strong>
          </label>
        </div>
      </div>
      {/* Payment Method */}
      <div className="form-section">
        <h2 className="section-title">Payment Method</h2>
        <div className="payment-methods">
          <input
            type="radio"
            name="payment"
            id="card"
            className="payment-option"
            defaultChecked=""
          />
          <label htmlFor="card" className="payment-label">
            <div className="payment-icon">💳</div>
            <div className="payment-info">
              <h4>Credit / Debit Card</h4>
              <p>Secure payment with card</p>
            </div>
          </label>
          <input
            type="radio"
            name="payment"
            id="upi"
            className="payment-option"
          />
          <label htmlFor="upi" className="payment-label">
            <div className="payment-icon">📱</div>
            <div className="payment-info">
              <h4>UPI</h4>
              <p>Pay via UPI apps</p>
            </div>
          </label>
          <input
            type="radio"
            name="payment"
            id="cod"
            className="payment-option"
          />
          <label htmlFor="cod" className="payment-label">
            <div className="payment-icon">💵</div>
            <div className="payment-info">
              <h4>Cash on Delivery</h4>
              <p>Pay when you receive</p>
            </div>
          </label>
        </div>
      </div>
    </div>
    {/* Order Summary */}
    <div className="order-summary">
      <h2 className="summary-title">Order Summary</h2>
      {/*Order Cards*/}
      {cart?.map((item,index)=>(
        <div className="order-item">
        <div className="item-thumb">
          <img
            src={item?.product?.image_url}
            alt="Product"
          />
        </div>
        <div className="item-info">
          <h4>{item?.product?.name}</h4>
          <p>Size: M | Qty: {item?.quantity}</p>
          <span className="item-price">₹{item?.price}</span>
        </div>
      </div>
      ))}


      <div className="summary-row">
        <span>Subtotal ({cart?.length} items)</span>
        <span>₹{totalData}</span>
      </div>
      <div className="summary-row discount">
        <span>Discount</span>
        <span>-₹{totalData/2}</span>
      </div>
      <div className="summary-row">
        <span>Shipping</span>
        <span>FREE</span>
      </div>
      <div className="summary-row">
        <span>Tax</span>
        <span>₹180</span>
      </div>
      <div className="summary-row total">
        <span>Total</span>
        <span>₹{totalData+180}</span>
      </div>
      <div className="promo-section">
        <div className="promo-input">
          <input type="text" placeholder="Enter promo code" />
          <button className="apply-btn">Apply</button>
        </div>
      </div>
      <button className="place-order-btn">Place Order</button>
      <div className="security-badge">🔒 Secure SSL Encrypted Payment</div>
    </div>
   </>
  )
}

export default CheckoutContent
