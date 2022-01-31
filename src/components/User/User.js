import React from "react";

import "./User.css";

const User = ({user}) => {
    return (
        <div className="User">
            <div>ID: {user.id}</div>
            <div>Name: {user.name}</div>
            <div>Username: {user.username}</div>
            <div>Email: {user.email}</div>
        </div>
    );
};

export default User;