import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React useEffect Lab</h1>

      <div style={{ marginTop: "20px" }}>
        <Link to="/user">User</Link> | <Link to="/weather">Weather</Link> |{" "}
        <Link to="/countries">Countries</Link> | <Link to="/blog">Blog</Link>
      </div>
    </div>
  );
}

export default Home;
