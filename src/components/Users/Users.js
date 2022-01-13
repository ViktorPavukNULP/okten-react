import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import User from "../User/User";
import UserDetails from "../User-details/UserDetails";
import './Users.css';
import {postService} from "../../services/post.service";
import Post from "../Post/Post";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        userService.getAll()
            .then(value => setUsers(value))
    },[])

    const getUserId = (id) =>{
       userService.getById(id)
            .then(value => setUser(value))
    }

    const getPostByUserId = (id) =>{
        postService.getByUserId(id)
            .then(value => setPosts(value))
    }

    return (
        <div>
        <div className="Users">
            <div className="AllUsers">
                {users.map(user => <User key={user.id} user={user} getUserId={getUserId}/>)}
            </div>
            {user && <UserDetails user={user} getPostId={getPostByUserId}/>}
        </div>
        {posts && posts.map(post => <Post key={post.id} post={post}/> )}
        </div>
    );
};

export default Users;