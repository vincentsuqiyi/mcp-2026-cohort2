import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Dashboard: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <img src="/public/favicon.svg" alt="Claims Processing Automation" className="logo" />
          <h1 className="title">User Dashboard</h1>
        </div>
      </header>
      <main className="main-content">
        <div className="card">
          <h2>New Claim</h2>
          <p>Submit a new claim and experience our seamless process.</p>
          <Link to="/new-claim" className="button">Create New Claim</Link>
        </div>
        <div className="card">
          <h2>My Claims</h2>
          <p>View the status of your existing claims.</p>
          <Link to="/my-claims" className="button">View My Claims</Link>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Claims Processing Automation. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
