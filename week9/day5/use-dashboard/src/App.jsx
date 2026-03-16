import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import UserStats from "./components/UserStats";
import UserCharts from "./components/UserCharts";
import UserExtraStats from "./components/UserExtraStats";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // Fetch users on mount
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  // Filter users based on search input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="app-container">
      <h1>User Dashboard</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {/* Additional Stats Panel */}
      <UserExtraStats users={filteredUsers} />

      {/* Charts */}
      <UserCharts users={filteredUsers} />

      {/* Loading / Error Messages */}
      {loading && <p className="loading">Loading users...</p>}
      {error && <p className="error">{error}</p>}

      {/* Users Grid */}
      <div className="users-grid">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {/* Optional: Summary Stats at bottom */}
      <UserStats users={filteredUsers} />
    </div>
  );
}

export default App;
