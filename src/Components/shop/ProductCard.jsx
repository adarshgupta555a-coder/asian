import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

const ProductCard = ({ id, name, price, image_url, category }) => {
      const [check , setCheck] = useState(false);
      let wishStore = JSON.parse(localStorage.getItem("wishlist"));
      const wishCheck = wishStore?.some((wish)=>wish.id===id);

      useEffect(()=>{
        setCheck(wishCheck)
      },[])
    const OnWishList = () => {
        if (!localStorage.getItem("wishlist")) {
            let wishlist = [];
            wishlist.push({
                id,
                name,
                price,
                image_url,
                category
            })
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            setCheck(true)
        } else {
            let wishStore = JSON.parse(localStorage.getItem("wishlist"));
            wishStore.push({
                id,
                name,
                price,
                image_url,
                category
            });
            localStorage.setItem("wishlist", JSON.stringify(wishStore));
             setCheck(true)
        }

    }
    return (
        <div className="product_card">
            <Link to={`/product-page/${id}`} style={{ textDecoration: "none" }}>
                <img src={image_url}
                    alt="Product 1" />
            </Link>
            <b>{category?.name}</b>
            <h2>{name}</h2>
            <p>₹{price}</p>
            {check?<i className="fa fa-heart heart-o" id='icon'></i>:<i className="fa fa-heart" onClick={OnWishList}></i>}
        </div>
    )
}

export default ProductCard
