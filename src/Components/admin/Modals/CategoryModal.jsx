import React from 'react'

const CategoryModal = ({editItem,setShowModal,setCategories}) => {
  return (
     <div>
                <div className="form-group">
                  <label>Category Name</label>
                  <input type="text" defaultValue={editItem?.name || ''} />
                </div>
                <button className="btn btn-primary" onClick={() => setShowModal(false)}>{editItem ? 'Update' : 'Add'} Category</button>
              </div>
  )
}

export default CategoryModal
