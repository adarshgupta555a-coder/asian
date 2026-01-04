import React from 'react'
import "../../Css/Cart.css";

const Cart = () => {
  return (
       <div class="cart">
      <div class="cart-product-box">
        <h2 class="bag-title">My Bag (1 Item)</h2>

       
        <div class="saving-box">
          <span class="save-icon">✔</span>
          You are saving <strong>₹1370</strong> on this order
        </div>

       
        <div class="cart-item">
          <div class="item-image">
            <img
              src="https://images.bewakoof.com/t320/men-s-grey-mickey-graphic-printed-oversized-hoodies-596779-1760101460-1.jpg"
              alt="product"
            />
          </div>

          
          <div class="item-details">
            <h3>Bewakoof®</h3>
            <p class="item-desc">
              Men's Grey Mickey Graphic Printed Oversized Hoodies
            </p>

            <p class="shipping">
              <span class="dot"></span> Ships in <strong>1-2 days</strong>
            </p>

            <div class="item-actions">
              <select>
                <option>Size : M</option>
              </select>

              <select>
                <option>Qty : 1</option>
              </select>
            </div>
            
          <div class="item-price">
            <p class="price">₹1,229 <span class="old-price">₹2,599</span></p>
            <p class="saved">You saved ₹1,370</p>
          </div>
          </div>

          

         
          <button class="remove-btn">✕</button>
        </div>
      </div>

     
      <div class="cart-price">
        <div class="cart-price-box">
          <h3 class="price-title">Price Summary</h3>
          <div class="line"></div>

          <div class="price-row">
            <span>Subtotal</span>
            <span>₹1,229</span>
          </div>

          <div class="price-row">
            <span>Discount</span>
            <span class="green-text">– ₹1,370</span>
          </div>

          <div class="price-row">
            <span>Shipping</span>
            <span class="green-text">FREE</span>
          </div>

          <div class="line"></div>

          <div class="price-row total">
            <span>Total</span>
            <span>₹1,229</span>
          </div>
          <button class="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>

  )
}

export default Cart
