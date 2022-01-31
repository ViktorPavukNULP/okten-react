import React from "react";

import "./Post.css";

const Post = ({post}) => {
    return (
        <div className="Post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;