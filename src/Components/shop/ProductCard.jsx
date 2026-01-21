import React from 'react'

const ProductCard = ({title,price}) => {
  return (
            <div className="product_card">
                <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/j/l/s/xl-marvel-tshirt-outfiq-original-imahfb4fggvzzkeb.jpeg"
                    alt="Product 1"/>
                <b>T-shirt</b>
                <h2>{title}</h2>
                <p>₹{price}</p>
                <i className="fa fa-heart"></i>
            </div>
  )
}

export default ProductCard
