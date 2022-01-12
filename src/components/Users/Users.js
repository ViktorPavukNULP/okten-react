import React, {useEffect, useState} from 'react';

import User from "../User/User";
import './Users.css';
import {getUsers} from "../../services/Fetch";


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(value => setUsers(value))
    },[])


    return (
        <div className="users">
            {users.map(user=> <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;