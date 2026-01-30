import React from 'react'

const ProductSection = ({ products, handleModel }) => {

  const handleDelete = (type, id) => {
   
  };

  const handleEdit = (type, item) => {
  handleModel(type,item);
  };

  const handleAdd = (type) => {
   handleModel(type);
  };

  const updateOrderStatus = (orderId, newStatus) => {
   
  };
  
  return (
    <div className="content-card">
      <div className="card-header">
        <h2 className="card-title">Products</h2>
        <button className="btn btn-primary" onClick={() => handleAdd('product')}>+ Add Product</button>
      </div>
      <table className="table">
        <thead><tr><th>Image</th><th>Name</th><th>Price</th><th>Category</th><th>Stock</th><th>Actions</th></tr></thead>
        <tbody>
          {products?.map(p => (
            <tr key={p?.id}>
              <td><img src={p?.image_url} alt={p?.name} /></td>
              <td>{p?.name}</td>
              <td>₹{p?.price}</td>
              <td>{p?.category?.name}</td>
              <td>{p?.stock}</td>
              <td>
                <div className="actions">
                  <button className="icon-btn" onClick={() => handleEdit('product', p)}>✏️</button>
                  <button className="icon-btn" onClick={() => handleDelete('product', p.id)}>🗑️</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductSection
