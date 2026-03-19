import { useAuth } from "../context/AuthContext";
import "../index.css";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="container">
      <h1>Welcome, {user?.name}</h1>

      <div className="grid">
        <div className="card">
          <h3>Users</h3>
          <p>1,200</p>
        </div>

        <div className="card">
          <h3>Revenue</h3>
          <p>$5,400</p>
        </div>

        <div className="card">
          <h3>Orders</h3>
          <p>320</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
