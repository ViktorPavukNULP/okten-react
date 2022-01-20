import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import {useLocation} from "react-router-dom";

import "./UserPostsPage.css";

const UserPostsPage = () => {
    const {state} = useLocation();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getByUserId(state)
            .then(value => setPosts(value))
    }, [state]);

    return (
        <div className="UserPostsPage">
            {posts.map(post => {
                return <p key={post.id}>
                    {post.id} - {post.title}
                </p>
            })}
        </div>
    );
};

export default UserPostsPage;