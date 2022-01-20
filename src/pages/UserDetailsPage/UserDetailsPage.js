import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import "./UserDetailsPage.css";

const UserDetailsPage = () => {
    const [user,setUser] = useState(null);
    const {id} = useParams();
    const {state} = useLocation();

    useEffect(()=>{
        if (state){
            setUser(state);
            return;
        }
        userService.getById(id)
            .then(value => setUser(value))
    },[state, id]);

    return (
        <div className="UserDetails">
            {user && <div className="User">
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
                <Link to="posts" state={user.id}><button>Posts</button></Link>
            </div>}
            <Outlet/>
        </div>

    );
};

export default UserDetailsPage;