import React from "react";

export const User = ({ name, username, email }) => (
  <li>
    <div className="user-info">
      <img className="avatar" src="../../assets/user.png" alt="User" />
      <div className="user-details">
        <h3>{name}</h3>
        <p>username: {username}</p>
        <p>email: {email}</p>
      </div>
    </div>
  </li>
);
