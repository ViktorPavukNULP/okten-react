import React from 'react';
import {NavLink} from "react-router-dom";

import "./Header.css"

const Header = () => {
    return (
        <div className="Header">
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
        </div>
    );
};

export default Header;