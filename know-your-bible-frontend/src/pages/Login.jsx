  "use client"

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginDesign.css";

  export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const navigate = useNavigate(); // ← Hook to redirect

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        await axios.post("http://localhost:3000/login", {
          email,
          password,
        })
        alert("Login successful!")
        navigate("/home"); // ← Redirect here
      } catch (error) {
        console.error(error)
        alert("Login failed. Check your credentials.")
      }
    }

    return (
      <div className="bible-login-container">
        <div className="bible-page-wrapper">
          {/* Left side - Bible content */}
          <div className="bible-left-side">
            <div>
              <div className="bible-know-your-text">Know Your</div>
              <div className="bible-text">BIBLE</div>
            </div>

            <div className="bible-quote-section">
              <div className="bible-quote-container">
                <p>
                  Jesus said to him, "I am the way, and the truth, and the life. No one comes to the Father except through
                  me."
                </p>
                <p className="bible-quote-reference">John 14:6</p>
              </div>
               <img src="/images/Bible.png" alt="" className="bible-book-container" />
            </div>
          </div>

          {/* Right side - Login form */}
          <div className="bible-right-side">
            <div className="bible-login-card">
              <div className="bible-logo-container">
                  <img src="/images/LOGO.png" alt="" className="bible-logo" />
              </div>  

              <div className="bible-login-header-container">
                <h2 className="bible-login-header">Login your account!</h2>
                <p className="bible-login-subheader">WIN - BUILD - SEND</p>
              </div>

              <form onSubmit={handleSubmit} className="bible-form">
              <input
                       className="bible-input"
                       type="email"
                       placeholder="Email"
                       value={email}
                       autoComplete="email"
                       onChange={(e) => setEmail(e.target.value)}
                       required
                                 />
                      <input
                       className="bible-input"
                       type="password"
                       placeholder="Password"
                       value={password}
                       autoComplete="current-password"
                       onChange={(e) => setPassword(e.target.value)}
                       required
                                 />


                <div className="bible-checkbox-container">
                  <div className="bible-checkbox-wrapper">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="bible-checkbox"
                    />
                    <label htmlFor="remember" className="bible-checkbox-label">
                      Remember me
                    </label>
                  </div>

                  <a href="#" className="bible-forgot-password">
                    Forgot Password?
                  </a>
                </div>

                <button type="submit" className="bible-login-button">
                  LOGIN
                </button>

                <div className="bible-create-account-container">
                  <p>
                    Don't have an account?{" "}
                    <Link to="/signup" className="bible-create-account-link">
                    Create account
                    </Link>

                  </p>
                  <p className="bible-or-text">or</p>
                </div>

                <div className="bible-google-button-container">
                  <button type="button" className="bible-google-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l2.85 2.22C6.71 6.93 9.14 5 12 5.38z"
                      />
                    </svg>
                  </button>
                </div>

                <p className="bible-signup-text">Continue with Google</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
