import React from 'react';

import './User.css';

const User = ({user, getUser}) => {

    const {id, name, username, email} = user;
    return (
        <div className="User">
            <h2>{id} - {name}</h2>
            <h3>{username}</h3>
            <h3>{email}</h3>
            <button onClick={() => getUser(user)}>User details</button>
        </div>
    );
};

export default User;