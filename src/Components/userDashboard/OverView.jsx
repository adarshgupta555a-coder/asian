import React from 'react'

const OverView = () => {
  return (
   <div className="content-section active" id="overview">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">12</div>
            <div className="stat-label">Total Orders</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">8</div>
            <div className="stat-label">Delivered</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">3</div>
            <div className="stat-label">In Progress</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5</div>
            <div className="stat-label">Wishlist Items</div>
          </div>
        </div>
        <div className="section-card">
          <h2 className="section-title">Recent Orders</h2>
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
              <p>Size: M | Qty: 1</p>
              <p>₹1,299</p>
              <span className="order-status status-shipped">Shipped</span>
            </div>
            <div className="order-actions">
              <button
                className="action-btn track-btn"
                onclick="showSection('track')"
              >
                Track
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
              <p>Size: L | Qty: 1</p>
              <p>₹999</p>
              <span className="order-status status-delivered">Delivered</span>
            </div>
            <div className="order-actions">
              <button
                className="action-btn track-btn"
                onclick="alert('Order delivered on Jan 15, 2024')"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default OverView
