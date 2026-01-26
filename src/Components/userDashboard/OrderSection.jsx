import React from 'react'

const OrderSection = () => {
  return (
  <div className="content-section active" id="orders">
        <div className="section-card">
          <h2 className="section-title">All Orders</h2>
          <div className="order-item">
            <div className="order-image">
              <img
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200"
                alt="Product"
              />
            </div>
            <div className="order-details">
              <h3>Classic Black Hoodie</h3>
              <p>Order ID: #ORD-2024-001</p>
              <p>Ordered: Jan 20, 2024</p>
              <p>Size: M | Qty: 1 | ₹1,299</p>
              <span className="order-status status-shipped">Shipped</span>
            </div>
            <div className="order-actions">
              <button
                className="action-btn track-btn"
                onclick="showSection('track')"
              >
                Track Order
              </button>
              <button
                className="action-btn cancel-btn"
                onclick="cancelOrder('001')"
              >
                Cancel
              </button>
            </div>
          </div>
          <div className="order-item">
            <div className="order-image">
              <img
                src="https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=200"
                alt="Product"
              />
            </div>
            <div className="order-details">
              <h3>Grey Pullover Sweatshirt</h3>
              <p>Order ID: #ORD-2024-002</p>
              <p>Delivered: Jan 15, 2024</p>
              <p>Size: L | Qty: 1 | ₹999</p>
              <span className="order-status status-delivered">Delivered</span>
            </div>
            <div className="order-actions">
              <button className="action-btn track-btn">Reorder</button>
            </div>
          </div>
          <div className="order-item">
            <div className="order-image">
              <img
                src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=200"
                alt="Product"
              />
            </div>
            <div className="order-details">
              <h3>Navy Blue Sweatshirt</h3>
              <p>Order ID: #ORD-2024-003</p>
              <p>Ordered: Jan 18, 2024</p>
              <p>Size: XL | Qty: 2 | ₹2,398</p>
              <span className="order-status status-processing">Processing</span>
            </div>
            <div className="order-actions">
              <button
                className="action-btn cancel-btn"
                onclick="cancelOrder('003')"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default OrderSection
