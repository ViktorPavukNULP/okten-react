import React from 'react';

import './UserDetails.css';

const UserDetails = ({user, getUserId}) => {
    return (
        <div className="UserDetails">
            <h2>{user.id} - {user.name}</h2>
            <h3>{user.username}</h3>
            <h3>{user.email}</h3>
            <h3>{user.address.street}</h3>
            <h3>{user.address.suite}</h3>
            <h3>{user.address.city}</h3>
            <h3>{user.address.zipcode}</h3>
            <h3>{user.address.geo.lat}</h3>
            <h3>{user.address.geo.lng}</h3>
            <h3>{user.phone}</h3>
            <h3>{user.website}</h3>
            <h3>{user.company.name}</h3>
            <h3>{user.company.catchPhrase}</h3>
            <h3>{user.company.bs}</h3>
            <button onClick={() => getUserId(user.id)}>Get posts</button>
        </div>
    );
};

export default UserDetails;