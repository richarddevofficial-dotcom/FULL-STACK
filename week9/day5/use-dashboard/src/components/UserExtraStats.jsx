function UserExtraStats({ users }) {
  const cities = [...new Set(users.map((u) => u.address.city))]; // unique cities
  return (
    <div className="user-stats">
      <p>Total Users: {users.length}</p>
      <p>Total Cities: {cities.length}</p>
    </div>
  );
}

export default UserExtraStats;
