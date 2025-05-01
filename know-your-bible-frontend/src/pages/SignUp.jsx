import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpDesign.css"; // Import the matching CSS

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🚀 Submitting:", { username, email, password }); // Add this
  
    try {
      await axios.post("http://localhost:3000/signup", {
        username,
        email,
        password,
      });
      alert("Sign up successful! You can now log in.");
    } catch (error) {
      console.error("❌ Signup failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Sign up failed. Check the console.");
    }
  };
  

  return (
    <div className="bible-login-container">
      <div className="bible-page-wrapper">
        <div className="bible-left-side">
          <h1 className="bible-text">Sign Up</h1>
          <p className="bible-quote-section">
            “Create your account to continue”
            <br />
            <span className="bible-quote-reference">– Inspired</span>
          </p>
               <img src="/images/Bible.png" alt="" className="bible-book-container" />
        </div>
        <div className="bible-right-side">
          <div className="bible-login-card">
            <div className="bible-login-header-container">
            <img src="/images/LOGO.png" alt="Logo" className="bible-logo" />

              <h2 className="bible-login-header">Welcome!</h2>
              <p className="bible-login-subheader">Please sign up to proceed.</p>
            </div>

            <form onSubmit={handleSubmit} className="bible-form">
              <input
                className="bible-input"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                className="bible-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="bible-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="bible-login-button">
                Sign Up
              </button>
            </form>

            <p className="bible-signup-text">
              Already have an account?{" "}
              <Link to="/login" className="bible-create-account-link">Login</Link>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
