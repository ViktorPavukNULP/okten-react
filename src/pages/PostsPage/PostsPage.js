import React, {useEffect, useState} from 'react';
import {Link, Outlet} from "react-router-dom";

import {postService} from "../../services/post.service";
import "./PostsPage.css";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll()
            .then(value => setPosts(value))
    }, []);

    return (
        <div className="PostsPage">
            <div className="AllPosts">
                {posts.map(post => {
                    return <p key={post.id}>
                        {post.id} - {post.title}
                        <Link to={post.id.toString()} state={post}><button>Post details</button></Link>
                    </p>
                })}
            </div>
            <Outlet/>
        </div>
    );
};

export default PostsPage;