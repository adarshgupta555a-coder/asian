import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import supabase from '../../Database/supabase';
import { useNavigate } from 'react-router';

const ProfileSet = () => {
  const userData = useSelector((state) => state.Auth.value);
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: ""
  })

  const OnchangeForm = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }))
  }

  const OnhandleForm = async (e) => {
    e.preventDefault();
    console.log(user)

    const UpdateUser = {};
    for (const [key, value] of Object.entries(user)) {
      if (value != "" && userData[key] != value.trim()) {
        UpdateUser[key] = value;
      }
    }

    console.log(UpdateUser)
    if (Object.entries(UpdateUser).length == 0) {
      console.log(Object.entries(UpdateUser).length)
      return;
    }

    const { data, error } = await supabase
      .from('profile')
      .update(UpdateUser)
      .eq('email', userData?.email)
      .select()

    console.log(data);
    if (error) {
      console.log(error);
    }


  }
  return (
    <div className="content-section active" id="profile">
      <div className="section-card">
        <h2 className="section-title">Profile Settings</h2>
        <form className="profile-form" onSubmit={OnhandleForm}>
          <div className="form-group">
            <label htmlFor="firstName">Name</label>
            <input
              type="text"
              name="name"
              value={user.name || userData?.name}
              onChange={OnchangeForm}
              required
            />
          </div>
          {/* <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" defaultValue="Doe" required="" />
            </div> */}
          <div className="form-group full-width">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              defaultValue={userData?.email}
              readOnly
              required
            />
          </div>
          <div className="form-group full-width">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              defaultValue={user.phone || userData?.phone}
              onChange={OnchangeForm}
              required
            />
          </div>
          <div className="form-group full-width">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              defaultValue={user.address || userData?.address}
              onChange={OnchangeForm}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" name="city" value={user.city || userData?.city} onChange={OnchangeForm} required />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Pincode</label>
            <input
              type="text"
              name="pincode"
              defaultValue={user.pincode || userData?.pincode}
              onChange={OnchangeForm}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              name="state"
              defaultValue={user.state || userData?.state}
              onChange={OnchangeForm}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              defaultValue={user.country || userData?.country}
              onChange={OnchangeForm}
              required
            />
          </div>
          <div className="form-group full-width">
            <button
              type="submit"
              className="update-btn"

            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
      <div className="section-card">
        <h2 className="section-title">Change Password</h2>
        <form className="profile-form">
          <div className="form-group full-width">
            <label htmlFor="currentPassword">Current Password</label>
            <input type="password" id="currentPassword" required="" />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input type="password" id="newPassword" required="" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" required="" />
          </div>
          <div className="form-group full-width">
            <button
              type="submit"
              className="update-btn"
              onclick="event.preventDefault(); alert('Password changed successfully!')"
            >
              Change Password
            </button>

              <button
              type="submit"
              className="update-btn"
              onClick={()=>navigate("/forgot-password")}
            >
              Forgot Password
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileSet
