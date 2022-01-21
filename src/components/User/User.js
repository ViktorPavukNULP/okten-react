import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    return (
        <div className="User">
            {user.id} - {user.name}
            <Link to={user.id.toString()} state={user}>
                <button>User details</button>
            </Link>
            <Link to={`${user.id.toString()}/albums`} state={user.id}>
                <button>Albums</button>
            </Link>
        </div>
    );
};

export default User;