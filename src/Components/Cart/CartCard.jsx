import React, { useEffect, useState } from 'react'
import SyncCartThunk,{FetchCartThunk} from '../../store/cartThunk';
import supabase from '../../Database/supabase';
import { cartAction } from '../../store/CartSlice';
import { useSelector, useDispatch } from 'react-redux';

const CartCard = ({cart}) => {
    const [qty, setQty] = useState(0);
    // const cartData = useSelector((state) => state?.Cart)
    const dispatch = useDispatch()

    useEffect(() => {
        setQty(cart?.quantity)
        //for realtime insert , update in supabase
        const channel = supabase
            .channel("cart-realtime")
            .on(
                "postgres_changes",
                { event: "*", schema: "public", table: "cart" },
                payload => {
                    console.log("Cart updated:", payload);
                    // optional: refetch cart
                }
            )
            .subscribe();

        return () => supabase.removeChannel(channel);

    }, [])


     const DeleteCart = async (userId, productId) => {

        const { error } = await supabase
            .from('cart')
            .delete()
            .eq('user_id', userId)
            .eq("product_id", productId)

        console.log(error)
        setQty(0);
        dispatch(FetchCartThunk(cart?.user_id))

    }


     const increaseQty = () => {
        if (qty < cart?.product?.stock) {
            setQty(prev => ++prev);
            const cartItem = { id: cart?.product?.id, qty: qty + 1, price: cart?.product?.price }
            dispatch(cartAction.addToCart(cartItem))
            console.log("object")
            dispatch(SyncCartThunk({ userId: cart?.user_id, cartItem }))
        }
    }

    const decreaseQty = () => {
        if (qty > 0) {
            setQty(prev => --prev);
            dispatch(cartAction.removeFromCart(cart?.product?.id))
            if (qty - 1 !== 0) {
                const cartItem = { id: cart?.product?.id, qty: qty - 1, price: cart?.product?.price }
                dispatch(SyncCartThunk({ userId: cart?.user_id, cartItem }))
            } else {
                //delete function active
                DeleteCart(cart?.user_id,  cart?.product?.id)
            }


        }
    }

  return (
    <div className="cart-item">
            <div className="item-image">
              <img
                src={cart?.product?.image_url}
                alt="product"
              />
            </div>
            <div className="item-details">
              <h3>{cart?.product?.category?.name}</h3>
              <p className="item-desc">{cart?.product?.name}</p>
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

              </div>
              <div className="quantity-section">
                <h4>Quantity</h4>
                 {cart?.product?.stock == 0?<h3>Product is not available</h3> :
                 <div className="quantity-counter">
                  <button className="qty-btn" onClick={decreaseQty}>−</button>
                  <input type="number" id="quantity" className="qty-input" value={qty||cart?.quantity} readonly />
                  <button className="qty-btn" onClick={increaseQty}>+</button>
                </div>}
              </div>
              <div className="item-price">
                <p className="price">
                  ₹{cart?.product?.price} <span className="old-price">₹{cart?.product?.price*2}</span>
                </p>
                <p className="saved">You saved ₹{cart?.product?.price+200}</p>
              </div>
            </div>
            {cart?.product?.stock < cart?.quantity?<h3>Product is not available</h3> :<button className="remove-btn" onClick={()=>DeleteCart(cart?.user_id,  cart?.product?.id)}>✕</button>}
          </div>
  )
}

export default CartCard
