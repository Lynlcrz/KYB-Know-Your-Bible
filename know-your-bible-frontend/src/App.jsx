// Only React Code (JSX allowed)
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <div className="flex justify-center mt-4 space-x-4">
        <Link className="text-blue-500" to="/signup">Sign Up</Link>
        <Link className="text-green-500" to="/login">Log In</Link>
      </div>

      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
