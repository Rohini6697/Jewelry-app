import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👈 Import icons
import '../styles/AdminLogin.css'

const AdminLogin = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      localStorage.setItem(
        "admin",
        JSON.stringify({
          email: "admin@example.com",
          password: "Admin@123",
          role: "admin",
        })
      );
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const admin = JSON.parse(localStorage.getItem("admin"));
      if (admin && email === admin.email && password === admin.password) {
        login(admin);
        navigate("/admin/dashboard");
        toast.success("You are authorized");
      } else {
        toast.error("You are not authorized");
      }
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="admin-login-container">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h2 className="admin-login-title">Admin Login</h2>

        <div className="admin-input-group">
          <label className="admin-label">Email Address</label><br/>
          <input
            type="email"
            className="admin-input"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="admin-input-group">
          <label className="admin-label">Password</label>
          <div className="admin-password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              className="admin-input"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="show-password-button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <button type="submit" className="admin-login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
