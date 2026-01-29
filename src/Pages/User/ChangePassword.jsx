import React, { useEffect, useState } from 'react'
import "../../css/UserDashboard.css";
import supabase from '../../Database/supabase';

const ChangePassword = () => {
  const [user, setUser] = useState({
    NewPassword: "",
    ConPassword: ""
  });

  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        console.log("Password recovery mode");
      }
    });
  }, []);

  const OnchangeForm = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }))
  }

  const OnHandleForm = async (e) => {
    e.preventDefault();
    console.log(user);
    const {NewPassword, ConPassword} = user;

    if (NewPassword !== ConPassword) {
      console.log("not matched")
     return; 
    }

    const { error } = await supabase.auth.updateUser({
    password: NewPassword,
  });

  if (error) {
    console.error(error.message);
  } else {
    console.log("Password reset successfully ✅");
  }
  }

  return (
    <div className="section-card">
      <h2 className="section-title">Change Password</h2>
      <form className="profile-form" onSubmit={OnHandleForm}>
        {/* <div className="form-group full-width">
            <label htmlFor="currentPassword">Current Password</label>
            <input type="password" id="currentPassword" required="" />
          </div> */}
        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input type="password" name="NewPassword" value={user.NewPassword} onChange={OnchangeForm} required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="ConPassword" value={user.ConPassword} onChange={OnchangeForm} required />
        </div>
        <div className="form-group full-width">
          <button
            type="submit"
            className="update-btn"
          >
            Change Password
          </button>


        </div>
      </form>
    </div>
  )
}

export default ChangePassword
