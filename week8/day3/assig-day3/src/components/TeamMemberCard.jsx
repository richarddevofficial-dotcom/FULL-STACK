// src/components/TeamMemberCard.jsx

import Avatar from "./Avatar";

function TeamMemberCard({ name, role, image, email }) {
  return (
    <div className="card">
      <Avatar image={image} name={name} />
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p className="email">{email}</p>
    </div>
  );
}

export default TeamMemberCard;
