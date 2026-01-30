import React, { useEffect, useState } from 'react';
import "../../css/AdminPanel.css";
import Dashboard from '../../Components/admin/Dashboard';
import ProductSection from '../../Components/admin/ProductSection';
import UserSection from '../../Components/admin/UserSection';
import CategoriesSection from '../../Components/admin/CategoriesSection';
import OrderSection from '../../Components/admin/OrderSection';
import supabase from "../../Database/supabase";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showSidebar, setShowSidebar] = useState(false);

  const [products, setProducts] = useState(null);

  const [users, setUsers] = useState(null);

  const [categories, setCategories] = useState(null);

  const [orders, setOrders] = useState(null);

   const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editItem, setEditItem] = useState(null);


  useEffect(()=>{
    getFetchAllData();
  },[])

  const getFetchAllData = async () => {
    const promises = [
      supabase.from("product").select(`
        id,
        name,
        price,
        image_url,
        stock,
        category (
        name
        )
        `),
      supabase.from("profile").select("*"),
      supabase.from("order_items").select(`
        id,
        price,
        status,
        orders (
        order_number,
        total_amount,
        status,
        profile (
        name
        )
        ),
        product (
        image_url,
        name
        )
        `),
      supabase.from("category").select("*")
    ]
    const result = await Promise.allSettled(promises);

    const [productsData, usersData, ordersData, categoriesData] = result;

    const pd = productsData.status === "fulfilled"?productsData.value.data:null;
    setProducts(pd);
    console.log(productsData.value.error)
    const ud = usersData.status === "fulfilled"?usersData.value.data:null;
    setUsers(ud);
    console.log(usersData.value.error)
    const od = ordersData.status === "fulfilled"?ordersData.value.data:null;
    setOrders(od);
   console.log(ordersData.value)
    const cd = categoriesData.status === "fulfilled"?categoriesData.value.data:null;
    setCategories(cd);
    console.log(categoriesData.value.error)


  }




  // const handleDelete = (type, id) => {
  //   if (window.confirm('Are you sure you want to delete this item?')) {
  //     if (type === 'product') setProducts(products.filter(p => p.id !== id));
  //     if (type === 'user') setUsers(users.filter(u => u.id !== id));
  //     if (type === 'category') setCategories(categories.filter(c => c.id !== id));
  //   }
  // };

  const handleModel = (type, item) => {
    console.log(type)
    if (item === undefined) {
      setEditItem(null);
    } else{
     setEditItem(item);
    }
    setModalType(type);
    setShowModal(true);

  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", backgroundColor: '#f9f9f9', minHeight: '100vh' }}>

      <button className="mobile-toggle" onClick={() => setShowSidebar(!showSidebar)}>
        ☰ Menu
      </button>

      <div className="admin-container">
        <aside className={`sidebar ${showSidebar ? 'active' : ''}`}>
          <div className="sidebar-header">
            <div className="logo">ADMIN PANEL</div>
          </div>
          <ul className="sidebar-menu">
            {['dashboard', 'products', 'users', 'categories', 'orders'].map(tab => (
              <li key={tab} className={`menu-item ${activeTab === tab ? 'active' : ''}`}>
                <button onClick={() => { setActiveTab(tab); setShowSidebar(false); }}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main className="main-content">
          <div className="header">
            <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} {activeTab !== 'dashboard' && 'Management'}</h1>
            <button className="btn btn-secondary">Logout</button>
          </div>

          {activeTab === 'dashboard' && (
            <Dashboard products={products} users={users} categories={categories} orders={orders} />
          )}

          {activeTab === 'products' && (
            <ProductSection products={products} handleModel={handleModel} />
          )}

          {activeTab === 'users' && (
            <UserSection users={users} handleModel={handleModel} />
          )}

          {activeTab === 'categories' && (
            <CategoriesSection categories={categories} handleModel={handleModel} />
          )}

          {activeTab === 'orders' && (
            <OrderSection orders={orders} handleModel={handleModel} />
          )}
        </main>
      </div>

      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">{editItem ? 'Edit' : 'Add'} {modalType.charAt(0).toUpperCase() + modalType.slice(1)}</h3>
              <button className="close-btn" onClick={() => setShowModal(false)}>✕</button>
            </div>

            {modalType === 'product' && (
              <div>
                <div className="form-group">
                  <label>Product Name</label>
                  <input type="text" defaultValue={editItem?.name || ''} placeholder="Enter product name" />
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input type="number" defaultValue={editItem?.price || ''} placeholder="Enter price" />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select defaultValue={editItem?.category || ''}>
                    <option value="">Select category</option>
                    <option value="Hoodies">Hoodies</option>
                    <option value="Sweatshirts">Sweatshirts</option>
                  </select>
                </div>
                <button className="btn btn-primary" onClick={() => setShowModal(false)}>{editItem ? 'Update' : 'Add'} Product</button>
              </div>
            )}

            {modalType === 'user' && (
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
            )}

            {modalType === 'category' && (
              <div>
                <div className="form-group">
                  <label>Category Name</label>
                  <input type="text" defaultValue={editItem?.name || ''} />
                </div>
                <button className="btn btn-primary" onClick={() => setShowModal(false)}>{editItem ? 'Update' : 'Add'} Category</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}