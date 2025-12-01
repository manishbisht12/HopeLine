import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const OtpVerify = () => {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entered OTP:", otp);
    // Add your verification logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Logo" className="w-28 h-auto mb-2" />
          <h2 className="text-xl font-semibold text-gray-700">Verify OTP</h2>
          <p className="text-sm text-gray-600 mt-1 text-center">
            Enter the OTP sent to your email
          </p>
        </div>

        {/* OTP Input */}
        <label className="block mb-2 font-medium">OTP</label>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={{ backgroundColor: "#E8E8E8" }}
          className="w-full p-2 mb-6 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          style={{ backgroundColor: "#390050" }}
          className="w-full text-white py-2 rounded-lg hover:opacity-90 transition mb-4"
        >
          Verify OTP
        </button>

        {/* Resend OTP */}
        <p className="text-center text-sm text-gray-800">
          Didn't receive OTP?{" "}
          <button
            type="button"
            className="text-blue-500 hover:underline font-medium"
            onClick={() => console.log("Resend OTP")}
          >
            Resend OTP
          </button>
        </p>
      </form>
    </div>
  );
};

export default OtpVerify;
