import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import {useParams} from "react-router-dom";

import "./UserPostsPage.css";

const UserPostsPage = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getByUserId(id)
            .then(value => setPosts(value))
    }, [id]);

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