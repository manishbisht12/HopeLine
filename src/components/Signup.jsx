import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import search1 from "../assets/search 1.png";
import search2 from "../assets/search 2.png";
import search3 from "../assets/search 3.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // For navigation

  // Clear autofilled values on component mount
  useEffect(() => {
    setFormData({ email: "", password: "" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);

    // Here you can call your backend API to send OTP
    // After successful response, navigate to OTP verification page
    navigate("/otp-verify");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-4">
          <img src={logo} alt="Logo" className="w-28 h-auto mb-2" />
          <h2 className="text-xl font-semibold text-gray-700">Create your account</h2>
        </div>

        {/* Email */}
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          name="new-email"
          autoComplete="off"
          placeholder="Enter your email"
          style={{ backgroundColor: "#E8E8E8" }}
          className="w-full p-2 mb-4 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          required
        />

        {/* Password */}
        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          name="new-password"
          autoComplete="new-password"
          placeholder="Enter your password"
          style={{ backgroundColor: "#E8E8E8" }}
          className="w-full p-2 mb-6 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          style={{ backgroundColor: "#390050" }}
          className="w-full text-white py-2 rounded-lg hover:opacity-90 transition mb-4"
        >
          Sign Up
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-800 text-sm font-medium">or sign up with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login Images */}
        <div className="flex justify-center space-x-3 mb-4">
          <img src={search1} alt="Search1" className="w-8 h-8 cursor-pointer rounded-md hover:opacity-80 transition" />
          <img src={search2} alt="Search2" className="w-8 h-8 cursor-pointer rounded-md hover:opacity-80 transition" />
          <img src={search3} alt="Search3" className="w-8 h-8 cursor-pointer rounded-md hover:opacity-80 transition" />
        </div>

        {/* Bottom Toggle */}
        <p className="text-center text-sm mt-2 text-gray-800">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline font-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
