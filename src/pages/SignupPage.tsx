import '../styles/Auth.css';

const SignupPage = () => {
  return (
    <div className="auth-container">
      <h2>Sign up and start building</h2>
      <form>
        <label>Email *</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password *</label>
        <div className="password-field">
          <input type="password" placeholder="Enter your password" required />
          <span className="show-password">Show password</span>
        </div>

        <div className="password-requirements">
          <p><input type="checkbox" /> At least 8 characters</p>
          <p><input type="checkbox" /> At least 1 uppercase letter</p>
          <p><input type="checkbox" /> At least 1 number</p>
          <p><input type="checkbox" /> At least 1 special character</p>
        </div>

        <p className="terms">
          By signing up, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
        </p>

        <button type="submit" className="auth-button primary disabled">Start building</button>

        <div className="auth-footer">
          <a href="/login" className="auth-link">Login</a>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
