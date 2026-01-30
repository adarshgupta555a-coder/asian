import React from 'react'

const OrderSection = ({ orders,handleModel }) => {
    const handleDelete = (type, id) => {
      
    };

    const handleEdit = (type, item) => {
       handleModel(type,item)
    };

    const handleAdd = (type) => {
       handleModel(type)
    };

    const updateOrderStatus = () => {
       
    };

    return (
        <>
            <div className="content-card">
                <div className="card-header">
                    <h2 className="card-title">Multi-Item Orders</h2>
                </div>
                {orders?.filter(o => o?.items?.length > 1).map(order => (
                    <div key={order?.id} className="order-card">
                        <div className="order-header">
                            <div>
                                <strong>Order #{order?.id}</strong>
                                <p style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>
                                    {order?.customer} | {order?.date}
                                </p>
                            </div>
                            <span className={`status-badge status-${order?.status?.toLowerCase()}`}>{order?.status}</span>
                        </div>
                        <div className="order-items">
                            {order?.items?.map((item, i) => <img key={i} src={item?.image} alt={item?.name} className="order-item-img" />)}
                        </div>
                        <div className="order-actions">
                            <strong>₹{order?.total}</strong>
                            <select className="select-status" value={order?.status} onChange={e => updateOrderStatus(order?.id, e.target.value)}>
                                <option value="Processing">Processing</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Delivered">Delivered</option>
                            </select>
                            <button className="btn btn-secondary">View</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="content-card">
                <div className="card-header">
                    <h2 className="card-title">Single-Item Orders</h2>
                </div>
                {orders?.map(order => (
                    <div key={order?.id} className="order-card">
                        <div className="order-header">
                            <div>
                                <strong>Order #{order?.orders?.order_number}</strong>
                                <p style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>
                                    {order?.customer} | {order?.date}
                                </p>
                            </div>
                            <span className={`status-badge status-${order?.status?.toLowerCase()}`}>{order?.status}</span>
                        </div>
                        <div className="order-single-item">
                            <img src={order?.product?.image_url} alt={order?.product?.name} className="order-single-img" />
                            <div style={{ flex: 1 }}>
                                <h4>{order?.product?.name}</h4>
                                <p style={{ fontSize: '13px', color: '#666', marginTop: '8px' }}>Total: ₹{order?.total}</p>
                            </div>
                        </div>
                        <div className="order-actions">
                            <select className="select-status" value={order?.status} onChange={e => updateOrderStatus(order?.id, e.target.value)}>
                                <option value="Processing">Processing</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Delivered">Delivered</option>
                            </select>
                            <button className="btn btn-secondary">View</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default OrderSection
