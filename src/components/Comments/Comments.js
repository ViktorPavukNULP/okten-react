import React, {useEffect, useState} from 'react';
import Comment from "../Comment/Comment";

import './Comments.css';

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))
    },[])
    return (
        <div className="comments">
            {comments.map(comment=> <Comment key={comment.id} id={comment.id} name={comment.name} body={comment.body}/>)}
        </div>
    );
};

export default Comments;