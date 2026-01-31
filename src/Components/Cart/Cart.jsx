import React, { useEffect, useState } from 'react'
import "../../css/Cart.css";
import { useSelector } from 'react-redux';
import supabase from '../../Database/supabase';
import CartCard from './CartCard';
import { Link } from 'react-router';

const Cart = () => {
  const cartData = useSelector((state) => state?.Cart)
  const userData = useSelector((state) => state?.Auth?.value)
  const [cart, setCart] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0)
  // const dispatch = useDispatch()


  useEffect(() => {
    if (userData) {
      getCartData()
      console.log(cartData)
    }
  }, [userData, cartData.length])


  useEffect(() => {
    if (cartData.length > 0) {
      const totalData = cartData?.reduce((acu, curr) => {
      return acu + curr.price * curr.qty;
    }, 0)
    console.log(totalData)
    setTotalPrice(totalData)
    }
    
  }, [cartData])

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
        stock,
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

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p>{cart?.length} items in your cart</p>
      </div>
      <div className="cart-content">
        <div className="cart-items">
          {cart?.map((item, index) => (<CartCard key={index} cart={item} />
          ))}

          <Link to="/product" className="continue-shopping">
            ← Continue Shopping
          </Link>
        </div>
      {  cart?.length > 0 && <div className="cart-summary">
          <h2 className="summary-title">Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal ({cartData?.length} items)</span>
            <span>₹{totalPrice}</span>
          </div>
          <div className="summary-row discount">
            <span>Discount</span>
            <span>-₹{totalPrice / 2 + 200}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>FREE</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>
          <div className="promo-section">
            <div className="promo-input">
              <input type="text" placeholder="Enter promo code" />
              <button className="apply-btn">Apply</button>
            </div>
          </div>
          <Link to="/checkout" style={{textDecoration:"none"}}>
          <button className="checkout-btn">Proceed to Checkout</button>
          </Link>
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
        </div>}
      </div>
    </div>

  )
}

export default Cart
