import React from 'react'
import "../../css/Cart.css";

const Cart = () => {
  return (
      <div className="cart-container">
    <div className="cart-header">
      <h1>Shopping Cart</h1>
      <p>3 items in your cart</p>
    </div>
    <div className="cart-content">
      <div className="cart-items">
        <div className="cart-item">
          <div className="item-image">
            <img
              src="https://images.bewakoof.com/t320/men-s-grey-mickey-graphic-printed-oversized-hoodies-596779-1760101460-1.jpg"
              alt="product"
            />
          </div>
          <div className="item-details">
            <h3>Bewakoof®</h3>
            <p className="item-desc">
              Men's Grey Mickey Graphic Printed Oversized Hoodies
            </p>
            <p className="shipping">
              <span className="dot" /> Ships in <strong>1-2 days</strong>
            </p>
            <div className="item-actions">
              <select>
                <option>Size : M</option>
                <option>Size : S</option>
                <option>Size : L</option>
                <option>Size : XL</option>
              </select>
              <select>
                <option>Qty : 1</option>
                <option>Qty : 2</option>
                <option>Qty : 3</option>
                <option>Qty : 4</option>
              </select>
            </div>
            <div className="item-price">
              <p className="price">
                ₹1,229 <span className="old-price">₹2,599</span>
              </p>
              <p className="saved">You saved ₹1,370</p>
            </div>
          </div>
          <button className="remove-btn">✕</button>
        </div>
        <div className="cart-item">
          <div className="item-image">
            <img
              src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400"
              alt="product"
            />
          </div>
          <div className="item-details">
            <h3>Premium Brand</h3>
            <p className="item-desc">
              Classic Black Hoodie with Premium Quality
            </p>
            <p className="shipping">
              <span className="dot" /> Ships in <strong>2-3 days</strong>
            </p>
            <div className="item-actions">
              <select>
                <option>Size : L</option>
                <option>Size : S</option>
                <option>Size : M</option>
                <option>Size : XL</option>
              </select>
              <select>
                <option>Qty : 1</option>
                <option>Qty : 2</option>
                <option>Qty : 3</option>
              </select>
            </div>
            <div className="item-price">
              <p className="price">
                ₹1,499 <span className="old-price">₹2,999</span>
              </p>
              <p className="saved">You saved ₹1,500</p>
            </div>
          </div>
          <button className="remove-btn">✕</button>
        </div>
        <div className="cart-item">
          <div className="item-image">
            <img
              src="https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400"
              alt="product"
            />
          </div>
          <div className="item-details">
            <h3>Urban Style</h3>
            <p className="item-desc">Grey Pullover Sweatshirt for Men</p>
            <p className="shipping">
              <span className="dot" /> Ships in <strong>1-2 days</strong>
            </p>
            <div className="item-actions">
              <select>
                <option>Size : XL</option>
                <option>Size : S</option>
                <option>Size : M</option>
                <option>Size : L</option>
              </select>
              <select>
                <option>Qty : 1</option>
                <option>Qty : 2</option>
                <option>Qty : 3</option>
              </select>
            </div>
            <div className="item-price">
              <p className="price">
                ₹999 <span className="old-price">₹1,799</span>
              </p>
              <p className="saved">You saved ₹800</p>
            </div>
          </div>
          <button className="remove-btn">✕</button>
        </div>
        <a href="#" className="continue-shopping">
          ← Continue Shopping
        </a>
      </div>
      <div className="cart-summary">
        <h2 className="summary-title">Order Summary</h2>
        <div className="summary-row">
          <span>Subtotal (3 items)</span>
          <span>₹3,727</span>
        </div>
        <div className="summary-row discount">
          <span>Discount</span>
          <span>-₹3,670</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span>FREE</span>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <span>₹3,727</span>
        </div>
        <div className="promo-section">
          <div className="promo-input">
            <input type="text" placeholder="Enter promo code" />
            <button className="apply-btn">Apply</button>
          </div>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
        <div
          style={{
            marginTop: 20,
            padding: 12,
            background: "#f5f5f5",
            border: "2px solid #e0e0e0",
            fontSize: 12,
            textAlign: "center"
          }}
        >
          🔒 Secure Checkout
        </div>
      </div>
    </div>
  </div>

  )
}

export default Cart
