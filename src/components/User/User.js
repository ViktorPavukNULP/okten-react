import React from 'react';

import "./User.css";

const User = ({user}) => {
    return (
        <div className="User">
            <h3>{user.id} - {user.name} - {user.username} - {user.email}</h3>
        </div>
    );
};

export default User;