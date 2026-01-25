import React from 'react'

const ProductCard = ({name,price,image_url,category}) => {
  return (
            <div className="product_card">
                <img src={image_url}
                    alt="Product 1"/>
                <b>{category?.name}</b>
                <h2>{name}</h2>
                <p>₹{price}</p>
                <i className="fa fa-heart"></i>
            </div>
  )
}

export default ProductCard
