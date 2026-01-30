import React from 'react'

const CategoriesSection = ({ categories, handleModel }) => {

  const handleDelete = (type, id) => {

  };

   const handleEdit = (type, item) => {
  handleModel(type,item);
  };

  const handleAdd = (type) => {
   handleModel(type);
  };

  return (
    <div className="content-card">
      <div className="card-header">
        <h2 className="card-title">Categories</h2>
        <button className="btn btn-primary" onClick={() => handleAdd('category')}>+ Add Category</button>
      </div>
      <table className="table">
        <thead><tr><th>Name</th><th>Product Count</th><th>Actions</th></tr></thead>
        <tbody>
          {categories?.map(c => (
            <tr key={c?.id}>
              <td>{c?.name}</td>
              <td>{c?.count}</td>
              <td>
                <div className="actions">
                  <button className="icon-btn" onClick={() => handleEdit('category', c)}>✏️</button>
                  <button className="icon-btn" onClick={() => handleDelete('category', c?.id)}>🗑️</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CategoriesSection
