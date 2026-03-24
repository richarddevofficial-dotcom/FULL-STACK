import { useEffect, useState } from "react";
import { getRandomUser } from "../api/userApi";

function RandomUserCard() {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    setUser(data.results[0]);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="card">
      <h2>User</h2>
      {user && (
        <>
          <img src={user.picture.large} className="user-img" />
          <h3>
            {user.name.first} {user.name.last}
          </h3>
          <p>{user.email}</p>
        </>
      )}
      <button onClick={fetchUser}>New User</button>
    </div>
  );
}

export default RandomUserCard;
