import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../store/user.slice";
import User from "../User/User";

const Users = () => {
    const {users} = useSelector(state => state["userReducer"]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [])

    return (
        <div>
            {users.map(user=> <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;