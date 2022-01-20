import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import {Link, Outlet} from "react-router-dom";

import "./UsersPage.css";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, [])

    return (
        <div className="UsersPage">
            <div className="AllUsers">{users.map(user => {
                return <p key={user.id}>
                    {user.id} - {user.name}
                    <Link to={user.id.toString()} state={user}>
                        <button>User details</button>
                    </Link>
                </p>
            })}</div>
            <Outlet/>
        </div>
    );
};

export default UsersPage;