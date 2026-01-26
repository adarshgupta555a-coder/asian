import React from 'react'

const TrackOrder = () => {
  return (
   <div className="content-section active" id="track">
        <div className="section-card">
          <h2 className="section-title">Track Order #ORD-2024-001</h2>
          <div className="order-item">
            <div className="order-image">
              <img
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200"
                alt="Product"
              />
            </div>
            <div className="order-details">
              <h3>Classic Black Hoodie</h3>
              <p>Expected Delivery: Jan 25, 2024</p>
              <p>Size: M | Qty: 1 | ₹1,299</p>
            </div>
          </div>
          <div className="tracking-timeline">
            <div className="timeline-item">
              <div className="timeline-icon completed">✓</div>
              <div className="timeline-content">
                <h4>Order Placed</h4>
                <p>Jan 20, 2024 - 10:30 AM</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon completed">✓</div>
              <div className="timeline-content">
                <h4>Order Confirmed</h4>
                <p>Jan 20, 2024 - 11:00 AM</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon completed">✓</div>
              <div className="timeline-content">
                <h4>Shipped</h4>
                <p>Jan 21, 2024 - 09:00 AM</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">📦</div>
              <div className="timeline-content">
                <h4>Out for Delivery</h4>
                <p>Expected: Jan 25, 2024</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">🏠</div>
              <div className="timeline-content">
                <h4>Delivered</h4>
                <p>Pending</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TrackOrder
