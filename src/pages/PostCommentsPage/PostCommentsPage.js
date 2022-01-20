import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {commentService} from "../../services/comment.service";
import "./PostCommentsPage.css";

const PostCommentsPage = () => {
    const {id} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getByPostId(id)
            .then(value => setComments(value))
    }, [id]);

    return (
        <div className="PostsCommentsPage">
            {comments.map(comment => {
                return <div key={comment.id}>
                    <h3>{comment.id} - {comment.name}</h3>
                    <p>{comment.body}</p>
                </div>
            })}
        </div>
    );
};

export default PostCommentsPage;