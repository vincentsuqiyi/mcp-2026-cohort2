import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <img src="/public/favicon.svg" alt="Claims Processing Automation" className="logo" />
          <h1 className="title">Claims Processing Automation</h1>
        </div>
        <p className="subtitle">Streamlining the future of claims management</p>
      </header>
      <main className="main-content">
        <div className="card">
          <h2>New User</h2>
          <p>Submit a new claim and experience our seamless process.</p>
          <Link to="/signup" className="button">Sign Up</Link>
        </div>
        <div className="card">
          <h2>Returning User</h2>
          <p>Log in to your account to manage your claims.</p>
          <Link to="/returning-user" className="button">Log In</Link>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Claims Processing Automation. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
