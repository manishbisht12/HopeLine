import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import OtpVerify from "./components/OtpVerify";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">

        {/* Routes */}
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} /> {/* Default route */}
          <Route path="/otp-verify" element={<OtpVerify/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
