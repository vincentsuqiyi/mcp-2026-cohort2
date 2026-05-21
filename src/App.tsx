import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Claims from './pages/Claims';
import NewClaim from './pages/NewClaim';
import Verification from './pages/Verification';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/new-claim" element={<NewClaim />} />
        <Route path="/verification" element={<Verification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
