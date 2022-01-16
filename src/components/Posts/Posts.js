import React, {useEffect, useState} from 'react';

import Post from "../Post/Post";
import {postService} from "../../services/post.service";
import "./Posts.css";

const Posts = ({userId}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getByUserId(userId)
            .then(value => setPosts(value))
    }, [userId]);

    return (
        <div className="Posts">
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;