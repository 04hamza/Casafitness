import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="login-container">
      <h2 className="login-title">WELCOME TO YOUR MEMBER SPACE</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          LOG IN
        </button>
        <div className="login-links">
          <a href="/forgot-password">Forgot your password?</a>
        </div>
      </form>
      <footer className="login-footer">
        Don’t have an account yet? 
        <Link to="/gyms">Sign up now!</Link> 
      </footer>
    </div>
  );
}

export default LoginForm;
