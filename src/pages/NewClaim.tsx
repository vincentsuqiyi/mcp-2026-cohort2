import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NewClaim: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <img src="/public/favicon.svg" alt="Claims Processing Automation" className="logo" />
          <h1 className="title">New Claim Submission</h1>
        </div>
      </header>
      <main className="main-content">
        <form className="form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="claim-details">Claim Details</label>
            <textarea id="claim-details" name="claim-details" rows={5}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="attachment">Attach Documentation</label>
            <input type="file" id="attachment" name="attachment" />
          </div>
		      <p className="subtitle">To submit a claim, you need to have an account. <Link to="/signup">Sign up</Link></p>
          <Link to="/confirmation" className="button">Submit Claim</Link>
        </form>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Claims Processing Automation. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NewClaim;
