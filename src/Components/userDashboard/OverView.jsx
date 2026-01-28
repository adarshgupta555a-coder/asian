import React from 'react'
import OrdersCards from './OrdersCards'

const OverView = ({orders,order,cancelOrder}) => {
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
          {orders?.map((item,index)=>(
              <OrdersCards item={item} key={index} order={order} cancelOrder={cancelOrder} />
           ))}
          
        </div>
      </div>
  )
}

export default OverView
