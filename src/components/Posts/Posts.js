import React, {useEffect, useState} from 'react';

import Post from "../Post/Post";
import './Posts.css';
import {getPosts} from "../../services/Fetch";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        getPosts().then(value => setPosts(value))
    },[])

    return (
        <div className="posts">
            {posts.map(post => <Post key={post.id} id={post.id} title={post.title}/>)}
        </div>
    );
};

export default Posts;