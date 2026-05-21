import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const MyClaims: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <img src="/public/favicon.svg" alt="Claims Processing Automation" className="logo" />
          <h1 className="title">My Claims</h1>
        </div>
      </header>
      <main className="main-content">
        <div className="card">
          <h2>Claim 12345</h2>
          <p>Status: In Progress</p>
          <p>Submitted: 2024-07-27</p>
          <Link to="#" className="button">View Details</Link>
        </div>
        <div className="card">
          <h2>Claim 67890</h2>
          <p>Status: Approved</p>
          <p>Submitted: 2024-07-25</p>
          <Link to="#" className="button">View Details</Link>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Claims Processing Automation. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MyClaims;
