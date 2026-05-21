import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Claims from './pages/Claims';
import NewClaim from './pages/NewClaim';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/new-claim" element={<NewClaim />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
