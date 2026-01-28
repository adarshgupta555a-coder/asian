import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const WishList = () => {
  const [wishData, setWish] = useState(null);
  const navigate = useNavigate();
  useEffect(()=>{
  let wishStore = JSON.parse(localStorage.getItem("wishlist"));
    setWish(wishStore)
  },[])

  const OnremoveItem = (id) =>{
    let wishRemove = wishData.filter((item)=>item.id!=id)
    console.log(wishRemove);
    localStorage.setItem("wishlist", JSON.stringify(wishRemove));
    setWish(wishRemove)
  }

  return (
    <div className="content-section active" id="wishlist">
        <div className="section-card">
          <h2 className="section-title">My Wishlist ({wishData?.length||0} Items)</h2>
          <div className="wishlist-grid">
           {wishData?.map((item,index)=>(<div className="wishlist-item" key={index}>
              <div className="wishlist-image">
                <img
                  src={item.image_url}
                  alt="Product"
                />
              </div>
              <div className="wishlist-info">
                <h4>{item.name}</h4>
                <div className="wishlist-price">₹{item.price}</div>
                <div className="wishlist-actions">
                  <button className="wishlist-btn add-cart-btn" onClick={()=>navigate(`/product-page/${item.id}`)}>
                    Add to Cart
                  </button>
                  <button className="wishlist-btn remove-wishlist-btn" onClick={()=>OnremoveItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>))}
          
          </div>
        </div>
      </div>
  )
}

export default WishList
