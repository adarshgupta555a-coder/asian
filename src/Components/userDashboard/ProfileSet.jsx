import React from 'react'

const ProfileSet = () => {
  return (
  <div className="content-section active" id="profile">
        <div className="section-card">
          <h2 className="section-title">Profile Settings</h2>
          <form className="profile-form">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                defaultValue="John"
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" defaultValue="Doe" required="" />
            </div>
            <div className="form-group full-width">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                defaultValue="john.doe@example.com"
                required=""
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                defaultValue="+91 98765 43210"
                required=""
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                defaultValue="123 Main Street, Apartment 4B"
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" defaultValue="Mumbai" required="" />
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode</label>
              <input
                type="text"
                id="pincode"
                defaultValue={400001}
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                defaultValue="Maharashtra"
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                defaultValue="India"
                required=""
              />
            </div>
            <div className="form-group full-width">
              <button
                type="submit"
                className="update-btn"
                onclick="event.preventDefault(); alert('Profile updated successfully!')"
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
            </div>
          </form>
        </div>
      </div>
  )
}

export default ProfileSet
