import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../index.css";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>

      <div>
        <Link to="/">Home</Link>

        {user && <Link to="/dashboard">Dashboard</Link>}

        {user ? (
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
