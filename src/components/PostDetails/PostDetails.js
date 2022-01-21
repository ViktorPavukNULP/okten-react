import React from 'react';
import {Link} from "react-router-dom";

const PostDetails = ({post}) => {
    return (
        <div className="Post">
            <h2>{post.id} - {post.title}</h2>
            <p>{post.body}</p>
            <Link to="comments" state={post.id}><button>Comments</button></Link>
        </div>
    );
};

export default PostDetails;