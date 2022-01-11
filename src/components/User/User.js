import React from 'react';
import './User.css';

const User = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div className="user">
            <h2>{id} - {name} - {username} - {email}</h2>
        </div>
    );
};

export default User;