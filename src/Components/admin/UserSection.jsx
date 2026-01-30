import React from 'react'

const UserSection = ({ users, handleModel }) => {
    
    const handleDelete = (type, id) => {
     
    };

    const handleEdit = (type, item) => {
        handleModel(type,item)
    };

    const handleAdd = (type) => {
        handleModel(type)
    };

    return (
        <div className="content-card">
            <div className="card-header">
                <h2 className="card-title">Users</h2>
                <button className="btn btn-primary" onClick={() => handleAdd('user')}>+ Add User</button>
            </div>
            <table className="table">
                <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>
                    {users?.map(u => (
                        <tr key={u?.id}>
                            <td>{u?.name}</td>
                            <td>{u?.email}</td>
                            <td>{u?.role}</td>
                            <td><span className="status-badge">{u?.status}</span></td>
                            <td>
                                <div className="actions">
                                    <button className="icon-btn" onClick={() => handleEdit('user', u)}>✏️</button>
                                    <button className="icon-btn" onClick={() => handleDelete('user', u?.id)}>🗑️</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserSection
