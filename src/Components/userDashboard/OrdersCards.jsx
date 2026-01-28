import React from 'react'

const OrdersCards = ({item,order,cancelOrder}) => {
  return (
      <div className="order-item">
            <div className="order-image">
              <img
                src={item?.product?.image_url}
                alt="Product"
              />
            </div>
            <div className="order-details">
              <h3>{item?.product?.name}</h3>
              <p>Order ID: #ORD-{(order.find((or)=>or.id === item?.order_id))?.order_number}</p>
              <p>Size: M | Qty: {item?.quantity}</p>
              <p>₹{item?.price}</p>
              <span className={`order-status status-${item?.status}`}>{item?.status}</span>
            </div>
            <div className="order-actions">
              <button
                className="action-btn track-btn"
                onclick="showSection('track')"
              >
                Track
              </button>
              {item?.status !== "cancelled" && <button
                className="action-btn cancel-btn"
                onClick={()=>cancelOrder(item?.id, item?.order_id)}
              >
                Cancel
              </button>}
            </div>
          </div>
  )
}

export default OrdersCards
