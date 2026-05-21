import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewClaim from "./pages/NewClaim";
import ReturningUser from "./pages/ReturningUser";
import Confirmation from "./pages/Confirmation";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import MyClaims from "./pages/MyClaims";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-claim" element={<NewClaim />} />
        <Route path="/returning-user" element={<ReturningUser />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-claims" element={<MyClaims />} />
      </Routes>
    </Router>
  );
}

export default App;
