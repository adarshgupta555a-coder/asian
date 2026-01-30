import React from 'react'

const Dashboard = ({products,users,orders,categories}) => {
  const unique = Array.from(
  new Map(orders?.map(item => [item.orders.order_number, item])).values()
);
  const total_amount = unique?.filter((or)=>or.orders.status !== "cancelled").reduce((amt,curr)=>{
    return amt += curr?.orders.total_amount
  },0)
  return (
        <div className="stats-grid">
              <div className="stat-card"><div className="stat-number">{products?.length}</div><div className="stat-label">Products</div></div>
              <div className="stat-card"><div className="stat-number">{users?.length}</div><div className="stat-label">Users</div></div>
              <div className="stat-card"><div className="stat-number">{categories?.length}</div><div className="stat-label">Categories</div></div>
              <div className="stat-card"><div className="stat-number">{orders?.length}</div><div className="stat-label">Orders</div></div>
              <div className="stat-card"><div className="stat-number">₹{orders?.orders?.total_amount||total_amount}</div><div className="stat-label">Sales</div></div>

         </div>
  )
}

export default Dashboard
