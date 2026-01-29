import React, { useEffect, useState } from 'react'
import "../../css/UserDashboard.css";
import OrderSection from '../../Components/userDashboard/OrderSection';
import CancelOrder from '../../Components/userDashboard/CancelOrder';
import TrackOrder from '../../Components/userDashboard/TrackOrder';
import WishList from "../../Components/userDashboard/WishList";
import ProfileSet from "../../Components/userDashboard/ProfileSet";
import OverView from '../../Components/userDashboard/OverView';
import { useSelector } from 'react-redux';
import supabase from "../../Database/supabase";
import { useNavigate } from 'react-router';

const UserDashboard = () => {
  const [menu, setMenu] = useState(0);
  const userData = useSelector((state) => state.Auth.value);
  const [orders, setOrders] = useState(null);
  const [orderGroup, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData?.id) {
      getOrders()
    }
  }, [userData]);

  const getOrders = async () => {
    const { data: order, error: OrderErr } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", userData?.id);

    if (OrderErr) {
      console.log(OrderErr);
      return;
    }
    console.log(order);
    setOrder(order)
    const orderIds = order.map(o => o.id);

    const { data: items, error } = await supabase
      .from("order_items")
      .select(`
        id,
    order_id,
    quantity,
    price,
    status,
    product (
      name,
      image_url
    )
  `)
      .in("order_id", orderIds);

    console.log(items)
    if (!error) {
      setOrders(items)
    }


  }

  const toggleSidebar = () => {
    document.getElementById('sidebar').classList.toggle('active');
  }


  document.addEventListener('click', function (event) {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.mobile-menu-toggle');

    if (window.innerWidth <= 1024 &&
      !sidebar.contains(event.target) &&
      !menuToggle.contains(event.target)) {
      sidebar.classList.remove('active');
    }
  });

  const cancelOrder = async (itemId, orderId) => {
    const totalPrice = (orderGroup?.find((or) => or.id === orderId))?.total_amount;
    const Price = (orders?.find((or) => or.id === itemId))?.price;
    const Qty = (orders?.find((or) => or.id === itemId))?.quantity;

    const { data, error } = await supabase
      .from('order_items')
      .update({ status: 'cancelled' })
      .eq('id', itemId)
      .select()

    console.log(data)
    if (error) {
      console.log(error);
      return;
    }


    const { data: updateOrder, error: OrderErr } = await supabase
      .from('orders')
      .update({ total_amount: totalPrice - (Price * Qty) })
      .eq('id', orderId)
      .select()

    console.log(updateOrder);

    if (OrderErr) {
      console.log(OrderErr);
      return;
    }

    getOrders()

  }

  const Onlogout = async () => {
    let { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error);
      return;
    }

    navigate("/signin");
    
  }


  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="header-content">
          <div className="user-welcome">
            <h1>Welcome back, {userData?.name}!</h1>
            <p>Manage your orders and account settings</p>
          </div>
          <button
            className="logout-btn"
            onClick={Onlogout}
          >
            Logout
          </button>
        </div>
      </div>
      <button className="mobile-menu-toggle" onClick={toggleSidebar}>
        ☰ Menu
      </button>
      <div className="dashboard-layout">
        <aside className="sidebar" id="sidebar">
          <ul className="sidebar-menu">
            <li className="menu-item active">
              <a href="#" onClick={() => setMenu(0)}>
                Dashboard
              </a>
            </li>
            <li className="menu-item">
              <a href="#" onClick={() => setMenu(1)}>
                My Orders
              </a>
            </li>
            <li className="menu-item">
              <a href="#" onClick={() => setMenu(2)}>
                Cancelled Orders
              </a>
            </li>
            <li className="menu-item">
              <a href="#" onClick={() => setMenu(3)}>
                Track Orders
              </a>
            </li>
            <li className="menu-item">
              <a href="#" onClick={() => setMenu(4)}>
                Wishlist
              </a>
            </li>
            <li className="menu-item">
              <a href="#" onClick={() => setMenu(5)}>
                Profile Settings
              </a>
            </li>
          </ul>
        </aside>
        <main className="main-content">
          {/* Overview Section */}
          {menu === 0 && <OverView orders={orders} order={orderGroup} />}
          {/* Orders Section */}
          {menu === 1 && <OrderSection orders={orders} order={orderGroup} cancelOrder={cancelOrder} />}
          {/* Cancelled Orders */}
          {menu === 2 && <CancelOrder orders={orders} order={orderGroup} />}
          {/* Track Order */}
          {menu === 3 && <TrackOrder />}
          {/* Wishlist */}
          {menu === 4 && <WishList />}
          {/* Profile Settings */}
          {menu === 5 && <ProfileSet />}
        </main>
      </div>
    </div>

  )
}

export default UserDashboard
