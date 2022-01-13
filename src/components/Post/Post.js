import React from 'react';

import "./Post.css";

const Post = ({post}) => {
    return (
        <div className="Post">
            <h2>{post.id} - {post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;