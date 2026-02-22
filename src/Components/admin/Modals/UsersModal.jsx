import React from 'react'

const UsersModal = ({ editItem, setShowModal, setUsers }) => {
    return (
        <div>
            <div className="form-group">
                <label>Name</label>
                <input type="text" defaultValue={editItem?.name || ''} />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" defaultValue={editItem?.email || ''} />
            </div>
            <button className="btn btn-primary" onClick={() => setShowModal(false)}>{editItem ? 'Update' : 'Add'} User</button>
        </div>
    )
}

export default UsersModal
