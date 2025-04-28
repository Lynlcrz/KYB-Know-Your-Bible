import axios from "axios";
import { useState } from "react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");  // Added email state
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/signup", {
        username,
        email,     // Include email in request
        password,
      });
      alert("Sign up successful! You can now log in.");
    } catch (error) {
      console.error(error);
      alert("Sign up failed. Check the console for details.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        {/* New Email Field */}
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
