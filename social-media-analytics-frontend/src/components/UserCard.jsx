import React from "react";
import "./UserCard.css"; // Ensure you create this CSS file

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Posts: {user.postsCount}</p>
      <p>Likes: {user.likesReceived}</p>
    </div>
  );
};

export default UserCard;
