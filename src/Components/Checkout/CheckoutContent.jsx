import React, { useEffect, useState } from 'react'
import supabase from '../../Database/supabase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { FetchCartThunk } from '../../store/cartThunk';

const CheckoutContent = ({ step, OnhandleStep }) => {
  const [cart, setCart] = useState(null);
  const userData = useSelector((state) => state?.Auth?.value);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [checkout, setCheckout] = useState({
    delivery_option: "",
    payment_mode: "",
  })

  useEffect(() => {
    if (userData) {
      console.log(userData)
      getCartData()
    }
  }, [userData])


  const getCartData = async () => {
    let { data, error } = await supabase
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

    console.log(data)
    if (!error) {
      setCart(data)
    }
  }

  const OnhandleChange = (e) => {
    const { name, value } = e.target;
    setCheckout((prev) => ({ ...prev, [name]: value }))
  }

  const totalData = cart?.reduce((acu, curr) => {
    return acu + curr.price * curr.quantity;
  }, 0);

  const Onsubmit = async () => {
    console.log(checkout)
    if (checkout?.delivery_option === "" || checkout?.payment_mode === "") {
      alert("insert the payment and delivery option.");
      return;
    }

    if (step < 3) {
      OnhandleStep();
      return;
    }


    if (step > 3) {
      navigate("/")
      return;
    }



    const { data: order, error: OrderErr } = await supabase
      .from('orders')
      .insert([
        {
          user_id: userData?.id,
          order_number: Date.now(),
          tax: totalData / 3,
          total_amount: totalData,
          payment_status: "paid",
          shipping_address: userData?.address,
          delivery_option: checkout.delivery_option,
          payment_mode: checkout?.payment_mode
        },
      ])
      .select()
      .single()

    console.log(order)
    if (OrderErr) {
      console.log(error);
      return;
    }

    const OrderItems = cart.map((item) => ({  order_id: order.id, product_id: item.product.id, quantity: item.quantity, price: item.price }))
    const { data, error } = await supabase
      .from('order_items')
      .insert(OrderItems)
      .select()

    if (error) {
      console.log(error);
      return;
    }


    const { error: CartErr } = await supabase
      .from("cart")
      .delete()
      .eq("user_id", userData?.id); // trick to delete all rows

    if (CartErr) {
      console.log(CartErr);
      return CartErr;
    } 

    dispatch(FetchCartThunk(userData?.user_id))
    alert("order placed")
      OnhandleStep()
    



  }
  return (
    <>
   {  cart?.length > 0 &&   <div className="checkout-form">
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
                value={(userData?.name)?.split(" ")[0] || "Tony"}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter last name"
                value={(userData?.name)?.split(" ")[1] || "Stark"}
                required
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                placeholder="Enter email address"
                defaultValue={userData?.email}
                required
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter phone number"
                defaultValue={userData?.phone}
                required
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="address">Street Address *</label>
              <input
                type="text"
                id="address"
                placeholder="Enter street address"
                defaultValue={userData?.address}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City *</label>
              <input type="text" id="city" placeholder="Enter city" defaultValue={userData?.city} required />
            </div>
            <div className="form-group">
              <label htmlFor="state">State *</label>
              <input
                type="text"
                id="state"
                placeholder="Enter state"
                defaultValue={userData?.state}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode *</label>
              <input
                type="text"
                id="pincode"
                placeholder="Enter pincode"
                defaultValue={userData?.pincode}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country *</label>
              <select id="country" required="">
                <option value="">Select country</option>
                <option value="IN" selected>India</option>
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
              name="delivery_option"
              id="standard"
              className="payment-option"
              value="Free shipping"
              onChange={OnhandleChange}
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
              name="delivery_option"
              id="express"
              className="payment-option"
              value="Faster shipping"
              onChange={OnhandleChange}
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
              name="payment_mode"
              id="card"
              className="payment-option"
              value="Credit / Debit Card"
              onChange={OnhandleChange}
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
              name="payment_mode"
              id="upi"
              className="payment-option"
              value="UPI Payment"
              onChange={OnhandleChange}
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
              name="payment_mode"
              id="cod"
              className="payment-option"
              value="Cash on Delivery"
              onChange={OnhandleChange}
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
      </div>}
      {/* Order Summary */}
      {  cart?.length > 0 &&  <div className="order-summary">
        <h2 className="summary-title">Order Summary</h2>
        {/*Order Cards*/}
        {cart?.map((item, index) => (
          <div className="order-item" key={index}>
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
          <span>-₹{totalData / 2}</span>
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
          <span>₹{totalData + 180}</span>
        </div>
        <div className="promo-section">
          <div className="promo-input">
            <input type="text" placeholder="Enter promo code" />
            <button className="apply-btn">Apply</button>
          </div>
        </div>
        <button className="place-order-btn" onClick={Onsubmit}>{step === 2 ? "Place Order" : step === 3 ? "Make Payment" : "Order Placed"}</button>
        <div className="security-badge">🔒 Secure SSL Encrypted Payment</div>
      </div>}
    </>
  )
}

export default CheckoutContent
