import React from 'react'
import OrdersCards from './OrdersCards';

const CancelOrder = ({orders, order,}) => {
  const cancelOrders = orders?.filter((or) => or.status === "cancelled");
  return (
   <div className="content-section active" id="cancelled">
        <div className="section-card">
          <h2 className="section-title">Cancelled Orders</h2>
          {cancelOrders?.map((item,index)=>(
               <OrdersCards item={item} key={index} order={order} />
          ))}
        </div>
      </div>
   
    
  )
}

export default CancelOrder
