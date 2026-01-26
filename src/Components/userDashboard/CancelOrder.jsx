import React from 'react'

const CancelOrder = () => {
  return (
   <div className="content-section active" id="cancelled">
        <div className="section-card">
          <h2 className="section-title">Cancelled Orders</h2>
          <div className="order-item">
            <div className="order-image">
              <img
                src="https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=200"
                alt="Product"
              />
            </div>
            <div className="order-details">
              <h3>White Hoodie</h3>
              <p>Order ID: #ORD-2024-004</p>
              <p>Cancelled: Jan 10, 2024</p>
              <p>Size: M | Qty: 1 | ₹1,399</p>
              <span className="order-status status-cancelled">Cancelled</span>
            </div>
            <div className="order-actions">
              <button className="action-btn track-btn">Reorder</button>
            </div>
          </div>
        </div>
      </div>
   
    
  )
}

export default CancelOrder
