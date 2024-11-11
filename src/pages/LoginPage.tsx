import React from "react";
import '../styles/Auth.css';

const LoginPage = () => {
  return (
    <div className="auth-container">
      <h2>Log into your Bubble account</h2>
      <form>
        <label>Email *</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password *</label>
        <input type="password" placeholder="Enter your password" required />

        <button type="submit" className="auth-button primary">Log in</button>

        <a href="#" className="auth-link">Reset password</a>

        <div className="auth-footer">
          <a href="/signup" className="auth-button secondary">Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
