import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <Link to="/weather">Weather</Link>
      <Link to="/countries">Countries</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
}

export default Navbar;
