import React from 'react'
import OrdersCards from './OrdersCards';

const RefundedOrder = ({orders, order,}) => {
  const refundOrder = orders?.filter((or) => or.status === "refunded");
  return (
   <div className="content-section active" id="refunded">
        <div className="section-card">
          <h2 className="section-title">Refunded Orders</h2>
          {refundOrder?.map((item,index)=>(
               <OrdersCards item={item} key={index} order={order} />
          ))}
        </div>
      </div>
   
    
  )
}


export default RefundedOrder
