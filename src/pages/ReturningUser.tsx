import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ReturningUser: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <img src="/public/favicon.svg" alt="Claims Processing Automation" className="logo" />
          <h1 className="title">Returning User</h1>
        </div>
      </header>
      <main className="main-content">
        <form className="form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <Link to="/dashboard" className="button">Log In</Link>
		        <p className="subtitle">Don't have an account? <Link to="/signup">Sign up</Link></p>
        </form>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Claims Processing Automation. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ReturningUser;
