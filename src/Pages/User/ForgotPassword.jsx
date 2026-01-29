import React, { useState } from 'react';
import "../../css/ForgotPassword.css"
import { Link } from 'react-router';
import supabase from '../../Database/supabase';
export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);

            const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: "http://localhost:5173/reset-password"
            });

            console.log(data)
            if (!error) {
                setIsSubmitted(false);
                setEmail('');
            }

        }
    };

    return (
        <div style={{
            fontFamily: "'Montserrat', sans-serif",
            backgroundColor: '#ffffff',
            color: '#000000',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px'
        }}>


            <div className="forgot-password-container">
                <div className="logo">
                    <div className="logo-text">ASIAN</div>
                </div>

                <div className="icon">🔒</div>

                <h1>Forgot Password?</h1>
                <p className="subtitle">
                    Enter your email address and we'll send you a link to reset your password.
                </p>

                {isSubmitted && (
                    <div className="success-message">
                        ✓ Password reset link has been sent to your email!
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn" disabled={!email}>
                        Send Reset Link
                    </button>

                    <p className="back-link">
                        Remember your password? <Link to="/signin">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}