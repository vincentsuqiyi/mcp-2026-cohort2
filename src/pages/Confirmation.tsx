import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Confirmation: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <img src="/public/favicon.svg" alt="Claims Processing Automation" className="logo" />
          <h1 className="title">Claim Submitted Successfully</h1>
        </div>
      </header>
      <main className="main-content">
        <div className="card">
          <h2>Thank You!</h2>
          <p>Your claim has been submitted and is now being processed. You will receive an email confirmation shortly.</p>
          <Link to="/" className="button">Return to Home</Link>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Claims Processing Automation. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Confirmation;
