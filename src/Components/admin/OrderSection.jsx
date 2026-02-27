import React, { useState } from 'react'
import supabase from '../../Database/supabase';
import { toast } from 'react-toastify';
const OrderSection = ({ orders, handleModel }) => {
    const [status, setStatus] = useState("");
    
    const handleDelete = (type, id) => {

    };

    const handleEdit = (type, item) => {
        handleModel(type, item)
    };

    const handleAdd = (type) => {
        handleModel(type)
    };

    const OnupdateOrderStatus = async (id) => {
        if (status === "") {
            return;
        }
        const { data, error } = await supabase
            .from('order_items')
            .update({ status: status })
            .eq('id', id)
            .select()
        if (!error) {
            console.log(data)
            toast.success("status updated successfully")
        } else{
            console.log(error)
            toast.error("something went wrong!")
        }

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
                                <p style={{ fontSize: '13px', color: '#666', marginTop: '8px' }}>Total: ₹{order?.price}</p>
                            </div>
                        </div>
                        {order?.status?.toLowerCase() !== "cancelled" &&
                            (<div className="order-actions">
                                <select className="select-status" value={order?.status} onChange={e => setStatus(e.target.value)}>
                                    <option value="pending">Pending</option>
                                    <option value="paid">Paid</option>
                                    <option value="shipped">Shipped</option>
                                    <option value="delivered">Delivered</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                                <button className="btn btn-status" onClick={()=>OnupdateOrderStatus(order?.id)}>Change Status</button>
                            </div>)}
                    </div>
                ))}
            </div>
        </>
    )
}

export default OrderSection
