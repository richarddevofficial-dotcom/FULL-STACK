import React from "react";

function WelcomeMessage({ username, isLoggedIn }) {
  return (
    <div className="card">
      {isLoggedIn ? (
        <h2>Welcome back, {username}!</h2>
      ) : (
        <h2>Please log in.</h2>
      )}
    </div>
  );
}

export default WelcomeMessage;
