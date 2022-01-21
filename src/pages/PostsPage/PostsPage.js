import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postService} from "../../services/post.service";
import "./PostsPage.css";
import Post from "../../components/Post/Post";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll()
            .then(value => setPosts(value))
    }, []);

    return (
        <div className="PostsPage">
            <div className="AllPosts">
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {PostsPage};