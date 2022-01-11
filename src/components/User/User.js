import React from 'react';
import './User.css';

const User = (props) => {
    const {id, name, username, email} = props;
    return (
        <div className={'user'}>
            <h2>{id} - {name} - {username} - {email}</h2>
        </div>
    );
};

export default User;