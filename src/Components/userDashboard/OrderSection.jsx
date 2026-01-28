import React from 'react'
import OrdersCards from './OrdersCards'

const OrderSection = ({orders, order,cancelOrder}) => {

  return (
  <div className="content-section active" id="orders">
        <div className="section-card">
          <h2 className="section-title">All Orders</h2>
         { orders?.map((item,index)=>(
               <OrdersCards item={item} key={index} order={order} cancelOrder={cancelOrder} />
      ))}
          
        </div>
      </div>
  )
}

export default OrderSection
