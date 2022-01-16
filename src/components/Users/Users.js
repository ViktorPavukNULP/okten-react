import React, {useEffect, useState} from 'react';

import User from "../User/User";
import {userService} from "../../services/user.service";
import "./Users.css";

const Users = ({getUser}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, [])

    return (
        <div className="Users">
            {users.map(user => <User key={user.id} user={user} getUser={getUser}/>)}
        </div>
    );
};

export default Users;