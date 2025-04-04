import React, { useEffect, useState } from "react";
import { fetchTopUsers } from "../api/api";
import UserCard from "../components/UserCard";
import "../styles.css";

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchTopUsers();
      setUsers(data);
    };

    loadUsers();
  }, []);

  return (
    <div className="page-container">
      <h2>🔥 Top Active Users</h2>
      <div className="user-list">
        {users.length > 0 ? (
          users.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p>Loading users...</p>
        )}
      </div>
    </div>
  );
};

export default TopUsers;
