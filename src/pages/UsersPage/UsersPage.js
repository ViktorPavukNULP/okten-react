import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";
import "./UsersPage.css";
import User from "../../components/User/User";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, [])

    return (
        <div className="UsersPage">
            <div className="AllUsers">
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {UsersPage};