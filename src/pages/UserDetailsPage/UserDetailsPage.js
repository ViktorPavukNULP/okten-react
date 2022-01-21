import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import "./UserDetailsPage.css";
import UserDetails from "../../components/UserDetails/UserDetails";

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
    },[id]);

    return (
       <div className="UserDetailsPage">
           {user && <UserDetails user={user}/>}
            <Outlet/>
        </div>

    );
};

export {UserDetailsPage};