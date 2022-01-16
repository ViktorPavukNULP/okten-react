import React from 'react';

import User from "../User/User";

const Users = ({users}) => {

    return (
        <div className="Users">
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;